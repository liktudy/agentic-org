# Standard Level Policy

## Purpose

This policy defines how `agentic-org` classifies, upgrades, and downgrades standards.

Not every rule should become an iron rule. Standards must stay strong where risk is high and lightweight where flexibility is useful.

## Levels

| Level | Name | Meaning | Change Authority |
| --- | --- | --- | --- |
| P0 | Iron Rule | Must be followed across the whole repository. No agent may bypass it. | Highest Leader only |
| P1 | Required Standard | Required by default for headquarters and generated companies. | Highest Leader approval required to waive or change |
| P2 | Recommended Practice | Default practice that can be adapted when context justifies it. | Owning department may adjust if no P0/P1 rule is affected |
| P3 | Local Implementation Detail | Tool, adapter, template, or runtime detail with local scope. | Owning department may adjust |

## P0 Iron Rules

The following rules are P0:

- Highest Leader has final decision authority.
- Boundary ambiguity must be escalated instead of decided silently.
- Company workflow execution requires approval.
- Organization modifications and deletions require records and rollback snapshots.
- No rollback snapshot, no modification or deletion.
- Local runtime outputs must not be committed.

## P1 Required Standards

The following rules are P1:

- Reuse existing companies before creating a new company.
- Generated companies must satisfy the minimum company structure policy.
- Generated departments must have non-overlapping boundaries.
- Generated agents must have single responsibility and lowest viable permission.
- Company internal formal artifacts are limited to Markdown, CSV, and JSON.
- External deliverables are produced by the Delivery Department.
- Repeated review failures escalate after the third failure.

## P2 Recommended Practices

The following rules are P2:

- Use a second perspective for L2/L3 tasks, research, design, strategy, or high-value uncertainty.
- Keep operation records minimal.
- Prefer closure over physical deletion for companies.
- Keep prompts concise and precise.
- Keep documentation small enough to be maintained.

## P3 Local Implementation Details

The following rules are P3:

- Runtime adapter file layout.
- Delivery templates.
- MCP server implementation details.
- Platform-specific agent export formats.
- Local command or tool choices.

## Upgrade Triggers

Upgrade a rule when it affects:

- final authority
- irreversible action
- rollback and traceability
- company creation, closure, merge, split, or restructuring
- permission boundaries
- cross-company consistency
- artifact trustworthiness
- external delivery correctness

P0 and P1 upgrades require Highest Leader confirmation.

## Downgrade Triggers

Downgrade a rule when it mainly affects:

- convenience
- style preference
- temporary process detail
- optional future use
- platform-specific adapter detail
- log verbosity
- non-authoritative draft format

A downgraded rule must not weaken any P0 or P1 rule.

## New Standard Checklist

Every new or changed standard must state:

- level
- owner
- scope
- whether Highest Leader approval is required
- affected source-of-truth files
- rollback requirement, if any

If the level is unclear, escalate to the Highest Leader.
