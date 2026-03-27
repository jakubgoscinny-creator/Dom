/**
 * Mobile UI Overlay for Three.js balcony projects
 *
 * Transforms desktop panels into mobile-friendly collapsible drawers.
 * Adds floating toolbar with day/night toggle and back button.
 * Only activates on screens < 768px wide.
 *
 * Include AFTER all other scripts:
 *   <script src="mobile-ui.js"></script>
 */
(function () {
  'use strict';

  if (window.innerWidth >= 768) return;
  // Don't run if GIF fallback is active (gif-recorder.js handles that)
  if (document.getElementById('gif-fallback')) return;
  // Wait for DOM + scene to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 300);
  }

  function init() {
    // If GIF fallback appeared in the meantime, bail out
    if (document.getElementById('gif-fallback')) return;

    injectStyles();
    createFloatingToolbar();
    transformPanels();
  }

  function injectStyles() {
    var css = document.createElement('style');
    css.textContent =
      /* floating toolbar */
      '#mui-toolbar{position:fixed;top:0;left:0;right:0;z-index:8000;' +
        'display:flex;align-items:center;justify-content:space-between;' +
        'padding:max(env(safe-area-inset-top,8px),8px) 12px 8px;' +
        'background:linear-gradient(180deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,transparent 100%);' +
        'pointer-events:none;}' +
      '#mui-toolbar>*{pointer-events:auto;}' +
      '.mui-btn{display:flex;align-items:center;gap:6px;padding:10px 14px;border:none;' +
        'border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;' +
        'min-height:44px;min-width:44px;justify-content:center;' +
        '-webkit-tap-highlight-color:transparent;' +
        'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
        'box-shadow:0 2px 12px rgba(0,0,0,0.3);}' +
      '.mui-btn:active{transform:scale(0.95);}' +
      '.mui-back{background:rgba(255,255,255,0.15);color:#fff;}' +
      '.mui-mode{background:rgba(255,255,255,0.15);color:#fff;}' +
      '.mui-mode .mui-icon{font-size:16px;}' +

      /* bottom drawer system */
      '#mui-drawer-toggle{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);' +
        'z-index:8000;display:flex;gap:8px;}' +
      '.mui-tab{padding:10px 16px;border:none;border-radius:12px;font-size:12px;font-weight:600;' +
        'color:#fff;cursor:pointer;min-height:44px;' +
        'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
        'box-shadow:0 2px 12px rgba(0,0,0,0.3);' +
        '-webkit-tap-highlight-color:transparent;' +
        'background:rgba(255,255,255,0.15);transition:background 0.15s;}' +
      '.mui-tab:active{transform:scale(0.95);}' +
      '.mui-tab.active{background:rgba(155,126,200,0.5);}' +

      '#mui-drawer{position:fixed;bottom:0;left:0;right:0;z-index:7999;' +
        'max-height:55vh;overflow-y:auto;-webkit-overflow-scrolling:touch;' +
        'background:rgba(15,10,25,0.95);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);' +
        'border-top:1px solid rgba(155,126,200,0.2);' +
        'border-radius:20px 20px 0 0;padding:16px 16px calc(16px + env(safe-area-inset-bottom,0px));' +
        'transform:translateY(100%);transition:transform 0.3s cubic-bezier(0.32,0.72,0,1);' +
        'box-shadow:0 -8px 32px rgba(0,0,0,0.4);}' +
      '#mui-drawer.open{transform:translateY(0);}' +
      '#mui-drawer .mui-handle{width:36px;height:4px;border-radius:2px;' +
        'background:rgba(255,255,255,0.25);margin:0 auto 14px;}' +
      '#mui-drawer .mui-section{display:none;}' +
      '#mui-drawer .mui-section.visible{display:block;}' +
      '#mui-drawer .mui-section h3{font-size:14px;color:#c4a8e8;margin-bottom:10px;font-weight:700;}' +

      /* ensure original panels are hidden on mobile */
      '#info,#legend,#controls,#ivar-config{' +
        'display:none !important;}' +

      /* popup fix for mobile */
      '#popup{max-width:calc(100vw - 24px) !important;font-size:13px !important;' +
        'left:12px !important;right:12px !important;' +
        'bottom:60px !important;top:auto !important;' +
        'position:fixed !important;z-index:9500 !important;' +
        'border-radius:16px !important;}' +

      /* canvas takes full screen behind overlays */
      'canvas{position:fixed !important;inset:0 !important;width:100vw !important;height:100vh !important;' +
        'height:100dvh !important;z-index:0;}';
    document.head.appendChild(css);
  }

  function createFloatingToolbar() {
    var toolbar = document.createElement('div');
    toolbar.id = 'mui-toolbar';

    // Back button
    var backBtn = document.createElement('a');
    backBtn.className = 'mui-btn mui-back';
    backBtn.href = 'index.html';
    backBtn.innerHTML = '&#8592; Projekty';

    // Mode toggle (only if toggleMode exists)
    var modeBtn = document.createElement('button');
    modeBtn.className = 'mui-btn mui-mode';
    modeBtn.innerHTML = '<span class="mui-icon">&#9788;</span>';
    var isDay = true;

    if (typeof window.toggleMode === 'function') {
      modeBtn.onclick = function () {
        window.toggleMode();
        isDay = !isDay;
        modeBtn.innerHTML = isDay
          ? '<span class="mui-icon">&#9788;</span>'
          : '<span class="mui-icon">&#9790;</span>';
      };
    } else {
      // Wait for toggleMode to become available
      var checkInterval = setInterval(function () {
        if (typeof window.toggleMode === 'function') {
          clearInterval(checkInterval);
          modeBtn.onclick = function () {
            window.toggleMode();
            isDay = !isDay;
            modeBtn.innerHTML = isDay
              ? '<span class="mui-icon">&#9788;</span>'
              : '<span class="mui-icon">&#9790;</span>';
          };
        }
      }, 500);
      // Give up after 10s
      setTimeout(function () { clearInterval(checkInterval); }, 10000);
    }

    toolbar.appendChild(backBtn);
    toolbar.appendChild(modeBtn);
    document.body.appendChild(toolbar);
  }

  function transformPanels() {
    var infoEl = document.getElementById('info');
    var legendEl = document.getElementById('legend');
    var ivarEl = document.getElementById('ivar-config');

    // Determine which tabs to show
    var tabs = [];
    if (infoEl) tabs.push({ id: 'info', label: 'Info', icon: 'i' });
    if (legendEl) tabs.push({ id: 'legend', label: 'Legenda', icon: '&#9632;' });
    if (ivarEl) tabs.push({ id: 'ivar', label: 'IVAR', icon: '&#9881;' });

    if (tabs.length === 0) return;

    // Create drawer
    var drawer = document.createElement('div');
    drawer.id = 'mui-drawer';
    drawer.innerHTML = '<div class="mui-handle"></div>';

    // Clone panel contents into drawer sections
    if (infoEl) {
      var infoSection = document.createElement('div');
      infoSection.className = 'mui-section';
      infoSection.dataset.tab = 'info';
      infoSection.innerHTML = '<h3>Informacje o projekcie</h3>';
      // Clone content, preserving live elements for cost updates
      var infoClone = infoEl.cloneNode(true);
      infoClone.style.cssText = 'display:block!important;position:static;background:none;border:none;' +
        'max-width:none;padding:0;backdrop-filter:none;color:#e8e0f4;font-size:13px;line-height:1.6;';
      infoClone.id = 'mui-info-content';
      infoSection.appendChild(infoClone);
      drawer.appendChild(infoSection);
    }

    if (legendEl) {
      var legendSection = document.createElement('div');
      legendSection.className = 'mui-section';
      legendSection.dataset.tab = 'legend';
      legendSection.innerHTML = '<h3>Legenda kolorow</h3>';
      var legendClone = legendEl.cloneNode(true);
      legendClone.style.cssText = 'display:block!important;position:static;background:none;border:none;' +
        'max-width:none;padding:0;backdrop-filter:none;color:#e8e0f4;font-size:13px;line-height:1.8;';
      legendClone.id = 'mui-legend-content';
      legendSection.appendChild(legendClone);
      drawer.appendChild(legendSection);
    }

    if (ivarEl) {
      var ivarSection = document.createElement('div');
      ivarSection.className = 'mui-section';
      ivarSection.dataset.tab = 'ivar';
      ivarSection.innerHTML = '<h3>Konfigurator IVAR</h3>';
      // For IVAR we MOVE the original (not clone) to keep event handlers working
      ivarEl.style.cssText = 'display:block!important;position:static;background:none;border:none;' +
        'width:100%;max-width:none;max-height:none;padding:0;backdrop-filter:none;color:#e8e0f4;font-size:13px;';
      ivarSection.appendChild(ivarEl);
      drawer.appendChild(ivarSection);
    }

    document.body.appendChild(drawer);

    // Create tab buttons
    var tabWrap = document.createElement('div');
    tabWrap.id = 'mui-drawer-toggle';

    var activeTab = null;

    tabs.forEach(function (tab) {
      var btn = document.createElement('button');
      btn.className = 'mui-tab';
      btn.dataset.tab = tab.id;
      btn.innerHTML = tab.label;
      btn.onclick = function () {
        if (activeTab === tab.id) {
          // Close drawer
          drawer.classList.remove('open');
          btn.classList.remove('active');
          activeTab = null;
          return;
        }
        // Switch tab
        activeTab = tab.id;
        tabWrap.querySelectorAll('.mui-tab').forEach(function (b) {
          b.classList.toggle('active', b.dataset.tab === tab.id);
        });
        drawer.querySelectorAll('.mui-section').forEach(function (s) {
          s.classList.toggle('visible', s.dataset.tab === tab.id);
        });
        drawer.classList.add('open');
        drawer.scrollTop = 0;
      };
      tabWrap.appendChild(btn);
    });

    document.body.appendChild(tabWrap);

    // Swipe down to close drawer
    var startY = 0;
    drawer.addEventListener('touchstart', function (e) {
      startY = e.touches[0].clientY;
    }, { passive: true });
    drawer.addEventListener('touchend', function (e) {
      var dy = e.changedTouches[0].clientY - startY;
      if (dy > 60) {
        drawer.classList.remove('open');
        tabWrap.querySelectorAll('.mui-tab').forEach(function (b) { b.classList.remove('active'); });
        activeTab = null;
      }
    }, { passive: true });

    // Sync cost display: periodically copy from original #info to drawer clone
    if (infoEl && document.getElementById('mui-info-content')) {
      setInterval(function () {
        var origTotal = infoEl.querySelector('#total-display');
        var cloneTotal = document.querySelector('#mui-info-content #total-display');
        if (origTotal && cloneTotal && origTotal.textContent !== cloneTotal.textContent) {
          cloneTotal.textContent = origTotal.textContent;
        }
        var origIvar = infoEl.querySelector('#ivar-info-line');
        var cloneIvar = document.querySelector('#mui-info-content #ivar-info-line');
        if (origIvar && cloneIvar && origIvar.textContent !== cloneIvar.textContent) {
          cloneIvar.textContent = origIvar.textContent;
        }
      }, 1000);
    }
  }
})();
