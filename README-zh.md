# Personal Homepage Builder

[English](./README.md)

一个让 Agent 通过对话创建个人主页、About Me 页面、博客、作品集和 GitHub Profile README 的 Codex Skill。

## 功能

- 通过对话创建相关网页与内容。
- 修改已有网站或生成结果。
- 在本地预览网站。
- 在用户提出要求并授权后自动部署网站。

## 环境要求

- Codex 桌面应用或 Codex CLI。
- Git，用于安装和版本管理。
- Node.js 22.12.0 或更高版本、npm 9.6.5 或更高版本，用于本地预览、构建和部署。
- Python 3，仅在验证或参与开发本 Skill 时需要。

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

## 使用

可以显式调用 Skill，也可以直接描述匹配的建站需求：

```text
使用 $personal-homepage-builder，根据我的简历和 Markdown 文章创建一个中英文个人主页。
```

修改已有项目时，Skill 会保留项目当前架构。用户未明确需求时，将采用 `references/default-architecture.md` 中说明的默认技术栈与架构。

默认只在本地生成和预览。只有用户明确提出要求并授权后，才会创建远程仓库、推送 GitHub 或公开部署网站。

## 验证 Skill

```text
python scripts/validate_skill.py
cd assets/starter
npm ci
npm run validate
```

仓库的持续集成会在 push 和 pull request 时执行相同的 Skill 结构检查与 starter 构建。
