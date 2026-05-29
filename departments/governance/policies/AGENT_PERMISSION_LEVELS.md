# Agent Permission Levels

## Purpose

This policy defines permission levels for role agents.

Use the lowest viable permission level. Escalate unclear permission assignments to the Highest Leader.

## Levels

### L0 Observer

Read-only analysis, review, and recommendation.

```yaml
permission:
  edit: deny
  bash: deny
  webfetch: deny
```

Use for:

- plan review
- data verification
- boundary checks
- governance recommendations

### L1 Researcher

External information gathering without file edits.

```yaml
permission:
  edit: deny
  bash: deny
  webfetch: allow
```

Use for:

- model research
- benchmark research
- source comparison
- market or ecosystem scans

### L2 Writer

Source file writing without command execution.

```yaml
permission:
  edit: allow
  bash: deny
  webfetch: deny
```

Use for:

- internal reports
- strategy drafts
- metric definitions
- workflow or template updates

### L3 Executor

File writing and command execution inside approved scope.

```yaml
permission:
  edit: allow
  bash: allow
  webfetch: deny
```

Use for:

- running tests
- collecting benchmark data
- converting artifacts
- generating structured result files

## Assignment Rules

- Permission follows task need, not role seniority.
- Do not grant `bash: allow` unless command execution is required.
- Do not grant `webfetch: allow` unless external information is required.
- Do not combine unrelated permission needs into one agent.
- Permission expansion requires review.
- Unclear permission assignment must be escalated.
