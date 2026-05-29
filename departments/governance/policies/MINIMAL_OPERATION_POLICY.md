# Minimal Operation Policy

### Purpose

`agentic-org` must stay small, precise, and ready to use.

### Hard Rules

- Do not create process logs by default.
- Do not create temporary drafts by default.
- Do not create empty placeholder directories unless they carry structure.
- Do not generate extra departments, agents, templates, or workflows for possible future use.
- Keep final artifacts, error reports, decision requests, and meaningful governance updates only.

### Logging Rules

Successful task:

- keep final artifacts
- update `company.spec.json` only when lifecycle, performance, or structure changes

Failed task:

```text
ERROR_REPORT.md
```

Decision needed:

```text
DECISION_REQUEST.md
```

Do not generate by default:

- `workflow-log.md`
- command output logs
- formatting tweak logs
- temporary drafts
- repeated failure logs without decision value

### Exception

Archive a log only when it has governance, review, or reusable learning value.
