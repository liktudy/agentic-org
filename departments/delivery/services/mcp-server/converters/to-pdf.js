const fs = require("fs");
const path = require("path");
const toHtml = require("./to-html.js");

async function convert(sourcePath, templateConfig, outputDir, outputName) {
  const absPath = path.resolve(sourcePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`File does not exist: ${absPath}`);
  }

  const htmlPath = path.join(outputDir, `${path.basename(absPath, ".md")}.html`);
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
    return `PDF generated: ${outPath}`;
  } catch (err) {
    if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
    throw new Error(`PDF conversion failed. Chromium is required: ${err.message}`);
  }
}

module.exports = { convert };
