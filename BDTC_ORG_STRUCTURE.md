# BDTC Group Organization Structure

## 中文版

### 定位

BDTC 是集团总部。集团总部负责沉淀共享能力、提供跨子公司的基础服务，并通过 MCP 等机制向旗下子公司输出能力。

### 架构图

```mermaid
flowchart TB
  BDTC["BDTC 集团总部"]

  HQ_PD["呈现与交付部<br/>Presentation & Delivery Department"]
  HQ_MCP["MCP 服务<br/>mcp-server-presentation-delivery"]

  C_LLM["company-llm-perf<br/>大模型性能测试子公司"]
  C_TP["测试规划部<br/>Test Planning Department"]
  C_SD["方案设计部<br/>Solution Design Department"]
  C_EX["执行部<br/>Execution Department"]
  C_QR["质量审核部<br/>Quality Review Department"]

  BDTC --> HQ_PD
  HQ_PD --> HQ_MCP
  BDTC --> C_LLM
  C_LLM --> C_TP
  C_LLM --> C_SD
  C_LLM --> C_EX
  C_LLM --> C_QR
  C_LLM -. 通过 opencode.json 接入 .-> HQ_MCP
```

### 集团总部

#### 呈现与交付部

- 维护集团统一输出规范
- 维护交付模板与格式转换能力
- 将 Markdown 转换为 PPT、Word、PDF、HTML、CSV、JSON 等格式
- 通过 MCP 服务向各子公司提供共享能力

### 旗下子公司

#### company-llm-perf 公司

- 测试规划部：负责测试场景、模型选型、可行性评估和整体路线图
- 方案设计部：负责 benchmark、测试用例和评分指标设计
- 执行部：负责能力测试、延迟测试和压力测试
- 质量审核部：负责数据验证、方案审核和最终报告汇总

## English Version

### Positioning

BDTC is the group headquarters. Headquarters owns shared capabilities, provides cross-company infrastructure, and exposes services to subsidiaries through mechanisms such as MCP.

### Architecture Diagram

```mermaid
flowchart TB
  BDTC_EN["BDTC Group Headquarters"]

  HQ_PD_EN["Presentation & Delivery Department<br/>呈现与交付部"]
  HQ_MCP_EN["MCP Service<br/>mcp-server-presentation-delivery"]

  C_LLM_EN["company-llm-perf<br/>LLM Performance Testing Company"]
  C_TP_EN["Test Planning Department<br/>测试规划部"]
  C_SD_EN["Solution Design Department<br/>方案设计部"]
  C_EX_EN["Execution Department<br/>执行部"]
  C_QR_EN["Quality Review Department<br/>质量审核部"]

  BDTC_EN --> HQ_PD_EN
  HQ_PD_EN --> HQ_MCP_EN
  BDTC_EN --> C_LLM_EN
  C_LLM_EN --> C_TP_EN
  C_LLM_EN --> C_SD_EN
  C_LLM_EN --> C_EX_EN
  C_LLM_EN --> C_QR_EN
  C_LLM_EN -. connects through opencode.json .-> HQ_MCP_EN
```

### Group Headquarters

#### Presentation & Delivery Department

- Maintains group-wide output standards
- Maintains delivery templates and format conversion capabilities
- Converts Markdown into PPT, Word, PDF, HTML, CSV, JSON, and related formats
- Provides shared capabilities to subsidiaries through MCP services

### Subsidiary Companies

#### company-llm-perf Company

- Test Planning Department: owns testing scenarios, model selection, feasibility assessment, and roadmaps
- Solution Design Department: owns benchmarks, test cases, and scoring metrics
- Execution Department: owns capability, latency, and stress testing
- Quality Review Department: owns data verification, plan review, and final report compilation
