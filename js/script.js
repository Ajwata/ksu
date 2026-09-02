(function () {
  'use strict';

  var WHATSAPP_NUMBER = '355694851485';
  var WA_MESSAGE = {
    sq: "Përshëndetje! Jam i/e interesuar për video për biznesin tim.",
    en: "Hi! I'm interested in video content for my business."
  };

  var translations = {
    en: {
      'skip': 'Skip to content',
      'nav.portfolio': 'Portfolio',
      'nav.prices': 'Prices',
      'nav.how': 'How it works',
      'nav.about': 'About',
      'nav.contact': 'Contact',

      'hero.title': 'MAKE YOUR BUSINESS<br>LOOK GOOD ONLINE.',
      'hero.subtitle': 'Short-form videos for Instagram, TikTok and social media.',
      'hero.btnWork': 'View work',
      'hero.btnPrices': 'View prices',

      'services.title': 'VIDEO FOR BUSINESSES',
      'services.text': 'I create short, modern and visually engaging videos for businesses and social media.',
      'services.perfectFor': 'Perfect for:',
      'tag.cafesBars': 'Cafés &amp; Bars',
      'tag.restaurants': 'Restaurants',
      'tag.hairSalons': 'Hair salons',
      'tag.beautyStudios': 'Beauty salons',
      'tag.barbers': 'Barbershops',
      'tag.tattoo': 'Tattoo studios',
      'tag.hotels': 'Hotels',
      'tag.apartments': 'Apartments',
      'tag.shops': 'Shops',
      'tag.mobileShops': 'Mobile Phone Stores',
      'tag.accessoryShops': 'Accessory Stores',
      'tag.products': 'Products',

      'portfolio.title': 'PORTFOLIO',
      'portfolio.item1.title': 'TATTOO STUDIO',
      'portfolio.item1.sub': 'Short-form promotional video',
      'portfolio.item2.title': 'WINE SHOP',
      'portfolio.item2.sub': 'Short-form promotional video',
      'portfolio.item3.title': 'HOTEL &amp; RESORT',
      'portfolio.item3.sub': 'Promotional video',
      'portfolio.item4.title': 'TATTOO SESSION',
      'portfolio.item4.sub': 'Short-form promotional video',
      'portfolio.item5.title': 'RESTAURANT',
      'portfolio.item5.sub': 'Short-form promotional video',
      'portfolio.item6.title': 'TATTOO ART',
      'portfolio.item6.sub': 'Short-form promotional video',

      'prices.title': 'PRICES',
      'prices.lead': 'Simple packages. Videos ready for social media.',
      'prices.mostPopular': 'MOST POPULAR',
      'prices.includes': 'INCLUDES:',
      'prices.book': 'Book',

      'price1.feat1': 'Up to 30 minutes of filming',
      'price1.feat2': '1 short video',
      'price1.feat3': 'Up to 20 seconds',
      'price.feat.edit': 'Professional editing',
      'price.feat.music': 'Music',
      'price.feat.vertical': 'Vertical format',
      'price.feat.igtt': 'Ready for Instagram and TikTok',
      'price.feat.rev1': '1 revision',

      'price2.feat1': 'Up to 1 hour of filming',
      'price2.feat2': '1 video',
      'price2.feat3': 'Up to 45 seconds',
      'price2.feat4': 'More shots and details',
      'price2.feat5': 'Ready for social media',

      'price3.feat1': 'Up to 2 hours of filming',
      'price3.feat2': '3 short videos',
      'price3.feat3': 'Different shots and angles',
      'price3.feat4': 'Different products or services',
      'price3.feat5': '1 revision per video',

      'how.title': 'HOW IT WORKS',
      'how.step1.title': 'CHOOSE A PACKAGE',
      'how.step1.text': 'Choose the package that fits your business.',
      'how.step2.title': 'CONTACT ME',
      'how.step2.text': 'Contact me via WhatsApp or Instagram.',
      'how.step3.title': 'WE DISCUSS THE DETAILS',
      'how.step3.text': 'We discuss the idea, location and filming details.',
      'how.step4.title': 'I COME AND FILM',
      'how.step4.text': 'I come to your business and create the content.',
      'how.step5.title': 'RECEIVE YOUR VIDEO',
      'how.step5.text': 'Your video is edited and delivered ready to post.',

      'communication.title': 'COMMUNICATION',
      'communication.p1': "I'm from Ukraine, so I'll be happy to communicate with you in Ukrainian, Russian or English.",
      'communication.p2': 'If Albanian is more convenient for you, we can also discuss all the details through written messages in Albanian.',
      'communication.p3': 'We can organize everything before the shoot, so the filming process itself can be simple and comfortable.',

      'about.title': 'ABOUT KS VISUALS',
      'about.text1': "Hi, I'm the person behind KS VISUALS.",
      'about.text2': "I've loved creating content for many years and have always done it as a passion and a hobby.",
      'about.text3': "I'm an artist, and I also worked as a photographer in the past. I believe this helps me notice beauty even in the smallest details and capture it in a natural, atmospheric way.",
      'about.text4': "My goal is to create videos that don't just show your business, but also capture its mood, atmosphere and character.",
      'about.statement': '<span>YOU RUN YOUR BUSINESS.</span><br><span>I CREATE THE CONTENT.</span>',

      'ready.title': 'READY TO POST',
      'ready.lead': 'Every video is prepared for social media.',
      'ready.item1': 'Professional editing',
      'ready.item2': 'Vertical format',
      'ready.item3': 'Optimized for Instagram and TikTok',
      'ready.item4': 'Ready to post',

      'faq.title': 'FREQUENTLY ASKED QUESTIONS',
      'faq.q1': 'WHERE DO YOU WORK?',
      'faq.a1': '📍 Vlorë only.',
      'faq.q2': 'HOW LONG DOES FILMING TAKE?',
      'faq.a2': 'It depends on the package you choose.',
      'faq.q3': 'WHEN WILL I RECEIVE MY VIDEO?',
      'faq.a3': 'The delivery time will be discussed before filming.',
      'faq.q4': 'CAN WE DISCUSS EVERYTHING BY MESSAGE?',
      'faq.a4': 'Yes.',
      'faq.q5': 'WHAT FORMAT WILL I RECEIVE?',
      'faq.a5': 'The video is delivered in vertical format, optimized for Instagram and TikTok.',

      'contact.title': "LET'S MAKE YOUR BUSINESS LOOK GOOD ONLINE.",

      'footer.tagline': 'Short-form video for businesses.'
    }
  };

  var STORAGE_KEY = 'ksv-lang';
  var i18nEls = [];

  function updateWhatsAppLinks(lang) {
    var msg = WA_MESSAGE[lang] || WA_MESSAGE.sq;
    var href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    document.querySelectorAll('.wa-link').forEach(function (a) {
      a.setAttribute('href', href);
    });
  }

  function setLanguage(lang) {
    var normalized = lang === 'en' ? 'en' : 'sq';
    document.documentElement.lang = normalized;
    document.body.classList.toggle('lang-en', normalized === 'en');

    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (normalized === 'en' && translations.en[key] !== undefined) {
        el.innerHTML = translations.en[key];
      } else {
        el.innerHTML = el.getAttribute('data-i18n-original');
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === normalized;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    updateWhatsAppLinks(normalized);

    try { localStorage.setItem(STORAGE_KEY, normalized); } catch (e) { /* storage unavailable */ }
  }

  function initLanguage() {
    i18nEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
    i18nEls.forEach(function (el) {
      el.setAttribute('data-i18n-original', el.innerHTML);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });

    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ }
    setLanguage(saved || 'sq');
  }

  function initNav() {
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('main-nav');
    if (!hamburger || !nav) return;

    function closeNav() {
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(function (el) {
      el.classList.add('reveal-pending');
      io.observe(el);
    });
  }

  function initHeroVideo() {
    var video = document.querySelector('.hero-video');
    if (!video) return;

    // Only reveal the video once it actually has a frame to show; if the
    // source is missing (no file added yet) it just stays hidden and the
    // animated CSS fallback behind it keeps showing.
    video.addEventListener('loadeddata', function () {
      video.classList.add('is-ready');
    });

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      video.removeAttribute('autoplay');
      video.pause();
    } else {
      video.play().catch(function () { /* autoplay blocked, fallback stays visible */ });
    }
  }

  function initPortfolioInline() {
    var cards = document.querySelectorAll('.portfolio-card');
    if (!cards.length) return;

    var activeCard = null;

    function collapse(card) {
      var playBtn = card.querySelector('.portfolio-play');
      var embed = card.querySelector('.portfolio-embed');
      var inner = card.querySelector('.portfolio-embed-inner');
      inner.innerHTML = ''; // removing the iframe stops playback
      embed.hidden = true;
      playBtn.hidden = false;
      card.classList.remove('is-active');
      if (activeCard === card) activeCard = null;
    }

    function expand(card) {
      var playBtn = card.querySelector('.portfolio-play');
      var youtubeId = playBtn ? playBtn.getAttribute('data-youtube-id') : null;
      if (!youtubeId) return;

      if (activeCard && activeCard !== card) collapse(activeCard);

      var embed = card.querySelector('.portfolio-embed');
      var inner = card.querySelector('.portfolio-embed-inner');

      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + youtubeId + '?autoplay=1&playsinline=1&rel=0&modestbranding=1';
      iframe.title = playBtn.getAttribute('aria-label') || 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      inner.innerHTML = '';
      inner.appendChild(iframe);
      playBtn.hidden = true;
      embed.hidden = false;
      card.classList.add('is-active');
      activeCard = card;

      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    cards.forEach(function (card) {
      var playBtn = card.querySelector('.portfolio-play');
      var closeBtn = card.querySelector('.portfolio-embed-close');
      if (playBtn) playBtn.addEventListener('click', function () { expand(card); });
      if (closeBtn) closeBtn.addEventListener('click', function () { collapse(card); });
    });
  }

  function initFooterYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  function initFaqAccordion() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    items.forEach(function (item) {
      var summary = item.querySelector('summary');
      var content = item.querySelector('.faq-content');
      if (!summary || !content) return;

      var animation = null;
      var isClosing = false;
      var isExpanding = false;

      function onFinish(openState) {
        item.open = openState;
        animation = null;
        isClosing = false;
        isExpanding = false;
        item.style.height = '';
        item.style.overflow = '';
      }

      function expand() {
        item.style.overflow = 'hidden';
        isExpanding = true;
        var startHeight = item.offsetHeight;
        var endHeight = summary.offsetHeight + content.offsetHeight;
        if (animation) animation.cancel();
        animation = item.animate(
          { height: [startHeight + 'px', endHeight + 'px'] },
          { duration: 260, easing: 'cubic-bezier(.22,.61,.36,1)' }
        );
        animation.onfinish = function () { onFinish(true); };
        animation.oncancel = function () { isExpanding = false; };
      }

      function open() {
        item.style.height = item.offsetHeight + 'px';
        item.open = true;
        window.requestAnimationFrame(function () { window.requestAnimationFrame(expand); });
      }

      function close() {
        item.style.overflow = 'hidden';
        isClosing = true;
        var startHeight = item.offsetHeight;
        var endHeight = summary.offsetHeight;
        if (animation) animation.cancel();
        animation = item.animate(
          { height: [startHeight + 'px', endHeight + 'px'] },
          { duration: 220, easing: 'cubic-bezier(.22,.61,.36,1)' }
        );
        animation.onfinish = function () { onFinish(false); };
        animation.oncancel = function () { isClosing = false; };
      }

      summary.addEventListener('click', function (e) {
        e.preventDefault();
        if (reduceMotion || typeof item.animate !== 'function') {
          item.open = !item.open;
          return;
        }
        if (isClosing || !item.open) {
          open();
        } else if (isExpanding || item.open) {
          close();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initNav();
    initReveal();
    initHeroVideo();
    initPortfolioInline();
    initFaqAccordion();
    initFooterYear();
  });
})();
