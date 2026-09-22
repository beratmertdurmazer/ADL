/**
 * ADL LAW & CONSULTANCY - JAVASCRIPT ENGINE
 * - Bilingual Support (Turkish & English) with Instant Toggle
 * - Automatic 10-Second Background Photo Carousel (Starts with Gündüz)
 * - Manual Background Switcher Integration
 * - Disabled Navigation with Elegant Multilingual Toast Notification
 * - Copy Email & Phone to Clipboard
 * - Mobile Navigation Drawer
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. TRANSLATION DICTIONARY & I18N SYSTEM
  // ==========================================================================
  const translations = {
    tr: {
      documentTitle: 'ADL Law & Consultancy | İstanbul Ofisi - Çok Yakında',
      topBarStatus: 'Web Sitemiz Hazırlık Aşamasındadır • Yeni Platformumuz Çok Yakında Yayında',
      menuTeam: 'Ekibimiz',
      menuPractices: 'Çalışma Alanlarımız',
      menuCareers: 'Kariyer',
      menuContact: 'İletişim',
      searchTitle: 'Arama',
      crumbHome: 'Ana Sayfa',
      crumbOffices: 'Ofisler',
      crumbCity: 'İstanbul',
      crumbStatus: 'Hazırlık Aşamasında',
      cardCategory: 'Ofis Bilgisi',
      cardLiveStatus: 'Hazırlık Aşaması',
      officeTitle: 'İstanbul',
      entitySub: 'Avukatlık & Hukuki Danışmanlık Hizmetleri',
      country: 'Türkiye',
      csTitle: 'WEB SİTEMİZ ÇOK YAKINDA YAYINDA',
      csDesc: 'ADL Law & Consultancy kurumsal web sitemiz ve dijital hizmet altyapımız hazırlanmaktadır. Çok yakında tüm detaylarıyla yayında olacağız.',
      btnEmail: 'Bize Ulaşın / E-Posta',
      btnCall: 'Hemen Arayın',
      switcherLabel: 'Görsel:',
      bgDay: 'Gündüz Panorama',
      bgDayShort: 'Gündüz',
      bgSunset: 'İkindi',
      bgNight: 'Gece Boğaz',
      bgNightShort: 'Gece',
      footerRights: 'Tüm Hakları Saklıdır.',
      footerQuote: 'Hukuki Danışmanlık ve Avukatlıkta Güven ve Mükemmellik',
      footerLocation: 'İstanbul, Türkiye',
      mobileNote: '<i class="fa-solid fa-circle-info"></i> Menüler yapım aşamasındadır',
      toastComingSoonTitle: 'Hazırlık Aşaması',
      toastComingSoonDesc: 'sayfası ve ilgili içerikler şu anda hazırlanmaktadır. ADL Law & Consultancy dijital platformumuz çok yakında yayında olacaktır.',
      toastCopiedEmailTitle: 'E-Posta Kopyalandı',
      toastCopiedEmailDesc: 'info@adllawconsultancy.com adresi panoya kopyalandı.',
      toastCopiedPhoneTitle: 'Telefon Kopyalandı',
      toastCopiedPhoneDesc: '+90 539 571 53 71 numarası panoya kopyalandı.'
    },
    en: {
      documentTitle: 'ADL Law & Consultancy | Istanbul Office - Coming Soon',
      topBarStatus: 'Website Under Construction • Our Digital Platform is Launching Soon',
      menuTeam: 'Our Team',
      menuPractices: 'Practice Areas',
      menuCareers: 'Careers',
      menuContact: 'Contact',
      searchTitle: 'Search',
      crumbHome: 'Home',
      crumbOffices: 'Offices',
      crumbCity: 'Istanbul',
      crumbStatus: 'Coming Soon',
      cardCategory: 'Office Profile',
      cardLiveStatus: 'In Preparation',
      officeTitle: 'Istanbul',
      entitySub: 'Attorneys at Law & Legal Consultancy',
      country: 'Turkey',
      csTitle: 'WEBSITE COMING SOON',
      csDesc: 'ADL Law & Consultancy corporate web platform and digital advisory infrastructure is in preparation. We will be live very soon.',
      btnEmail: 'Contact Us / Email',
      btnCall: 'Call Now',
      switcherLabel: 'Visual:',
      bgDay: 'Daytime Panorama',
      bgDayShort: 'Daytime',
      bgSunset: 'Sunset',
      bgNight: 'Night Bosphorus',
      bgNightShort: 'Night',
      footerRights: 'All Rights Reserved.',
      footerQuote: 'Excellence in Legal Practice & Corporate Advisory',
      footerLocation: 'Istanbul, Turkey',
      mobileNote: '<i class="fa-solid fa-circle-info"></i> Navigation is under preparation',
      toastComingSoonTitle: 'Coming Soon',
      toastComingSoonDesc: 'section is currently under development. ADL Law & Consultancy digital platform will be fully launched soon.',
      toastCopiedEmailTitle: 'Email Copied',
      toastCopiedEmailDesc: 'info@adllawconsultancy.com has been copied to clipboard.',
      toastCopiedPhoneTitle: 'Phone Copied',
      toastCopiedPhoneDesc: '+90 539 571 53 71 has been copied to clipboard.'
    }
  };

  let currentLang = 'tr';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = translations[lang].documentTitle;

    // Update text content with data-i18n attributes
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        if (translations[lang][key].includes('<i class=')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update Language Buttons Active State
    document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Language Button Clicks (Desktop & Mobile)
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // ==========================================================================
  // 2. AUTOMATIC 10-SECOND BACKGROUND ROTATION & MANUAL SWITCHER
  // ==========================================================================
  const switcherBtns = document.querySelectorAll('.switcher-btn');
  const bgLayers = {
    '1': document.getElementById('bgLayer1'), // Gündüz Panorama
    '2': document.getElementById('bgLayer2'), // İkindi
    '3': document.getElementById('bgLayer3')  // Gece Boğaz
  };

  let currentBgIndex = 1; // Starts with 1 (Gündüz) as requested
  const totalBgs = 3;
  let bgIntervalTimer = null;

  function switchBackground(bgId) {
    currentBgIndex = parseInt(bgId, 10);

    // Update switcher button active state
    switcherBtns.forEach(btn => {
      if (btn.getAttribute('data-bg') === String(bgId)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Cross-fade background layers
    Object.keys(bgLayers).forEach(key => {
      if (bgLayers[key]) {
        if (key === String(bgId)) {
          bgLayers[key].classList.add('active');
        } else {
          bgLayers[key].classList.remove('active');
        }
      }
    });
  }

  function startBgAutoRotation() {
    if (bgIntervalTimer) clearInterval(bgIntervalTimer);
    bgIntervalTimer = setInterval(() => {
      let nextIndex = currentBgIndex + 1;
      if (nextIndex > totalBgs) nextIndex = 1;
      switchBackground(nextIndex);
    }, 10000); // Exactly 10 seconds per user request
  }

  // Manual Click on Switcher Buttons
  switcherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const bgId = btn.getAttribute('data-bg');
      switchBackground(bgId);
      // Reset 10s auto timer after manual choice
      startBgAutoRotation();
    });
  });

  // Initialize: Ensure Gündüz is active & start auto rotation
  switchBackground(1);
  startBgAutoRotation();

  // ==========================================================================
  // 3. TOAST NOTIFICATION SYSTEM
  // ==========================================================================
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDesc');
  const toastCloseBtn = document.getElementById('toastCloseBtn');
  let toastTimer = null;

  function showToast(title, desc) {
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);

    toastTitle.textContent = title;
    toastDesc.textContent = desc;
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', () => {
      if (toast) toast.classList.remove('show');
      if (toastTimer) clearTimeout(toastTimer);
    });
  }

  // Section names mapping for toast notifications
  const sectionNames = {
    team: { tr: 'Ekibimiz', en: 'Our Team' },
    practices: { tr: 'Çalışma Alanlarımız', en: 'Practice Areas' },
    careers: { tr: 'Kariyer', en: 'Careers' },
    contact: { tr: 'İletişim', en: 'Contact' },
    search: { tr: 'Arama', en: 'Search' }
  };

  const disabledNavButtons = document.querySelectorAll('.disabled-nav');
  disabledNavButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionKey = btn.getAttribute('data-section') || 'team';
      const sectionTitle = sectionNames[sectionKey] ? sectionNames[sectionKey][currentLang] : (currentLang === 'tr' ? 'Bu Bölüm' : 'This Section');
      const title = `${sectionTitle} • ${translations[currentLang].toastComingSoonTitle}`;
      const desc = `"${sectionTitle}" ${translations[currentLang].toastComingSoonDesc}`;
      showToast(title, desc);
    });
  });

  // ==========================================================================
  // 4. COPY TO CLIPBOARD (Email & Phone)
  // ==========================================================================
  async function copyToClipboard(text, successTitle, successDesc, buttonElement) {
    try {
      await navigator.clipboard.writeText(text);
      if (buttonElement) {
        const originalIcon = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fa-solid fa-check" style="color: #2ed573;"></i>';
        setTimeout(() => {
          buttonElement.innerHTML = originalIcon;
        }, 2200);
      }
      showToast(successTitle, successDesc);
    } catch (err) {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(successTitle, successDesc);
    }
  }

  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(
        'info@adllawconsultancy.com',
        translations[currentLang].toastCopiedEmailTitle,
        translations[currentLang].toastCopiedEmailDesc,
        copyEmailBtn
      );
    });
  }

  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(
        '+90 539 571 53 71',
        translations[currentLang].toastCopiedPhoneTitle,
        translations[currentLang].toastCopiedPhoneDesc,
        copyPhoneBtn
      );
    });
  }

  // ==========================================================================
  // 5. MOBILE MENU DRAWER
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

});
