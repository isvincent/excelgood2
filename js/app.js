(() => {
  const DATA = window.XLFX_DATA, CATS = window.XLFX_CATS;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const root = document.documentElement;

  /* ---------- i18n ---------- */
  const I18N = {
    zh: {
      brand: 'Excel 函數動畫教室', brandSub: '39 支 9:16 教學影片', settings: '設定', kicker: '看動畫、聽講解、做測驗',
      heroTitle: '把 Excel 函數<br><span class="hl">變成會說話的動畫</span>',
      heroLead: '每個函數一支直式教學影片：小格老師配音講解、逐句字幕、工作表動畫示範，看完還有隨堂小測驗。',
      searchPh: '搜尋函數名稱或用途，例如：查找、日期、文字…', cats: '函數分類', all: '全部函數', onlyNew: '只看未完成', random: '隨機挑一個',
      lvAll: '全部', lvBasic: '基礎', lvAdv: '進階', sortDef: '依課程順序', sortAZ: '依字母 A→Z', sortTime: '依影片長度',
      empty: '找不到符合的函數，換個關鍵字試試看！', count: n => `共 ${n} 個`, done: '已看完',
      gameTitle: '函數配對挑戰', gameSub: '看任務描述，選出最適合的函數。連續答對會累積連擊！', score: '得分', combo: '連擊', nextQ: '下一題',
      gameQ: s => `任務：「${s}」應該用哪個函數？`, right: c => c > 2 ? `答對了！${c} 連擊 🔥` : '答對了！', wrong: a => `可惜～答案是 ${a}`,
      outline: '影片章節', play: '播放教學影片', copy: '複製語法', copied: '已複製語法！',
      foot: '影片使用瀏覽器內建語音合成（女聲、1.15 倍速）。建議使用 Chrome 或 Edge，可安裝為 App 離線使用。',
      setTitle: '⚙️ 顯示與操作設定', sFull: '全螢幕', sSound: '音效', sDevice: '裝置', sLayout: '版面', sLang: '語言', sFont: '字體', sTheme: '色系', reset: '恢復預設值',
      on: '開啟', off: '關閉', auto: '自動', mobile: '手機', tablet: '平板', desktop: '電腦', portrait: '直式', landscape: '橫式',
      zh: '繁體中文', en: 'English', small: '縮小', normal: '標準', large: '放大', system: '跟隨系統', light: '亮色', dark: '暗色',
      stFuncs: '個函數', stCats: '大分類', stSlides: '張投影片', stMins: '分鐘影片', min: '分', slides: '張', fullErr: '此瀏覽器不支援全螢幕', saved: '設定已套用'
    },
    en: {
      brand: 'Excel Function Studio', brandSub: '39 vertical lesson videos', settings: 'Settings', kicker: 'Watch · Listen · Quiz',
      heroTitle: 'Excel functions,<br><span class="hl">animated and narrated</span>',
      heroLead: 'One vertical video per function: a narrated teacher, line-by-line captions, animated worksheet demos and a quick quiz at the end.',
      searchPh: 'Search by name or purpose, e.g. lookup, date, text…', cats: 'Categories', all: 'All functions', onlyNew: 'Unwatched only', random: 'Surprise me',
      lvAll: 'All', lvBasic: 'Basic', lvAdv: 'Advanced', sortDef: 'Course order', sortAZ: 'A → Z', sortTime: 'Video length',
      empty: 'No matching function — try another keyword!', count: n => `${n} functions`, done: 'Watched',
      gameTitle: 'Function Match Challenge', gameSub: 'Read the task and pick the best function. Build a combo streak!', score: 'Score', combo: 'Combo', nextQ: 'Next',
      gameQ: s => `Task: "${s}" — which function?`, right: c => c > 2 ? `Correct! ${c}× combo 🔥` : 'Correct!', wrong: a => `Oops — it was ${a}`,
      outline: 'Chapters', play: 'Play lesson video', copy: 'Copy syntax', copied: 'Syntax copied!',
      foot: 'Videos use the browser’s built-in speech synthesis (female voice, 1.15×). Chrome or Edge recommended; installable as an offline app.',
      setTitle: '⚙️ Display & Controls', sFull: 'Fullscreen', sSound: 'Sound', sDevice: 'Device', sLayout: 'Layout', sLang: 'Language', sFont: 'Font size', sTheme: 'Theme', reset: 'Reset to defaults',
      on: 'On', off: 'Off', auto: 'Auto', mobile: 'Phone', tablet: 'Tablet', desktop: 'Desktop', portrait: 'Portrait', landscape: 'Landscape',
      zh: '繁體中文', en: 'English', small: 'Small', normal: 'Normal', large: 'Large', system: 'System', light: 'Light', dark: 'Dark',
      stFuncs: 'functions', stCats: 'categories', stSlides: 'slides', stMins: 'min of video', min: 'min', slides: 'slides', fullErr: 'Fullscreen not supported', saved: 'Settings applied'
    }
  };

  /* ---------- settings ---------- */
  const DEF = { fullscreen: false, sound: true, device: 'auto', layout: 'auto', lang: 'zh', font: 'normal', theme: 'system' };
  const OPTS = {
    fullscreen: [true, false], sound: [true, false], device: ['auto', 'mobile', 'tablet', 'desktop'],
    layout: ['auto', 'portrait', 'landscape'], lang: ['zh', 'en'], font: ['small', 'normal', 'large'], theme: ['system', 'light', 'dark']
  };
  let S = { ...DEF };
  try { Object.assign(S, JSON.parse(localStorage.getItem('xlfx-settings') || '{}')); } catch (e) {}
  S.fullscreen = !!document.fullscreenElement;
  const t = k => I18N[S.lang][k];
  const save = () => { try { localStorage.setItem('xlfx-settings', JSON.stringify({ ...S, fullscreen: false })); } catch (e) {} };

  function applySettings() {
    const dark = S.theme === 'dark' || (S.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    root.dataset.font = S.font;
    root.dataset.device = S.device;
    root.dataset.layout = S.layout;
    root.lang = S.lang === 'en' ? 'en' : 'zh-Hant';
    $$('[data-i18n]').forEach(e => { const v = t(e.dataset.i18n); if (typeof v === 'string') e.textContent = v; });
    $$('[data-i18n-html]').forEach(e => e.innerHTML = t(e.dataset.i18nHtml));
    $$('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh));
    document.title = t('brand');
    $$('.set').forEach(box => {
      const k = box.dataset.key;
      box.querySelector('.opts').innerHTML = OPTS[k].map(v => {
        const lbl = v === true ? t('on') : v === false ? t('off') : t(v);
        return `<button data-v="${v}" class="${S[k] === v ? 'on' : ''}" aria-pressed="${S[k] === v}">${lbl}</button>`;
      }).join('');
    });
    buildFilters(); renderStats(); render(); newQuestion(true);
  }
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => S.theme === 'system' && applySettings());

  $('#drawer').addEventListener('click', async e => {
    const b = e.target.closest('.opts button'); if (!b) return;
    const k = b.closest('.set').dataset.key, raw = b.dataset.v;
    const v = raw === 'true' ? true : raw === 'false' ? false : raw;
    if (k === 'fullscreen') {
      try {
        if (v && !document.fullscreenElement) await root.requestFullscreen();
        if (!v && document.fullscreenElement) await document.exitFullscreen();
      } catch (err) { toast(t('fullErr')); }
      S.fullscreen = !!document.fullscreenElement;
    } else S[k] = v;
    if (k === 'sound' && v) sfx.ding(); else sfx.click();
    save(); applySettings();
  });
  document.addEventListener('fullscreenchange', () => { S.fullscreen = !!document.fullscreenElement; applySettings(); });
  $('#reset').onclick = () => { S = { ...DEF, fullscreen: S.fullscreen }; save(); applySettings(); toast(t('saved')); };
  const openDrawer = o => {
    $('#drawer').classList.toggle('open', o); $('#drawer').setAttribute('aria-hidden', !o); $('#drawerBg').hidden = !o;
    if (o) sfx.whoosh();
  };
  $('#btnSettings').onclick = () => openDrawer(true);
  $('#dClose').onclick = () => openDrawer(false);
  $('#drawerBg').onclick = () => openDrawer(false);

  /* ---------- sound ---------- */
  let AC;
  const ac = () => { if (!AC) try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} return AC; };
  function tone(f, d, type = 'sine', vol = .1, slide = 0, delay = 0) {
    if (!S.sound) return; const a = ac(); if (!a) return;
    const t0 = a.currentTime + delay, o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t0); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t0 + d);
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol, t0 + .01); g.gain.exponentialRampToValueAtTime(.0001, t0 + d);
    o.connect(g).connect(a.destination); o.start(t0); o.stop(t0 + d + .05);
  }
  const sfx = {
    click: () => tone(520, .07, 'triangle', .07, 760),
    tick: () => tone(1200, .03, 'sine', .025),
    ding: () => { tone(880, .2, 'triangle', .1); tone(1320, .35, 'triangle', .08, 0, .1); },
    buzz: () => tone(160, .25, 'sawtooth', .05, 110),
    whoosh: () => tone(300, .25, 'sine', .06, 900),
    tada: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, .3, 'triangle', .08, 0, i * .09))
  };
  document.addEventListener('click', e => { if (e.target.closest('[data-sfx]')) sfx.click(); });

  /* ---------- icons ---------- */
  const IC = {
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>', zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    text: '<path d="M5 6V4h14v2M12 4v16M9 20h6"/>', calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>', layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>'
  };
  const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${IC[n] || IC.star}</svg>`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- state ---------- */
  const st = { q: '', cat: 'all', lv: 'all', sort: 'def', onlyNew: false };
  const watched = () => { try { return JSON.parse(localStorage.getItem('xlfx-watched') || '[]'); } catch (e) { return []; } };

  function buildFilters() {
    const cnt = c => DATA.filter(d => c === 'all' || d.category === c).length;
    const catBtn = (k, name, color, ic) => `<button class="cat" role="tab" data-cat="${k}" aria-selected="${st.cat === k}" style="--cc:${color}" data-sfx>
        <span class="ci">${icon(ic)}</span><span>${name}</span><span class="cn">${cnt(k)}</span></button>`;
    $('#cats').innerHTML = catBtn('all', t('all'), '#107C41', 'star') +
      Object.entries(CATS).map(([k, c]) => catBtn(k, c[S.lang === 'en' ? 'en' : 'zh'], c.color, c.icon)).join('');
    $('#lvl').innerHTML = [['all', 'lvAll'], ['基礎', 'lvBasic'], ['進階', 'lvAdv']]
      .map(([v, k]) => `<button data-lv="${v}" class="${st.lv === v ? 'on' : ''}" data-sfx>${t(k)}</button>`).join('');
    $('#sort').innerHTML = [['def', 'sortDef'], ['az', 'sortAZ'], ['time', 'sortTime']]
      .map(([v, k]) => `<option value="${v}" ${st.sort === v ? 'selected' : ''}>${t(k)}</option>`).join('');
    $('#quick').innerHTML = ['XLOOKUP', 'FILTER', 'VLOOKUP', 'COUNTIF', 'TEXTSPLIT', 'DATEDIF']
      .map(n => `<button data-quick="${n}" data-sfx>${n}</button>`).join('');
  }
  $('#cats').addEventListener('click', e => { const b = e.target.closest('.cat'); if (!b) return; st.cat = b.dataset.cat; buildFilters(); render(); });
  $('#lvl').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; st.lv = b.dataset.lv; buildFilters(); render(); });
  $('#sort').onchange = e => { st.sort = e.target.value; sfx.click(); render(); };
  $('#onlyNew').onchange = e => { st.onlyNew = e.target.checked; sfx.click(); render(); };
  $('#quick').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; $('#q').value = b.dataset.quick; st.q = b.dataset.quick; render(); });
  let qT; $('#q').addEventListener('input', e => { clearTimeout(qT); qT = setTimeout(() => { st.q = e.target.value.trim(); sfx.tick(); render(); }, 120); });
  addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== $('#q')) { e.preventDefault(); $('#q').focus(); }
    if (e.key === 'Escape') { closeModal(); openDrawer(false); }
  });

  function renderStats() {
    const slides = DATA.reduce((n, d) => n + d.slides, 0), secs = DATA.reduce((n, d) => n + d.seconds, 0);
    const items = [[DATA.length, 'stFuncs'], [Object.keys(CATS).length, 'stCats'], [slides, 'stSlides'], [Math.round(secs / 60), 'stMins']];
    $('#stats').innerHTML = items.map(([n, k]) => `<div class="stat"><b data-n="${n}">0</b><span>${t(k)}</span></div>`).join('');
    $$('#stats b').forEach(b => { const n = +b.dataset.n; let i = 0; const step = () => { i += Math.ceil(n / 24); b.textContent = Math.min(i, n); if (i < n) requestAnimationFrame(step); }; step(); });
  }

  function hl(s, q) {
    s = esc(s); if (!q) return s;
    const i = s.toLowerCase().indexOf(q.toLowerCase());
    return i < 0 ? s : s.slice(0, i) + '<mark>' + s.slice(i, i + q.length) + '</mark>' + s.slice(i + q.length);
  }
  function filtered() {
    const q = st.q.toLowerCase(), w = watched();
    let list = DATA.filter(d => (st.cat === 'all' || d.category === st.cat) && (st.lv === 'all' || d.level === st.lv) && (!st.onlyNew || !w.includes(d.id)));
    if (q) list = list.filter(d => [d.id, d.zh, d.en, d.summary, d.summary_en, d.syntax, CATS[d.category].zh, CATS[d.category].en, ...d.outline].join(' ').toLowerCase().includes(q));
    if (st.sort === 'az') list = [...list].sort((a, b) => a.id.localeCompare(b.id));
    if (st.sort === 'time') list = [...list].sort((a, b) => a.seconds - b.seconds);
    return list;
  }
  function render() {
    const list = filtered(), w = watched(), en = S.lang === 'en';
    const cname = st.cat === 'all' ? t('all') : CATS[st.cat][en ? 'en' : 'zh'];
    $('#resultTitle').textContent = cname;
    $('#resultCount').textContent = t('count')(list.length);
    $('#grid').innerHTML = list.map((d, i) => {
      const c = CATS[d.category];
      return `<article class="card" tabindex="0" data-id="${d.id}" style="--cc:${c.color};animation-delay:${Math.min(i, 12) * 35}ms" aria-label="${d.id}">
        <span class="band"></span>
        <div class="row"><span class="ci">${icon(c.icon)}</span><span class="no">#${String(d.no).padStart(2, '0')}</span>${w.includes(d.id) ? `<span class="done">✓ ${t('done')}</span>` : ''}</div>
        <h3>${hl(d.id, st.q)}</h3>
        <div class="zh">${hl(en ? d.en : d.zh, st.q)}</div>
        <p class="sum">${hl(en ? d.summary_en : d.summary, st.q)}</p>
        <div class="meta"><span class="tag cat-t">${c[en ? 'en' : 'zh']}</span><span class="tag">${en ? (d.level === '基礎' ? 'Basic' : 'Advanced') : d.level}</span>
          <span class="tag">${d.slides} ${t('slides')} · ${Math.round(d.seconds / 60 * 10) / 10} ${t('min')}</span>
          <span class="play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg></span></div>
      </article>`;
    }).join('');
    $('#empty').hidden = list.length > 0;
    const n = w.filter(id => DATA.some(d => d.id === id)).length;
    $('#ringTxt').textContent = `${n}/${DATA.length}`;
    $('#ringFg').style.strokeDashoffset = 94.25 * (1 - n / DATA.length);
  }
  $('#grid').addEventListener('click', e => { const c = e.target.closest('.card'); if (c) openModal(c.dataset.id); });
  $('#grid').addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) { e.preventDefault(); openModal(e.target.dataset.id); } });
  $('#grid').addEventListener('mouseover', e => { const c = e.target.closest('.card'); if (c && c !== render._h) { render._h = c; sfx.tick(); } });
  $('#btnRandom').onclick = () => { const l = filtered(); if (l.length) openModal(l[Math.floor(Math.random() * l.length)].id); };

  /* ---------- modal ---------- */
  let lastFocus;
  function openModal(id) {
    const d = DATA.find(x => x.id === id), c = CATS[d.category], en = S.lang === 'en';
    lastFocus = document.activeElement;
    $('.modal-card').style.setProperty('--cc', c.color);
    $('#mCat').textContent = c[en ? 'en' : 'zh'];
    $('#mLv').textContent = en ? (d.level === '基礎' ? 'Basic' : 'Advanced') : d.level;
    $('#mVer').textContent = d.version;
    $('#mName').textContent = d.id;
    $('#mZh').textContent = en ? d.en : d.zh;
    $('#mSum').textContent = en ? d.summary_en : d.summary;
    $('#mSyn').textContent = d.syntax;
    $('#mOutline').innerHTML = d.outline.map(o => `<li>${esc(o)}</li>`).join('');
    $('#mPhone').innerHTML = `<div class="scr"><b>${d.id}</b><div class="bars"><i></i><i></i><i></i><i></i></div><small>9:16 · ${d.slides} ${t('slides')}<br>≈ ${Math.round(d.seconds / 60 * 10) / 10} ${t('min')}</small></div>`;
    $('#mPlay').href = `videos/${d.id}.html`;
    $('#mCopy').onclick = () => { navigator.clipboard?.writeText(d.syntax).then(() => toast(t('copied')), () => toast(d.syntax)); };
    $('#modal').hidden = false; sfx.whoosh();
    $('#mPlay').focus();
  }
  function closeModal() { if ($('#modal').hidden) return; $('#modal').hidden = true; lastFocus?.focus?.(); }
  $('#mClose').onclick = () => { sfx.click(); closeModal(); };
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });

  /* ---------- match game ---------- */
  let score = 0, combo = 0, answered = false, curQ;
  function newQuestion(keep) {
    if (keep && curQ) return drawQ();
    const d = DATA[Math.floor(Math.random() * DATA.length)];
    const pool = DATA.filter(x => x.id !== d.id).sort(() => Math.random() - .5);
    const same = pool.filter(x => x.category === d.category).slice(0, 2);
    const opts = [d, ...same, ...pool.filter(x => !same.includes(x))].slice(0, 4).sort(() => Math.random() - .5);
    curQ = { d, opts }; answered = false; drawQ();
  }
  function drawQ() {
    const en = S.lang === 'en';
    $('#gQ').textContent = t('gameQ')(en ? curQ.d.summary_en : curQ.d.summary);
    $('#gOpts').innerHTML = curQ.opts.map(o => `<button data-id="${o.id}">${o.id}</button>`).join('');
    $('#gMsg').textContent = ''; $('#gScore').textContent = score; $('#gCombo').textContent = combo;
  }
  $('#gOpts').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b || answered) return; answered = true;
    const ok = b.dataset.id === curQ.d.id;
    if (ok) { combo++; score += 10 * combo; b.classList.add('right'); combo > 2 ? sfx.tada() : sfx.ding(); $('#gMsg').textContent = t('right')(combo); }
    else { combo = 0; b.classList.add('wrong'); $(`#gOpts [data-id="${curQ.d.id}"]`).classList.add('right'); sfx.buzz(); $('#gMsg').textContent = t('wrong')(curQ.d.id); }
    $('#gScore').textContent = score; $('#gCombo').textContent = combo;
  });
  $('#gNext').onclick = () => newQuestion(false);

  /* ---------- hero animation ---------- */
  (function hero() {
    const g = $('#heroGrid'), cols = ['#1E78E0', '#00967D', '#EE7A00', '#E23D74', '#6E4BF0', '#D99A00'];
    let h = '';
    for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) {
      const x = 92 + c * 58, y = 196 + r * 42, lit = (r * 2 + c * 3) % 5 === 0;
      h += `<rect x="${x}" y="${y}" width="52" height="36" rx="8" fill="${lit ? cols[(r + c) % 6] : 'var(--bg)'}" class="${lit ? 'lit' : ''}" style="animation-delay:${(r + c) * .25}s"/>`;
    }
    g.innerHTML = h;
    const fs = ['=XLOOKUP(A2,B:B,C:C)', '=FILTER(A2:C9,B2:B9>60)', '=TEXTSPLIT(A2,",")', '=COUNTIF(B:B,"甲")', '=SORT(UNIQUE(A2:A9))'];
    let fi = 0, ci = 0, del = false; const el = $('#heroFormula');
    setInterval(() => {
      const f = fs[fi];
      if (!del) { ci++; if (ci > f.length + 14) del = true; }
      else { ci -= 2; if (ci <= 1) { del = false; fi = (fi + 1) % fs.length; ci = 1; } }
      el.textContent = f.slice(0, Math.min(ci, f.length)) + (ci % 2 && ci < f.length ? '' : '▍');
    }, 90);
  })();

  /* ---------- toast ---------- */
  let tT;
  function toast(m) { const e = $('#toast'); e.textContent = m; e.classList.add('show'); clearTimeout(tT); tT = setTimeout(() => e.classList.remove('show'), 1800); }

  applySettings();
  addEventListener('pageshow', render);
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
