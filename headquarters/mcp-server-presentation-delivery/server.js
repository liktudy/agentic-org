const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");
const converters = require("./converters/index.js");

const server = new Server(
  { name: "mcp-server-presentation-delivery", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "convert_md_to_pptx",
      description: "将 .md 文件转换为 PowerPoint (.pptx)",
      inputSchema: {
        type: "object",
        properties: {
          sourcePath: { type: "string", description: "源 .md 文件路径" },
          template: { type: "string", description: "风格模板名（executive / technical / minimal）" },
          outputName: { type: "string", description: "输出文件名（不含扩展名）" }
        },
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_pdf",
      description: "将 .md 文件转换为 PDF",
      inputSchema: {
        type: "object",
        properties: {
          sourcePath: { type: "string", description: "源 .md 文件路径" },
          template: { type: "string", description: "风格模板名" },
          outputName: { type: "string", description: "输出文件名（不含扩展名）" }
        },
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_docx",
      description: "将 .md 文件转换为 Word (.docx)",
      inputSchema: {
        type: "object",
        properties: {
          sourcePath: { type: "string", description: "源 .md 文件路径" },
          template: { type: "string", description: "风格模板名" },
          outputName: { type: "string", description: "输出文件名（不含扩展名）" }
        },
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_html",
      description: "将 .md 文件转换为 HTML",
      inputSchema: {
        type: "object",
        properties: {
          sourcePath: { type: "string", description: "源 .md 文件路径" },
          template: { type: "string", description: "风格模板名" },
          outputName: { type: "string", description: "输出文件名（不含扩展名）" }
        },
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_csv",
      description: "从 .md 文件中提取表格数据并转换为 CSV",
      inputSchema: {
        type: "object",
        properties: {
          sourcePath: { type: "string", description: "源 .md 文件路径" },
          outputName: { type: "string", description: "输出文件名（不含扩展名）" }
        },
        required: ["sourcePath"]
      }
    },
    {
      name: "list_templates",
      description: "列出所有可用的风格模板",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "convert_md_to_pptx":
        return { content: [{ type: "text", text: await converters.toPptx(args) }] };
      case "convert_md_to_pdf":
        return { content: [{ type: "text", text: await converters.toPdf(args) }] };
      case "convert_md_to_docx":
        return { content: [{ type: "text", text: await converters.toDocx(args) }] };
      case "convert_md_to_html":
        return { content: [{ type: "text", text: await converters.toHtml(args) }] };
      case "convert_md_to_csv":
        return { content: [{ type: "text", text: await converters.toCsv(args) }] };
      case "list_templates":
        return { content: [{ type: "text", text: await converters.listTemplates() }] };
      default:
        throw new Error(`未知工具: ${name}`);
    }
  } catch (err) {
    return { content: [{ type: "text", text: `错误: ${err.message}` }], isError: true };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
