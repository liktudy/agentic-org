# Naming Policy

## 中文版

### 项目命名

对外项目名采用：

```text
agentic-org
```

中文名：

```text
智能体组织系统
```

命名理由：

- `agentic` 对应 agentic AI 和多智能体系统。
- `org` 对应组织、公司、部门和岗位抽象。
- 不绑定 Codex、Claude Code、OpenCode 等单一平台。

### 目录命名规则

- 使用英文小写。
- 多词使用 kebab-case。
- 不使用中文目录名。
- 不使用空格、下划线或驼峰命名。
- 同一层级使用相似命名范式。

### 层级命名范式

| 层级 | 命名规则 | 示例 |
| --- | --- | --- |
| 集团部门 | 短职能名 | `governance`, `platform-adapters`, `delivery` |
| 子公司 | `company-<domain>` | `company-llm-eval` |
| 子公司部门 | `<domain>-<function>` | `eval-planning`, `eval-design` |
| 员工 agent | `<role>.md` | `model-selector.md`, `report-compiler.md` |
| 平台适配 | `<platform>` | `codex`, `claude-code`, `opencode` |

### 已批准迁移

| 旧名称 | 新名称 |
| --- | --- |
| `BDTC` | `agentic-org` |
| `headquarters/governance-office` | `departments/governance` |
| `headquarters/platform-office` | `departments/platform-adapters` |
| `headquarters/presentation-delivery` | `departments/delivery` |
| `company-llm-perf` | `company-llm-eval` |
| `orchestration` | `eval-orchestration` |
| `test-planning` | `eval-planning` |
| `solution-design` | `eval-design` |
| `execution` | `eval-execution` |
| `quality-review` | `eval-review` |

## English Version

Use `agentic-org` as the public project name. Use consistent naming by layer: group departments use short function names, companies use `company-*`, company departments use a domain prefix, and role agents use kebab-case role names.
