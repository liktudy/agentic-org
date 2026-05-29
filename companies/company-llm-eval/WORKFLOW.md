# company-llm-eval Workflow

## 中文版

本流程继承 `departments/governance/workflows/MULTI_AGENT_WORKFLOW.md` 的集团级规则，并补充 `company-llm-eval` 大模型评测业务的具体执行顺序。

## 编排入口

组织真源中的编排入口：

```text
companies/company-llm-eval/departments/eval-orchestration/agents/workflow-orchestrator.md
```

平台运行入口由 `companies/company-llm-eval/runtime/<platform>/` 提供或生成。

## 执行前确认

公司可以长期存在，但具体执行一次公司工作流前必须得到执行者确认。总部可以生成或更新公司结构，不能自动启动业务执行。

## 阶段与部门

1. 需求摘要：工作流编排员形成 `requirement-brief.md`。
2. 评测规划：评测规划部输出场景、模型候选、可行性和路线图。
3. 评测设计：评测设计部输出 benchmark、测试用例和评分规则。
4. 方案审核：评测审核部方案审核员判断是否通过。
5. 执行评测：评测执行部输出能力、延迟、压力测试原始数据。
6. 数据审核：评测审核部数据验证员判断数据可信度。
7. 内部最终报告：报告汇总员输出 `internal-final-report.md`。
8. 集团交付加工：集团交付部生成外部交付物。
9. 双签验收：子公司确认内容，集团交付部确认交付规范。

## 内部产物目录

```text
companies/company-llm-eval/outputs/internal/tasks/<task-id>/
```

任务 ID 使用：

```text
YYYYMMDD-short-topic
```

内部正式产物只使用 `.md`、`.csv`、`.json`。

## 外部交付目录

```text
departments/delivery/outputs/company-llm-eval/drafts/
departments/delivery/outputs/company-llm-eval/final/
departments/delivery/outputs/company-llm-eval/archive/
```

## English Version

This workflow inherits the group-level rules from `departments/governance/workflows/MULTI_AGENT_WORKFLOW.md`. A company can exist long term, but each execution of its workflow requires approval.
