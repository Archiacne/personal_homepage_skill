# Personal Homepage Builder

[English](./README.md)

一个让 Agent 通过对话创建个人主页、About Me 页面、博客、作品集和 GitHub Profile README 的 Codex Skill。

## 功能

- 通过对话创建个人网页、About Me 页面、Blog、GitHub 主页。
- 修改已有网站或生成结果。
- 在本地预览网站。
- 在用户提出要求并授权后自动部署网站。

## 环境

- Codex 桌面应用或 Codex CLI。
- Git。
- Node.js 22.12.0 或更高版本、npm 9.6.5 或更高版本，用于本地预览、构建和部署。

## 安装

根据使用的命令行选择对应命令。安装完成后，如果 Codex 未自动识别该 Skill，请重新启动 Codex。

### PowerShell

```powershell
$skillsDir = Join-Path $HOME ".codex\skills"
New-Item -ItemType Directory -Force -Path $skillsDir | Out-Null
git clone https://github.com/Archiacne/personal_homepage_skill.git (Join-Path $skillsDir "personal-homepage-builder")
```

### CMD

```bat
if not exist "%USERPROFILE%\.codex\skills" mkdir "%USERPROFILE%\.codex\skills"
git clone https://github.com/Archiacne/personal_homepage_skill.git "%USERPROFILE%\.codex\skills\personal-homepage-builder"
```

### Bash

```bash
mkdir -p "$HOME/.codex/skills"
git clone https://github.com/Archiacne/personal_homepage_skill.git "$HOME/.codex/skills/personal-homepage-builder"
```

安装后的 Skill 入口应位于：

```text
~/.codex/skills/personal-homepage-builder/SKILL.md
```

## 更新

根据使用的命令行执行对应命令，从 GitHub 拉取最新版本。更新完成后，如果 Codex 未自动识别改动，请重新启动 Codex。

### PowerShell

```powershell
git -C "$HOME\.codex\skills\personal-homepage-builder" pull --ff-only
```

### CMD

```bat
git -C "%USERPROFILE%\.codex\skills\personal-homepage-builder" pull --ff-only
```

### Bash

```bash
git -C "$HOME/.codex/skills/personal-homepage-builder" pull --ff-only
```

如果 Git 提示存在本地修改或无法快进更新，请先在 Skill 目录中执行 `git status` 并检查这些修改。除非确定要放弃本地修改，否则不要强制更新。

## 使用

前提：当前项目文件夹已有 "个人资料" 文档

直接描述建站需求：

```text
使用 personal-homepage-builder，根据我的个人资料创建 / 修改个人主页 / About Me 网页 / Blog / Github 主页。（可选：页面风格、排版、语言等）
```

修改已有项目时，Skill 会保留项目当前架构。用户未明确需求时，将采用 `references/default-architecture.md` 中说明的默认技术栈与架构。

默认只在本地生成和预览。只有用户明确提出要求并授权后，才会创建远程仓库、推送 GitHub 或公开部署网站。
