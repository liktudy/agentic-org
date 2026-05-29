# Naming Policy

## 中文版

### 项目命名

对外项目名：

```text
agentic-org
```

中文含义：

```text
智能体组织系统
```

命名理由：

- `agentic` 对应 agentic AI 和多智能体系统。
- `org` 对应组织、公司、部门和岗位抽象。
- 不绑定 Codex、Claude Code、OpenCode 等单一平台。

## 目录命名规则

- 使用英文小写。
- 多词使用 kebab-case。
- 不使用中文目录名。
- 不使用空格、下划线或驼峰命名。
- 同一层级使用相似命名范式。

## 层级命名范式

| 层级 | 命名规则 | 示例 |
| --- | --- | --- |
| 总部部门 | 短职能名 | `governance`, `platform-adapters`, `delivery` |
| 子公司 | `company-<domain>` | `company-market-research` |
| 子公司部门 | `<domain>-<function>` | `research-planning`, `research-review` |
| 员工 agent | `<role>.md` | `model-selector.md`, `report-compiler.md` |
| 平台适配 | `<platform>` | `codex`, `claude-code`, `opencode` |

## 仓库命名

| 仓库 | 用途 |
| --- | --- |
| `agentic-org` | 公共总部标准仓库，不维护真实子公司。 |
| `agentic-org-workspace` | 私有工作区仓库，维护真实子公司和本地运行状态。 |

## English Version

Use `agentic-org` as the public project name. Use consistent naming by layer: headquarters departments use short function names, companies use `company-*`, company departments use a domain prefix, and role agents use kebab-case role names.
