# Quick Start

This guide shows the shortest path from a workflow idea to an approved company plan.

### 1. Describe The Workflow

The Highest Leader describes the workflow in plain language:

```text
I want a company that can evaluate whether local LLMs are suitable for coding, Chinese document QA, and agent workflows.
```

Include only what is known:

- goal
- expected users
- expected output
- constraints
- known risks or open questions

If the requirement is unclear, headquarters must discuss it with the Highest Leader before generating a company.

### 2. Check Reuse First

Organization Design checks whether an existing company can handle the workflow.

Reuse an existing company when:

- the domain is already covered
- only minor department or agent changes are needed
- the output type is compatible
- the workflow does not create a new long-term business boundary

Create a new company only when the workflow has a distinct long-term responsibility.

### 3. Generate The Company Plan

Workflow Factory generates or updates the company assets:

```text
companies/<company>/
|-- company.spec.json
|-- README.md
|-- ORG_STRUCTURE.md
|-- WORKFLOW.md
|-- departments/
`-- runtime/
```

Generated companies must follow headquarters standards:

- required default departments
- clear department boundaries
- single-responsibility agents
- lowest viable agent permissions
- internal artifacts limited to Markdown, CSV, and JSON

### 4. Stop For Approval

Company generation does not mean company execution.

Before running the company workflow, submit the plan to the Highest Leader with:

- reuse or creation reason
- generated structure
- task level
- execution scope
- risks and open decisions

Execution starts only after approval.

### 5. Keep Records Minimal

Do not create process logs by default.

Keep only:

- final artifacts
- `ERROR_REPORT.md` when execution fails
- `DECISION_REQUEST.md` when Highest Leader input is required
- `company.spec.json` updates when lifecycle, performance, or structure changes
