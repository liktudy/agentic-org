# Vision

`agentic-org` is a headquarters-centered system for generating and governing long-lived agentic companies.

### Problem

Many multi-agent projects start by hand-building agents for a specific task. As tasks grow, the structure becomes hard to reuse, govern, or adapt across platforms.

### Direction

`agentic-org` treats the headquarters as the product.

Users describe workflows. Headquarters decides whether to reuse an existing company or create a new one. Companies are long-lived execution units with departments, role agents, workflows, lifecycle status, performance records, and platform adapters.

### Core Loop

```text
Workflow description
-> reuse or create decision
-> company spec
-> company structure
-> execution approval
-> company workflow execution
-> review, delivery, lifecycle update
```

### Non-Goals

- It is not just another multi-agent runtime.
- It does not replace CrewAI, LangGraph, AutoGen, or OpenAI Agents.
- It does not make platform-specific config the source of truth.

### Intended Position

`agentic-org` is an organization modeling and generation layer above agent runtimes.
