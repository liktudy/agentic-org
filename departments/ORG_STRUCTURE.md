# Group Departments Organization Structure

## 中文版

`departments/` 是 `agentic-org` 的集团部门集合。集团部门负责建设总部能力：制度、组织设计、工作流生成、平台适配和交付加工。

## 部门

### 治理部 / Governance Department

路径：`departments/governance`

职责：

- 维护最高领导者决策原则。
- 维护 agent 权限等级。
- 维护公司生命周期、绩效、复用、合并和关闭规则。
- 维护产物范式、schema、命名政策和审核升级制度。

### 组织设计部 / Organization Design Department

路径：`departments/organization-design`

职责：

- 根据用户描述的工作流判断是否复用已有公司。
- 当需要新公司时，设计公司定位、部门、岗位和边界。
- 识别多个子公司的职责重叠，提出合并建议。
- 识别长期失败或长期未执行的公司，提出暂停、重组或关闭建议。

### 工作流工厂部 / Workflow Factory Department

路径：`departments/workflow-factory`

职责：

- 把自然语言工作流转换成结构化公司规格。
- 生成或更新 `company.spec.json`、`WORKFLOW.md`、`ORG_STRUCTURE.md` 和 agent 文件。
- 将总部制度转换为可执行的公司脚手架。
- 在执行前提交确认，不自动启动子公司工作流。

### 平台适配部 / Platform Adapters Department

路径：`departments/platform-adapters`

职责：

- 维护 Codex、Claude Code、OpenCode 等平台适配规则。
- 防止平台私有配置成为组织真源。
- 从组织真源生成或同步各平台运行配置。

### 交付部 / Delivery Department

路径：`departments/delivery`

职责：

- 制定并维护对外交付规范。
- 维护交付模板。
- 将子公司内部标准产物加工为外部交付物。
- 通过 MCP 服务提供格式转换能力。

## English Version

Group departments build headquarters capabilities: governance, organization design, workflow generation, platform adapters, and delivery processing.
