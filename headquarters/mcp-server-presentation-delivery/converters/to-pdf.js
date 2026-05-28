const fs = require("fs");
const path = require("path");
const toHtml = require("./to-html.js");

async function convert(sourcePath, templateConfig, outputDir, outputName) {
  const absPath = path.resolve(sourcePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`文件不存在: ${absPath}`);
  }

  const htmlPath = path.join(outputDir, `__temp_${path.basename(absPath, ".md")}.html`);
  toHtml.convert(sourcePath, templateConfig);

  try {
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.setContent(fs.readFileSync(htmlPath, "utf-8"), { waitUntil: "networkidle0" });

    const outName = (outputName || path.basename(absPath, ".md")) + ".pdf";
    const outPath = path.join(outputDir, outName);
    await page.pdf({
      path: outPath,
      format: "A4",
      margin: { top: "25mm", bottom: "25mm", left: "20mm", right: "20mm" },
      printBackground: true
    });

    await browser.close();
    fs.unlinkSync(htmlPath);
    return `PDF 已生成: ${outPath}`;
  } catch (err) {
    if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
    throw new Error(`PDF 转换失败（需要安装 Chromium）: ${err.message}`);
  }
}

module.exports = { convert };
