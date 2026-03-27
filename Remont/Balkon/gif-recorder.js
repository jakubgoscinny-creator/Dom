/**
 * Preview Recorder & Mobile Fallback for Three.js balcony projects
 *
 * Usage: include this script AFTER Three.js scene is set up.
 * Expects globals on window: renderer, camera, controls, scene
 *
 * Recording:  open page with ?record in URL → click floating button
 *             Records a 360° orbit as WebM video + generates GIF via canvas frames
 * Mobile:     auto-detects small screen, shows GIF/WebM fallback if available
 *
 * Config via data attributes on <script> tag:
 *   data-project="projekt_A"   ← used for filename & fallback lookup
 *   data-target-x="2.3"       ← orbit center X (default 2.3)
 *   data-target-y="0.8"       ← orbit center Y (default 0.8)
 *   data-target-z="0.5"       ← orbit center Z (default 0.5)
 */
(function () {
  'use strict';

  /* ── config from script tag ── */
  const me = document.currentScript;
  const PROJECT = me?.dataset.project || 'projekt';
  const TARGET = {
    x: parseFloat(me?.dataset.targetX) || 2.3,
    y: parseFloat(me?.dataset.targetY) || 0.8,
    z: parseFloat(me?.dataset.targetZ) || 0.5
  };

  const PREVIEW_PATH = 'img/' + PROJECT + '_preview';
  const IS_MOBILE = window.innerWidth < 768;
  const WANT_RECORD = location.search.includes('record');

  /* ── i18n ── */
  var LANG = 'pl';
  try { LANG = localStorage.getItem('sdg-lang') || 'pl'; } catch (e) {}
  var L = {
    pl: {
      back: '&#8592; Projekty', project: 'Projekt', from: 'od',
      open3d: 'Otworz widok 3D', prev: '&#8592; Poprzedni', next: 'Nastepny &#8594;',
      concept: 'koncept'
    },
    en: {
      back: '&#8592; Projects', project: 'Project', from: 'from',
      open3d: 'Open 3D view', prev: '&#8592; Previous', next: 'Next &#8594;',
      concept: 'concept'
    }
  };
  var t = L[LANG] || L.pl;

  /* ── project navigation order for swipe ── */
  var PROJECTS = [
    { id: 'projekt_E_ogrod', file: 'projekt_E_ogrod_srodziemnomorski.html', name: LANG === 'en' ? 'Mediterranean Garden' : 'Ogrod Srodziemnomorski', badge: 'E', price: '~3612 ' + (LANG === 'en' ? 'PLN' : 'zl') },
    { id: 'projekt_A', file: 'projekt_A_ivar30.html', name: 'IVAR 30 cm', badge: 'A', price: '~1486 ' + (LANG === 'en' ? 'PLN' : 'zl') },
    { id: 'projekt_B', file: 'projekt_B_ivar50.html', name: 'IVAR 50 cm', badge: 'B', price: '~1618 ' + (LANG === 'en' ? 'PLN' : 'zl') },
    { id: 'projekt_C', file: 'projekt_C_premium_hygge.html', name: 'Premium Hygge', badge: 'C', price: '~1998 ' + (LANG === 'en' ? 'PLN' : 'zl') },
    { id: 'projekt_D', file: 'projekt_D_premium_jungle.html', name: 'Premium Jungle', badge: 'D', price: '~2083 ' + (LANG === 'en' ? 'PLN' : 'zl') },
    { id: 'projekt_E_vibe', file: 'projekt_E_vibe_coding_studio.html', name: 'Vibe Coding Studio', badge: 'E2', price: t.concept },
    { id: 'projekt_F', file: 'projekt_F_sunrise_art_lab.html', name: 'Sunrise Art Lab', badge: 'F', price: t.concept }
  ];
  var currentIdx = PROJECTS.findIndex(function (p) { return p.id === PROJECT; });
  if (currentIdx < 0) currentIdx = 0;

  /* ── mobile fallback ── */
  if (IS_MOBILE) {
    tryLoad(PREVIEW_PATH + '.gif', function (src) { showFallback(src, 'img'); });
    function tryLoad(src, cb) {
      if (src.endsWith('.gif')) {
        var img = new Image();
        img.onload = function () { cb(src); };
        img.onerror = function () {
          tryLoad(PREVIEW_PATH + '.webm', function (s) { showFallback(s, 'video'); });
        };
        img.src = src;
      } else {
        fetch(src, { method: 'HEAD' }).then(function (r) {
          if (r.ok) cb(src);
        }).catch(function () {});
      }
    }
  }

  function showFallback(src, type) {
    var canvas = document.querySelector('canvas');
    if (canvas) canvas.style.display = 'none';
    document.querySelectorAll('.info-panel, .legend, .ivar-panel, .toggle-panel, .cost-panel, #info, #controls, #legend, #ivar-config')
      .forEach(function (el) { el.style.display = 'none'; });

    var cur = PROJECTS[currentIdx];
    var prevIdx = (currentIdx - 1 + PROJECTS.length) % PROJECTS.length;
    var nextIdx = (currentIdx + 1) % PROJECTS.length;

    var wrap = document.createElement('div');
    wrap.id = 'gif-fallback';
    wrap.innerHTML =
      '<style>' +
      '#gif-fallback{position:fixed;inset:0;z-index:9000;display:flex;flex-direction:column;' +
        'background:linear-gradient(170deg,#1e1430 0%,#1a1028 50%,#120e20 100%);' +
        'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#f0eaf8;' +
        'overflow-y:auto;-webkit-overflow-scrolling:touch;}' +
      '.mfb-top{display:flex;align-items:center;justify-content:space-between;' +
        'padding:max(env(safe-area-inset-top,12px),12px) 16px 10px;flex-shrink:0;}' +
      '.mfb-back{display:flex;align-items:center;gap:6px;padding:10px 14px;border-radius:999px;' +
        'background:rgba(155,126,200,0.12);border:1px solid rgba(155,126,200,0.2);' +
        'color:#c4a8e8;font-size:13px;font-weight:600;text-decoration:none;' +
        '-webkit-tap-highlight-color:rgba(155,126,200,0.15);min-height:44px;}' +
      '.mfb-badge{padding:6px 12px;border-radius:999px;font-size:11px;font-weight:700;' +
        'letter-spacing:0.08em;text-transform:uppercase;color:#d4956a;' +
        'background:rgba(212,149,106,0.15);border:1px solid rgba(212,149,106,0.25);}' +
      '.mfb-media{flex:1;display:flex;align-items:center;justify-content:center;' +
        'padding:8px 16px;min-height:0;position:relative;}' +
      '.mfb-media img,.mfb-media video{max-width:100%;max-height:100%;border-radius:14px;' +
        'box-shadow:0 8px 32px rgba(0,0,0,0.5);object-fit:contain;}' +
      '.mfb-info{padding:12px 16px;flex-shrink:0;}' +
      '.mfb-title{font-size:22px;font-weight:700;margin-bottom:4px;' +
        'background:linear-gradient(135deg,#c4a8e8,#6db87a);' +
        '-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}' +
      '.mfb-price{font-size:13px;color:#b8a8cc;margin-bottom:12px;}' +
      '.mfb-actions{display:flex;gap:10px;margin-bottom:8px;}' +
      '.mfb-btn{flex:1;padding:14px;border:none;border-radius:14px;font-size:14px;' +
        'font-weight:600;cursor:pointer;min-height:48px;' +
        '-webkit-tap-highlight-color:transparent;text-align:center;}' +
      '.mfb-btn-3d{background:linear-gradient(135deg,#9b7ec8,#4a8c5c);color:#fff;' +
        'box-shadow:0 4px 16px rgba(155,126,200,0.3);}' +
      '.mfb-btn-3d:active{transform:scale(0.97);}' +
      '.mfb-nav{display:flex;gap:10px;padding:0 16px 16px;flex-shrink:0;}' +
      '.mfb-nav-btn{flex:1;padding:12px;border-radius:12px;font-size:12px;font-weight:600;' +
        'color:#c4a8e8;background:rgba(155,126,200,0.08);' +
        'border:1px solid rgba(155,126,200,0.15);cursor:pointer;text-align:center;' +
        'text-decoration:none;min-height:48px;display:flex;flex-direction:column;' +
        'align-items:center;justify-content:center;gap:2px;' +
        '-webkit-tap-highlight-color:rgba(155,126,200,0.15);}' +
      '.mfb-nav-btn:active{background:rgba(155,126,200,0.15);}' +
      '.mfb-nav-label{font-size:10px;color:#b8a8cc;opacity:0.7;}' +
      '.mfb-dots{display:flex;justify-content:center;gap:6px;padding:8px 0 4px;}' +
      '.mfb-dot{width:6px;height:6px;border-radius:50%;background:rgba(155,126,200,0.25);}' +
      '.mfb-dot.active{width:20px;border-radius:3px;background:#9b7ec8;}' +
      '</style>' +
      '<div class="mfb-top">' +
        '<a class="mfb-back" href="index.html">' + t.back + '</a>' +
        '<span class="mfb-badge">' + t.project + ' ' + cur.badge + '</span>' +
      '</div>' +
      '<div class="mfb-dots">' +
        PROJECTS.map(function (_, i) {
          return '<span class="mfb-dot' + (i === currentIdx ? ' active' : '') + '"></span>';
        }).join('') +
      '</div>' +
      '<div class="mfb-media" id="mfb-media-wrap"></div>' +
      '<div class="mfb-info">' +
        '<div class="mfb-title">' + cur.name + '</div>' +
        '<div class="mfb-price">' + t.from + ' ' + cur.price + '</div>' +
        '<div class="mfb-actions">' +
          '<button class="mfb-btn mfb-btn-3d" id="mfb-open3d">' + t.open3d + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="mfb-nav">' +
        '<a class="mfb-nav-btn" href="' + PROJECTS[prevIdx].file + '">' +
          '<span class="mfb-nav-label">' + t.prev + '</span>' +
          '<span>' + PROJECTS[prevIdx].name + '</span>' +
        '</a>' +
        '<a class="mfb-nav-btn" href="' + PROJECTS[nextIdx].file + '">' +
          '<span class="mfb-nav-label">' + t.next + '</span>' +
          '<span>' + PROJECTS[nextIdx].name + '</span>' +
        '</a>' +
      '</div>';

    document.body.appendChild(wrap);

    // Insert media
    var mediaWrap = document.getElementById('mfb-media-wrap');
    var media;
    if (type === 'video') {
      media = document.createElement('video');
      media.src = src;
      media.autoplay = true;
      media.loop = true;
      media.muted = true;
      media.playsInline = true;
    } else {
      media = document.createElement('img');
      media.src = src;
      media.alt = cur.name + ' preview';
    }
    mediaWrap.appendChild(media);

    // Open 3D button
    document.getElementById('mfb-open3d').onclick = function () {
      wrap.remove();
      if (canvas) canvas.style.display = '';
      document.querySelectorAll('.info-panel, .legend, .ivar-panel, .toggle-panel, .cost-panel, #info, #controls, #legend, #ivar-config')
        .forEach(function (el) { el.style.display = ''; });
    };

    // Swipe gesture
    var touchStartX = 0;
    var touchStartY = 0;
    wrap.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    wrap.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) {
          // swipe left → next
          window.location.href = PROJECTS[nextIdx].file;
        } else {
          // swipe right → prev
          window.location.href = PROJECTS[prevIdx].file;
        }
      }
    }, { passive: true });
  }

  /* ── Recorder (only when ?record) ── */
  if (!WANT_RECORD) return;

  // Wait a bit for scene to fully render
  setTimeout(initRecorder, 1500);

  function initRecorder() {
    const btn = document.createElement('button');
    btn.id = 'gif-rec-btn';
    btn.innerHTML = '🎬 Nagraj Preview';
    btn.style.cssText =
      'position:fixed;bottom:24px;right:24px;z-index:99999;' +
      'padding:14px 24px;border:none;border-radius:12px;' +
      'background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;' +
      'font-size:15px;font-weight:700;cursor:pointer;' +
      'box-shadow:0 4px 20px rgba(231,76,60,0.4);' +
      'transition:transform 0.15s,box-shadow 0.15s;';
    btn.onmouseenter = function () { btn.style.transform = 'scale(1.05)'; };
    btn.onmouseleave = function () { btn.style.transform = 'scale(1)'; };
    btn.onclick = startRecording;
    document.body.appendChild(btn);

    const bar = document.createElement('div');
    bar.id = 'gif-progress';
    bar.style.cssText =
      'position:fixed;bottom:76px;right:24px;z-index:99999;' +
      'width:200px;height:8px;border-radius:4px;' +
      'background:rgba(255,255,255,0.15);display:none;overflow:hidden;';
    const fill = document.createElement('div');
    fill.id = 'gif-progress-fill';
    fill.style.cssText =
      'width:0%;height:100%;border-radius:4px;' +
      'background:linear-gradient(90deg,#e74c3c,#f39c12);transition:width 0.1s;';
    bar.appendChild(fill);
    document.body.appendChild(bar);

    const status = document.createElement('div');
    status.id = 'gif-status';
    status.style.cssText =
      'position:fixed;bottom:88px;right:24px;z-index:99999;' +
      'color:#fff;font-size:13px;font-weight:600;' +
      'text-shadow:0 1px 4px rgba(0,0,0,0.5);display:none;';
    document.body.appendChild(status);
  }

  function startRecording() {
    const btn = document.getElementById('gif-rec-btn');
    const bar = document.getElementById('gif-progress');
    const fill = document.getElementById('gif-progress-fill');
    const statusEl = document.getElementById('gif-status');

    if (!window.renderer || !window.camera || !window.scene) {
      alert('Brak globalnych: renderer, camera, scene.\nUpewnij się że window.renderer/camera/scene są ustawione.');
      return;
    }

    const orbitCtrl = window.controls || window.ctrl || null;

    btn.disabled = true;
    btn.innerHTML = '⏺ Nagrywanie...';
    btn.style.background = 'linear-gradient(135deg,#555,#333)';
    bar.style.display = 'block';
    statusEl.style.display = 'block';

    const threeCanvas = window.renderer.domElement;
    const cam = window.camera;
    const startPos = cam.position.clone();

    // Force day mode before recording — detect via DOM text
    if (typeof window.toggleMode === 'function') {
      var modeEl = document.getElementById('mode-toggle') || document.getElementById('mode');
      var modeText = modeEl ? modeEl.textContent.toLowerCase() : '';
      // If currently in evening/night mode, toggle to day
      if (modeText.includes('wieczor') || modeText.includes('wieczór')
        || modeText.includes('night') || modeText.includes('noc')) {
        window.toggleMode();
      }
    }

    // Orbit params: 180° boomerang (forward + reversed = smooth loop)
    const HALF_FRAMES = 48; // 48 frames for 180° sweep
    const dx = startPos.x - TARGET.x;
    const dz = startPos.z - TARGET.z;
    const radius = Math.sqrt(dx * dx + dz * dz);
    const startAngle = Math.atan2(dz, dx);
    const camY = startPos.y;
    const TOTAL_FRAMES = HALF_FRAMES * 2; // forward + reverse = boomerang

    if (orbitCtrl) orbitCtrl.enabled = false;

    // Collect frames as data URLs for GIF
    const frameDataURLs = [];
    // Also record WebM via MediaRecorder
    var mediaRecorder = null;
    var webmChunks = [];
    try {
      var stream = threeCanvas.captureStream(0); // 0 = manual frame capture
      mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });
      mediaRecorder.ondataavailable = function (e) { if (e.data.size > 0) webmChunks.push(e.data); };
      mediaRecorder.start();
    } catch (e) {
      console.warn('[Recorder] MediaRecorder not available:', e);
    }

    let frame = 0;

    function captureFrame() {
      if (frame >= HALF_FRAMES) {
        finishRecording();
        return;
      }

      // 180° sweep only (boomerang reverse added in finishRecording)
      const angle = startAngle + (frame / HALF_FRAMES) * Math.PI;
      cam.position.set(
        TARGET.x + radius * Math.cos(angle),
        camY,
        TARGET.z + radius * Math.sin(angle)
      );
      cam.lookAt(TARGET.x, TARGET.y, TARGET.z);
      window.renderer.render(window.scene, cam);

      // Capture frame for MediaRecorder
      if (stream) {
        try { stream.getVideoTracks()[0].requestFrame(); } catch (e) {}
      }

      // Capture PNG data URL for GIF assembly
      frameDataURLs.push(threeCanvas.toDataURL('image/png'));

      frame++;
      fill.style.width = Math.round((frame / HALF_FRAMES) * 100) + '%';
      statusEl.textContent = 'Klatka ' + frame + '/' + HALF_FRAMES;

      // Use setTimeout to yield to browser for rendering
      setTimeout(captureFrame, 30);
    }

    function finishRecording() {
      // Restore camera
      cam.position.copy(startPos);
      cam.lookAt(TARGET.x, TARGET.y, TARGET.z);
      if (orbitCtrl) {
        orbitCtrl.enabled = true;
        orbitCtrl.update();
      }

      statusEl.textContent = 'Generowanie plików...';
      fill.style.width = '100%';
      fill.style.background = 'linear-gradient(90deg,#2ecc71,#27ae60)';

      // Save WebM
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.onstop = function () {
          var blob = new Blob(webmChunks, { type: 'video/webm' });
          downloadBlob(blob, PROJECT + '_preview.webm');
          console.log('[Recorder] WebM: ' + (blob.size / 1024 / 1024).toFixed(1) + ' MB');
        };
        mediaRecorder.stop();
      }

      // Build GIF using inline encoder
      statusEl.textContent = 'Składanie GIF... (może potrwać)';
      // Boomerang: add reversed frames (skip first and last to avoid stutter)
      var boomerangFrames = frameDataURLs.slice();
      for (var ri = frameDataURLs.length - 2; ri >= 1; ri--) {
        boomerangFrames.push(frameDataURLs[ri]);
      }
      // Slower: 120ms per frame (was 80ms)
      buildGIF(boomerangFrames, 120, function (gifBlob) {
        downloadBlob(gifBlob, PROJECT + '_preview.gif');
        console.log('[Recorder] GIF: ' + (gifBlob.size / 1024 / 1024).toFixed(1) + ' MB');

        btn.disabled = false;
        btn.innerHTML = '🎬 Nagraj Preview';
        btn.style.background = 'linear-gradient(135deg,#e74c3c,#c0392b)';
        bar.style.display = 'none';
        fill.style.width = '0%';
        fill.style.background = 'linear-gradient(90deg,#e74c3c,#f39c12)';
        statusEl.textContent = '✅ Zapisano GIF + WebM!';
        setTimeout(function () { statusEl.style.display = 'none'; }, 4000);
      });
    }

    setTimeout(captureFrame, 100);
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* ── Minimal GIF Encoder (no dependencies, no workers) ── */
  function buildGIF(dataURLs, delay, callback) {
    var tmpCanvas = document.createElement('canvas');
    var W = 480;
    var H = 270;
    tmpCanvas.width = W;
    tmpCanvas.height = H;
    var ctx = tmpCanvas.getContext('2d');

    var imgPromises = dataURLs.map(function (url) {
      return new Promise(function (resolve) {
        var img = new Image();
        img.onload = function () {
          ctx.clearRect(0, 0, W, H);
          ctx.drawImage(img, 0, 0, W, H);
          var imageData = ctx.getImageData(0, 0, W, H);
          resolve(imageData);
        };
        img.src = url;
      });
    });

    Promise.all(imgPromises).then(function (frames) {
      var encoder = new GIFEncoder(W, H);
      encoder.writeHeader();
      for (var i = 0; i < frames.length; i++) {
        encoder.addFrame(frames[i].data, delay);
      }
      encoder.finish();
      var blob = new Blob([encoder.getBuffer()], { type: 'image/gif' });
      callback(blob);
    });
  }

  /* ── Inline GIF89a Encoder ── */
  function GIFEncoder(width, height) {
    this.width = width;
    this.height = height;
    this.data = [];
  }

  GIFEncoder.prototype.writeByte = function (b) { this.data.push(b); };
  GIFEncoder.prototype.writeBytes = function (arr) {
    for (var i = 0; i < arr.length; i++) this.data.push(arr[i]);
  };
  GIFEncoder.prototype.writeUTF = function (s) {
    for (var i = 0; i < s.length; i++) this.data.push(s.charCodeAt(i));
  };
  GIFEncoder.prototype.writeShort = function (v) {
    this.writeByte(v & 0xFF);
    this.writeByte((v >> 8) & 0xFF);
  };

  GIFEncoder.prototype.writeHeader = function () {
    this.writeUTF('GIF89a');
    this.writeShort(this.width);
    this.writeShort(this.height);
    // GCT flag=1, color res=7, sort=0, GCT size=7 (256 colors)
    this.writeByte(0xF7);
    this.writeByte(0); // bg color index
    this.writeByte(0); // pixel aspect ratio
    // Write global color table (256 entries)
    for (var i = 0; i < 256; i++) {
      // Simple 8-bit palette: RRRGGGBB
      var r = ((i >> 5) & 7) * 36;
      var g = ((i >> 2) & 7) * 36;
      var b = (i & 3) * 85;
      this.writeByte(r);
      this.writeByte(g);
      this.writeByte(b);
    }
    // Netscape extension for looping
    this.writeByte(0x21); // extension
    this.writeByte(0xFF); // app extension
    this.writeByte(11);   // block size
    this.writeUTF('NETSCAPE2.0');
    this.writeByte(3);    // sub-block size
    this.writeByte(1);    // loop sub-block id
    this.writeShort(0);   // loop count (0 = infinite)
    this.writeByte(0);    // block terminator
  };

  GIFEncoder.prototype.addFrame = function (pixels, delay) {
    // Graphics control extension
    this.writeByte(0x21); // extension
    this.writeByte(0xF9); // GCE
    this.writeByte(4);    // block size
    this.writeByte(0);    // no transparency, no disposal
    this.writeShort(Math.round(delay / 10)); // delay in 1/100s
    this.writeByte(0);    // transparent color index
    this.writeByte(0);    // block terminator

    // Image descriptor
    this.writeByte(0x2C); // image separator
    this.writeShort(0);   // left
    this.writeShort(0);   // top
    this.writeShort(this.width);
    this.writeShort(this.height);
    this.writeByte(0);    // no LCT

    // LZW encode
    var minCodeSize = 8;
    this.writeByte(minCodeSize);

    // Map RGBA pixels to palette indices
    var indexed = new Uint8Array(this.width * this.height);
    for (var i = 0; i < indexed.length; i++) {
      var ri = i * 4;
      var r = pixels[ri];
      var g = pixels[ri + 1];
      var b = pixels[ri + 2];
      // Quantize to 8-bit palette: RRRGGGBB
      indexed[i] = ((r >> 5) << 5) | ((g >> 5) << 2) | (b >> 6);
    }

    // LZW compression
    var lzwData = this.lzwEncode(minCodeSize, indexed);
    // Write sub-blocks
    var offset = 0;
    while (offset < lzwData.length) {
      var chunkSize = Math.min(255, lzwData.length - offset);
      this.writeByte(chunkSize);
      for (var j = 0; j < chunkSize; j++) {
        this.writeByte(lzwData[offset + j]);
      }
      offset += chunkSize;
    }
    this.writeByte(0); // block terminator
  };

  GIFEncoder.prototype.lzwEncode = function (minCodeSize, pixels) {
    var clearCode = 1 << minCodeSize;
    var eoiCode = clearCode + 1;
    var codeSize = minCodeSize + 1;
    var nextCode = eoiCode + 1;
    var maxCode = (1 << codeSize);

    // Output bit buffer
    var output = [];
    var bitBuf = 0;
    var bitPos = 0;

    function writeBits(code, size) {
      bitBuf |= (code << bitPos);
      bitPos += size;
      while (bitPos >= 8) {
        output.push(bitBuf & 0xFF);
        bitBuf >>= 8;
        bitPos -= 8;
      }
    }

    // Simple hash table for LZW
    var table = {};

    function resetTable() {
      table = {};
      codeSize = minCodeSize + 1;
      nextCode = eoiCode + 1;
      maxCode = (1 << codeSize);
    }

    resetTable();
    writeBits(clearCode, codeSize);

    if (pixels.length === 0) {
      writeBits(eoiCode, codeSize);
      if (bitPos > 0) output.push(bitBuf & 0xFF);
      return output;
    }

    var curStr = '' + pixels[0];

    for (var i = 1; i < pixels.length; i++) {
      var ch = '' + pixels[i];
      var combined = curStr + ',' + ch;

      if (table[combined] !== undefined) {
        curStr = combined;
      } else {
        // Output code for curStr
        var code;
        if (curStr.indexOf(',') === -1) {
          code = parseInt(curStr);
        } else {
          code = table[curStr];
        }
        writeBits(code, codeSize);

        if (nextCode < 4096) {
          table[combined] = nextCode++;
          if (nextCode > maxCode && codeSize < 12) {
            codeSize++;
            maxCode = (1 << codeSize);
          }
        } else {
          writeBits(clearCode, codeSize);
          resetTable();
        }

        curStr = ch;
      }
    }

    // Output last code
    var lastCode;
    if (curStr.indexOf(',') === -1) {
      lastCode = parseInt(curStr);
    } else {
      lastCode = table[curStr];
    }
    writeBits(lastCode, codeSize);
    writeBits(eoiCode, codeSize);

    if (bitPos > 0) output.push(bitBuf & 0xFF);
    return output;
  };

  GIFEncoder.prototype.finish = function () {
    this.writeByte(0x3B); // GIF trailer
  };

  GIFEncoder.prototype.getBuffer = function () {
    return new Uint8Array(this.data);
  };

})();
