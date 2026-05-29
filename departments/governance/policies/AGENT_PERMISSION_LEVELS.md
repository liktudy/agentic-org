# Agent Permission Levels

## 中文版

### 目标

本文件定义 `agentic-org` 的 agent 权限等级。新增员工 agent 时必须先选择权限等级，再写入 frontmatter。

### 等级

#### L0 observer

只读观察者，适合审核、分析和建议。

```yaml
permission:
  edit: deny
  bash: deny
  webfetch: deny
```

#### L1 researcher

调研员，适合资料查询、模型选型和 benchmark 研究。

```yaml
permission:
  edit: deny
  bash: deny
  webfetch: allow
```

#### L2 writer

写作者，适合写内部文档、报告、流程状态和交付草稿。

```yaml
permission:
  edit: allow
  bash: deny
  webfetch: deny
```

#### L3 executor

执行者，适合运行测试脚本、采集数据和生成原始结果。

```yaml
permission:
  edit: allow
  bash: allow
  webfetch: deny
```

### 分配原则

- 默认使用最低可行权限。
- 是否需要写文件决定 `edit`。
- 是否需要执行命令决定 `bash`。
- 是否需要外部资料决定 `webfetch`。
- 职位高低不自动对应高权限。
- 权限不确定时必须提交最高领导者确认。

## English Version

Use the lowest viable permission level. Escalate unclear permission assignments to the Highest Leader.
