# BDTC Optimization Plan

## 中文版

### 目标

本文记录 BDTC 集团组织架构和 OpenCode agent 体系的后续优化项。当前结构已经可以表达“集团总部 - 子公司 - 部门 - 员工/Agent”的基本模型，后续优化重点是补齐跨部门流程、交付验收责任和运行规范。

### 待优化事项

#### 1. 补充项目协调或客户需求入口角色

当前 `company-llm-perf` 已有测试规划、方案设计、执行和质量审核部门，但缺少统一接收客户需求、拆解任务、安排部门协作顺序的角色。

建议方案：

- 新增 `project-management` 部门，中文名为“项目管理部”。
- 或在 `test-planning` 下新增 `project-coordinator.md`，中文名为“项目协调员”。

建议职责：

- 接收客户或业务方需求
- 判断任务类型和优先级
- 拆解跨部门工作流
- 明确输入、输出、负责人和截止时间
- 汇总各部门进度并推动交付闭环

#### 2. 明确最终交付物验收责任

当前质量审核部负责方案和数据审核，总部呈现与交付部负责格式化与最终产物生成。后续需要明确最终交付物发布前的验收边界。

建议责任划分：

- `company-llm-perf` 质量审核部负责内容正确性、数据可信度、评分逻辑和结论合理性。
- `headquarters` 呈现与交付部负责格式规范、模板一致性、目标受众适配和文件可交付性。
- 最终交付前增加“双签”机制：子公司质量审核通过 + 总部交付规范通过。

#### 3. 建立跨子公司共享服务接入规范

当前 `company-llm-perf` 已通过 `opencode.json` 接入总部 `presentation-delivery` MCP。后续如果新增子公司，应复用同一接入模式。

建议规范：

- 每个子公司保留自己的 `.opencode/agents`。
- 每个子公司通过 `opencode.json` 接入总部共享 MCP。
- 总部共享服务不得复制到子公司内部，除非该子公司需要拥有独立版本。

#### 4. 建立 agent 输出物目录规范

呈现与交付部 agent 需要产出文件，因此后续应统一输出目录，避免交付物散落。

建议目录：

```text
<company>/outputs/
<company>/outputs/drafts/
<company>/outputs/final/
headquarters/outputs/templates/
```

#### 5. 建立组织变更流程

新增公司、部门、岗位或总部共享服务时，应同步更新：

- `BDTC_ORG_STRUCTURE.md`
- `NAMING_CONVENTIONS.md`
- 对应公司或总部的 `ORG_STRUCTURE.md`
- 对应 `.opencode/agents` 目录和 agent 文件
- 对应 `opencode.json` MCP 配置

## English Version

### Goal

This document tracks future improvements for the BDTC group organization model and OpenCode agent system. The current structure already expresses the basic model of group headquarters, subsidiaries, departments, and role agents. Future work should focus on cross-department workflow ownership, final deliverable approval, and runtime conventions.

### Optimization Items

#### 1. Add a Project Coordination or Customer Intake Role

`company-llm-perf` currently has test planning, solution design, execution, and quality review departments, but it does not yet have a clear role for receiving customer requirements, decomposing tasks, and coordinating departments.

Recommended options:

- Add a `project-management` department, named “项目管理部” in Chinese.
- Or add `project-coordinator.md` under `test-planning`, named “项目协调员” in Chinese.

Suggested responsibilities:

- Receive customer or business requirements
- Determine task type and priority
- Decompose cross-department workflows
- Define inputs, outputs, owners, and deadlines
- Track department progress and drive delivery closure

#### 2. Clarify Final Deliverable Approval Responsibility

The Quality Review Department currently reviews plans and data, while the headquarters Presentation & Delivery Department formats and produces final deliverables. Future work should define the final approval boundary before customer delivery.

Recommended split:

- `company-llm-perf` Quality Review owns content correctness, data credibility, scoring logic, and conclusion quality.
- `headquarters` Presentation & Delivery owns formatting standards, template consistency, audience fit, and deliverable readiness.
- Add a dual-approval rule before final delivery: subsidiary quality approval plus headquarters delivery standards approval.

#### 3. Standardize Shared Service Access Across Subsidiaries

`company-llm-perf` currently connects to the headquarters `presentation-delivery` MCP through `opencode.json`. Future subsidiaries should reuse the same access model.

Recommended conventions:

- Each subsidiary keeps its own `.opencode/agents`.
- Each subsidiary connects to headquarters shared MCP services through `opencode.json`.
- Headquarters shared services should not be copied into subsidiaries unless a subsidiary needs an independent version.

#### 4. Standardize Agent Output Directories

Presentation & Delivery agents need to produce files, so output locations should be standardized to avoid scattered deliverables.

Recommended directories:

```text
<company>/outputs/
<company>/outputs/drafts/
<company>/outputs/final/
headquarters/outputs/templates/
```

#### 5. Establish an Organization Change Process

When adding a company, department, role, or headquarters shared service, update:

- `BDTC_ORG_STRUCTURE.md`
- `NAMING_CONVENTIONS.md`
- The corresponding company or headquarters `ORG_STRUCTURE.md`
- The corresponding `.opencode/agents` directory and agent files
- The corresponding `opencode.json` MCP configuration
