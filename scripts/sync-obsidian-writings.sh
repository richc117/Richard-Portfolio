#!/bin/zsh
set -euo pipefail

TARGET_DIR="$(cd "$(dirname "$0")/.." && pwd)/src/writings"

if [[ -z "${OBSIDIAN_PUBLISHED_DIR:-}" ]]; then
  echo
  echo "Set OBSIDIAN_PUBLISHED_DIR before running this script."
  echo
  echo "Example:"
  echo '  OBSIDIAN_PUBLISHED_DIR="/path/to/Published" npm run sync:writings'
  exit 1
fi

SOURCE_DIR="$OBSIDIAN_PUBLISHED_DIR"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Published folder not found:"
  echo "  $SOURCE_DIR"
  exit 1
fi

mkdir -p "$TARGET_DIR"

# Abort if source has no markdown files to avoid wiping essays on an empty or wrong path.
if [[ -z "$(find "$SOURCE_DIR" -maxdepth 1 -type f -name "*.md")" ]]; then
  echo
  echo "No markdown files found in:"
  echo "  $SOURCE_DIR"
  echo "Nothing was changed."
  exit 1
fi

# Sync published markdown files only. Keep the Eleventy index template in place.
find "$TARGET_DIR" -maxdepth 1 -type f -name "*.md" -delete

rsync -av --include="*.md" --exclude="*" "$SOURCE_DIR"/ "$TARGET_DIR"/

echo
echo "Synced published writings from:"
echo "  $SOURCE_DIR"
echo "to:"
echo "  $TARGET_DIR"
