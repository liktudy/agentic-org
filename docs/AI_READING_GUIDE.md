# AI Reading Guide

This guide defines how AI/agent tools should read this repository with minimal token usage.

## Default Rule

AI/agent tools must read English documents by default.

Do not load the separate `agentic-org-zh` project unless one of these conditions is true:

- the user asks for Chinese explanation, review, or editing
- the task is to verify Chinese wording
- the English and Chinese versions appear inconsistent
- Highest Leader approval text must be checked in Chinese

## Standard Generation Order

Internal standard generation must happen in this order:

1. Generate or update the English standard first.
2. Treat the English standard as the AI/agent execution source.
3. Generate Chinese companion material only after the English standard, and only in `agentic-org-zh`.
4. Chinese companion material may be translated from the English standard.
5. If English and Chinese companion material conflict, stop and escalate instead of silently choosing one.

## Required AI Reading Paths

Read these English paths first:

- `AGENTS.md`
- `docs/QUICK_START.md`
- `docs/OPERATING_MANUAL.md`
- `departments/governance/policies/STANDARD_LEVEL_POLICY.md`
- `departments/governance/policies/GOVERNANCE_AUTHORITY.md`
- `departments/governance/policies/ORGANIZATION_CHANGE_POLICY.md`
- `departments/workflow-factory/workflows/COMPANY_GENERATION_WORKFLOW.md`

Then read only the task-specific English files needed for the current work.
