# 課程 JSON 格式（tools/lessons/<ID>.json）

每支影片 = 一個 JSON。`build.py` 會把它塞進 `player_template.html`，產生 `videos/<ID>.html`。
完整範例請看 `lessons/XLOOKUP.json`，新課程請完全比照它的結構與份量。

## 頂層欄位

| 欄位 | 說明 |
|---|---|
| id | 函數英文名，全大寫，也是檔名（例 `XLOOKUP`） |
| name | 顯示名稱（同 id） |
| zh | 4–8 字中文副標（例「萬用查找函數」） |
| en | 2–4 個英文字的副標 |
| category | `lookup` 查找參照 / `dynamic` 動態陣列 / `array` 陣列重塑 / `text` 文字處理 / `math` 統計計算 / `date` 日期時間 / `logic` 邏輯與名稱 |
| level | `基礎` / `進階` |
| version | 支援版本，例 `Microsoft 365 / Excel 2021`、`所有版本` |
| summary | 一句中文說明（≤ 30 字） |
| summary_en | 一句英文說明 |
| syntax | 完整語法字串（英文引數名，選用引數加 [ ]） |
| slides | 投影片陣列，建議 9–10 張 |

## 旁白 `say`（每張投影片都要有）

- 字串陣列；**每一句就是一段字幕＋一段語音**，畫面一次只顯示一句。
- 每句 **≤ 26 個字**（中英數都算一字，標點也算），依語氣自然斷句。
- 口語、親切、像老師在講課；函數名用英文，引數名可用英文或中文。
- 每張 3–6 句。整支影片約 40–55 句（約 2.5–3.5 分鐘）。
- 數字給 TTS 念的要好讀：負一寫「負一」，A2:A6 寫「A2 到 A6」。

## 動畫觸發 `at`

`at` 是 `say` 的索引（從 0 起算），表示「念到第幾句時出現」。用於 points、args、nodes、items、marks、parts。

## 投影片類型

### title（第一張必用）
`{ "type":"title", "title":"XLOOKUP", "subtitle":"≤14字標語", "say":[...] }`

### concept 概念重點（2–4 點）
`points: [{ "icon":"<icon>", "text":"≤14字", "at":n }]`

icon 只能用：`search arrow shield swap filter sort table text calc calendar clock list star check cross link cut merge grid dice tag key layers zap`

### syntax 語法拆解
`func`（函數名）、`args: [{ "name":"英文引數名", "desc":"≤10字中文", "optional":true?, "at":n }]`（最多 6 個）

### sheet 工作表示範（最核心，至少 2 張）
```
"header": ["欄名",...],          // 最多 5 欄，每格 ≤ 7 字
"rows":   [["值",...],...],      // 最多 6 列資料；第 1 列是標題列，資料從第 2 列（A2）開始
"formula": "=XLOOKUP(...)",       // 真的能在 Excel 跑、結果正確的公式（≤ 46 字元）
"result": "陳大文",               // 單一結果  —或—
"spill":  [["a","b"],["c","d"]], // 溢出陣列結果（最多 6 列 × 4 欄，每格 ≤ 7 字）
"marks": [{ "at":n, "range":"A2:A6", "kind":"range|key|hit|out|warn", "label":"≤8字" }],
"showResultAt": n,
"say": [...]
```
kind 顏色：range 黃（查找/來源範圍）、key 藍（傳回/參照範圍）、hit 綠（命中）、out 粉紅（輸出）、warn 紅（錯誤/找不到）。
**公式與結果必須和表格資料一致、算得出來。**文字函數可以用單欄表格放字串。

### build 公式組裝（適合巢狀公式、LET、組合技）
`parts: [{ "text":"公式片段", "note":"≤12字說明", "at":n }]`，`result`: 最後結果字串（選填）。parts 依序拼起來就是完整公式。

### flow 運作流程（3–5 個節點）
`nodes: [{ "label":"≤6字", "sub":"≤12字", "at":n }]`

### compare 比較（例：新舊函數、兩種寫法）
`left/right: { "head":"標題", "items":["≤12字", ...3–4 項] }`

### tips 提醒（3–4 項）
`items: [{ "kind":"tip|warn", "text":"≤20字", "at":n }]`

### quiz 隨堂測驗（倒數第二張）
`question`（≤ 40 字）、`options`（4 個，每個 ≤ 14 字）、`answer`（0 起算索引）、`explain`（≤ 36 字）。
say 最後一句要念出答案。

### recap 重點回顧（最後一張）
`items`: 3–4 項，每項 ≤ 14 字。

## 建議結構
title → concept → syntax → sheet → sheet（或 build）→ flow 或 compare → tips → quiz → recap

## 驗證
`python tools/validate.py` 會檢查欄位、字數、at 範圍、range 是否落在表格內。
