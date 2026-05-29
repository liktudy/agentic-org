const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function findPandoc() {
  const localPandoc = path.join(__dirname, "..", "pandoc-bin", "pandoc.exe");
  if (fs.existsSync(localPandoc)) return localPandoc;
  try {
    const which = execSync("where pandoc", { encoding: "utf-8", stdio: "pipe" }).trim().split("\n")[0];
    if (which) return which;
  } catch { }
  throw new Error("pandoc 未安装。请运行 setup.ps1 下载，或通过 winget install pandoc 安装。");
}

function convert(sourcePath, templateConfig, outputDir, outputName, toFormat) {
  const absPath = path.resolve(sourcePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`文件不存在: ${absPath}`);
  }

  const pandoc = findPandoc();
  const outName = (outputName || path.basename(absPath, ".md")) + toFormat;
  const outPath = path.join(outputDir, outName);

  const cmd = `"${pandoc}" "${absPath}" -o "${outPath}" --from markdown --to ${toFormat.replace(".", "")}`;
  execSync(cmd, { stdio: "pipe", encoding: "utf-8" });

  return `${toFormat.toUpperCase()} 已生成: ${outPath}`;
}

module.exports = {
  toPptx: (sourcePath, templateConfig, outputDir, outputName) =>
    convert(sourcePath, templateConfig, outputDir, outputName, ".pptx"),
  toDocx: (sourcePath, templateConfig, outputDir, outputName) =>
    convert(sourcePath, templateConfig, outputDir, outputName, ".docx")
};
