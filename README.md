# agentic-org

`agentic-org` is a headquarters-centered system for generating and governing long-lived agentic companies.

Users describe workflows. Headquarters decides whether to reuse an existing company or create a new one. Generated companies keep their own departments, role agents, workflows, lifecycle state, performance signals, and platform adapters.

## Core Loop

```text
Workflow description
-> reuse or create decision
-> company spec
-> company structure
-> execution approval
-> company workflow execution
-> review, delivery, lifecycle update
```

## Current Structure

```text
agentic-org/
|-- AGENTS.md
|-- CLAUDE.md
|-- ORG_STRUCTURE.md
|-- docs/
`-- departments/
    |-- governance/
    |-- organization-design/
    |-- workflow-factory/
    |-- platform-adapters/
    `-- delivery/
```

## Workspace Use

The public `main` branch contains headquarters standards only.

Generated or private companies should live in a workspace repository, for example:

```text
agentic-org-workspace/
`-- companies/
    `-- company-<domain>/
```

## Source of Truth

The organizational source of truth is:

- `ORG_STRUCTURE.md`
- `docs/VISION.md`
- `docs/ARCHITECTURE.md`
- `departments/governance/`
- `departments/ORG_STRUCTURE.md`

Platform-specific files are adapters, not the source of truth.
