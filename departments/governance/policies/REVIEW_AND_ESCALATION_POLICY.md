# Review and Escalation Policy

## Purpose

This policy prevents infinite review loops and defines escalation behavior.

## Review Failure Handling

Repeated review failures must not create an infinite loop.

- First failure: return to the responsible owner for revision.
- Second failure: involve orchestration or review owner to restate the issue and narrow the scope.
- Third failure: escalate to the Highest Leader with options and impact.

## Highest Leader Options

When escalation occurs, present these options when relevant:

- continue revision
- narrow task scope
- change owner
- add second perspective
- request permission expansion
- pause the task
- abandon the task
- modify organization structure

## Escalation Record

Escalation should produce a concise `DECISION_REQUEST.md` when a decision is required.

The request must include:

- current failure summary
- attempted revisions
- remaining blockers
- options
- recommendation
- exact question for the Highest Leader

## Logging Rule

Do not create process logs by default.

Record only decision requests, error reports, final artifacts, and meaningful governance updates.
