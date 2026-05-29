# Workflow State Schema

## Purpose

`workflow-state.json` records current task state only.

It is not a process log and must not become a detailed execution diary.

## Recommended Fields

```json
{
  "task_id": "YYYYMMDD-short-topic",
  "company": "company-<domain>",
  "current_stage": "<domain>-planning",
  "status": "in_progress",
  "owner": "workflow-orchestrator",
  "artifacts": [],
  "review_count": 0,
  "escalation_required": false,
  "highest_leader_decision": null,
  "updated_at": "YYYY-MM-DD"
}
```

## Status Values

- `draft`
- `in_progress`
- `reviewing`
- `revision_required`
- `escalated`
- `approved`
- `completed`
- `abandoned`

## Rules

- Update state only when task stage, owner, review count, escalation, or approval changes.
- Keep detailed process notes local.
- Do not commit command output logs.
- Commit state only when it has reusable governance or workflow value.
