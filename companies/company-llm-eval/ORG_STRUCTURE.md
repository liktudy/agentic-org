# company-llm-eval Organization Structure

## 中文版

`company-llm-eval` 是 `agentic-org` 旗下的大模型评测公司。它是长期存在的业务执行单元，负责规划、设计、执行并审核 LLM 评测工作。

## 部门与员工

### 评测编排部 / Evaluation Orchestration Department

路径：`departments/eval-orchestration`

- 工作流编排员 / Workflow Orchestrator：接收需求、拆解任务、调度部门、维护状态、记录关键留痕，并在重大不确定性下提交最高领导者决策。

### 评测规划部 / Evaluation Planning Department

路径：`departments/eval-planning`

- 场景分析员 / Scenario Analyst：分析评测应用场景。
- 可行性评估师 / Feasibility Assessor：评估本地部署评测的硬件资源和可行性。
- 模型命名专员 / Model Nomenclature Specialist：研究模型命名规范、后缀含义和量化方案。
- 模型选型专员 / Model Selection Specialist：调研可本地部署的开源大模型。
- 策略规划师 / Strategy Planner：制定整体评测路线图。

### 评测设计部 / Evaluation Design Department

路径：`departments/eval-design`

- Benchmark 研究员 / Benchmark Researcher：调研业界 benchmark，推荐评测集和评测方法。
- 指标定义师 / Metric Designer：定义 LLM 评测评分标准和通过阈值。
- 测试用例设计师 / Test Case Designer：设计 LLM 测试用例和 prompt 模板。

### 评测执行部 / Evaluation Execution Department

路径：`departments/eval-execution`

- 能力测试员 / Capability Tester：测试 LLM 推理、编码、准确性等核心能力。
- 延迟测试员 / Latency Tester：测试响应延迟，包括 TTFT、TPS、P50/P95。
- 压力测试员 / Stress Tester：测试长上下文处理和高并发稳定性。

### 评测审核部 / Evaluation Review Department

路径：`departments/eval-review`

- 数据验证员 / Data Verifier：验证执行部采集的测试数据可信度。
- 方案审核员 / Plan Reviewer：审核评测方案的合理性和完整性。
- 报告汇总员 / Report Compiler：汇总审核通过的数据，生成内部标准报告。

报告汇总员可以写入内部统一格式报告，但不生成外部交付物。外部交付物由集团交付部完成。

## English Version

`company-llm-eval` is the LLM Evaluation Company. It is a long-lived business execution unit generated and governed by headquarters.
