# agentic-org Organization Structure

## 中文版

### 定位

`agentic-org` 是一个以总部治理能力为核心的智能体组织系统。

项目重点不是手工维护某一家子公司，而是建设一套“总部系统”：用户描述一个工作流后，总部先判断是否复用已有子公司；如果不能复用，再生成一家长期存在的子公司，并由该子公司在得到确认后执行具体需求。

最高领导者 / Highest Leader 拥有最终裁决权。

## 组织图

```mermaid
flowchart TB
  ROOT["agentic-org<br/>智能体组织系统"]

  DEPTS["departments<br/>集团部门"]
  GOV["governance<br/>治理部"]
  ORGDESIGN["organization-design<br/>组织设计部"]
  FACTORY["workflow-factory<br/>工作流工厂部"]
  PLATFORM["platform-adapters<br/>平台适配部"]
  DELIVERY["delivery<br/>交付部"]

  COMPANIES["companies<br/>长期子公司"]
  LLM["company-llm-eval<br/>大模型评测公司"]

  ROOT --> DEPTS
  ROOT --> COMPANIES
  DEPTS --> GOV
  DEPTS --> ORGDESIGN
  DEPTS --> FACTORY
  DEPTS --> PLATFORM
  DEPTS --> DELIVERY
  COMPANIES --> LLM
  ORGDESIGN -. 复用/新建/合并/关闭建议 .-> COMPANIES
  FACTORY -. 生成 company spec 与工作流 .-> COMPANIES
  LLM -. 外部交付加工 .-> DELIVERY
```

## 总部职责

- 治理部：制度、权限、命名、生命周期、绩效、审批与 schema。
- 组织设计部：判断复用还是新建，设计公司、部门、岗位，并提出合并或关闭建议。
- 工作流工厂部：把用户描述的工作流转为 `company.spec.json`、公司目录、部门、agent、workflow 和 runtime adapter。
- 平台适配部：适配 Codex、Claude Code、OpenCode 等运行平台。
- 交付部：把子公司内部产物加工为外部交付物。

## 子公司原则

子公司是总部能力生成出的长期业务执行单元，不是一次性任务目录。子公司可以被暂停、评估、合并或关闭，但必须经过总部治理流程和执行者确认。

## English Version

`agentic-org` is a headquarters-centered agentic organization system. A user describes a workflow; headquarters decides whether to reuse an existing company or create a new long-lived company. Execution of a company workflow requires approval.
