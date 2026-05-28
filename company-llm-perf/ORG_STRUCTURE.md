# company-llm-perf Organization Structure

## 中文版

### company-llm-perf 公司

`company-llm-perf` 是 BDTC 集团旗下的大模型性能测试子公司。该公司负责规划、设计、执行并审核 LLM 性能测试工作。

#### 测试规划部

- 应用分析员：分析测试应用场景
- 可行性评估师：评估本地部署测试的硬件资源和可行性
- 模型命名专员：研究模型命名规范，解释后缀含义和量化方案
- 大模型选型员：调研可本地部署的开源大模型
- 策略规划师：制定整体测试方案路线图

#### 方案设计部

- Benchmark 研究员：调研业界 benchmark，推荐评测集和评测方法
- 指标定义师：定义 LLM 测试评分标准和通过阈值
- 测试用例设计师：设计 LLM 测试用例和 prompt 模板

#### 执行部

- 能力测试员：测试 LLM 推理、编码、准确性等核心能力
- 延迟测试员：测试响应延迟，包括 TTFT、TPS、P50/P95
- 压力测试员：测试长上下文处理和高并发稳定性

#### 质量审核部

- 数据验证员：验证执行部采集的测试数据可信度
- 方案审核员：审核测试方案的合理性和完整性
- 报告汇总员：汇总审核通过的数据生成最终测试报告

#### 总部共享服务

- 呈现与交付部属于 BDTC 集团总部。
- 本公司通过 MCP 服务接入总部的呈现、排版、模板和格式转换能力。
- OpenCode 配置入口：`opencode.json` 中的 `presentation-delivery` MCP。

## English Version

### company-llm-perf Company

`company-llm-perf` is a subsidiary of BDTC Group focused on LLM performance testing. It plans, designs, executes, and reviews model evaluation work.

#### Test Planning Department

- Application Analyst: analyzes testing application scenarios
- Feasibility Assessor: evaluates local deployment resources and feasibility
- Model Nomenclature Specialist: explains model naming, suffixes, and quantization schemes
- Model Selector: researches locally deployable open-source LLMs
- Strategy Planner: creates the overall testing roadmap

#### Solution Design Department

- Benchmark Researcher: researches industry benchmarks and recommends evaluation methods
- Metric Definer: defines scoring standards and pass thresholds for LLM tests
- Test Case Designer: designs LLM test cases and prompt templates

#### Execution Department

- Capability Tester: tests reasoning, coding, factual accuracy, and core model capabilities
- Latency Tester: measures TTFT, TPS, P50/P95 latency, and concurrency behavior
- Stress Tester: tests long-context handling and high-concurrency stability

#### Quality Review Department

- Data Verifier: validates the credibility of collected test data
- Plan Reviewer: reviews the completeness and soundness of test plans
- Report Compiler: compiles approved data into the final test report

#### Headquarters Shared Service

- Presentation & Delivery Department belongs to BDTC Group Headquarters.
- This company consumes headquarters presentation, formatting, templating, and conversion capabilities through MCP.
- OpenCode configuration entry: the `presentation-delivery` MCP in `opencode.json`.
