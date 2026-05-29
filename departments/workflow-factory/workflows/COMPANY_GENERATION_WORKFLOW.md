# Company Generation Workflow

## Purpose

This workflow defines how headquarters reuses or generates companies from a user-described workflow.

## Flow

1. Receive workflow description.
2. Check for authority, boundary, permission, or Highest Leader issues.
3. Organization Design determines task level.
4. Organization Design checks existing companies for reuse.
5. If reusable, propose reuse or minimal extension.
6. If not reusable, design company name, domain, departments, role agents, and boundaries.
7. Workflow Factory generates `company.spec.json`.
8. Workflow Factory generates or updates `README.md`, `ORG_STRUCTURE.md`, `WORKFLOW.md`, agent files, and runtime adapters.
9. Platform Adapters checks runtime entries.
10. Stop and wait for approval before executing the company workflow.

## Hard Rules

- Do not skip reuse check.
- Do not execute company workflows without approval.
- Do not automatically close, merge, split, or restructure companies.
- Do not treat platform adapters as source of truth.
- Do not generate overlapping departments or agents.
- Do not create multi-responsibility agents.
- If company generation is uncertain, stop and ask the Highest Leader.

## Required Outputs

```text
companies/<company>/company.spec.json
companies/<company>/README.md
companies/<company>/ORG_STRUCTURE.md
companies/<company>/WORKFLOW.md
companies/<company>/departments/*/agents/*.md
companies/<company>/runtime/<platform>/
```
