# Group Departments Organization Structure

`departments/` contains the headquarters departments of `agentic-org`. Headquarters departments build shared capabilities: governance, organization design, workflow generation, platform adapters, and delivery processing.

## Departments

### Governance Department

Path: `departments/governance`

Responsibilities:

- Maintain Highest Leader decision rules.
- Maintain agent permission levels.
- Maintain company lifecycle, performance, reuse, merge, and closure rules.
- Maintain artifact standards, schemas, naming policy, review policy, and standard levels.

### Organization Design Department

Path: `departments/organization-design`

Responsibilities:

- Decide whether a user-described workflow can reuse an existing company.
- Design company positioning, departments, roles, and boundaries when a new company is needed.
- Identify responsibility overlap across companies and recommend merges.
- Identify long-failing or inactive companies and recommend pause, restructure, or closure.

### Workflow Factory Department

Path: `departments/workflow-factory`

Responsibilities:

- Convert natural-language workflows into structured company specifications.
- Generate or update `company.spec.json`, `WORKFLOW.md`, `ORG_STRUCTURE.md`, and agent files.
- Convert headquarters standards into executable company scaffolds.
- Stop for approval before company workflow execution.

### Platform Adapters Department

Path: `departments/platform-adapters`

Responsibilities:

- Maintain adaptation rules for Codex, Claude Code, OpenCode, and other agent runtimes.
- Prevent platform-specific configuration from becoming the organization source of truth.
- Generate or synchronize runtime configuration from the organization source of truth.

### Delivery Department

Path: `departments/delivery`

Responsibilities:

- Define and maintain external delivery standards.
- Maintain delivery templates.
- Convert company internal standard artifacts into external deliverables.
- Provide format conversion through MCP services and local tools.
