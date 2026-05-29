# Workflow State Schema

## 中文版

`workflow-state.json` 用于记录任务当前状态，不用于保存完整过程日志。

推荐字段：

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

状态值：

- `draft`
- `in_progress`
- `reviewing`
- `revision_required`
- `escalated`
- `approved`
- `completed`
- `abandoned`

## English Version

`workflow-state.json` records task state only. Detailed process logs should stay local and should not be committed unless they become reusable governance knowledge.
