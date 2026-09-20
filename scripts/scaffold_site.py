#!/usr/bin/env python3
"""Copy the bundled default starter into a new, empty project directory."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from pathlib import Path


IGNORED_NAMES = {"node_modules", "dist", ".astro"}


def project_slug(value: str) -> str:
    slug = re.sub(r"[^a-z0-9-]+", "-", value.lower()).strip("-")
    return slug or "personal-homepage"


def copy_starter(source: Path, target: Path, name: str, dry_run: bool) -> list[Path]:
    if not source.is_dir():
        raise RuntimeError(f"Bundled starter not found: {source}")

    if target.exists() and not target.is_dir():
        raise RuntimeError(f"Target exists and is not a directory: {target}")

    if target.exists() and any(target.iterdir()):
        raise RuntimeError(
            f"Target directory is not empty: {target}\n"
            "Choose a new or empty directory. Existing projects must be edited in place, not overwritten."
        )

    files = sorted(
        path
        for path in source.rglob("*")
        if path.is_file() and not any(part in IGNORED_NAMES for part in path.relative_to(source).parts)
    )

    if dry_run:
        return [target / path.relative_to(source) for path in files]

    target.mkdir(parents=True, exist_ok=True)
    for source_file in files:
        destination = target / source_file.relative_to(source)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_file, destination)

    package_json = target / "package.json"
    package_data = json.loads(package_json.read_text(encoding="utf-8"))
    package_data["name"] = project_slug(name)
    package_json.write_text(json.dumps(package_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lockfile = target / "package-lock.json"
    if lockfile.exists():
        lock_data = json.loads(lockfile.read_text(encoding="utf-8"))
        lock_data["name"] = project_slug(name)
        if "" in lock_data.get("packages", {}):
            lock_data["packages"][""]["name"] = project_slug(name)
        lockfile.write_text(json.dumps(lock_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    return [target / path.relative_to(source) for path in files]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Create a new personal homepage project from the bundled Astro starter."
    )
    parser.add_argument("target", type=Path, help="New or empty project directory")
    parser.add_argument(
        "--name",
        help="npm package name source; defaults to the target directory name",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="List files without creating the target directory",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    source = Path(__file__).resolve().parent.parent / "assets" / "starter"
    target = args.target.expanduser().resolve()
    name = args.name or target.name

    try:
        files = copy_starter(source, target, name, args.dry_run)
    except (OSError, RuntimeError, json.JSONDecodeError) as error:
        print(f"error: {error}", file=sys.stderr)
        return 1

    if args.dry_run:
        print(f"Would create {len(files)} files in {target}")
        for path in files:
            print(path)
        return 0

    print(f"Created {len(files)} files in {target}")
    print("Next steps:")
    print(f"  cd {target}")
    print("  npm install")
    print("  npm run validate")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

