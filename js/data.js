window.XLFX_CATS = {"lookup": {"zh": "查找參照", "en": "Lookup & Reference", "color": "#1E78E0", "soft": "#E2EEFD", "icon": "search"}, "dynamic": {"zh": "動態陣列", "en": "Dynamic Arrays", "color": "#00967D", "soft": "#DDF5EF", "icon": "zap"}, "array": {"zh": "陣列重塑", "en": "Array Shaping", "color": "#EE7A00", "soft": "#FFEEDB", "icon": "grid"}, "text": {"zh": "文字處理", "en": "Text", "color": "#E23D74", "soft": "#FDE3EC", "icon": "text"}, "math": {"zh": "統計計算", "en": "Math & Stats", "color": "#6E4BF0", "soft": "#ECE6FE", "icon": "calc"}, "date": {"zh": "日期時間", "en": "Date & Time", "color": "#D99A00", "soft": "#FFF3D1", "icon": "calendar"}, "logic": {"zh": "邏輯與名稱", "en": "Logic & Names", "color": "#2E9D3E", "soft": "#E2F5E4", "icon": "layers"}};
window.XLFX_DATA = [
 {
  "id": "XLOOKUP",
  "no": 1,
  "name": "XLOOKUP",
  "zh": "萬用查找函數",
  "en": "Modern lookup",
  "category": "lookup",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "用一個鍵值，在一欄中找到位置，再從另一欄傳回對應資料。",
  "summary_en": "Find a key in one column and return the matching value from another.",
  "syntax": "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
  "slides": 10,
  "seconds": 189,
  "outline": [
   "XLOOKUP",
   "XLOOKUP 能做什麼？",
   "語法結構",
   "範例一：用編號查姓名",
   "範例二：往左查 + 找不到",
   "XLOOKUP 的運作流程",
   "XLOOKUP vs VLOOKUP",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "要讓 XLOOKUP 找不到時顯示「無資料」，應該填在第幾個引數？",
   "options": [
    "第二個",
    "第三個",
    "第四個",
    "第六個"
   ],
   "answer": 2
  }
 },
 {
  "id": "UNIQUE",
  "no": 2,
  "name": "UNIQUE",
  "zh": "取出不重複值",
  "en": "Remove duplicates",
  "category": "dynamic",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "從一個範圍中取出不重複的值，結果自動溢出成清單。",
  "summary_en": "Return the distinct values from a range as a spilled list.",
  "syntax": "=UNIQUE(array, [by_col], [exactly_once])",
  "slides": 9,
  "seconds": 167,
  "outline": [
   "UNIQUE",
   "UNIQUE 能做什麼？",
   "語法結構",
   "範例一：列出所有社團",
   "範例二：只賣出一次的商品",
   "UNIQUE 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "想找出「只出現過一次」的值，UNIQUE 的哪個引數要填 TRUE？",
   "options": [
    "array",
    "by_col",
    "exactly_once",
    "都不用填"
   ],
   "answer": 2
  }
 },
 {
  "id": "SORT",
  "no": 3,
  "name": "SORT",
  "zh": "公式排序函數",
  "en": "Sort with a formula",
  "category": "dynamic",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "依指定欄位遞增或遞減排序，原始資料完全不會被動到。",
  "summary_en": "Sort a range by a chosen column without touching the source data.",
  "syntax": "=SORT(array, [sort_index], [sort_order], [by_col])",
  "slides": 9,
  "seconds": 155,
  "outline": [
   "SORT",
   "SORT 能做什麼？",
   "語法結構",
   "範例一：依國文由低到高",
   "範例二：數學由高到低",
   "SORT vs 排序按鈕",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "SORT 的第三個引數 sort_order 填負一，代表什麼？",
   "options": [
    "由小到大",
    "由大到小",
    "依第一欄排序",
    "改成橫向排序"
   ],
   "answer": 1
  }
 },
 {
  "id": "FILTER",
  "no": 4,
  "name": "FILTER",
  "zh": "條件篩選函數",
  "en": "Filter by condition",
  "category": "dynamic",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "依條件篩選出符合的資料列，結果自動溢出成新表格。",
  "summary_en": "Return only the rows that meet your conditions as a spilled table.",
  "syntax": "=FILTER(array, include, [if_empty])",
  "slides": 9,
  "seconds": 158,
  "outline": [
   "FILTER",
   "FILTER 能做什麼？",
   "語法結構",
   "範例一：篩出業務部",
   "範例二：兩個條件同時成立",
   "範例三：找不到時顯示訊息",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "FILTER 要同時符合兩個條件，兩個條件之間要用什麼符號連接？",
   "options": [
    "加號 +",
    "乘號 *",
    "逗號 ,",
    "減號 -"
   ],
   "answer": 1
  }
 },
 {
  "id": "XMATCH",
  "no": 5,
  "name": "XMATCH",
  "zh": "找出位置函數",
  "en": "Find the position",
  "category": "lookup",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "找出某個值在範圍中排第幾個，是 MATCH 的升級版。",
  "summary_en": "Return the relative position of a value in a range; an upgraded MATCH.",
  "syntax": "=XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])",
  "slides": 9,
  "seconds": 163,
  "outline": [
   "XMATCH",
   "XMATCH 能做什麼？",
   "語法結構",
   "範例一：筆記本排第幾？",
   "範例二：找較小的近似值",
   "範例三：搭配 INDEX 取等第",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "A2:A4 依序是鉛筆、橡皮擦、直尺，XMATCH 找「直尺」傳回什麼？",
   "options": [
    "直尺",
    "3",
    "4",
    "A4"
   ],
   "answer": 1
  }
 },
 {
  "id": "SORTBY",
  "no": 6,
  "name": "SORTBY",
  "zh": "依指定欄排序",
  "en": "Sort by columns",
  "category": "dynamic",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "依另一個範圍的值排序，還能設定多層排序條件。",
  "summary_en": "Sort a range by the values in other ranges, with multiple sort levels.",
  "syntax": "=SORTBY(array, by_array1, [sort_order1], [by_array2, sort_order2], ...)",
  "slides": 9,
  "seconds": 161,
  "outline": [
   "SORTBY",
   "SORTBY 能做什麼？",
   "語法結構",
   "範例一：只列出名次姓名",
   "範例二：先排班級再排分數",
   "SORT vs SORTBY",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "想先依班級遞增、再依分數遞減，SORTBY 最少要幾組依據和順序？",
   "options": [
    "一組",
    "兩組",
    "三組",
    "不能這樣排"
   ],
   "answer": 1
  }
 },
 {
  "id": "LET",
  "no": 7,
  "name": "LET",
  "zh": "公式內命名變數",
  "en": "Name your values",
  "category": "logic",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "在公式裡替計算結果取名字，讓長公式更好讀也更快。",
  "summary_en": "Assign names to calculation results inside a formula for clarity and speed.",
  "syntax": "=LET(name1, name_value1, [name2, name_value2, ...], calculation)",
  "slides": 10,
  "seconds": 187,
  "outline": [
   "LET",
   "LET 能做什麼？",
   "語法結構",
   "範例一：滿千打九折",
   "拆解公式：一段一段組起來",
   "範例二：平均及格判斷",
   "沒用 LET vs 用了 LET",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "在 =LET(t,B2*C2,t*2) 中，哪一部分是最後的計算結果？",
   "options": [
    "t",
    "B2*C2",
    "t*2",
    "整個都不是"
   ],
   "answer": 2
  }
 },
 {
  "id": "RANDARRAY",
  "no": 8,
  "name": "RANDARRAY",
  "zh": "隨機亂數陣列",
  "en": "Random number array",
  "category": "dynamic",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2021",
  "summary": "一次產生指定列數、欄數與範圍的隨機數字陣列。",
  "summary_en": "Generate an array of random numbers with set size, range, and type.",
  "syntax": "=RANDARRAY([rows], [columns], [min], [max], [whole_number])",
  "slides": 9,
  "seconds": 165,
  "outline": [
   "RANDARRAY",
   "RANDARRAY 能做什麼？",
   "語法結構",
   "範例一：每人抽一個號碼",
   "範例二：隨機排座位",
   "RAND vs RANDARRAY",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "RANDARRAY 的第五個引數填 TRUE，代表什麼？",
   "options": [
    "產生整數",
    "產生小數",
    "不會重算",
    "只產生一個"
   ],
   "answer": 0
  }
 },
 {
  "id": "TEXTAFTER",
  "no": 9,
  "name": "TEXTAFTER",
  "zh": "取分隔符後文字",
  "en": "Text after delimiter",
  "category": "text",
  "level": "進階",
  "version": "Microsoft 365",
  "summary": "取出指定分隔符號後面的文字，拆代碼、地址超方便。",
  "summary_en": "Return the text that comes after a given delimiter.",
  "syntax": "=TEXTAFTER(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])",
  "slides": 9,
  "seconds": 165,
  "outline": [
   "TEXTAFTER",
   "TEXTAFTER 能做什麼？",
   "語法結構",
   "範例一：取出商品名稱",
   "範例二：從後面數取路名",
   "範例三：找不到分隔符號",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "A2 是「YM-114-025」，TEXTAFTER(A2,\"-\",-1) 傳回？",
   "options": [
    "YM",
    "114",
    "025",
    "114-025"
   ],
   "answer": 2
  }
 },
 {
  "id": "TEXTBEFORE",
  "no": 10,
  "name": "TEXTBEFORE",
  "zh": "取分隔符前文字",
  "en": "Text before delimiter",
  "category": "text",
  "level": "進階",
  "version": "Microsoft 365",
  "summary": "取出指定分隔符號前面的文字，拆帳號、檔名一次搞定。",
  "summary_en": "Return the text that comes before a given delimiter.",
  "syntax": "=TEXTBEFORE(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])",
  "slides": 10,
  "seconds": 185,
  "outline": [
   "TEXTBEFORE",
   "TEXTBEFORE 能做什麼？",
   "語法結構",
   "範例一：取出信箱帳號",
   "範例二：去掉副檔名",
   "範例三：格式錯誤的信箱",
   "舊寫法 vs TEXTBEFORE",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "A2 是「tom@ymhs.tw」，TEXTBEFORE(A2,\"@\") 傳回？",
   "options": [
    "tom",
    "ymhs.tw",
    "@ymhs.tw",
    "tom@"
   ],
   "answer": 0
  }
 },
 {
  "id": "TEXTSPLIT",
  "no": 11,
  "name": "TEXTSPLIT",
  "zh": "文字拆分函數",
  "en": "Split text",
  "category": "text",
  "level": "進階",
  "version": "Microsoft 365",
  "summary": "依分隔符號把一段文字拆成多欄或多列，結果自動溢出。",
  "summary_en": "Split text into columns and rows by delimiters as a spilled array.",
  "syntax": "=TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])",
  "slides": 10,
  "seconds": 179,
  "outline": [
   "TEXTSPLIT",
   "TEXTSPLIT 能做什麼？",
   "語法結構",
   "範例一：名單拆成多欄",
   "範例二：拆成多欄又多列",
   "範例三：略過空白項目",
   "TEXTSPLIT 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "TEXTSPLIT 要把文字拆成多列，分隔符號應該填在第幾個引數？",
   "options": [
    "第一個",
    "第二個",
    "第三個",
    "第四個"
   ],
   "answer": 2
  }
 },
 {
  "id": "WRAPCOLS",
  "no": 12,
  "name": "WRAPCOLS",
  "zh": "依欄折行排列",
  "en": "Wrap into columns",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "把一整排資料，依指定筆數一欄一欄往右折成表格。",
  "summary_en": "Wrap a single row or column into multiple columns of a given height.",
  "syntax": "=WRAPCOLS(vector, wrap_count, [pad_with])",
  "slides": 9,
  "seconds": 150,
  "outline": [
   "WRAPCOLS",
   "WRAPCOLS 能做什麼？",
   "語法結構",
   "範例一：名單折成兩欄",
   "範例二：不夠時自動補值",
   "WRAPCOLS 的排列順序",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "WRAPCOLS(A2:A9,4) 會把八筆資料排成幾欄？",
   "options": [
    "一欄",
    "兩欄",
    "四欄",
    "八欄"
   ],
   "answer": 1
  }
 },
 {
  "id": "WRAPROWS",
  "no": 13,
  "name": "WRAPROWS",
  "zh": "依列折行排列",
  "en": "Wrap into rows",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "把一整排資料，依指定筆數一列一列往下折成表格。",
  "summary_en": "Wrap a single row or column into multiple rows of a given width.",
  "syntax": "=WRAPROWS(vector, wrap_count, [pad_with])",
  "slides": 9,
  "seconds": 153,
  "outline": [
   "WRAPROWS",
   "WRAPROWS 能做什麼？",
   "語法結構",
   "範例一：排成座位表",
   "範例二：筆數不夠會怎樣？",
   "WRAPROWS vs WRAPCOLS",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "WRAPROWS(A2:A7,2) 的結果是幾列幾欄？",
   "options": [
    "2 列 3 欄",
    "3 列 2 欄",
    "6 列 1 欄",
    "1 列 6 欄"
   ],
   "answer": 1
  }
 },
 {
  "id": "TAKE",
  "no": 14,
  "name": "TAKE",
  "zh": "取出前後幾筆",
  "en": "Take rows or columns",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "從表格的開頭或結尾，取出指定數量的列或欄。",
  "summary_en": "Return a set number of rows or columns from the start or end of an array.",
  "syntax": "=TAKE(array, rows, [columns])",
  "slides": 9,
  "seconds": 136,
  "outline": [
   "TAKE",
   "TAKE 能做什麼？",
   "語法結構",
   "範例一：取前三筆",
   "範例二：取最後兩筆、前兩欄",
   "組合技：國文前三名",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "想取出表格最後三列，第二個引數要填什麼？",
   "options": [
    "3",
    "-3",
    "0",
    "-1"
   ],
   "answer": 1
  }
 },
 {
  "id": "CHOOSEROWS",
  "no": 15,
  "name": "CHOOSEROWS",
  "zh": "挑選指定列",
  "en": "Pick specific rows",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "依列號從表格挑出想要的列，順序可以自己決定。",
  "summary_en": "Return the specified rows from an array, in the order you list them.",
  "syntax": "=CHOOSEROWS(array, row_num1, [row_num2], ...)",
  "slides": 9,
  "seconds": 143,
  "outline": [
   "CHOOSEROWS",
   "CHOOSEROWS 能做什麼？",
   "語法結構",
   "範例一：挑第一和第三列",
   "範例二：用負數倒著挑",
   "CHOOSEROWS 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "CHOOSEROWS(A2:C6,-1) 會傳回哪一列？",
   "options": [
    "第一列",
    "第二列",
    "最後一列",
    "錯誤值"
   ],
   "answer": 2
  }
 },
 {
  "id": "CHOOSECOLS",
  "no": 16,
  "name": "CHOOSECOLS",
  "zh": "挑選指定欄",
  "en": "Pick specific columns",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "依欄號從表格挑出想要的欄，還能重新排列順序。",
  "summary_en": "Return the specified columns from an array, in the order you list them.",
  "syntax": "=CHOOSECOLS(array, col_num1, [col_num2], ...)",
  "slides": 9,
  "seconds": 146,
  "outline": [
   "CHOOSECOLS",
   "CHOOSECOLS 能做什麼？",
   "語法結構",
   "範例一：只要姓名和總分",
   "範例二：用負數調換順序",
   "CHOOSECOLS vs CHOOSEROWS",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "CHOOSECOLS(A2:D5,3,1) 結果的第一欄是原表的哪一欄？",
   "options": [
    "A 欄",
    "B 欄",
    "C 欄",
    "D 欄"
   ],
   "answer": 2
  }
 },
 {
  "id": "EXPAND",
  "no": 17,
  "name": "EXPAND",
  "zh": "擴充陣列大小",
  "en": "Expand an array",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "把表格擴充到指定的列數和欄數，多出來的格子自動補值。",
  "summary_en": "Expand an array to the given rows and columns, padding new cells.",
  "syntax": "=EXPAND(array, rows, [columns], [pad_with])",
  "slides": 9,
  "seconds": 143,
  "outline": [
   "EXPAND",
   "EXPAND 能做什麼？",
   "語法結構",
   "範例一：預留空格給人填",
   "範例二：沒填補值會怎樣？",
   "EXPAND 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "EXPAND 沒有填 pad_with 時，多出來的格子會顯示什麼？",
   "options": [
    "0",
    "空白",
    "#N/A",
    "#VALUE!"
   ],
   "answer": 2
  }
 },
 {
  "id": "VSTACK",
  "no": 18,
  "name": "VSTACK",
  "zh": "上下合併表格",
  "en": "Stack vertically",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "把多個範圍由上往下接在一起，合併成一張表。",
  "summary_en": "Append arrays vertically, one on top of another, into a single array.",
  "syntax": "=VSTACK(array1, [array2], ...)",
  "slides": 9,
  "seconds": 151,
  "outline": [
   "VSTACK",
   "VSTACK 能做什麼？",
   "語法結構",
   "範例一：合併兩班名單",
   "範例二：寬度不同會怎樣？",
   "組合技：把 #N/A 換成空白",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "VSTACK 合併 3 列和 2 列的範圍，結果共有幾列？",
   "options": [
    "2 列",
    "3 列",
    "5 列",
    "6 列"
   ],
   "answer": 2
  }
 },
 {
  "id": "HSTACK",
  "no": 19,
  "name": "HSTACK",
  "zh": "左右合併表格",
  "en": "Stack horizontally",
  "category": "array",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2024",
  "summary": "把多個範圍由左往右並排在一起，合併成一張表。",
  "summary_en": "Append arrays horizontally, side by side, into a single array.",
  "syntax": "=HSTACK(array1, [array2], ...)",
  "slides": 9,
  "seconds": 155,
  "outline": [
   "HSTACK",
   "HSTACK 能做什麼？",
   "語法結構",
   "範例一：只拼姓名和數學",
   "範例二：高度不同會怎樣？",
   "HSTACK vs VSTACK",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "HSTACK 並排 2 欄和 3 欄的範圍，結果共有幾欄？",
   "options": [
    "2 欄",
    "3 欄",
    "5 欄",
    "6 欄"
   ],
   "answer": 2
  }
 },
 {
  "id": "VLOOKUP",
  "no": 20,
  "name": "VLOOKUP",
  "zh": "垂直查表函數",
  "en": "Vertical lookup",
  "category": "lookup",
  "level": "基礎",
  "version": "所有版本",
  "summary": "在表格第一欄找到鍵值，再傳回同一列指定欄的資料。",
  "summary_en": "Find a key in the first column and return a value from a given column.",
  "syntax": "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
  "slides": 9,
  "seconds": 157,
  "outline": [
   "VLOOKUP",
   "VLOOKUP 能做什麼？",
   "語法結構",
   "範例一：用學號查班級",
   "範例二：分數換等第",
   "FALSE vs TRUE",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "要用學號精準查出姓名，VLOOKUP 第四個引數應該填什麼？",
   "options": [
    "TRUE",
    "FALSE",
    "1",
    "不用填"
   ],
   "answer": 1
  }
 },
 {
  "id": "SUMPRODUCT",
  "no": 21,
  "name": "SUMPRODUCT",
  "zh": "乘積加總函數",
  "en": "Sum of products",
  "category": "math",
  "level": "進階",
  "version": "所有版本",
  "summary": "把幾組數字逐列相乘，再把所有乘積加總起來。",
  "summary_en": "Multiply corresponding values in arrays and return the sum of the products.",
  "syntax": "=SUMPRODUCT(array1, [array2], [array3], ...)",
  "slides": 9,
  "seconds": 152,
  "outline": [
   "SUMPRODUCT",
   "SUMPRODUCT 能做什麼？",
   "語法結構",
   "範例一：採購總金額",
   "範例二：只算教務處",
   "SUMPRODUCT 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "SUMPRODUCT({2,3},{4,5}) 的結果是多少？",
   "options": [
    "14",
    "20",
    "23",
    "120"
   ],
   "answer": 2
  }
 },
 {
  "id": "COUNTIF",
  "no": 22,
  "name": "COUNTIF",
  "zh": "條件計數函數",
  "en": "Count with condition",
  "category": "math",
  "level": "基礎",
  "version": "所有版本",
  "summary": "計算範圍中，符合指定條件的儲存格有幾個。",
  "summary_en": "Count the cells in a range that meet a single condition.",
  "syntax": "=COUNTIF(range, criteria)",
  "slides": 9,
  "seconds": 152,
  "outline": [
   "COUNTIF",
   "COUNTIF 能做什麼？",
   "語法結構",
   "範例一：數出 101 班人數",
   "範例二：數出及格人數",
   "COUNTIF 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "要數出 C2:C6 中低於 60 分的人數，COUNTIF 的條件該怎麼寫？",
   "options": [
    "<60",
    "\"<60\"",
    "(<60)",
    "<\"60\""
   ],
   "answer": 1
  }
 },
 {
  "id": "SUMIF",
  "no": 23,
  "name": "SUMIF",
  "zh": "條件加總函數",
  "en": "Sum with condition",
  "category": "math",
  "level": "基礎",
  "version": "所有版本",
  "summary": "只把符合條件的資料加起來，例如分類小計。",
  "summary_en": "Add up only the values whose cells meet a condition.",
  "syntax": "=SUMIF(range, criteria, [sum_range])",
  "slides": 9,
  "seconds": 165,
  "outline": [
   "SUMIF",
   "SUMIF 能做什麼？",
   "語法結構",
   "範例一：文具類共花多少",
   "範例二：省略加總範圍",
   "COUNTIF vs SUMIF",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "班費表中 =SUMIF(B2:B6,\"餐飲\",C2:C6) 結果是？",
   "options": [
    "350",
    "600",
    "950",
    "1200"
   ],
   "answer": 2
  }
 },
 {
  "id": "COUNTA",
  "no": 24,
  "name": "COUNTA",
  "zh": "非空白計數",
  "en": "Count non-empty cells",
  "category": "math",
  "level": "基礎",
  "version": "所有版本",
  "summary": "計算範圍中有填資料、不是空白的儲存格數量。",
  "summary_en": "Count how many cells in a range are not empty.",
  "syntax": "=COUNTA(value1, [value2], ...)",
  "slides": 9,
  "seconds": 158,
  "outline": [
   "COUNTA",
   "COUNTA 能做什麼？",
   "語法結構",
   "範例一：作業繳交人數",
   "範例二：COUNTA 和 COUNT",
   "COUNTA vs COUNT",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "A1:A4 是 10、請假、空白、5，=COUNTA(A1:A4) 是？",
   "options": [
    "1",
    "2",
    "3",
    "4"
   ],
   "answer": 2
  }
 },
 {
  "id": "INDEX",
  "no": 25,
  "name": "INDEX",
  "zh": "依位置取值",
  "en": "Get value by position",
  "category": "lookup",
  "level": "基礎",
  "version": "所有版本",
  "summary": "指定第幾列、第幾欄，從範圍中取出那一格的值。",
  "summary_en": "Return the value at a given row and column inside a range.",
  "syntax": "=INDEX(array, row_num, [column_num])",
  "slides": 9,
  "seconds": 154,
  "outline": [
   "INDEX",
   "INDEX 能做什麼？",
   "語法結構",
   "範例一：取出第 3 位同學",
   "範例二：列和欄一起指定",
   "INDEX 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "用上面的成績表，=INDEX(B2:D6,2,2) 會傳回什麼？",
   "options": [
    "林美華",
    "92",
    "81",
    "88"
   ],
   "answer": 1
  }
 },
 {
  "id": "MATCH",
  "no": 26,
  "name": "MATCH",
  "zh": "找出位置函數",
  "en": "Find position",
  "category": "lookup",
  "level": "基礎",
  "version": "所有版本",
  "summary": "找出某個值在範圍中排第幾個，傳回位置編號。",
  "summary_en": "Return the relative position of a value within a range.",
  "syntax": "=MATCH(lookup_value, lookup_array, [match_type])",
  "slides": 9,
  "seconds": 162,
  "outline": [
   "MATCH",
   "MATCH 能做什麼？",
   "語法結構",
   "範例一：陳大文排第幾？",
   "範例二：近似比對找級距",
   "黃金組合：INDEX + MATCH",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "用範例一的名單，=MATCH(\"張雅婷\",B2:B6,0) 結果是？",
   "options": [
    "2",
    "4",
    "5",
    "張雅婷"
   ],
   "answer": 1
  }
 },
 {
  "id": "CONCATENATE",
  "no": 27,
  "name": "CONCATENATE",
  "zh": "文字串接函數",
  "en": "Join text",
  "category": "text",
  "level": "基礎",
  "version": "所有版本",
  "summary": "把多段文字或儲存格內容，依序接成一段文字。",
  "summary_en": "Join several text items or cells into one string.",
  "syntax": "=CONCATENATE(text1, [text2], ...)",
  "slides": 9,
  "seconds": 158,
  "outline": [
   "CONCATENATE",
   "CONCATENATE 能做什麼？",
   "語法結構",
   "範例一：姓 + 名",
   "範例二：加入自訂文字",
   "CONCATENATE vs & 符號",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "A2 是陳、B2 是大文，=CONCATENATE(B2,A2) 是？",
   "options": [
    "陳大文",
    "大文陳",
    "陳 大文",
    "#VALUE!"
   ],
   "answer": 1
  }
 },
 {
  "id": "NETWORKDAYS",
  "no": 28,
  "name": "NETWORKDAYS",
  "zh": "計算工作天數",
  "en": "Count workdays",
  "category": "date",
  "level": "基礎",
  "version": "所有版本",
  "summary": "計算兩個日期之間的工作天數，自動扣掉週末和假日。",
  "summary_en": "Count the working days between two dates, skipping weekends and holidays.",
  "syntax": "=NETWORKDAYS(start_date, end_date, [holidays])",
  "slides": 9,
  "seconds": 161,
  "outline": [
   "NETWORKDAYS",
   "NETWORKDAYS 能做什麼？",
   "語法結構",
   "範例一：2026 年十月的工作",
   "範例二：扣掉假日",
   "NETWORKDAYS 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "10/5週一到 10/9週五，沒有假日，工作天是？",
   "options": [
    "4",
    "5",
    "7",
    "3"
   ],
   "answer": 1
  }
 },
 {
  "id": "SUBSTITUTE",
  "no": 29,
  "name": "SUBSTITUTE",
  "zh": "文字取代函數",
  "en": "Replace text",
  "category": "text",
  "level": "基礎",
  "version": "所有版本",
  "summary": "把文字中指定的舊字，換成新的字。",
  "summary_en": "Replace specific old text with new text inside a string.",
  "syntax": "=SUBSTITUTE(text, old_text, new_text, [instance_num])",
  "slides": 10,
  "seconds": 167,
  "outline": [
   "SUBSTITUTE",
   "SUBSTITUTE 能做什麼？",
   "語法結構",
   "範例一：台改成臺",
   "範例二：刪除多餘空格",
   "範例三：只換第 2 個",
   "SUBSTITUTE vs REPLACE",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "=SUBSTITUTE(\"2026-10-25\",\"-\",\"/\") 的結果是？",
   "options": [
    "2026/10-25",
    "2026-10/25",
    "2026/10/25",
    "20261025"
   ],
   "answer": 2
  }
 },
 {
  "id": "SWITCH",
  "no": 30,
  "name": "SWITCH",
  "zh": "多選一對應",
  "en": "Match and switch",
  "category": "logic",
  "level": "進階",
  "version": "Microsoft 365 / Excel 2019",
  "summary": "拿一個值逐一比對清單，傳回第一個相符的結果。",
  "summary_en": "Compare one value against a list and return the first matching result.",
  "syntax": "=SWITCH(expression, value1, result1, [value2, result2], ..., [default])",
  "slides": 9,
  "seconds": 153,
  "outline": [
   "SWITCH",
   "SWITCH 能做什麼？",
   "語法結構",
   "範例一：等第轉評語",
   "範例二：預設值",
   "SWITCH vs 巢狀 IF",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "=SWITCH(3,1,\"一\",2,\"二\",\"其他\") 的結果是？",
   "options": [
    "一",
    "二",
    "其他",
    "#N/A"
   ],
   "answer": 2
  }
 },
 {
  "id": "HLOOKUP",
  "no": 31,
  "name": "HLOOKUP",
  "zh": "水平查找函數",
  "en": "Horizontal lookup",
  "category": "lookup",
  "level": "基礎",
  "version": "所有版本",
  "summary": "在表格第一列找到鍵值，再往下取出指定列的資料。",
  "summary_en": "Find a key in the top row and return a value from a row below it.",
  "syntax": "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
  "slides": 9,
  "seconds": 165,
  "outline": [
   "HLOOKUP",
   "HLOOKUP 能做什麼？",
   "語法結構",
   "範例一：查數學成績",
   "範例二：近似比對找等第",
   "HLOOKUP vs VLOOKUP",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "範例一中 =HLOOKUP(\"英文\",B1:E4,4,FALSE) 是？",
   "options": [
    "92",
    "85",
    "80",
    "84"
   ],
   "answer": 2
  }
 },
 {
  "id": "OFFSET",
  "no": 32,
  "name": "OFFSET",
  "zh": "位移參照函數",
  "en": "Shifted reference",
  "category": "lookup",
  "level": "進階",
  "version": "所有版本",
  "summary": "從起點儲存格往下、往右移動，傳回新的儲存格或範圍。",
  "summary_en": "Return a cell or range shifted a number of rows and columns from a start.",
  "syntax": "=OFFSET(reference, rows, cols, [height], [width])",
  "slides": 9,
  "seconds": 156,
  "outline": [
   "OFFSET",
   "OFFSET 能做什麼？",
   "語法結構",
   "範例一：移動取出一格",
   "範例二：加總最近三個月",
   "OFFSET 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "公式 =OFFSET(A1,2,1) 會傳回哪一格的內容？",
   "options": [
    "A3",
    "B3",
    "C2",
    "B2"
   ],
   "answer": 1
  }
 },
 {
  "id": "DATEDIF",
  "no": 33,
  "name": "DATEDIF",
  "zh": "日期差距函數",
  "en": "Date difference",
  "category": "date",
  "level": "進階",
  "version": "所有版本",
  "summary": "計算兩個日期之間相差幾年、幾個月或幾天。",
  "summary_en": "Calculate the years, months, or days between two dates.",
  "syntax": "=DATEDIF(start_date, end_date, unit)",
  "slides": 10,
  "seconds": 163,
  "outline": [
   "DATEDIF",
   "DATEDIF 能做什麼？",
   "語法結構",
   "範例一：計算滿幾年",
   "範例二：計算總月數",
   "組合技：幾年幾個月",
   "六種單位一次看",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "想算「扣掉整年後，還剩幾個月」，DATEDIF 的單位要填什麼？",
   "options": [
    "\"M\"",
    "\"YM\"",
    "\"MD\"",
    "\"Y\""
   ],
   "answer": 1
  }
 },
 {
  "id": "WEEKDAY",
  "no": 34,
  "name": "WEEKDAY",
  "zh": "星期幾函數",
  "en": "Day of week",
  "category": "date",
  "level": "基礎",
  "version": "所有版本",
  "summary": "把日期轉成代表星期幾的數字。",
  "summary_en": "Return a number for the day of the week of a date.",
  "syntax": "=WEEKDAY(serial_number, [return_type])",
  "slides": 10,
  "seconds": 167,
  "outline": [
   "WEEKDAY",
   "WEEKDAY 能做什麼？",
   "語法結構",
   "範例一：校慶是星期幾？",
   "範例二：從星期一算起",
   "組合技：判斷平日假日",
   "類型 1 vs 類型 2",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "A2 是 2025/11/3（星期一），=WEEKDAY(A2,2) 的結果是？",
   "options": [
    "1",
    "2",
    "7",
    "0"
   ],
   "answer": 0
  }
 },
 {
  "id": "TRIM",
  "no": 35,
  "name": "TRIM",
  "zh": "清除多餘空白",
  "en": "Remove extra spaces",
  "category": "text",
  "level": "基礎",
  "version": "所有版本",
  "summary": "刪除文字前後的空白，並把中間連續空白縮成一個。",
  "summary_en": "Remove leading and trailing spaces and collapse inner spaces to one.",
  "syntax": "=TRIM(text)",
  "slides": 10,
  "seconds": 175,
  "outline": [
   "TRIM",
   "TRIM 能做什麼？",
   "語法結構",
   "範例一：清掉姓名前後空白",
   "範例二：中間空白縮成一個",
   "組合技：算出多了幾個空白",
   "TRIM vs SUBSTITUTE",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "=TRIM(\"  Hello    World  \") 的結果是？",
   "options": [
    "HelloWorld",
    "Hello World",
    " Hello World",
    "Hello    World"
   ],
   "answer": 1
  }
 },
 {
  "id": "LEFT",
  "no": 36,
  "name": "LEFT",
  "zh": "從左取字",
  "en": "Left characters",
  "category": "text",
  "level": "基礎",
  "version": "所有版本",
  "summary": "從文字的最左邊開始，取出指定數量的字元。",
  "summary_en": "Return the specified number of characters from the start of a text.",
  "syntax": "=LEFT(text, [num_chars])",
  "slides": 10,
  "seconds": 154,
  "outline": [
   "LEFT",
   "LEFT 能做什麼？",
   "語法結構",
   "範例一：身分證第一碼",
   "範例二：從地址取出縣市",
   "組合技：取到「區」為止",
   "LEFT 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "=LEFT(\"楊梅高中\",2) 的結果是什麼？",
   "options": [
    "楊",
    "楊梅",
    "高中",
    "楊梅高"
   ],
   "answer": 1
  }
 },
 {
  "id": "RIGHT",
  "no": 37,
  "name": "RIGHT",
  "zh": "從右取字",
  "en": "Right characters",
  "category": "text",
  "level": "基礎",
  "version": "所有版本",
  "summary": "從文字的最右邊開始，取出指定數量的字元。",
  "summary_en": "Return the specified number of characters from the end of a text.",
  "syntax": "=RIGHT(text, [num_chars])",
  "slides": 10,
  "seconds": 163,
  "outline": [
   "RIGHT",
   "RIGHT 能做什麼？",
   "語法結構",
   "範例一：手機末三碼",
   "範例二：身分證後四碼",
   "組合技：身分證遮罩",
   "LEFT vs RIGHT",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "=RIGHT(\"0912-345-678\",7) 的結果是什麼？",
   "options": [
    "345-678",
    "-345-678",
    "0912-34",
    "678"
   ],
   "answer": 0
  }
 },
 {
  "id": "MID",
  "no": 38,
  "name": "MID",
  "zh": "從中間取字",
  "en": "Middle characters",
  "category": "text",
  "level": "基礎",
  "version": "所有版本",
  "summary": "從文字的指定位置開始，取出指定數量的字元。",
  "summary_en": "Return characters from the middle of a text, given a start and length.",
  "syntax": "=MID(text, start_num, num_chars)",
  "slides": 10,
  "seconds": 158,
  "outline": [
   "MID",
   "MID 能做什麼？",
   "語法結構",
   "範例一：從學號取班級",
   "範例二：身分證判斷性別",
   "組合技：直接顯示男女",
   "MID 的運作流程",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "=MID(\"桃園市楊梅區\",4,2) 的結果是什麼？",
   "options": [
    "市楊",
    "楊梅",
    "楊梅區",
    "園市"
   ],
   "answer": 1
  }
 },
 {
  "id": "LEN",
  "no": 39,
  "name": "LEN",
  "zh": "計算字數",
  "en": "Text length",
  "category": "text",
  "level": "基礎",
  "version": "所有版本",
  "summary": "計算一段文字共有幾個字元。",
  "summary_en": "Return the number of characters in a text string.",
  "syntax": "=LEN(text)",
  "slides": 10,
  "seconds": 158,
  "outline": [
   "LEN",
   "LEN 能做什麼？",
   "語法結構",
   "範例一：手機號碼幾個字",
   "範例二：地址有幾個字",
   "組合技：檢查身分證長度",
   "LEN vs LENB",
   "使用小提醒",
   "隨堂小測驗",
   "重點回顧"
  ],
  "quiz": {
   "q": "=LEN(\"楊梅 高中\") 的結果是多少？（中間有一個空白）",
   "options": [
    "4",
    "5",
    "8",
    "10"
   ],
   "answer": 1
  }
 }
];
