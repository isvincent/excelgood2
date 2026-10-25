"""Validate lesson JSON files. Usage: python tools/validate.py [ID ...]"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).parent
LESSONS = ROOT / "lessons"
CATS = {"lookup", "dynamic", "array", "text", "math", "date", "logic"}
ICONS = set("search arrow shield swap filter sort table text calc calendar clock list star check cross link cut merge grid dice tag key layers zap".split())
KINDS = {"range", "key", "hit", "out", "warn"}
TYPES = {"title", "concept", "syntax", "sheet", "build", "flow", "compare", "tips", "quiz", "recap"}
MAX_SAY = 26


def col_idx(letters):
    n = 0
    for ch in letters:
        n = n * 26 + ord(ch) - 64
    return n - 1


def parse_range(r):
    m = re.fullmatch(r"([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?", r)
    if not m:
        return None
    c1, r1 = col_idx(m[1]), int(m[2])
    c2, r2 = (col_idx(m[3]), int(m[4])) if m[3] else (c1, r1)
    return c1, r1, c2, r2


def check(path):
    errs = []
    try:
        d = json.loads(path.read_text(encoding="utf-8"))
    except Exception as e:
        return [f"JSON parse error: {e}"]
    for k in ["id", "name", "zh", "en", "category", "level", "version", "summary", "summary_en", "syntax", "slides"]:
        if k not in d:
            errs.append(f"missing {k}")
    if d.get("id") != path.stem:
        errs.append("id != filename")
    if d.get("category") not in CATS:
        errs.append(f"bad category {d.get('category')}")
    slides = d.get("slides", [])
    if not 7 <= len(slides) <= 12:
        errs.append(f"{len(slides)} slides")
    total = 0
    for i, s in enumerate(slides):
        tag = f"slide {i+1} ({s.get('type')})"
        if s.get("type") not in TYPES:
            errs.append(f"{tag}: bad type")
            continue
        say = s.get("say") or []
        total += len(say)
        if not say:
            errs.append(f"{tag}: no say")
        for j, line in enumerate(say):
            if len(line) > MAX_SAY:
                errs.append(f"{tag}: say[{j}] {len(line)} chars: {line}")
        n = len(say)

        def at_ok(items, name):
            for it in items:
                a = it.get("at", 0)
                if not isinstance(a, int) or a < 0 or a >= n:
                    errs.append(f"{tag}: {name} at={a} out of range (say={n})")

        t = s["type"]
        if t == "concept":
            at_ok(s.get("points", []), "point")
            for p in s.get("points", []):
                if p.get("icon") not in ICONS:
                    errs.append(f"{tag}: bad icon {p.get('icon')}")
        elif t == "syntax":
            at_ok(s.get("args", []), "arg")
            if len(s.get("args", [])) > 6:
                errs.append(f"{tag}: >6 args")
        elif t == "sheet":
            hdr, rows = s.get("header", []), s.get("rows", [])
            if len(hdr) > 5 or len(rows) > 6:
                errs.append(f"{tag}: sheet too big {len(hdr)}x{len(rows)}")
            for r in rows:
                if len(r) != len(hdr):
                    errs.append(f"{tag}: row width mismatch {r}")
            if "result" not in s and "spill" not in s:
                errs.append(f"{tag}: no result/spill")
            sp = s.get("spill")
            if sp and (len(sp) > 6 or max(len(r) for r in sp) > 4):
                errs.append(f"{tag}: spill too big")
            if len(s.get("formula", "")) > 52:
                errs.append(f"{tag}: formula long {len(s['formula'])}")
            at_ok(s.get("marks", []), "mark")
            for m in s.get("marks", []):
                if m.get("kind") not in KINDS:
                    errs.append(f"{tag}: bad kind {m.get('kind')}")
                pr = parse_range(m.get("range", ""))
                if not pr:
                    errs.append(f"{tag}: bad range {m.get('range')}")
                    continue
                c1, r1, c2, r2 = pr
                if c1 < 0 or c2 >= len(hdr) or r1 < 1 or r2 > len(rows) + 1:
                    errs.append(f"{tag}: range {m['range']} outside table")
            sra = s.get("showResultAt", n - 1)
            if not 0 <= sra < n:
                errs.append(f"{tag}: showResultAt out of range")
        elif t == "build":
            at_ok(s.get("parts", []), "part")
        elif t == "flow":
            at_ok(s.get("nodes", []), "node")
        elif t == "tips":
            at_ok(s.get("items", []), "item")
        elif t == "quiz":
            if len(s.get("options", [])) != 4 or not 0 <= s.get("answer", -1) < 4:
                errs.append(f"{tag}: quiz options/answer")
    if not 30 <= total <= 70:
        errs.append(f"total say lines {total}")
    return errs


def main():
    ids = sys.argv[1:]
    files = [LESSONS / f"{i}.json" for i in ids] if ids else sorted(LESSONS.glob("*.json"))
    bad = 0
    for f in files:
        e = check(f)
        if e:
            bad += 1
            print(f"✗ {f.stem}")
            for x in e:
                print("   -", x)
        else:
            print(f"✓ {f.stem}")
    print(f"\n{len(files) - bad}/{len(files)} OK")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
