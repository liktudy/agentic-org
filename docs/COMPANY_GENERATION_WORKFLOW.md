# Company Generation Workflow

This document explains the high-level user-facing process. The operational workflow lives in `departments/workflow-factory/workflows/COMPANY_GENERATION_WORKFLOW.md`.

## Steps

1. User describes a workflow.
2. Headquarters checks whether an existing company can handle it.
3. If yes, headquarters recommends reuse or a small extension.
4. If no, headquarters designs and generates a new company.
5. The generated or updated company is archived through `company.spec.json`.
6. The user confirms whether to execute the company workflow.
7. The company performs the task only after confirmation.
8. Headquarters records lifecycle and performance signals over time.

## Key Rule

Company creation and company execution are separate decisions.
