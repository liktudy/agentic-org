# Delivery Department

## 中文版

`delivery` 是 `agentic-org` 的集团交付部。

该部门负责：

- 维护集团对外交付规范。
- 维护交付模板。
- 将子公司内部标准产物加工为外部交付物。
- 通过工具服务为各子公司提供格式转换能力。

## 目录说明

```text
delivery/
|-- agents/
|-- templates/
|-- services/
|   `-- mcp-server/
`-- outputs/   # gitignored
```

### agents

部门员工定义：

- `standard-setter.md`
- `template-builder.md`
- `custom-formatter.md`

### templates

部门模板资产，包括商务简报、技术报告、极简文档等模板配置。

### services/mcp-server

交付部对外提供工具能力的 MCP 服务实现。MCP 服务不是部门本身，而是部门使用和维护的服务工具。

### outputs

实际对外交付产物目录。该目录只保留在本地，不提交 Git。

## English Version

`delivery` is the Delivery Department of `agentic-org`. It owns delivery standards, templates, format conversion services, and external deliverable generation.
