# agentic-org Multi-Agent Workflow

## 中文版

### 目标

本文件定义 `agentic-org` 集团级多智能体协作流程。该流程供所有子公司复用；各子公司只需要在自己的 `WORKFLOW.md` 中补充业务特化步骤。

### 最高治理原则

最高领导者 / Highest Leader 拥有最终裁决权。任何 agent、部门、子公司或集团服务遇到职责边界不清、架构取舍、连续失败、废弃任务、权限变化、组织变化、重要文件迁移或覆盖等情况时，必须暂停自动执行并提交最高领导者决策。

总控 agent 只负责编排、记录和提交审批，不拥有最终裁决权。

### 通用流程

```text
客户或业务需求
-> 工作流编排员
-> 子公司业务部门产出内部标准产物
-> 子公司审核部门审核内容正确性
-> 报告汇总员生成内部最终报告
-> 集团交付部加工外部交付物
-> 子公司内容审核 + 集团交付规范双签
-> 交付或归档
```

### 标准阶段

1. 需求确认：形成 `requirement-brief.md`。
2. 规划阶段：形成评测规划和范围说明。
3. 设计阶段：形成 benchmark、测试用例和评分规则。
4. 方案审核：由审核部门判断是否进入执行。
5. 执行评测：形成 CSV 原始数据和必要 JSON 元数据。
6. 数据审核：由审核部门判断数据可信度。
7. 内部报告：形成 Markdown 内部最终报告。
8. 集团交付：由交付部生成 PPT、PDF、Word、HTML 等外部材料。
9. 双签验收：子公司确认内容，集团交付部确认交付规范。

### 内部与外部边界

- 子公司内部正式产物仅允许 `.md`、`.csv`、`.json`。
- 外部交付物由集团交付部统一生成。
- 子公司不得直接把内部产物作为外部交付物发送给客户。

### 留痕原则

工作留痕只记录关键节点，不记录每一个微动作。

必须记录：

- 需求确认
- 阶段完成
- 审核通过或驳回
- 回退原因
- 提权原因
- 最高领导者决策
- 任务废弃
- 最终交付

不长期记录：

- 普通命令输出
- 格式微调过程
- 临时草稿
- 无决策价值的重复失败日志

### 任务 ID

任务 ID 使用：

```text
YYYYMMDD-short-topic
```

示例：

```text
20260529-qwen-local-eval
```

## English Version

This file defines the reusable `agentic-org` group-level multi-agent workflow. Subsidiaries inherit it and document business-specific steps in their own `WORKFLOW.md`.

The Highest Leader has final decision authority. The orchestrator coordinates, records, and submits approvals, but does not own final authority.
