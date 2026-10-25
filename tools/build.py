"""Build videos/<ID>.html, js/data.js and sw.js from tools/lessons/*.json.
Usage: python tools/build.py
"""
import hashlib, json
from pathlib import Path

TOOLS = Path(__file__).parent
ROOT = TOOLS.parent
ORDER = """XLOOKUP UNIQUE SORT FILTER XMATCH SORTBY LET RANDARRAY TEXTAFTER TEXTBEFORE TEXTSPLIT
WRAPCOLS WRAPROWS TAKE CHOOSEROWS CHOOSECOLS EXPAND VSTACK HSTACK VLOOKUP SUMPRODUCT COUNTIF SUMIF
COUNTA INDEX MATCH CONCATENATE NETWORKDAYS SUBSTITUTE SWITCH HLOOKUP OFFSET DATEDIF WEEKDAY TRIM
LEFT RIGHT MID LEN""".split()

CATS = {
    "lookup":  {"zh": "查找參照", "en": "Lookup & Reference", "color": "#1E78E0", "soft": "#E2EEFD", "icon": "search"},
    "dynamic": {"zh": "動態陣列", "en": "Dynamic Arrays",     "color": "#00967D", "soft": "#DDF5EF", "icon": "zap"},
    "array":   {"zh": "陣列重塑", "en": "Array Shaping",      "color": "#EE7A00", "soft": "#FFEEDB", "icon": "grid"},
    "text":    {"zh": "文字處理", "en": "Text",               "color": "#E23D74", "soft": "#FDE3EC", "icon": "text"},
    "math":    {"zh": "統計計算", "en": "Math & Stats",       "color": "#6E4BF0", "soft": "#ECE6FE", "icon": "calc"},
    "date":    {"zh": "日期時間", "en": "Date & Time",        "color": "#D99A00", "soft": "#FFF3D1", "icon": "calendar"},
    "logic":   {"zh": "邏輯與名稱", "en": "Logic & Names",    "color": "#2E9D3E", "soft": "#E2F5E4", "icon": "layers"},
}


def est_seconds(lesson):
    secs = 0.0
    for s in lesson["slides"]:
        for line in s["say"]:
            secs += max(1.4, len(line) * 0.245 / 1.15) + 0.26
        secs += 1.6
    return round(secs)


def main():
    lessons = {}
    for f in (TOOLS / "lessons").glob("*.json"):
        d = json.loads(f.read_text(encoding="utf-8"))
        lessons[d["id"]] = d
    ids = [i for i in ORDER if i in lessons] + sorted(set(lessons) - set(ORDER))
    tpl = (TOOLS / "player_template.html").read_text(encoding="utf-8")
    (ROOT / "videos").mkdir(exist_ok=True)
    index = []
    for n, lid in enumerate(ids):
        d = lessons[lid]
        cat = CATS[d["category"]]
        meta = {
            "lesson": d,
            "cat": cat,
            "prev": ids[n - 1] if n > 0 else None,
            "next": ids[n + 1] if n + 1 < len(ids) else None,
        }
        js = json.dumps(meta, ensure_ascii=False).replace("</", "<\\/")
        html = (tpl.replace("/*__META__*/null", js)
                   .replace("__TITLE__", d["name"])
                   .replace("__DESC__", d["summary"].replace('"', "&quot;")))
        (ROOT / "videos" / f"{lid}.html").write_text(html, encoding="utf-8")
        index.append({
            "id": lid, "no": n + 1, "name": d["name"], "zh": d["zh"], "en": d["en"],
            "category": d["category"], "level": d["level"], "version": d["version"],
            "summary": d["summary"], "summary_en": d["summary_en"], "syntax": d["syntax"],
            "slides": len(d["slides"]), "seconds": est_seconds(d),
            "outline": [s.get("title", "") for s in d["slides"]],
            "quiz": next(({"q": s["question"], "options": s["options"], "answer": s["answer"]}
                          for s in d["slides"] if s["type"] == "quiz"), None),
        })
    data = "window.XLFX_CATS = " + json.dumps(CATS, ensure_ascii=False) + ";\n"
    data += "window.XLFX_DATA = " + json.dumps(index, ensure_ascii=False, indent=1) + ";\n"
    (ROOT / "js" / "data.js").write_text(data, encoding="utf-8")

    files = ["./", "index.html", "css/style.css", "js/app.js", "js/data.js", "manifest.webmanifest",
             "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png"]
    files += [f"videos/{i}.html" for i in ids]
    h = hashlib.sha1()
    for f in files[1:]:
        p = ROOT / f
        if p.exists():
            h.update(p.read_bytes())
    sw = (TOOLS / "sw_template.js").read_text(encoding="utf-8")
    sw = sw.replace("__VERSION__", h.hexdigest()[:10]).replace("__FILES__", json.dumps(files, ensure_ascii=False))
    (ROOT / "sw.js").write_text(sw, encoding="utf-8")
    print(f"built {len(ids)} videos, data.js, sw.js")


if __name__ == "__main__":
    main()
