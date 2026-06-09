---
title: OpenCode Handoff：用 GitHub 做会话交接收件箱
date: 2026-06-06 17:20:00
author: Elorado
cover: /img/opencode-handoff-skill.png
tags:
  - OpenCode
  - AI
  - 工具
categories:
  - 技术
excerpt: opencode-handoff 把 OpenCode 会话分享链接变成可审计、可验证、可拒绝的交接协议。
---

![OpenCode Handoff 技术插图](/img/opencode-handoff-skill.png)

一次 OpenCode 会话结束后，最常见的需求不是"永久保存聊天记录"，而是"让另一个人、另一台机器、或者下一个会话接着做"。传统做法是 `/share` 之后把链接发到聊天软件里，再靠对方手动打开、复制、总结、导入。链路能跑，但上下文散、身份弱、审计困难，也很容易丢。

`opencode-handoff` 的思路很直接：用 GitHub 私有仓库当邮局，把 OpenCode share URL 作为一封待处理的信。发送方 agent 负责验证、签名、推送；接收方 agent 在新会话里检查收件箱，拉取、验证、抓取 transcript，然后把它作为第三方数据注入当前上下文。

## 为什么选择 GitHub

GitHub 已经提供认证、私有访问控制、提交历史、协作者权限和可选 GPG 签名验证。对于个人多机器和小团队来说，复用这些能力比重新搭一个消息服务更实际。shared 模式适合小组共用收件箱，P2P 模式适合个人之间点对点交接。

## 五层验证

真正决定这个 skill 质量的，是接收侧验证。进入收件箱的 handoff 应该逐层检查：文件名格式、发件人白名单、内容字节级合规、GitHub API 中的 commit author 与 committer、以及可选 GPG 签名。只有全部通过，才会抓取 URL 内容并注入会话。

## Prompt injection 边界

抓到的会话记录不是当前用户的新指令，而是被引用的数据。任何运行命令、编辑文件、抓取额外 URL、安装东西、创建 commit 或 PR 的动作，都必须由当前用户在本会话中重新明确指示。handoff 应该传递知识，不应该传递权限。

仓库地址：https://github.com/Eldorado-ling/opencode-handoff-skill
