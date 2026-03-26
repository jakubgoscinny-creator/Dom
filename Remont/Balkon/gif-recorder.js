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

  /* ── mobile fallback ── */
  if (IS_MOBILE) {
    // Try GIF first, then WebM
    tryLoad(PREVIEW_PATH + '.gif', function (src) { showFallback(src, 'img'); });
    function tryLoad(src, cb) {
      if (src.endsWith('.gif')) {
        const img = new Image();
        img.onload = function () { cb(src); };
        img.onerror = function () {
          tryLoad(PREVIEW_PATH + '.webm', function (s) { showFallback(s, 'video'); });
        };
        img.src = src;
      } else {
        // For video, try fetch HEAD
        fetch(src, { method: 'HEAD' }).then(function (r) {
          if (r.ok) cb(src);
        }).catch(function () {});
      }
    }
  }

  function showFallback(src, type) {
    const canvas = document.querySelector('canvas');
    if (canvas) canvas.style.display = 'none';

    document.querySelectorAll('.info-panel, .legend, .ivar-panel, .toggle-panel, .cost-panel')
      .forEach(function (el) { el.style.display = 'none'; });

    const wrap = document.createElement('div');
    wrap.id = 'gif-fallback';
    wrap.style.cssText =
      'position:fixed;inset:0;z-index:9000;background:#1a1a2e;display:flex;' +
      'flex-direction:column;align-items:center;justify-content:center;padding:16px;';

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
      media.alt = PROJECT + ' preview';
    }
    media.style.cssText =
      'max-width:100%;max-height:75vh;border-radius:12px;' +
      'box-shadow:0 8px 32px rgba(0,0,0,0.5);';

    const btn = document.createElement('button');
    btn.textContent = 'Otwórz widok 3D →';
    btn.style.cssText =
      'margin-top:16px;padding:12px 28px;border:none;border-radius:999px;' +
      'background:linear-gradient(135deg,#9b7ec8,#4a8c5c);color:#fff;' +
      'font-size:15px;font-weight:600;cursor:pointer;' +
      'box-shadow:0 4px 16px rgba(155,126,200,0.3);';
    btn.onclick = function () {
      wrap.remove();
      if (canvas) canvas.style.display = '';
      document.querySelectorAll('.info-panel, .legend, .ivar-panel, .toggle-panel, .cost-panel')
        .forEach(function (el) { el.style.display = ''; });
    };

    wrap.appendChild(media);
    wrap.appendChild(btn);
    document.body.appendChild(wrap);
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

    // Orbit params
    const FRAMES = 72;
    const dx = startPos.x - TARGET.x;
    const dz = startPos.z - TARGET.z;
    const radius = Math.sqrt(dx * dx + dz * dz);
    const startAngle = Math.atan2(dz, dx);
    const camY = startPos.y;

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
      if (frame >= FRAMES) {
        finishRecording();
        return;
      }

      const angle = startAngle + (frame / FRAMES) * Math.PI * 2;
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
      fill.style.width = Math.round((frame / FRAMES) * 100) + '%';
      statusEl.textContent = 'Klatka ' + frame + '/' + FRAMES;

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
      buildGIF(frameDataURLs, 80, function (gifBlob) {
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
