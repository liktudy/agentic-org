# BDTC Naming Conventions

## 中文版

### 目标

本规范用于让 BDTC 仓库同时表达两件事：

- 组织语义：集团、子公司、部门、岗位、共享服务之间的关系。
- 技术实现：OpenCode、MCP、agent 文件和服务代码如何落地。

### 基本规则

- 文件夹名使用英文小写。
- 多个单词使用 kebab-case，例如 `company-llm-perf`。
- 不使用中文文件夹名。
- 不使用空格、下划线或驼峰命名。
- 组织概念写入 Markdown 文档，技术路径保留工具要求的固定结构。

### 集团总部

- 集团根目录使用集团代号：`BDTC`。
- 集团总部固定目录名：`headquarters`。
- 总部共享服务放在 `headquarters` 下。

推荐格式：

```text
headquarters/<service-type>-<capability>
```

当前示例：

```text
headquarters/mcp-server-presentation-delivery
```

含义：

- `mcp-server` 表示这是 MCP 服务实现。
- `presentation-delivery` 表示总部的呈现与交付能力。

### 子公司

子公司目录必须使用 `company-` 前缀。

推荐格式：

```text
company-<business-domain>
```

当前示例：

```text
company-llm-perf
```

后续示例：

```text
company-data-eval
company-ai-security
company-agent-platform
```

### 子公司 OpenCode 结构

OpenCode 要求保留 `.opencode/agents` 作为 agent 注册目录。该目录是技术实现，不是组织层级。

固定结构：

```text
company-<business-domain>/.opencode/agents/<department-key>/<role-key>.md
```

### 部门

部门目录放在 `.opencode/agents` 下，使用简短英文业务名，不额外添加 `department` 后缀。

推荐格式：

```text
<department-key>
```

当前示例：

```text
test-planning
solution-design
execution
quality-review
```

不推荐：

```text
测试规划部
test_planning
TestPlanning
test-planning-department
department-test-planning
```

说明：

- 文档里可以称为 `Test Planning Department / 测试规划部`。
- 文件夹里保留 `test-planning`，避免路径过长。
- 如果多个子公司有同名部门，应复用同一个英文 key。

### 岗位 Agent

岗位 agent 文件使用名词短语，保持 kebab-case。

推荐格式：

```text
<role-key>.md
```

当前示例：

```text
model-selector.md
metric-definer.md
capability-tester.md
data-verifier.md
```

### MCP 配置名称

`opencode.json` 里的 MCP key 使用服务能力名，和总部服务能力保持一致。

推荐格式：

```text
<capability>
```

当前示例：

```json
"presentation-delivery": {
  "type": "local",
  "command": ["node", "D:\\TEST\\oc_test_project\\BDTC\\headquarters\\mcp-server-presentation-delivery\\server.js"],
  "enabled": true
}
```

### 组织与技术路径映射

| 组织概念 | 英文名称 | 技术路径 |
| --- | --- | --- |
| BDTC 集团总部 | BDTC Group Headquarters | `BDTC` |
| 集团总部目录 | Headquarters | `headquarters` |
| 呈现与交付部 | Presentation & Delivery Department | `headquarters/mcp-server-presentation-delivery` |
| 大模型性能测试子公司 | LLM Performance Testing Company | `company-llm-perf` |
| 测试规划部 | Test Planning Department | `company-llm-perf/.opencode/agents/test-planning` |
| 方案设计部 | Solution Design Department | `company-llm-perf/.opencode/agents/solution-design` |
| 执行部 | Execution Department | `company-llm-perf/.opencode/agents/execution` |
| 质量审核部 | Quality Review Department | `company-llm-perf/.opencode/agents/quality-review` |

## English Version

### Purpose

These conventions keep two layers clear:

- Organizational meaning: group, subsidiaries, departments, roles, and shared services.
- Technical implementation: OpenCode, MCP, agent files, and service code.

### General Rules

- Use lowercase English folder names.
- Use kebab-case for multiple words, such as `company-llm-perf`.
- Do not use Chinese folder names.
- Do not use spaces, underscores, or camelCase.
- Put organizational concepts in Markdown docs while preserving tool-required technical paths.

### Group Headquarters

- The group root uses the group code: `BDTC`.
- The headquarters directory is always `headquarters`.
- Headquarters shared services live under `headquarters`.

Recommended format:

```text
headquarters/<service-type>-<capability>
```

Current example:

```text
headquarters/mcp-server-presentation-delivery
```

### Subsidiary Companies

Subsidiary folders must use the `company-` prefix.

Recommended format:

```text
company-<business-domain>
```

Current example:

```text
company-llm-perf
```

Future examples:

```text
company-data-eval
company-ai-security
company-agent-platform
```

### OpenCode Structure

OpenCode requires `.opencode/agents` as the agent registry. This path is a technical implementation detail, not an organizational layer.

Fixed structure:

```text
company-<business-domain>/.opencode/agents/<department-key>/<role-key>.md
```

### Departments

Department directories live under `.opencode/agents`. Use short English business keys and do not append `department` to folder names.

Recommended format:

```text
<department-key>
```

Current examples:

```text
test-planning
solution-design
execution
quality-review
```

Avoid:

```text
测试规划部
test_planning
TestPlanning
test-planning-department
department-test-planning
```

Notes:

- In documentation, use names like `Test Planning Department / 测试规划部`.
- In folders, keep `test-planning` to avoid long paths.
- If multiple subsidiaries share a department concept, reuse the same English key.

### Role Agents

Role agent files use kebab-case noun phrases.

Recommended format:

```text
<role-key>.md
```

Current examples:

```text
model-selector.md
metric-definer.md
capability-tester.md
data-verifier.md
```

### MCP Config Names

MCP keys in `opencode.json` use the service capability name and should match the headquarters capability.

Recommended format:

```text
<capability>
```

Current example:

```json
"presentation-delivery": {
  "type": "local",
  "command": ["node", "D:\\TEST\\oc_test_project\\BDTC\\headquarters\\mcp-server-presentation-delivery\\server.js"],
  "enabled": true
}
```

### Organization-to-Path Mapping

| Organization Concept | English Name | Technical Path |
| --- | --- | --- |
| BDTC 集团总部 | BDTC Group Headquarters | `BDTC` |
| 集团总部目录 | Headquarters | `headquarters` |
| 呈现与交付部 | Presentation & Delivery Department | `headquarters/mcp-server-presentation-delivery` |
| 大模型性能测试子公司 | LLM Performance Testing Company | `company-llm-perf` |
| 测试规划部 | Test Planning Department | `company-llm-perf/.opencode/agents/test-planning` |
| 方案设计部 | Solution Design Department | `company-llm-perf/.opencode/agents/solution-design` |
| 执行部 | Execution Department | `company-llm-perf/.opencode/agents/execution` |
| 质量审核部 | Quality Review Department | `company-llm-perf/.opencode/agents/quality-review` |
