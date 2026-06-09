---
title: 把两个 Codex Skill 变成可维护的个人工具库
date: 2026-06-06 17:40:00
author: Elorado
cover: /img/codex-skill-library.png
tags:
  - Codex
  - AI
  - 工具
categories:
  - 技术
excerpt: 把 skill 放到 GitHub 上，是为了让个人 AI 工作流可安装、可审计、可迭代。
---

![个人 Codex Skill 工具库插图](/img/codex-skill-library.png)

把一个 skill 上传到 GitHub，表面上是在发布一段脚本或一份 `SKILL.md`，实际上是在把个人工作流产品化。只要它能被安装、被阅读、被复现、被别人提出问题，它就不再只是本机上的一段提示词，而是一件可以长期维护的工具。

这次准备放上 GitHub 的两个 skill，分别对应 AI 编程交接链路里的两个动作：`opencode-share` 负责从共享链接里提取干净 transcript，`opencode-handoff` 负责把共享链接可靠地送到另一个人或另一台机器。一个偏解析，一个偏传输；一个把上下文变清楚，一个让上下文到达正确位置。

## 为什么要拆成两个

解析 share 页面和设计 handoff 协议是两类问题：前者关注输入格式、页面数据、输出结构；后者关注身份、权限、收件箱、验证和失败处理。拆开之后，每个仓库的边界更清楚，也更容易让别人只安装自己需要的部分。

## Skill 不是普通说明文档

普通 README 是写给人看的，skill 还要写给 agent 看。它需要说明触发场景、输入边界、工具调用方式、失败时怎么处理、什么动作不能做。尤其是涉及跨会话、跨机器、第三方 transcript 的能力时，skill 里的安全边界不能含糊。

## GitHub 带来的价值

GitHub 天然提供版本历史、issue、release、license、协作入口和可追踪的变更记录。对于 skill 这种"提示词 + 脚本 + 协议"的混合体，版本历史尤其重要：一次安全边界调整、一个解析规则修复、一条安装路径变化，都应该有记录。

相关仓库：[opencode-share](https://github.com/Eldorado-ling/opencode-share)，[opencode-handoff-skill](https://github.com/Eldorado-ling/opencode-handoff-skill)
