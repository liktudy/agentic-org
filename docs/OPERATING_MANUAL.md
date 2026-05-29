# Operating Manual

### Purpose

This manual explains the main Markdown files in `agentic-org`.

`agentic-org` is an English-only execution project.

All internal source-of-truth documents, generated company specs, workflows, agent definitions, prompts, and internal artifacts must be written in English.

Chinese human-facing explanations live in the separate `agentic-org-zh` project. Chinese companion material may be generated after the English source, but it does not drive AI/agent execution.

All text source files must use UTF-8 encoding.

### Root Files

| File | Purpose |
| --- | --- |
| `README.md` | Public project introduction. |
| `ORG_STRUCTURE.md` | Current organization chart and top-level structure. |
| `AGENTS.md` | General agent entry for Codex-style tools. |
| `CLAUDE.md` | Claude Code entry and source-of-truth guidance. |
| `docs/AI_READING_GUIDE.md` | AI reading rules for token-efficient execution. |
| `docs/ARCHITECTURE.md` | Architecture and directory model. |
| `docs/QUICK_START.md` | Short workflow-to-company onboarding guide. |
| `docs/OPERATING_MANUAL.md` | Explanation of repository documents and how to use them. |
| `docs/VISION.md` | Product vision and positioning. |
| `docs/COMPANY_GENERATION_WORKFLOW.md` | User-facing company generation workflow. |

### Governance Files

| File | Purpose |
| --- | --- |
| `departments/governance/policies/GOVERNANCE_AUTHORITY.md` | Highest Leader authority and escalation rules. |
| `departments/governance/policies/STANDARD_LEVEL_POLICY.md` | Standard levels and upgrade/downgrade rules. |
| `departments/governance/policies/BOUNDARY_POLICY.md` | Project, department, company, and role boundary rules. |
| `departments/governance/policies/AGENT_PERMISSION_LEVELS.md` | Permission levels for new role agents. |
| `departments/governance/policies/OUTPUT_ARTIFACT_STANDARDS.md` | Internal and external artifact standards. |
| `departments/governance/policies/REVIEW_AND_ESCALATION_POLICY.md` | Review rollback and escalation policy. |
| `departments/governance/policies/COMPANY_LIFECYCLE_POLICY.md` | Company lifecycle, performance, merge, and closure policy. |
| `departments/governance/policies/ORGANIZATION_CHANGE_POLICY.md` | Create, modify, delete, merge, split, and move rules for companies, departments, and agents. |
| `departments/governance/policies/COMPANY_MINIMUM_STRUCTURE_POLICY.md` | Required default departments and single-responsibility role rules. |
| `departments/governance/policies/TASK_LEVEL_POLICY.md` | Task level rules and second-perspective trigger rules. |
| `departments/governance/policies/MINIMAL_OPERATION_POLICY.md` | Small-and-ready operation rules, including minimal logging. |
| `departments/governance/policies/WORKFLOW_STATE_SCHEMA.md` | Human-readable workflow state standard. |
| `departments/governance/policies/NAMING_POLICY.md` | Naming policy. |
| `departments/governance/workflows/MULTI_AGENT_WORKFLOW.md` | Group-level reusable multi-agent workflow. |
| `departments/governance/schemas/company.spec.schema.json` | Machine-readable company spec schema. |
| `departments/governance/templates/organization-change-request-template.md` | Template for organization change requests. |
| `departments/governance/templates/change-record-template.md` | Required record template for modifications and deletions. |
| `departments/governance/templates/role-agent-template.md` | Template for generated role agents. |

### Headquarters Generation Files

| File | Purpose |
| --- | --- |
| `departments/organization-design/policies/COMPANY_REUSE_AND_CREATION_POLICY.md` | Rules for reusing or creating companies. |
| `departments/workflow-factory/workflows/COMPANY_GENERATION_WORKFLOW.md` | Operational workflow for generating or updating companies. |
| `departments/workflow-factory/prompts/COMPANY_GENERATION_PROMPT.md` | Standard prompt for precise, non-redundant company generation. |

### Company Files

| File | Purpose |
| --- | --- |
| `companies/<company>/README.md` | Company overview. |
| `companies/<company>/company.spec.json` | Structured archive of company identity, departments, workflows, lifecycle, and performance. |
| `companies/<company>/ORG_STRUCTURE.md` | Company departments and role agents. |
| `companies/<company>/WORKFLOW.md` | Company-specific business workflow. |
| `companies/<company>/departments/*/agents/*.md` | Role agent definitions. |
| `companies/<company>/runtime/*` | Platform runtime adapters. |

### Local-Only Files

`outputs/` directories are local runtime outputs. They are ignored by Git and should not be used as source-of-truth documents.
