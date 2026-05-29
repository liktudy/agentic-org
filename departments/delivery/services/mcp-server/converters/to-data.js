const fs = require("fs");
const path = require("path");

function convertToCsv(sourcePath, outputDir, outputName) {
  const absPath = path.resolve(sourcePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`File does not exist: ${absPath}`);
  }

  const content = fs.readFileSync(absPath, "utf-8");
  const tableRegex = /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g;
  let match;
  let csvOutput = "";
  let tableCount = 0;

  while ((match = tableRegex.exec(content)) !== null) {
    tableCount++;
    const headerRow = match[1];
    const dataRows = match[2];

    if (tableCount > 1) csvOutput += "\n\n";
    csvOutput += parseTableToCsv(headerRow, dataRows);
  }

  if (tableCount === 0) {
    return `Warning: no Markdown tables found in ${path.basename(absPath)}`;
  }

  const outName = (outputName || path.basename(absPath, ".md")) + ".csv";
  const outPath = path.join(outputDir, outName);
  fs.writeFileSync(outPath, csvOutput, "utf-8");
  return `CSV generated: ${outPath} (${tableCount} tables)`;
}

function parseTableToCsv(headerRow, dataRows) {
  const headers = headerRow.split("|").map(h => h.trim()).filter(h => h);
  const lines = dataRows.trim().split("\n");
  const rows = lines.map(line =>
    line.split("|").map(c => c.trim()).filter(c => c)
  );

  const escape = (val) => {
    if (val.includes(",") || val.includes('"') || val.includes("\n")) {
      return `"${val.replace(/"/g, '""')}"`;
    }
    return val;
  };

  const csv = [headers.map(escape).join(",")];
  for (const row of rows) {
    csv.push(row.map(escape).join(","));
  }
  return csv.join("\n");
}

module.exports = { convertToCsv };
