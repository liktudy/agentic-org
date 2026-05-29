// Reuses to-pptx.js's convert function with .docx format
const { toDocx } = require("./to-pptx.js");
module.exports = { convert: toDocx };
