const path = require("path");
const fs = require("fs");
const toHtml = require("./to-html.js");
const toPdf = require("./to-pdf.js");
const toPptx = require("./to-pptx.js");
const toDocx = require("./to-docx.js");
const toData = require("./to-data.js");

const templatesDir = path.join(__dirname, "..", "templates");

function resolveOutputDir(sourcePath) {
  return path.dirname(path.resolve(sourcePath));
}

function getTemplateConfig(templateName) {
  const filePath = path.join(templatesDir, `${templateName || "minimal"}.json`);
  if (!fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(path.join(templatesDir, "minimal.json"), "utf-8"));
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

async function listTemplates() {
  const files = fs.readdirSync(templatesDir).filter(f => f.endsWith(".json"));
  const names = files.map(f => path.basename(f, ".json"));
  const descs = files.map(f => {
    const cfg = JSON.parse(fs.readFileSync(path.join(templatesDir, f), "utf-8"));
    return `  - ${path.basename(f, ".json")}: ${cfg.description || "无描述"}`;
  });
  return `可用模板:\n${descs.join("\n")}`;
}

module.exports = {
  toHtml: (args) => toHtml.convert(args.sourcePath, getTemplateConfig(args.template)),
  toPdf: (args) => toPdf.convert(args.sourcePath, getTemplateConfig(args.template), resolveOutputDir(args.sourcePath), args.outputName),
  toPptx: (args) => toPptx.convert(args.sourcePath, getTemplateConfig(args.template), resolveOutputDir(args.sourcePath), args.outputName),
  toDocx: (args) => toDocx.convert(args.sourcePath, getTemplateConfig(args.template), resolveOutputDir(args.sourcePath), args.outputName),
  toCsv: (args) => toData.convertToCsv(args.sourcePath, resolveOutputDir(args.sourcePath), args.outputName),
  listTemplates
};
