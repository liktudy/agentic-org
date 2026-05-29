# agentic-org Architecture

## Core Idea

`agentic-org` separates headquarters governance from company execution.

Headquarters owns:

- governance
- organization design
- workflow generation
- platform adapters
- delivery processing

Companies own:

- domain-specific departments
- role agents
- company workflows
- internal artifacts
- execution history

## Directory Model

```text
agentic-org/
`-- departments/
    |-- governance/
    |-- organization-design/
    |-- workflow-factory/
    |-- platform-adapters/
    `-- delivery/
```

Private workspace repositories may contain generated companies:

```text
agentic-org-workspace/
`-- companies/
    `-- company-<domain>/
        |-- company.spec.json
        |-- README.md
        |-- ORG_STRUCTURE.md
        |-- WORKFLOW.md
        |-- departments/
        `-- runtime/
```

## Source of Truth

Organization source of truth:

```text
ORG_STRUCTURE.md
docs/
departments/governance/
```

Platform runtime adapters:

```text
departments/platform-adapters/
agentic-org-workspace/companies/<company>/runtime/
```

## Design Principles

- Reuse existing companies before creating new ones.
- Company generation and company execution are separate decisions.
- `company.spec.json` archives the full company definition.
- Platform-specific files are adapters.
- Company folders use the `company-` prefix.
- Local runtime outputs stay outside Git.
- The Highest Leader has final decision authority.
