(() => {
  const OFFICIAL_LANGS = [
    { code: 'en', name: 'English', nativeName: 'English', isOfficial: true },
  ];

  const AUTO_LANGUAGES = [
    { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
    { code: 'sq', name: 'Albanian', nativeName: 'Shqip' },
    { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն' },
    { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
    { code: 'ay', name: 'Aymara', nativeName: 'Aymar aru' },
    { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan' },
    { code: 'bm', name: 'Bambara', nativeName: 'Bamanankan' },
    { code: 'eu', name: 'Basque', nativeName: 'Euskara' },
    { code: 'be', name: 'Belarusian', nativeName: 'Беларуская' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'bho', name: 'Bhojpuri', nativeName: 'भोजपुरी' },
    { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski' },
    { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
    { code: 'ca', name: 'Catalan', nativeName: 'Català' },
    { code: 'ceb', name: 'Cebuano', nativeName: 'Cebuano' },
    { code: 'ny', name: 'Chichewa', nativeName: 'Chichewa' },
    { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '中文 (简体)' },
    { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '中文 (繁體)' },
    { code: 'co', name: 'Corsican', nativeName: 'Corsu' },
    { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski' },
    { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
    { code: 'da', name: 'Danish', nativeName: 'Dansk' },
    { code: 'dv', name: 'Dhivehi', nativeName: 'ދިވެހި' },
    { code: 'doi', name: 'Dogri', nativeName: 'डोगरी' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
    { code: 'eo', name: 'Esperanto', nativeName: 'Esperanto' },
    { code: 'et', name: 'Estonian', nativeName: 'Eesti' },
    { code: 'ee', name: 'Ewe', nativeName: 'Eʋegbe' },
    { code: 'tl', name: 'Filipino', nativeName: 'Filipino' },
    { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'fy', name: 'Frisian', nativeName: 'Frysk' },
    { code: 'gl', name: 'Galician', nativeName: 'Galego' },
    { code: 'ka', name: 'Georgian', nativeName: 'ქართული' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
    { code: 'gn', name: 'Guarani', nativeName: "Avañe'ẽ" },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'ht', name: 'Haitian Creole', nativeName: 'Kreyòl Ayisyen' },
    { code: 'ha', name: 'Hausa', nativeName: 'Hausa' },
    { code: 'haw', name: 'Hawaiian', nativeName: 'ʻŌlelo Hawaiʻi' },
    { code: 'iw', name: 'Hebrew', nativeName: 'עברית' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'hmn', name: 'Hmong', nativeName: 'Hmoob' },
    { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
    { code: 'is', name: 'Icelandic', nativeName: 'Íslenska' },
    { code: 'ig', name: 'Igbo', nativeName: 'Igbo' },
    { code: 'ilo', name: 'Ilocano', nativeName: 'Ilokano' },
    { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
    { code: 'ga', name: 'Irish', nativeName: 'Gaeilge' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'jw', name: 'Javanese', nativeName: 'Basa Jawa' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'kk', name: 'Kazakh', nativeName: 'Қазақша' },
    { code: 'km', name: 'Khmer', nativeName: 'ខ្មែរ' },
    { code: 'rw', name: 'Kinyarwanda', nativeName: 'Kinyarwanda' },
    { code: 'gom', name: 'Konkani', nativeName: 'कोंकणी' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'kri', name: 'Krio', nativeName: 'Krio' },
    { code: 'ku', name: 'Kurdish (Kurmanji)', nativeName: 'Kurdî' },
    { code: 'ckb', name: 'Kurdish (Sorani)', nativeName: 'کوردی' },
    { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча' },
    { code: 'lo', name: 'Lao', nativeName: 'ລາວ' },
    { code: 'la', name: 'Latin', nativeName: 'Latina' },
    { code: 'lv', name: 'Latvian', nativeName: 'Latviešu' },
    { code: 'ln', name: 'Lingala', nativeName: 'Lingála' },
    { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
    { code: 'lg', name: 'Luganda', nativeName: 'Luganda' },
    { code: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergesch' },
    { code: 'mk', name: 'Macedonian', nativeName: 'Македонски' },
    { code: 'mai', name: 'Maithili', nativeName: 'मैथिली' },
    { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy' },
    { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'mt', name: 'Maltese', nativeName: 'Malti' },
    { code: 'mi', name: 'Maori', nativeName: 'Māori' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'mni-Mtei', name: 'Meiteilon (Manipuri)', nativeName: 'ꯃꯩꯇꯩꯂꯣꯟ' },
    { code: 'lus', name: 'Mizo', nativeName: 'Mizo ṭawng' },
    { code: 'mn', name: 'Mongolian', nativeName: 'Монгол' },
    { code: 'my', name: 'Myanmar (Burmese)', nativeName: 'မြန်မာ' },
    { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
    { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
    { code: 'or', name: 'Odia (Oriya)', nativeName: 'ଓଡ଼ିଆ' },
    { code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo' },
    { code: 'ps', name: 'Pashto', nativeName: 'پښتو' },
    { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'qu', name: 'Quechua', nativeName: 'Runasimi' },
    { code: 'ro', name: 'Romanian', nativeName: 'Română' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'sm', name: 'Samoan', nativeName: 'Gagana Samoa' },
    { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्' },
    { code: 'gd', name: 'Scots Gaelic', nativeName: 'Gàidhlig' },
    { code: 'nso', name: 'Sepedi', nativeName: 'Sepedi' },
    { code: 'sr', name: 'Serbian', nativeName: 'Српски' },
    { code: 'st', name: 'Sesotho', nativeName: 'Sesotho' },
    { code: 'sn', name: 'Shona', nativeName: 'ChiShona' },
    { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي' },
    { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' },
    { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina' },
    { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina' },
    { code: 'so', name: 'Somali', nativeName: 'Soomaali' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'su', name: 'Sundanese', nativeName: 'Basa Sunda' },
    { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
    { code: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'tt', name: 'Tatar', nativeName: 'Татар' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'th', name: 'Thai', nativeName: 'ไทย' },
    { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ' },
    { code: 'ts', name: 'Tsonga', nativeName: 'Xitsonga' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'tk', name: 'Turkmen', nativeName: 'Türkmençe' },
    { code: 'ak', name: 'Twi', nativeName: 'Twi' },
    { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
    { code: 'ug', name: 'Uyghur', nativeName: 'ئۇيغۇرچە' },
    { code: 'uz', name: 'Uzbek', nativeName: "O'zbek" },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
    { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg' },
    { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
    { code: 'yi', name: 'Yiddish', nativeName: 'ייִדיש' },
    { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
    { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
  ].map((l) => ({ ...l, isOfficial: false }));

  const ALL_LANGS = [...OFFICIAL_LANGS, ...AUTO_LANGUAGES];
  const STORAGE_KEY = 'scrawny_web_lang';
  const cacheKey = (lang) => `scrawny_web_auto_${lang}`;

  const textNodes = [];
  let currentLang = 'en';
  try {
    currentLang = localStorage.getItem(STORAGE_KEY) || 'en';
  } catch {
    currentLang = 'en';
  }

  function shouldSkipNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest('script, style, svg, code, .mono, .brand-name, [data-no-translate]')) {
      return true;
    }
    return !node.nodeValue || !node.nodeValue.trim();
  }

  function collectTextNodes() {
    textNodes.length = 0;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      if (!shouldSkipNode(n)) {
        const raw = n.nodeValue;
        const leading = raw.match(/^\s*/)[0];
        const trailing = raw.match(/\s*$/)[0];
        const trimmed = raw.trim();
        if (trimmed.length > 0 && /[A-Za-z]/.test(trimmed)) {
          textNodes.push({ node: n, original: trimmed, leading, trailing });
        }
      }
    }
  }

  function loadCache(lang) {
    try {
      const raw = localStorage.getItem(cacheKey(lang));
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveCache(lang, map) {
    try {
      localStorage.setItem(cacheKey(lang), JSON.stringify(map));
    } catch {
      // Ignore storage quota errors
    }
  }

  async function translateText(text, targetLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(
      targetLang
    )}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return (data[0] || []).map((seg) => seg[0] || '').join('');
  }

  async function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore
    }
    updateLangButtonUI();

    if (lang === 'en') {
      for (const item of textNodes) {
        item.node.nodeValue = `${item.leading}${item.original}${item.trailing}`;
      }
      return;
    }

    const cache = loadCache(lang);
    const missing = [];
    for (const item of textNodes) {
      if (cache[item.original]) {
        item.node.nodeValue = `${item.leading}${cache[item.original]}${item.trailing}`;
      } else {
        item.node.nodeValue = `${item.leading}${item.original}${item.trailing}`;
        if (!missing.includes(item.original)) missing.push(item.original);
      }
    }

    if (missing.length === 0) return;

    const batchSize = 10;
    for (let i = 0; i < missing.length; i += batchSize) {
      if (currentLang !== lang) return;
      const batch = missing.slice(i, i + batchSize);
      await Promise.all(
        batch.map(async (src) => {
          try {
            const dst = await translateText(src, lang);
            if (dst && dst.trim()) {
              cache[src] = dst;
            }
          } catch {
            // Keep English fallback
          }
        })
      );
      if (currentLang !== lang) return;
      saveCache(lang, cache);
      for (const item of textNodes) {
        if (cache[item.original]) {
          item.node.nodeValue = `${item.leading}${cache[item.original]}${item.trailing}`;
        }
      }
    }
  }

  function updateLangButtonUI() {
    const codeEl = document.getElementById('lang-current-code');
    const badgeEl = document.getElementById('lang-current-badge');
    const menuEl = document.getElementById('lang-dropdown-list');
    const opt = ALL_LANGS.find((l) => l.code === currentLang) || OFFICIAL_LANGS[0];

    if (codeEl) codeEl.textContent = opt.code.split('-')[0].toUpperCase();
    if (badgeEl) {
      badgeEl.textContent = opt.isOfficial ? '(Official)' : '(Auto)';
      badgeEl.className = `lang-badge ${opt.isOfficial ? 'is-official' : 'is-auto'}`;
    }
    if (menuEl) {
      menuEl.querySelectorAll('.lang-option').forEach((btn) => {
        btn.classList.toggle('is-selected', btn.dataset.lang === currentLang);
      });
    }
  }

  function initLangMenu() {
    const wrap = document.getElementById('lang-switcher');
    const trigger = document.getElementById('lang-trigger');
    const dropdown = document.getElementById('lang-dropdown');
    const list = document.getElementById('lang-dropdown-list');
    if (!wrap || !trigger || !dropdown || !list) return;

    const searchWrap = document.createElement('div');
    searchWrap.className = 'lang-search-wrap';
    searchWrap.innerHTML = '<input type="text" class="lang-search-input" placeholder="Search language..." aria-label="Search language" />';
    dropdown.insertBefore(searchWrap, dropdown.firstChild);
    const searchInput = searchWrap.querySelector('input');

    function renderList(filterText = '') {
      const q = filterText.trim().toLowerCase();
      const filtered = q
        ? ALL_LANGS.filter(
            (opt) =>
              opt.name.toLowerCase().includes(q) ||
              opt.nativeName.toLowerCase().includes(q) ||
              opt.code.toLowerCase().includes(q)
          )
        : ALL_LANGS;

      list.innerHTML = filtered
        .map(
          (opt) => `
      <button type="button" class="lang-option${opt.code === currentLang ? ' is-selected' : ''}" data-lang="${opt.code}">
        <span class="lang-option-names">
          <span class="lang-native">${opt.nativeName}</span>
          <span class="lang-en">${opt.name}</span>
        </span>
        <span class="lang-badge ${opt.isOfficial ? 'is-official' : 'is-auto'}">${opt.isOfficial ? '(Official)' : '(Auto)'}</span>
      </button>`
        )
        .join('');

      list.querySelectorAll('.lang-option').forEach((btn) => {
        btn.addEventListener('click', () => {
          dropdown.hidden = true;
          applyLanguage(btn.dataset.lang);
        });
      });
    }

    renderList();

    searchInput.addEventListener('input', (e) => {
      renderList(e.target.value);
    });

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.hidden = !dropdown.hidden;
      if (!dropdown.hidden) {
        searchInput.value = '';
        renderList('');
        setTimeout(() => searchInput.focus(), 0);
      }
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        dropdown.hidden = true;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    collectTextNodes();
    initLangMenu();
    updateLangButtonUI();
    if (currentLang !== 'en') {
      applyLanguage(currentLang);
    }
  });
})();
