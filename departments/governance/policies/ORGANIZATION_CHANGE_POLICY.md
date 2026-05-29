# Organization Change Policy

## Purpose

This policy governs creating, modifying, deleting, merging, splitting, and moving companies, departments, and role agents.

Organization structure is a core asset. It must stay clear, traceable, and recoverable.

## Hard Rules

- The Highest Leader may directly initiate organization changes.
- Other agents, departments, and companies may only submit organization change requests.
- Modifications and deletions must leave records and rollback data.
- No rollback snapshot, no modification or deletion.
- Changes that affect boundaries, permissions, workflow behavior, deletion, merge, split, closure, or restructuring require Highest Leader confirmation.

## Change Types

```text
create_company
modify_company
delete_company
merge_company
split_company
create_department
modify_department
delete_department
merge_department
split_department
create_agent
modify_agent
delete_agent
move_agent
```

## Record And Rollback

Every modification or deletion must create:

```text
departments/governance/change-records/<YYYYMMDD-HHMMSS-change-id>/
|-- CHANGE_RECORD.md
`-- rollback/
```

`rollback/` must preserve the original files before the change. If multiple files are affected, preserve the original path structure.

Rollback data should include organization source-of-truth files only, not runtime outputs.

## Company Changes

### Create Company

Required:

- Reuse check is complete.
- Business domain is independent.
- Minimum structure policy is satisfied.
- `company.spec.json` is generated.
- `README.md`, `ORG_STRUCTURE.md`, and `WORKFLOW.md` are generated.
- Required departments and agents are generated.
- Workflow execution waits for approval.

### Modify Company

Must update affected source-of-truth files:

- `company.spec.json`
- `README.md`
- `ORG_STRUCTURE.md`
- `WORKFLOW.md`
- affected agent files
- affected runtime adapters

Boundary or workflow changes require Highest Leader confirmation.

### Delete Or Close Company

Default behavior is closure, not physical deletion:

1. Create change record and rollback snapshot.
2. Set `company.spec.json.status` to `closure_candidate`.
3. Record reason and impact.
4. Request Highest Leader confirmation.
5. Set status to `closed` after confirmation.

Physical deletion is allowed only when the Highest Leader explicitly requests it, and only after a full company rollback snapshot is created.

### Merge Or Split Company

Must document:

- reason
- kept company or new companies
- migrated departments and agents
- workflow impact
- artifact impact
- risks
- Highest Leader confirmation

## Department Changes

### Create Department

Required:

- Clear responsibility boundary.
- No overlap with existing departments.
- At least one role agent.
- Naming policy is satisfied.
- `company.spec.json` and `ORG_STRUCTURE.md` are updated.
- `WORKFLOW.md` is updated when workflow stages change.

### Modify Department

Boundary or workflow changes require Highest Leader confirmation and rollback snapshot.

### Delete Department

Required:

- Highest Leader confirmation.
- Full department rollback snapshot.
- Department responsibilities are deprecated or migrated.
- Department agents are moved, deleted, or archived.
- Workflows no longer depend on the department.
- `company.spec.json`, `ORG_STRUCTURE.md`, and `WORKFLOW.md` are updated.

## Agent Changes

### Create Agent

Required:

- Single responsibility.
- Clear owning department.
- No overlap with existing agents.
- Lowest viable permission.
- `company.spec.json` is updated.
- Agent file is generated under `departments/<department>/agents/<agent>.md`.

### Modify Agent

Permission changes, department moves, or responsibility expansion require Highest Leader confirmation and rollback snapshot.

### Delete Agent

Required:

- Highest Leader confirmation.
- Agent file rollback snapshot.
- `company.spec.json` rollback snapshot.
- No workflow depends on the agent.
- Owning department still satisfies minimum structure.

## Post-Change Verification

After any organization change, verify:

- JSON files parse.
- No old path residue.
- No responsibility overlap.
- No orphan agents.
- No empty departments unless explicitly allowed by the Highest Leader.
- No stale workflow references.
- No `outputs/` artifacts are committed.
- Modification/deletion changes have `CHANGE_RECORD.md`.
- Modification/deletion changes have rollback snapshot.
