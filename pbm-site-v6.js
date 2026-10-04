(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const shell = {
    en: {
      navStore: 'STORE', navCollections: 'COLLECTIONS', navAbout: 'ABOUT', navSupport: 'SUPPORT',
      heroEyebrow: 'DIGITAL TOOLS FOR REAL USE',
      heroTitle: 'TOOLS THAT\nEARN THEIR PLACE.',
      heroText: 'Compact digital products for analysis, planning, tracking and everyday decisions. Built to be useful from the first click.',
      explore: 'Explore products', heroProduct: 'See MATCHPULSE 10',
      heroMeta: 'ONE-TIME PURCHASES • EN / DE / BG • PRACTICAL BY DESIGN',
      featuredRelease: 'FEATURED RELEASE', oneTime: 'ONE-TIME', sampleProbability: 'sample home probability',
      trustTitle: 'PURPOSE-BUILT', trust1: 'No subscriptions', trust2: 'Offline-first where possible', trust3: 'Clear documentation', trust4: 'Made for repeat use',
      catEyebrow: 'SHOP BY CATEGORY', catTitle: 'Find the kind of tool\nyou need.', catText: 'A growing catalog of focused products rather than one oversized suite.',
      sports: 'SPORT & DATA', sportsDesc: 'Models, trackers and probability tools.',
      money: 'MONEY & NUMBERS', moneyDesc: 'Calculators, comparisons and decision aids.',
      life: 'LIFE & PLANNING', lifeDesc: 'Practical systems for everyday choices.',
      creator: 'CREATOR TOOLS', creatorDesc: 'Compact workflows for digital work.',
      exploreLabel: 'EXPLORE →', coming: 'COMING SOON',
      featureEyebrow: 'FEATURED PRODUCT', featureTitle: 'See the product\nbefore you buy it.', featureText: 'Real interface previews, a clear package, and a simple one-time purchase.',
      viewProduct: 'View product', purchaseOnce: 'ONE-TIME PURCHASE',
      approachEyebrow: 'PBM APPROACH', approachTitle: 'Built like a tool,\nnot a content bundle.', approachText: 'Small products can still feel serious when the job is clear, the interface is polished and the documentation earns its place.',
      value1: 'Useful by default', value1Text: 'The main product performs a concrete job before any bonus material appears.',
      value2: 'Clear before clever', value2Text: 'The interface should make sense without forcing the buyer to decode it.',
      value3: 'Worth keeping', value3Text: 'Focused products, polished enough to stay in someone’s toolkit.',
      footerTag: 'Practical digital products, thoughtfully built.', footerLinks: 'Store · Collections · About · Support',
      productBack: 'Back to store', productIncludes: 'What you get', productHighlights: 'What it does', productHow: 'How to use it', productImportant: 'Important to know', productFaq: 'Questions before buying',
      productBuy: 'Buy now', checkoutPending: 'Checkout will be connected before launch.', productFinalTitle:'Football analysis, kept practical.', productFinalSub:'One toolkit, one-time purchase, three languages.', digitalDownload:'Digital download. Secure checkout and automatic delivery are handled by Payhip.',
      productGalleryMain: 'Main model', productGalleryTracker: 'Prediction tracker', productGalleryGuide: 'Field guide',
      productOneTime: 'One-time purchase', productLang: 'EN / DE / BG', productOffline: 'Offline-first', productNoApi: 'No paid API required',
      currentProduct: 'CURRENT PRODUCT', readmeWorksheet:'README + Worksheet', moreProducts:'More products',
      menu: 'Menu', close: 'Close'
    },
    de: {
      navStore: 'SHOP', navCollections: 'KATEGORIEN', navAbout: 'ÜBER UNS', navSupport: 'SUPPORT',
      heroEyebrow: 'DIGITALE TOOLS FÜR ECHTE ANWENDUNG',
      heroTitle: 'TOOLS, DIE\nIHREN PLATZ VERDIENEN.',
      heroText: 'Kompakte digitale Produkte für Analyse, Planung, Tracking und alltägliche Entscheidungen. Von Anfang an auf praktischen Nutzen ausgelegt.',
      explore: 'Produkte entdecken', heroProduct: 'MATCHPULSE 10 ansehen',
      heroMeta: 'EINMALKAUF • EN / DE / BG • PRAKTISCH ENTWORFEN',
      featuredRelease: 'AUSGEWÄHLTES PRODUKT', oneTime: 'EINMALIG', sampleProbability: 'Beispiel: Heimwahrscheinlichkeit',
      trustTitle: 'ZWECKORIENTIERT', trust1: 'Keine Abos', trust2: 'Offline-first, wo sinnvoll', trust3: 'Klare Dokumentation', trust4: 'Für wiederholte Nutzung',
      catEyebrow: 'NACH KATEGORIE', catTitle: 'Finde das passende\nWerkzeug.', catText: 'Ein wachsender Katalog fokussierter Produkte statt einer überladenen Komplettsuite.',
      sports: 'SPORT & DATEN', sportsDesc: 'Modelle, Tracker und Wahrscheinlichkeits-Tools.',
      money: 'GELD & ZAHLEN', moneyDesc: 'Rechner, Vergleiche und Entscheidungshilfen.',
      life: 'LEBEN & PLANUNG', lifeDesc: 'Praktische Systeme für alltägliche Entscheidungen.',
      creator: 'CREATOR TOOLS', creatorDesc: 'Kompakte Workflows für digitale Arbeit.',
      exploreLabel: 'ANSEHEN →', coming: 'BALD',
      featureEyebrow: 'AUSGEWÄHLTES PRODUKT', featureTitle: 'Sieh das Produkt,\nbevor du es kaufst.', featureText: 'Echte Interface-Vorschauen, ein klarer Lieferumfang und ein einfacher Einmalkauf.',
      viewProduct: 'Produkt ansehen', purchaseOnce: 'EINMALKAUF',
      approachEyebrow: 'PBM PRINZIP', approachTitle: 'Wie ein Tool gebaut,\nnicht wie ein Content-Paket.', approachText: 'Auch kleine Produkte können professionell wirken, wenn der Nutzen klar, das Interface sauber und die Dokumentation wirklich hilfreich ist.',
      value1: 'Von Anfang an nützlich', value1Text: 'Das Hauptprodukt erledigt eine konkrete Aufgabe, bevor Bonusmaterial ins Spiel kommt.',
      value2: 'Klar vor clever', value2Text: 'Das Interface soll verständlich sein, ohne dass der Käufer es erst entschlüsseln muss.',
      value3: 'Zum Behalten gebaut', value3Text: 'Fokussierte Produkte, sauber genug, um dauerhaft im eigenen Toolkit zu bleiben.',
      footerTag: 'Praktische digitale Produkte, sorgfältig entwickelt.', footerLinks: 'Shop · Kategorien · Über uns · Support',
      productBack: 'Zurück zum Shop', productIncludes: 'Das ist enthalten', productHighlights: 'Das kann es', productHow: 'So verwendest du es', productImportant: 'Wichtig zu wissen', productFaq: 'Fragen vor dem Kauf',
      productBuy: 'Jetzt kaufen', checkoutPending: 'Der Checkout wird vor dem Launch verbunden.', productFinalTitle:'Fußballanalyse, bewusst praktisch.', productFinalSub:'Ein Toolkit, Einmalkauf, drei Sprachen.', digitalDownload:'Digitaler Download. Sicherer Checkout und automatische Auslieferung erfolgen über Payhip.',
      productGalleryMain: 'Hauptmodell', productGalleryTracker: 'Prognose-Tracker', productGalleryGuide: 'Field Guide',
      productOneTime: 'Einmalkauf', productLang: 'EN / DE / BG', productOffline: 'Offline-first', productNoApi: 'Keine kostenpflichtige API nötig',
      currentProduct: 'AKTUELLES PRODUKT', readmeWorksheet:'README + Arbeitsblatt', moreProducts:'Weitere Produkte',
      menu: 'Menü', close: 'Schließen'
    },
    bg: {
      navStore: 'МАГАЗИН', navCollections: 'КАТЕГОРИИ', navAbout: 'ЗА НАС', navSupport: 'ПОМОЩ',
      heroEyebrow: 'ДИГИТАЛНИ ИНСТРУМЕНТИ ЗА РЕАЛНА УПОТРЕБА',
      heroTitle: 'ДИГИТАЛНИ ИНСТРУМЕНТИ,\nКОИТО ВЪРШАТ РАБОТА.',
      heroText: 'Компактни приложения и дигитални продукти за анализ, планиране и проследяване. Ясни, практични и създадени за реална употреба.',
      explore: 'Разгледай продуктите', heroProduct: 'Виж MATCHPULSE 10',
      heroMeta: 'ЕДНОКРАТНА ПОКУПКА • EN / DE / BG • ПРАКТИЧЕН ДИЗАЙН',
      featuredRelease: 'ПРЕПОРЪЧАН ПРОДУКТ', oneTime: 'ЕДНОКРАТНО', sampleProbability: 'примерна вероятност за домакин',
      trustTitle: 'С ЯСНА ЦЕЛ', trust1: 'Без абонаменти', trust2: 'Офлайн, когато е възможно', trust3: 'Ясна документация', trust4: 'За многократна употреба',
      catEyebrow: 'КАТЕГОРИИ', catTitle: 'Намери точния\nинструмент.', catText: 'Разрастващ се каталог от фокусирани продукти, вместо една претрупана система.',
      sports: 'СПОРТ И ДАННИ', sportsDesc: 'Модели, tracker-и и инструменти за вероятности.',
      money: 'ПАРИ И ЧИСЛА', moneyDesc: 'Калкулатори, сравнения и инструменти за решения.',
      life: 'ЖИВОТ И ПЛАНИРАНЕ', lifeDesc: 'Практични системи за ежедневни избори.',
      creator: 'CREATOR TOOLS', creatorDesc: 'Компактни работни процеси за дигитална работа.',
      exploreLabel: 'РАЗГЛЕДАЙ →', coming: 'ОЧАКВАЙ СКОРО',
      featureEyebrow: 'ПРЕПОРЪЧАН ПРОДУКТ', featureTitle: 'Виж продукта,\nпреди да го купиш.', featureText: 'Реални снимки на интерфейса, ясен пакет и проста еднократна покупка.',
      viewProduct: 'Виж продукта', purchaseOnce: 'ЕДНОКРАТНА ПОКУПКА',
      approachEyebrow: 'КАК РАБОТИМ', approachTitle: 'Продукти с ясна цел.', approachText: 'Не трупаме функции за бройка. Всеки продукт трябва да решава конкретна задача, да се разбира бързо и да е удобен за многократна употреба.',
      value1: 'Върши конкретна работа', value1Text: 'Основният продукт трябва да е полезен сам по себе си. Бонусите са допълнение, не оправдание.',
      value2: 'Лесен за разбиране', value2Text: 'Интерфейсът и указанията трябва да водят потребителя, без да го карат да гадае кое как работи.',
      value3: 'Направен за реална употреба', value3Text: 'Малък по обхват, но достатъчно изпипан, за да го отваряш отново, когато ти потрябва.',
      footerTag: 'Практични дигитални продукти за реална употреба.', footerLinks: 'Магазин · Категории · За нас · Помощ',
      productBack: 'Назад към магазина', productIncludes: 'Какво получаваш', productHighlights: 'Какво прави', productHow: 'Как се използва', productImportant: 'Важно да знаеш', productFaq: 'Въпроси преди покупка',
      productBuy: 'Купи сега', checkoutPending: 'Checkout-ът ще бъде свързан преди официалното пускане.', productFinalTitle:'Футболен анализ, запазен практичен.', productFinalSub:'Един пакет, еднократна покупка, три езика.', digitalDownload:'Дигитално изтегляне. Сигурният checkout и автоматичната доставка се обработват чрез Payhip.',
      productGalleryMain: 'Основен модел', productGalleryTracker: 'Tracker на прогнозите', productGalleryGuide: 'Field Guide',
      productOneTime: 'Еднократна покупка', productLang: 'EN / DE / BG', productOffline: 'Работи офлайн', productNoApi: 'Без платен API',
      currentProduct: 'ТЕКУЩ ПРОДУКТ', readmeWorksheet:'README + Работен лист', moreProducts:'Още продукти',
      menu: 'Меню', close: 'Затвори'
    }
  };

  const state = {
    lang: localStorage.getItem('pbm-lang') || 'en'
  };

  function t(key) {
    return (shell[state.lang] && shell[state.lang][key]) || shell.en[key] || key;
  }

  function localizeShell() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const value = t(key);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });
    $$('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === state.lang));
    const mobileMenu = $('#mobile-menu');
    if (mobileMenu) mobileMenu.setAttribute('aria-label', t('menu'));
    document.dispatchEvent(new CustomEvent('pbm:langchange', { detail: state.lang }));
  }

  function setLang(lang) {
    if (!shell[lang]) return;
    state.lang = lang;
    localStorage.setItem('pbm-lang', lang);
    localizeShell();
  }

  function formatPrice(product) {
    return new Intl.NumberFormat(state.lang === 'bg' ? 'bg-BG' : state.lang === 'de' ? 'de-DE' : 'en-IE', {
      style: 'currency', currency: product.currency || 'EUR', minimumFractionDigits: 2
    }).format(product.price);
  }

  function productCopy(product) {
    return product.copy[state.lang] || product.copy.en;
  }

  function productRoute(product) {
    return `${encodeURIComponent(product.id)}/`;
  }

  function renderFeatured() {
    const products = window.PBM_PRODUCTS || [];
    const product = products.find(p => p.featured) || products[0];
    if (!product) return;
    const c = productCopy(product);
    $$('[data-product-name]').forEach(el => el.textContent = c.name);
    $$('[data-product-subtitle]').forEach(el => el.textContent = c.subtitle);
    $$('[data-product-short]').forEach(el => el.textContent = c.short);
    $$('[data-product-price]').forEach(el => el.textContent = formatPrice(product));
    $$('[data-product-image-main]').forEach(el => { el.src = product.images[0]; el.alt = `${c.name} main interface`; });
    $$('[data-product-image-second]').forEach(el => { el.src = product.images[1] || product.images[0]; el.alt = `${c.name} secondary interface`; });
    const link = productRoute(product);
    $$('[data-product-link]').forEach(el => el.setAttribute('href', link));
    const list = $('#feature-includes');
    if (list) {
      list.innerHTML = c.includes.slice(0, 5).map(([name]) => `<div><span class="dot"></span><span>${escapeHtml(name)}</span></div>`).join('');
    }
  }

  function renderCatalogMore() {
    const container = $('#catalog-more');
    if (!container) return;
    const products = window.PBM_PRODUCTS || [];
    const featured = products.find(p => p.featured) || products[0];
    const others = products.filter(p => p !== featured);
    if (!others.length) { container.innerHTML = ''; container.hidden = true; return; }
    container.hidden = false;
    container.innerHTML = `<div class="catalog-more-head"><h3>${escapeHtml(t('moreProducts'))}</h3></div><div class="product-grid">${others.map(p => {
      const c = productCopy(p);
      return `<a class="product-card" href="${productRoute(p)}"><div class="product-card-art"><img src="${escapeHtml(p.images[0])}" alt="${escapeHtml(c.name)} preview"></div><div class="product-card-body"><div><span>${escapeHtml(c.eyebrow)}</span><h4>${escapeHtml(c.name)}</h4><p>${escapeHtml(c.subtitle)}</p></div><strong>${escapeHtml(formatPrice(p))}</strong></div></a>`;
    }).join('')}</div>`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function getProductFromUrl() {
    const products = window.PBM_PRODUCTS || [];
    const queryId = new URLSearchParams(location.search).get('id');
    const bodyId = document.body?.dataset.productId;
    const pathId = decodeURIComponent(location.pathname.split('/').filter(Boolean).pop() || '');
    const id = queryId || bodyId || (products.some(p => p.id === pathId) ? pathId : '') || 'matchpulse-10';
    return products.find(p => p.id === id) || products[0];
  }

  function renderShowcase(p, c) {
    const grid = $('#showcase-grid');
    if (!grid) return;
    const images = p.showcaseImages || [];
    const copy = c.showcase || [];
    grid.innerHTML = images.map((src, i) => {
      const item = copy[i] || ['', ''];
      return `
        <button class="showcase-card showcase-card-${i+1}" type="button"
          data-lightbox-src="${escapeHtml(src)}"
          data-lightbox-title="${escapeHtml(item[0])}"
          data-lightbox-text="${escapeHtml(item[1])}">
          <span class="showcase-visual"><img src="${escapeHtml(src)}" alt="${escapeHtml(item[0])}"></span>
          <span class="showcase-caption"><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span></span>
          <span class="showcase-expand" aria-hidden="true">↗</span>
        </button>`;
    }).join('');

    const se = $('#showcase-eyebrow'); if (se) se.textContent = c.showcaseEyebrow || 'SEE IT IN ACTION';
    const st = $('#showcase-title'); if (st) st.textContent = c.showcaseTitle || c.name;
    const si = $('#showcase-intro'); if (si) si.textContent = c.showcaseIntro || '';
    const sh = $('#showcase-hint'); if (sh) sh.textContent = c.showcaseHint || '';

    const be = $('#bundle-eyebrow'); if (be) be.textContent = c.bundleEyebrow || '';
    const bt = $('#bundle-title'); if (bt) bt.textContent = c.bundleTitle || '';
    const bx = $('#bundle-text'); if (bx) bx.textContent = c.bundleText || '';
    const tags = $('#bundle-tags');
    if (tags) tags.innerHTML = (c.bundleTags || []).map(v => `<span>${escapeHtml(v)}</span>`).join('');

    const bv = $('#bundle-visual');
    if (bv) {
      bv.innerHTML = `
        <div class="bundle-device bundle-device-main"><img src="${escapeHtml(p.images[0])}" alt="${escapeHtml(c.name)} main app"></div>
        <div class="bundle-device bundle-device-tracker"><img src="${escapeHtml(p.images[1])}" alt="${escapeHtml(c.name)} Tracker"></div>
        <div class="bundle-guide-card"><img src="${escapeHtml(p.images[2])}" alt="${escapeHtml(t('productGalleryGuide'))}"></div>
        <div class="bundle-stamp"><b>${escapeHtml(c.name)}</b><span>${escapeHtml(formatPrice(p))} · ${escapeHtml(t('productOneTime'))}</span></div>`;
    }

    const lightbox = $('#image-lightbox');
    const lightboxImage = $('#lightbox-image');
    const lightboxTitle = $('#lightbox-title');
    const lightboxText = $('#lightbox-text');
    const close = $('#lightbox-close');
    if (!lightbox || !lightboxImage || !close) return;

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    };
    $$('.showcase-card').forEach(card => card.addEventListener('click', () => {
      lightboxImage.src = card.dataset.lightboxSrc;
      lightboxImage.alt = card.dataset.lightboxTitle;
      lightboxTitle.textContent = card.dataset.lightboxTitle;
      lightboxText.textContent = card.dataset.lightboxText;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      close.focus();
    }));
    close.onclick = closeLightbox;
    lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };
    document.onkeydown = (e) => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); };
  }

  function renderProductPage() {
    const root = $('#product-page');
    if (!root) return;
    const p = getProductFromUrl();
    if (!p) return;
    const c = productCopy(p);
    document.title = `${c.name} | PBM Works`;
    $('#product-eyebrow').textContent = c.eyebrow;
    $('#product-name').textContent = c.name;
    $('#product-subtitle').textContent = c.subtitle;
    $('#product-description').textContent = c.description;
    const d2 = $('#product-description-2'); if (d2) d2.textContent = c.description;
    const heading2 = $('#product-subtitle-heading'); if (heading2) heading2.textContent = c.name;
    const finalTitle = $('#product-final-title'); if (finalTitle) finalTitle.textContent = t('productFinalTitle');
    const finalSub = $('#product-final-sub'); if (finalSub) finalSub.textContent = t('productFinalSub');
    const smallprint = $('#purchase-smallprint'); if (smallprint) smallprint.textContent = t('digitalDownload');
    $('#product-price').textContent = formatPrice(p);
    $('#buy-price').textContent = formatPrice(p);

    const highlights = $('#product-highlights');
    highlights.innerHTML = c.highlights.map(v => `<li>${escapeHtml(v)}</li>`).join('');

    const includes = $('#product-includes');
    includes.innerHTML = c.includes.map(([name, desc], i) => `
      <article class="include-card">
        <span class="include-index">${String(i + 1).padStart(2,'0')}</span>
        <div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(desc)}</p></div>
      </article>`).join('');

    const steps = $('#product-steps');
    steps.innerHTML = c.steps.map(([title, desc], i) => `
      <article class="step-card"><span>${String(i + 1).padStart(2,'0')}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p></article>`).join('');

    const notes = $('#product-notes');
    notes.innerHTML = c.notes.map(v => `<li>${escapeHtml(v)}</li>`).join('');

    const faq = $('#product-faq-list');
    faq.innerHTML = c.faq.map(([q, a], i) => `
      <details class="faq-item" ${i === 0 ? 'open' : ''}><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join('');

    renderShowcase(p, c);

    const buy = $('#buy-button');
    buy.textContent = `${t('productBuy')} · ${formatPrice(p)}`;
    buy.onclick = (e) => {
      if (!p.checkoutUrl) {
        e.preventDefault();
        showToast(t('checkoutPending'));
      }
    };
    if (p.checkoutUrl) buy.href = p.checkoutUrl;
  }

  let toastTimer;
  function showToast(message) {
    let el = $('#pbm-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'pbm-toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  }

  function setupNav() {
    const header = $('.site-header');
    const menuBtn = $('#mobile-menu');
    const panel = $('#mobile-panel');
    const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    if (menuBtn && panel) {
      menuBtn.addEventListener('click', () => {
        const open = panel.classList.toggle('open');
        document.body.classList.toggle('menu-open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.textContent = open ? t('close') : t('menu');
      });
      $$('a', panel).forEach(a => a.addEventListener('click', () => {
        panel.classList.remove('open');
        document.body.classList.remove('menu-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = t('menu');
      }));
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && panel.classList.contains('open')) {
          panel.classList.remove('open');
          document.body.classList.remove('menu-open');
          menuBtn.setAttribute('aria-expanded', 'false');
          menuBtn.textContent = t('menu');
          menuBtn.focus();
        }
      });
    }
  }

  function setupLangButtons() {
    $$('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
  }

  document.addEventListener('pbm:langchange', () => {
    renderFeatured();
    renderCatalogMore();
    renderProductPage();
    const menuBtn = $('#mobile-menu');
    if (menuBtn && !$('#mobile-panel')?.classList.contains('open')) menuBtn.textContent = t('menu');
  });

  document.addEventListener('DOMContentLoaded', () => {
    setupNav();
    setupLangButtons();
    localizeShell();
    renderFeatured();
    renderCatalogMore();
    renderProductPage();
  });
})();
