const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

function convert(sourcePath, templateConfig) {
  const absPath = path.resolve(sourcePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`File does not exist: ${absPath}`);
  }

  const content = fs.readFileSync(absPath, "utf-8");
  const bodyHtml = md.render(content);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${templateConfig.title || "Report"}</title>
  <style>
    body {
      font-family: ${templateConfig.fontFamily || "'Segoe UI', Arial, sans-serif"};
      color: ${templateConfig.textColor || "#333"};
      background: ${templateConfig.bgColor || "#fff"};
      max-width: ${templateConfig.maxWidth || "960px"};
      margin: 0 auto;
      padding: ${templateConfig.padding || "40px 20px"};
      line-height: 1.7;
    }
    h1 { color: ${templateConfig.headingColor || "#1a1a2e"}; border-bottom: 2px solid ${templateConfig.accentColor || "#e94560"}; padding-bottom: 10px; }
    h2 { color: ${templateConfig.headingColor || "#1a1a2e"}; }
    h3 { color: ${templateConfig.headingColor || "#1a1a2e"}; }
    table { border-collapse: collapse; width: 100%; margin: 16px 0; }
    th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
    th { background: ${templateConfig.accentColor || "#e94560"}; color: #fff; }
    code { background: ${templateConfig.codeBg || "#f4f4f4"}; padding: 2px 6px; border-radius: 3px; font-size: 0.9em; }
    pre { background: ${templateConfig.codeBg || "#f4f4f4"}; padding: 16px; border-radius: 6px; overflow-x: auto; }
    blockquote { border-left: 4px solid ${templateConfig.accentColor || "#e94560"}; margin: 16px 0; padding: 8px 16px; background: #f9f9f9; }
    img { max-width: 100%; }
    .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #eee; font-size: 0.85em; color: #999; text-align: center; }
  </style>
</head>
<body>
  ${bodyHtml}
  ${templateConfig.footer ? `<div class="footer">${templateConfig.footer}</div>` : ""}
</body>
</html>`;

  const outDir = path.dirname(absPath);
  const outName = `${path.basename(absPath, ".md")}.html`;
  const outPath = path.join(outDir, outName);
  fs.writeFileSync(outPath, html, "utf-8");
  return `HTML generated: ${outPath}`;
}

module.exports = { convert };
