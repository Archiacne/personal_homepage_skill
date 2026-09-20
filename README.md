# Personal Homepage Builder

[中文说明](./README-zh.md)

A Codex skill that lets an agent create personal homepages, About Me pages, blogs, and GitHub Profile READMEs through conversation.

## Features

- Create personal pages, About Me pages, blogs, and GitHub profile pages through conversation.
- Revise existing websites or generated results.
- Preview websites locally.
- Automatically deploy websites when requested and authorized by the user.

## Environment

- Codex desktop app or Codex CLI.
- Git.
- Node.js 22.12.0 or later and npm 9.6.5 or later for local preview, builds, and deployment.

## Installation

Choose the command for your shell. After installation, restart Codex if the skill is not discovered automatically.

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

After installation, the skill entrypoint should be located at:

```text
~/.codex/skills/personal-homepage-builder/SKILL.md
```

## Update

Pull the latest version from GitHub with the command for your shell, then restart Codex if the changes are not detected automatically.

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

If Git reports local changes or cannot fast-forward, run `git status` in the skill directory and review those changes before updating. Do not force an update unless you intend to discard them.

## Usage

Prerequisite: the current project folder contains a personal profile document.

Describe the website request directly:

```text
Use personal-homepage-builder and my personal profile to create or revise a personal homepage, About Me page, blog, or GitHub profile. (Optional: page style, layout, language, and other preferences.)
```

When modifying an existing project, the skill preserves its current architecture. When requirements are not specified, it uses the default technical stack and architecture documented in `references/default-architecture.md`.

Local generation and preview are the default. The skill creates a remote repository, pushes to GitHub, or publishes a website only when explicitly requested and authorized by the user.
