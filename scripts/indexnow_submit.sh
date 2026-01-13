#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

KEY_FILE=""
for candidate in ./*.txt; do
  [[ -f "$candidate" ]] || continue
  base="$(basename "$candidate")"
  if [[ "$base" =~ ^[0-9a-f]{32}\.txt$ ]]; then
    KEY_FILE="$base"
    break
  fi
done

if [[ -z "$KEY_FILE" ]]; then
  echo "IndexNow key file not found at repo root (expected: <32-hex>.txt)." >&2
  exit 1
fi

KEY="${KEY_FILE%.txt}"
KEY_CONTENT="$(tr -d '\r\n' < "$KEY_FILE")"
if [[ "$KEY_CONTENT" != "$KEY" ]]; then
  echo "IndexNow key file content must match filename (got mismatch for $KEY_FILE)." >&2
  exit 1
fi

if [[ "$#" -gt 0 ]]; then
  URLS=("$@")
else
  if [[ ! -f sitemap.xml ]]; then
    echo "sitemap.xml not found at repo root." >&2
    exit 1
  fi
  mapfile -t URLS < <(grep -oE '<loc>[^<]+' sitemap.xml | sed 's#<loc>##' | awk 'NF' | sort -u)
fi

if [[ "${#URLS[@]}" -eq 0 ]]; then
  echo "No URLs to submit." >&2
  exit 1
fi

export INDEXNOW_KEY="$KEY"
export INDEXNOW_KEY_LOCATION="https://voiceoverstudioai.com/$KEY_FILE"
export INDEXNOW_URLS
INDEXNOW_URLS="$(printf '%s\n' "${URLS[@]}")"

PAYLOAD="$(
  python3 - <<'PY'
import json, os, sys

key = os.environ["INDEXNOW_KEY"]
key_location = os.environ["INDEXNOW_KEY_LOCATION"]
urls = os.environ["INDEXNOW_URLS"].splitlines()

print(json.dumps({
  "host": "voiceoverstudioai.com",
  "key": key,
  "keyLocation": key_location,
  "urlList": urls,
}))
PY
)"

curl -sS -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data "$PAYLOAD" \
  "https://www.bing.com/indexnow" \
  -D /dev/stderr \
  -o /dev/null

echo "Submitted ${#URLS[@]} URL(s) to IndexNow."
