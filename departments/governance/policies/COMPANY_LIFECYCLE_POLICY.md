# Company Lifecycle Policy

## Purpose

This policy defines company lifecycle states and review triggers.

Companies are long-lived business execution units. They are not disposable task folders.

## Lifecycle States

- `active`: company can accept approved workflow execution.
- `paused`: company is temporarily inactive.
- `under_review`: company requires lifecycle or performance review.
- `merge_candidate`: company may overlap with another company.
- `closure_candidate`: company may be closed after approval.
- `closed`: company is inactive and retained for traceability.

## Review Triggers

Headquarters should review a company when:

- workflow execution repeatedly fails
- review failure count reaches escalation threshold
- company is inactive for a long period
- company overlaps with another company
- company output no longer creates useful delivery value
- domain boundary becomes unclear
- Highest Leader requests review

## Closure And Merge Rules

Headquarters may recommend pause, merge, restructure, or closure.

Headquarters must not close, merge, split, or restructure a company automatically.

Closure, merge, split, and restructuring require Highest Leader approval and must follow `ORGANIZATION_CHANGE_POLICY.md`.

## Performance Signals

Track only meaningful lifecycle signals:

- execution count
- success count
- failure count
- review failure count
- reuse count
- delivery count
- overlap warnings
- last execution date
- last success date

Do not create process logs by default.
