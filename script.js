/**
 * ADL LAW & CONSULTANCY - JAVASCRIPT LOGIC
 * - Disabled Nav Interaction with Toast Feedback
 * - Background Image Switcher (Night Bridge / Twilight / Panorama)
 * - Copy Email to Clipboard
 * - Mobile Navigation Drawer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const disabledNavButtons = document.querySelectorAll('.disabled-nav');
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDesc');
  const toastCloseBtn = document.getElementById('toastCloseBtn');
  let toastTimer = null;

  // 1. Toast Notification for Disabled Links
  function showToast(sectionName) {
    if (!toast) return;

    if (toastTimer) clearTimeout(toastTimer);

    toastTitle.textContent = `${sectionName} • Hazırlık Aşaması`;
    toastDesc.textContent = `"${sectionName}" sayfası ve ilgili içerikler şu anda hazırlanmaktadır. ADL Law & Consultancy dijital platformumuz çok yakında yayında olacaktır.`;

    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  disabledNavButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionName = btn.getAttribute('data-section') || 'Bu Bölüm';
      showToast(sectionName);
    });
  });

  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', () => {
      if (toast) toast.classList.remove('show');
      if (toastTimer) clearTimeout(toastTimer);
    });
  }

  // 2. Background Image Switcher
  const switcherBtns = document.querySelectorAll('.switcher-btn');
  const bgLayers = {
    '1': document.getElementById('bgLayer1'),
    '2': document.getElementById('bgLayer2'),
    '3': document.getElementById('bgLayer3')
  };

  switcherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const bgId = btn.getAttribute('data-bg');

      // Update button active states
      switcherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update background layers
      Object.keys(bgLayers).forEach(key => {
        if (bgLayers[key]) {
          if (key === bgId) {
            bgLayers[key].classList.add('active');
          } else {
            bgLayers[key].classList.remove('active');
          }
        }
      });
    });
  });

  // 3. Copy Email to Clipboard
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailLink = document.getElementById('firmEmailLink');

  if (copyEmailBtn && emailLink) {
    copyEmailBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = emailLink.textContent.trim();

      try {
        await navigator.clipboard.writeText(email);
        const originalIcon = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #2ed573;"></i>';
        copyEmailBtn.title = 'Kopyalandı!';

        showToast('E-Posta Kopyalandı');
        toastDesc.textContent = `${email} adresi panoya başarıyla kopyalandı.`;

        setTimeout(() => {
          copyEmailBtn.innerHTML = originalIcon;
          copyEmailBtn.title = 'E-postayı Kopyala';
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('E-Posta Kopyalandı');
      }
    });
  }

  // 4. Mobile Menu Drawer Toggle
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
