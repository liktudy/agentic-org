# Company Lifecycle Policy

## 中文版

### 定位

子公司是长期存在的业务执行单元，不是一次性任务目录。总部必须管理子公司的生命周期、绩效、重叠和关闭流程。

### 生命周期状态

```text
active
paused
under_review
merge_candidate
closure_candidate
closed
```

### 状态含义

- `active`：正常可承接工作流。
- `paused`：暂不承接新任务，但保留组织资产。
- `under_review`：需要总部评估，通常由失败、长期未执行或边界不清触发。
- `merge_candidate`：与其他子公司职责重叠，建议合并评估。
- `closure_candidate`：建议关闭，但尚未得到确认。
- `closed`：已关闭并归档，不再承接新任务。

### 触发评估

以下情况需要总部提示执行者确认是否调整：

- 子公司工作流连续失败。
- 子公司长期没有执行。
- 子公司与其他子公司负责场景重合。
- 子公司业务目标不再成立。
- 子公司产出长期无法形成有效交付。

### 关闭原则

总部不能自动关闭子公司。关闭、合并、重组必须得到执行者或最高领导者确认。

### 绩效指标

推荐记录：

```text
execution_count
success_count
failure_count
last_execution_at
last_success_at
review_failure_count
reuse_count
delivery_count
overlap_warnings
```

### 决策留痕

生命周期变化只记录关键结论，写入 `company.spec.json` 的 `lifecycle` 和 `governance_notes`。

## English Version

Companies are long-lived business execution units. Headquarters may recommend pause, merge, restructure, or closure, but cannot close a company automatically without approval.
