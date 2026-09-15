/* Professional Solutions — lightweight Structure Flow background
   Inspired by the open-source ThreeUI Community Structure Flow concept.
   No external dependency; pauses when hidden/out of viewport. */
(function () {
  'use strict';

  var host = document.querySelector('.hero-threeui-flow');
  if (!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  var ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var width = 0, height = 0, raf = 0, visible = true, last = 0;
  var points = [];
  var POINTS_DESKTOP = 170, POINTS_MOBILE = 85;
  var blue = { r: 45, g: 103, b: 153 };
  var gray = { r: 214, g: 219, b: 224 };

  function resize() {
    var rect = host.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildPoints();
  }

  function buildPoints() {
    var count = width < 768 ? POINTS_MOBILE : POINTS_DESKTOP;
    points = [];
    for (var i = 0; i < count; i++) {
      var band = i % 5;
      var x = Math.random() * width;
      var y = height * (0.18 + Math.random() * 0.62);
      var depth = 0.35 + Math.random() * 0.65;
      points.push({
        x: x,
        y: y,
        baseX: x,
        baseY: y,
        depth: depth,
        size: 0.45 + Math.random() * 1.1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.00016 + Math.random() * 0.0002,
        band: band
      });
    }
  }

  function rgba(c, a) {
    return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + a + ')';
  }

  function draw(timestamp) {
    if (!visible || document.hidden) {
      raf = 0;
      return;
    }
    if (!last) last = timestamp;
    var dt = Math.min(32, timestamp - last);
    last = timestamp;

    ctx.clearRect(0, 0, width, height);
    var t = timestamp;

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      p.x = p.baseX + Math.sin(t * p.speed + p.phase) * (8 + 18 * p.depth);
      p.y = p.baseY + Math.cos(t * p.speed * 0.8 + p.phase) * (4 + 10 * p.depth);
    }

    // Fine architectural guide-lines: very subtle and sparse.
    ctx.lineWidth = 0.6;
    for (var j = 0; j < points.length; j++) {
      var a = points[j];
      for (var k = j + 1; k < points.length; k++) {
        var b = points[k];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var d2 = dx * dx + dy * dy;
        if (d2 > 11000) continue;
        var alpha = 0.055 * (1 - d2 / 11000) * Math.min(a.depth, b.depth);
        if (alpha <= 0.002) continue;
        ctx.strokeStyle = rgba(blue, alpha);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    // Minimal points.
    for (var n = 0; n < points.length; n++) {
      var q = points[n];
      var pulse = 0.5 + 0.5 * Math.sin(t * 0.0012 + q.phase);
      var alphaPoint = 0.06 + 0.14 * q.depth + 0.04 * pulse;
      ctx.fillStyle = q.band === 0 ? rgba(blue, alphaPoint) : rgba(gray, alphaPoint * 0.55);
      ctx.beginPath();
      ctx.arc(q.x, q.y, q.size, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  }

  function setVisible(v) {
    visible = v;
    if (visible && !raf && !document.hidden) raf = requestAnimationFrame(draw);
  }

  var ro = window.ResizeObserver ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(host); else window.addEventListener('resize', resize, { passive: true });

  if (window.IntersectionObserver) {
    var io = new IntersectionObserver(function (entries) {
      setVisible(entries[0] ? entries[0].isIntersecting : true);
    }, { threshold: 0.05 });
    io.observe(host);
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    } else if (visible) {
      last = 0;
      if (!raf) raf = requestAnimationFrame(draw);
    }
  });

  resize();
  raf = requestAnimationFrame(draw);
}());
