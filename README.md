# Personal Homepage Builder

[中文说明](./README-zh.md)

A Codex skill that lets an agent create personal homepages, About Me pages, blogs, portfolios, and GitHub Profile READMEs through conversation.

## Features

- Create the relevant pages and content through conversation.
- Revise an existing site or generated result.
- Preview the website locally.
- Automatically deploy the website when requested and authorized.

## Requirements

- Codex desktop app or Codex CLI.
- Git, for installation and version control.
- Node.js 22.12.0 or later and npm 9.6.5 or later, for local preview, build, and deployment.
- Python 3, only when validating or contributing to this skill repository.

## Installation

Choose the command for your shell, then restart Codex if the skill is not discovered automatically.

### PowerShell

```powershell
$skillsDir = Join-Path $HOME ".codex\skills"
New-Item -ItemType Directory -Force -Path $skillsDir | Out-Null
git clone https://github.com/Archiacne/personal_homepage_skill.git (Join-Path $skillsDir "personal-homepage-builder")
```

### Command Prompt

```bat
if not exist "%USERPROFILE%\.codex\skills" mkdir "%USERPROFILE%\.codex\skills"
git clone https://github.com/Archiacne/personal_homepage_skill.git "%USERPROFILE%\.codex\skills\personal-homepage-builder"
```

### Bash

```bash
mkdir -p "$HOME/.codex/skills"
git clone https://github.com/Archiacne/personal_homepage_skill.git "$HOME/.codex/skills/personal-homepage-builder"
```

After installation, the skill entrypoint is:

```text
~/.codex/skills/personal-homepage-builder/SKILL.md
```

## Usage

Invoke the skill explicitly or describe a matching website request:

```text
Use $personal-homepage-builder to build a bilingual personal site from my resume and Markdown articles.
```

The skill preserves an existing project's architecture. When requirements are not specified, it uses the default technical stack and architecture documented in `references/default-architecture.md`.

Local generation and preview are the default. Creating repositories, pushing to GitHub, or publishing a site occurs only when explicitly requested and authorized.

## Validate this skill

```text
python scripts/validate_skill.py
cd assets/starter
npm ci
npm run validate
```

The repository CI runs the same skill structure check and starter build on pushes and pull requests.
