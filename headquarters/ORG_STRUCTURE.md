# Headquarters Organization Structure

## 中文版

### BDTC 集团总部

`headquarters` 是 BDTC 集团总部的组织与共享能力中心。总部不直接承担某一家子公司的业务测试流程，而是沉淀可复用能力，并通过 OpenCode agent 与 MCP 服务向旗下子公司提供支持。

#### 呈现与交付部

呈现与交付部负责集团级输出规范、模板体系、格式转换和客户交付物生成。该部门能力通过 `presentation-delivery` MCP 服务向子公司开放。

##### 标准制定员

- 制定并维护集团统一输出规范
- 检查各部门输出是否符合交付规范
- 对不合规输出提出修改要求
- 维护 Frontmatter、章节结构、格式规则和版本状态标准

##### 模板构建员

- 设计多套预设交付模板
- 维护商务简报、技术报告、极简文档等风格
- 将合规内容适配到 PPT、Word、PDF、HTML、Markdown、CSV、JSON 等格式
- 持续迭代总部模板库

##### 定制排版员

- 接收通过规范检查的 Markdown 内容
- 按客户需求定制输出 PPT、Word、PDF、HTML、CSV、JSON 等交付物
- 调整配色、字体、布局和受众视角
- 生成面向 CTO、技术团队、业务方等不同受众的交付版本

#### OpenCode 运行方式

- 总部 agent 注册目录：`.opencode/agents`
- 呈现与交付部 agent 路径：`.opencode/agents/presentation-delivery`
- 总部 MCP 配置文件：`opencode.json`
- MCP 服务实现路径：`mcp-server-presentation-delivery`

## English Version

### BDTC Group Headquarters

`headquarters` is the organization and shared capability center of BDTC Group. It does not own a subsidiary's business testing workflow directly. Instead, it maintains reusable capabilities and exposes them to subsidiaries through OpenCode agents and MCP services.

#### Presentation & Delivery Department

The Presentation & Delivery Department owns group-wide output standards, templates, format conversion, and customer-facing deliverable generation. Its capabilities are exposed to subsidiaries through the `presentation-delivery` MCP service.

##### Standard Setter

- Defines and maintains group-wide output standards
- Checks whether department outputs meet delivery standards
- Sends non-compliant outputs back for revision
- Maintains Frontmatter, section structure, formatting, and version status standards

##### Template Builder

- Designs reusable delivery templates
- Maintains executive, technical, and minimal document styles
- Adapts compliant content into PPT, Word, PDF, HTML, Markdown, CSV, JSON, and related formats
- Iterates the headquarters template library over time

##### Custom Formatter

- Receives Markdown content that has passed standards review
- Produces customized PPT, Word, PDF, HTML, CSV, JSON, and related deliverables
- Adjusts colors, typography, layout, and audience framing
- Generates deliverable versions for CTOs, technical teams, business stakeholders, and other audiences

#### OpenCode Runtime

- Headquarters agent registry: `.opencode/agents`
- Presentation & Delivery agent path: `.opencode/agents/presentation-delivery`
- Headquarters MCP config file: `opencode.json`
- MCP service implementation path: `mcp-server-presentation-delivery`
