---
title: OpenCode Share：把共享会话整理成可复用知识
date: 2026-06-06 17:00:00
author: Elorado
cover: /img/opencode-share-skill.png
tags:
  - OpenCode
  - AI
  - 工具
categories:
  - 技术
excerpt: OpenCode Share skill 的核心价值，是把共享链接还原成干净、可读、方便交接的 Markdown 或 JSON。
---

![OpenCode Share 技术插图](/img/opencode-share-skill.png)

OpenCode 的分享链接很适合把一次 AI 编程会话发给别人，但原始页面里往往混着运行时状态、工具调用、token 统计、模型元数据和内部引用。对人来说，真正有用的不是这些噪声，而是用户提出了什么问题、助手给了什么答复、对话顺序如何、会话里有哪些可以继续追踪的上下文。

`opencode-share` 这个 skill 解决的就是这件事：从 OpenCode share URL 或保存下来的 HTML 里提取有意义的 transcript，把它整理成干净的 Markdown，并在需要时输出 JSON。它更像一个"会话清洗器"，把一次临时对话变成可以归档、复盘、交接的知识材料。

## 为什么要做成 skill

如果只是写一个脚本，使用者需要记住命令、参数和输出位置。做成 Codex skill 之后，入口就变成自然语言：把链接丢给 Codex，让它分析这段 OpenCode 共享会话并总结有效内容。skill 负责告诉 Codex 应该抓哪些信息、忽略哪些噪声、以什么结构交付结果。

## 它保留什么

它不把 OpenCode 页面当作完整网页备份，而是当作"对话知识源"来解析。应该保留的是用户可见提问、助手文本答复、消息顺序、会话元数据、干净 Markdown，以及必要时的 JSON 输出。Markdown 适合阅读和交接，JSON 适合后续自动化。

## 隐私边界

这类工具最容易被误用的地方，是把"能访问"误解成"应该访问"。`opencode-share` 的边界应该很明确：只分析你有权访问的公开分享链接或本地 HTML 文件；不认证、不绕过权限、不恢复页面里没有暴露的数据。它的职责是整理，而不是突破访问控制。

仓库地址：https://github.com/Eldorado-ling/opencode-share
