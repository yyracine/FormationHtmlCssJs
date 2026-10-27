const PWA = (() => {
  let deferredPrompt = null;

  const registerSW = async () => {
    if (!('serviceWorker' in navigator)) return;
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) showUpdateBanner();
        });
      });
    } catch (err) { console.warn('[PWA]', err); }
  };

  const initInstallPrompt = () => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (!isStandalone()) showInstallButton();
    });
    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      hideInstallButton();
      showToast('🎉 Application installée !', 'success');
    });
  };

  const showInstallButton = () => {
    if (document.getElementById('installBtn')) return;
    const btn = document.createElement('button');
    btn.id = 'installBtn';
    btn.className = 'install-btn';
    btn.innerHTML = '📲 Installer';
    btn.title = 'Installer l\'application';
    btn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      hideInstallButton();
    });
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.appendChild(btn);
  };

  const hideInstallButton = () => { const btn = document.getElementById('installBtn'); if (btn) btn.remove(); };

  const initOnlineStatus = () => {
    updateOnlineStatus();
    window.addEventListener('online', () => { updateOnlineStatus(); showToast('🌐 Connexion rétablie', 'success'); });
    window.addEventListener('offline', () => { updateOnlineStatus(); showToast('📴 Mode hors-ligne', 'error'); });
  };

  const updateOnlineStatus = () => {
    const isOnline = navigator.onLine;
    document.body.classList.toggle('is-offline', !isOnline);
    let indicator = document.getElementById('offlineIndicator');
    if (!isOnline) {
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'offlineIndicator';
        indicator.className = 'offline-indicator';
        indicator.innerHTML = '<span class="offline-indicator__icon">📴</span><span>Mode hors-ligne — Vos données sont sauvegardées</span>';
        document.body.appendChild(indicator);
        requestAnimationFrame(() => indicator.classList.add('show'));
      }
    } else if (indicator) {
      indicator.classList.remove('show');
      setTimeout(() => indicator.remove(), 400);
    }
  };

  const showUpdateBanner = () => {
    if (document.getElementById('updateBanner')) return;
    const banner = document.createElement('div');
    banner.id = 'updateBanner';
    banner.className = 'update-banner';
    banner.innerHTML = `<span>✨ Nouvelle version disponible</span><div class="update-banner__actions"><button class="update-banner__btn" id="updateNowBtn">Mettre à jour</button><button class="update-banner__close" id="updateCloseBtn">×</button></div>`;
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add('show'));
    document.getElementById('updateNowBtn').addEventListener('click', () => {
      navigator.serviceWorker.controller?.postMessage('SKIP_WAITING');
      navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload());
    });
    document.getElementById('updateCloseBtn').addEventListener('click', () => {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    });
  };

  const showToast = (message, type = 'success') => {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show toast--${type}`;
    setTimeout(() => toast.classList.remove('show'), 3000);
  };

  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isSupported = () => 'serviceWorker' in navigator && 'caches' in window;

  const init = () => {
    if (!isSupported()) return;
    registerSW();
    initInstallPrompt();
    initOnlineStatus();
  };

  return { init };
})();