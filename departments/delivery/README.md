# Delivery Department

`delivery` is the Delivery Department of `agentic-org`.

The department owns:

- external delivery standards
- delivery templates
- conversion of company internal artifacts into external deliverables
- format conversion services for companies

## Directory Layout

```text
delivery/
|-- agents/
|-- templates/
|-- services/
|   `-- mcp-server/
`-- outputs/   # gitignored
```

### agents

Department role definitions:

- `standard-setter.md`
- `template-builder.md`
- `custom-formatter.md`

### templates

Delivery template assets for executive briefs, technical reports, and minimal documents.

### services/mcp-server

MCP service implementation for delivery tooling. The MCP service is not the department itself; it is a tool maintained and used by the department.

### outputs

Local external deliverable output directory. This directory is local-only and must not be committed to Git.
