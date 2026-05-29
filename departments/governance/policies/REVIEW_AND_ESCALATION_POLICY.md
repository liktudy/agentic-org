# Review and Escalation Policy

## 中文版

### 审核回退

- 第 1 次失败：退回原责任部门修正。
- 第 2 次失败：评测编排部介入，记录失败原因并重新拆解任务。
- 第 3 次失败：提交最高领导者决策。

### 最高领导者可选决策

- 继续返工。
- 提权审核。
- 降级目标。
- 暂停任务。
- 废弃任务。
- 调整组织结构或职责边界。

### 留痕要求

默认不记录过程日志。只在以下情况生成最小必要文件：

- 失败任务：`ERROR_REPORT.md`
- 需要最高领导者决策：`DECISION_REQUEST.md`
- 生命周期或绩效变化：更新 `company.spec.json`

成功任务只保留最终产物和必要的结构化状态更新。

## English Version

Repeated review failures must not create an infinite loop. After the third failure, escalate to the Highest Leader with options and impact. Do not create process logs by default.
