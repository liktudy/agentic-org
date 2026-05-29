# Company Minimum Structure Policy

## Required Default Departments

Generated companies must include these departments unless the Highest Leader explicitly says otherwise:

```text
<domain>-orchestration
<domain>-planning
<domain>-execution
<domain>-review
```

## Responsibilities

- Orchestration: receive tasks, decompose workflow, coordinate departments, request approval.
- Planning: clarify requirements, scenarios, scope, and feasibility.
- Execution: perform the core work or produce the core result.
- Review: review quality, data, logic, boundaries, and deliverability.

## Optional Departments

Generate only when needed:

```text
<domain>-design
<domain>-research
```

- Design: for solution, architecture, test case, or process design.
- Research: for external information, multi-option comparison, or trend judgment.

## Role Agent Granularity

Role agents must be single-purpose. One agent must not combine research, design, execution, review, and delivery responsibilities.

## Overlap Rule

Responsibility overlap is a generation failure. Redesign the structure or escalate to the Highest Leader.
