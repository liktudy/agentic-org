# Platform Adapters Department

平台适配部维护 `agentic-org` 对 Codex、Claude Code、OpenCode 和未来智能体平台的适配层。

原则：

- 组织真源在 `departments/` 和 `companies/`。
- 平台配置只是运行适配器。
- 平台入口应从组织真源生成或同步，避免多份配置漂移。
