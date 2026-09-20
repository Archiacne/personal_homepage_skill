#!/usr/bin/env python3
"""Validate the repository's skill metadata, references, and starter contract."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SKILL_FILE = ROOT / "SKILL.md"


def fail(message: str) -> None:
    raise ValueError(message)


def frontmatter(content: str) -> dict[str, str]:
    match = re.match(r"^---\r?\n(.*?)\r?\n---", content, re.DOTALL)
    if not match:
        fail("SKILL.md must start with YAML frontmatter")

    values: dict[str, str] = {}
    for line in match.group(1).splitlines():
        pair = re.match(r"^([a-zA-Z][a-zA-Z0-9_-]*):\s*(.+)$", line)
        if pair:
            values[pair.group(1)] = pair.group(2).strip().strip('"\'')
    return values


def validate_markdown_links(markdown_file: Path) -> list[str]:
    errors: list[str] = []
    content = markdown_file.read_text(encoding="utf-8")
    for raw_target in re.findall(r"\[[^\]]*\]\(([^)]+)\)", content):
        target = raw_target.strip().strip("<>").split("#", 1)[0]
        if not target or re.match(r"^(?:https?:|mailto:|tel:)", target):
            continue
        resolved = (markdown_file.parent / target).resolve()
        if not resolved.exists():
            errors.append(f"{markdown_file.relative_to(ROOT)}: missing link target {raw_target}")
    return errors


def main() -> int:
    try:
        content = SKILL_FILE.read_text(encoding="utf-8")
        metadata = frontmatter(content)
        name = metadata.get("name", "")
        description = metadata.get("description", "")

        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", name):
            fail(f"invalid skill name: {name!r}")
        if len(name) > 64:
            fail("skill name exceeds 64 characters")
        if not description or len(description) > 1024:
            fail("skill description must contain 1-1024 characters")
        if "<" in description or ">" in description:
            fail("skill description cannot contain angle brackets")
        if re.search(r"(?m)^\s*\[TODO:[^\n]*\]\s*$", content):
            fail("SKILL.md contains an unfinished TODO placeholder")

        required = [
            ROOT / "agents" / "openai.yaml",
            ROOT / "assets" / "starter" / "package.json",
            ROOT / "assets" / "starter" / "package-lock.json",
            ROOT / "assets" / "starter" / "src" / "content.config.ts",
            ROOT / "assets" / "starter" / "scripts" / "validate-build.mjs",
            ROOT / "scripts" / "scaffold_site.py",
        ]
        missing = [str(path.relative_to(ROOT)) for path in required if not path.exists()]
        if missing:
            fail(f"missing required files: {', '.join(missing)}")

        openai_yaml = (ROOT / "agents" / "openai.yaml").read_text(encoding="utf-8")
        for field in ("display_name", "short_description", "default_prompt"):
            if not re.search(rf"(?m)^\s*{field}:\s*\".+\"\s*$", openai_yaml):
                fail(f"agents/openai.yaml is missing quoted {field}")
        if f"${name}" not in openai_yaml:
            fail("agents/openai.yaml default_prompt must mention the skill by name")

        package = json.loads((ROOT / "assets" / "starter" / "package.json").read_text(encoding="utf-8"))
        for script in ("dev", "check", "build", "preview", "audit", "validate"):
            if script not in package.get("scripts", {}):
                fail(f"starter package.json is missing the {script!r} script")

        link_errors = []
        for markdown_file in [SKILL_FILE, *sorted((ROOT / "references").glob("*.md"))]:
            link_errors.extend(validate_markdown_links(markdown_file))
        if link_errors:
            fail("\n".join(link_errors))

    except (OSError, ValueError, json.JSONDecodeError) as error:
        print(f"Skill validation failed: {error}", file=sys.stderr)
        return 1

    print(f"Skill validation passed: {name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

