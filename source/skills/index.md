---
title: Skill 工具库
date: 2026-06-09 12:00:00
type: page
layout: page
---

## OpenCode Share

**把共享会话整理成可复用知识**

OpenCode 的分享链接里往往混着运行时状态、工具调用、token 统计和模型元数据。`opencode-share` 从 share URL 或 HTML 中提取有意义的 transcript，整理成干净的 Markdown 或 JSON——把一次临时对话变成可归档、复盘、交接的知识材料。

- 仓库地址：[github.com/Eldorado-ling/opencode-share](https://github.com/Eldorado-ling/opencode-share)
- 类型：Codex / OpenCode Skill
- 输出格式：Markdown & JSON
- 适用场景：会话归档、知识留存、团队交接

---

## OpenCode Handoff

**用 GitHub 做会话交接收件箱**

跨机器、跨会话的 AI 编程协作，不靠聊天软件转发链接——`opencode-handoff` 把 GitHub 私有仓库当邮局，发送方 agent 负责验证签名推送，接收方在新会话中拉取验证抓取 transcript。支持五层验证：文件名格式、发件人白名单、内容字节级合规、commit 归属校验、GPG 签名。

- 仓库地址：[github.com/Eldorado-ling/opencode-handoff-skill](https://github.com/Eldorado-ling/opencode-handoff-skill)
- 社区发布：[skillhub.cn/skills/opencode-handoff-p2p](https://www.skillhub.cn/skills/opencode-handoff-p2p)
- 类型：Codex / OpenCode Skill
- 验证机制：五层递进验证
- 适用场景：多机器协作、P2P 会话交接

---

## 设计理念

每个 Skill 的核心不是一段脚本，而是一套规则——告诉 Agent 在什么场景触发、边界在哪里、失败时怎么处理。Skill 是写给 Agent 看的，所以安全边界不能含糊。

更多 Skill 持续更新中。欢迎关注 [GitHub](https://github.com/Eldorado-ling)。
