const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");
const converters = require("./converters/index.js");

const server = new Server(
  { name: "delivery-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

const markdownSourceSchema = {
  sourcePath: { type: "string", description: "Source Markdown file path" },
  template: { type: "string", description: "Template name: executive, technical, or minimal" },
  outputName: { type: "string", description: "Output file name without extension" }
};

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "convert_md_to_pptx",
      description: "Convert a Markdown file to PowerPoint (.pptx)",
      inputSchema: {
        type: "object",
        properties: markdownSourceSchema,
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_pdf",
      description: "Convert a Markdown file to PDF",
      inputSchema: {
        type: "object",
        properties: markdownSourceSchema,
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_docx",
      description: "Convert a Markdown file to Word (.docx)",
      inputSchema: {
        type: "object",
        properties: markdownSourceSchema,
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_html",
      description: "Convert a Markdown file to HTML",
      inputSchema: {
        type: "object",
        properties: markdownSourceSchema,
        required: ["sourcePath"]
      }
    },
    {
      name: "convert_md_to_csv",
      description: "Extract table data from Markdown and convert it to CSV",
      inputSchema: {
        type: "object",
        properties: {
          sourcePath: { type: "string", description: "Source Markdown file path" },
          outputName: { type: "string", description: "Output file name without extension" }
        },
        required: ["sourcePath"]
      }
    },
    {
      name: "list_templates",
      description: "List available delivery templates",
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
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (err) {
    return { content: [{ type: "text", text: `Error: ${err.message}` }], isError: true };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
