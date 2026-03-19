// Network topology particles — homepage only
(function () {
  var canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var particles = [];
  var mouse = { x: -9999, y: -9999 };
  var raf;
  var PARTICLE_COUNT = 50;
  var CONNECT_DIST = 120;
  var MOUSE_DIST = 180;
  var SPEED = 0.3;

  function isDark() {
    var body = document.body;
    if (body.classList.contains('colorscheme-dark')) return true;
    if (body.classList.contains('colorscheme-auto') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
    return false;
  }

  function getColor(alpha) {
    return isDark()
      ? 'rgba(66,165,245,' + alpha + ')'   // $link-color-dark
      : 'rgba(21,101,192,' + alpha + ')';   // $link-color
  }

  function resize() {
    var section = canvas.parentElement;
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 2 + 1
    };
  }

  function init() {
    resize();
    particles = [];
    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function dist(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update + draw particles
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      // Mouse attraction (gentle)
      var md = dist(p, mouse);
      if (md < MOUSE_DIST && md > 1) {
        p.vx += (mouse.x - p.x) * 0.00015;
        p.vy += (mouse.y - p.y) * 0.00015;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Dampen speed
      p.vx *= 0.999;
      p.vy *= 0.999;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = getColor(0.5);
      ctx.fill();
    }

    // Draw connections
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var d = dist(particles[i], particles[j]);
        if (d < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = getColor(0.12 * (1 - d / CONNECT_DIST));
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Mouse connections
      var md = dist(particles[i], mouse);
      if (md < MOUSE_DIST) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = getColor(0.2 * (1 - md / MOUSE_DIST));
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    raf = requestAnimationFrame(draw);
  }

  // Events
  canvas.addEventListener('mousemove', function (e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', function () {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener('resize', function () {
    resize();
  });

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  init();
  draw();

  // ============================================
  // Konami Code Easter Egg
  // ↑↑↓↓←→←→BA
  // ============================================

  var konamiSeq = [38,38,40,40,37,39,37,39,66,65];
  var konamiPos = 0;
  var konamiActive = false;

  function hueForAngle(angle) {
    // Rainbow colors based on angle
    return 'hsl(' + angle + ',90%,60%)';
  }

  function triggerKonami() {
    if (konamiActive) return;
    konamiActive = true;

    var cx = canvas.width / 2;
    var cy = canvas.height / 2;

    // Phase 1: explode from center with rainbow colors
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      var angle = Math.atan2(p.y - cy, p.x - cx);
      var force = 3 + Math.random() * 4;
      p.vx = Math.cos(angle) * force;
      p.vy = Math.sin(angle) * force;
      p.r = Math.random() * 3 + 2;
      p._hue = (i / particles.length) * 360;
    }

    // Override getColor temporarily
    var origGetColor = getColor;
    getColor = function (alpha) {
      // Will be overridden per-particle in draw, but connections use this
      return 'rgba(255,255,255,' + alpha + ')';
    };

    // Override draw temporarily for rainbow particles
    var origDraw = draw;
    var frameCount = 0;

    function konamiDraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Slow down gradually
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Shift hue
        p._hue = (p._hue + 2) % 360;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = hueForAngle(p._hue);
        ctx.fill();
      }

      // Draw rainbow connections
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var d = dist(particles[i], particles[j]);
          if (d < CONNECT_DIST * 1.5) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            var hue = (particles[i]._hue + particles[j]._hue) / 2;
            ctx.strokeStyle = 'hsla(' + hue + ',80%,60%,' + (0.3 * (1 - d / (CONNECT_DIST * 1.5))) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Show quick-links panel below navigation
      if (frameCount === 1) {
        var hint = document.getElementById('konami-hint');
        if (hint) hint.style.display = 'none';

        var overlay = document.createElement('div');
        overlay.id = 'konami-overlay';
        overlay.className = 'konami-panel';
        overlay.innerHTML =
          '<div class="konami-panel-inner">' +
            '<span class="konami-panel-title">$ kubectl get resources</span>' +
            '<div class="konami-panel-links">' +
              '<a href="https://kazakov.xyz/cv" target="_blank">CV</a>' +
              '<a href="https://kazakov.xyz/cal" target="_blank">Book a call</a>' +
              '<a href="https://github.com/kksudo/" target="_blank">GitHub</a>' +
              '<a href="https://www.linkedin.com/in/kazakovk/" target="_blank">LinkedIn</a>' +
              '<a href="https://notes.kazakov.xyz" target="_blank">Notes</a>' +
              '<a href="https://www.amazon.com/Kubernetes-Cookbook-Practical-Mastering-Production-ebook/dp/B0D9V441VQ/" target="_blank">Book</a>' +
              '<a href="mailto:k@kazakov.xyz">Email</a>' +
            '</div>' +
          '</div>';
        document.body.appendChild(overlay);
        setTimeout(function () { overlay.style.opacity = '1'; }, 50);
      }

      // After 3 seconds, restore particles but keep panel visible
      if (frameCount < 180) {
        raf = requestAnimationFrame(konamiDraw);
      } else {
        restoreParticles();
      }
    }

    // Restore particles to normal (but keep panel)
    function restoreParticles() {
      getColor = origGetColor;
      konamiActive = false;
      for (var i = 0; i < particles.length; i++) {
        particles[i].r = Math.random() * 2 + 1;
        particles[i].vx = (Math.random() - 0.5) * SPEED;
        particles[i].vy = (Math.random() - 0.5) * SPEED;
        delete particles[i]._hue;
      }
      cancelAnimationFrame(raf);
      draw();
    }

    // Dismiss panel on click outside it
    function dismissPanel(e) {
      var overlay = document.getElementById('konami-overlay');
      if (!overlay) return;
      // If click is inside panel links, let it through
      if (overlay.contains(e.target) && e.target.tagName === 'A') return;
      // Otherwise dismiss
      document.removeEventListener('click', dismissPanel);
      overlay.style.opacity = '0';
      setTimeout(function () { overlay.remove(); }, 500);
    }

    // Start: dismiss panel on outside click (with delay so the triggering keypress doesn't count)
    setTimeout(function () {
      document.addEventListener('click', dismissPanel);
    }, 200);

    cancelAnimationFrame(raf);
    konamiDraw();
  }

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === konamiSeq[konamiPos]) {
      konamiPos++;
      if (konamiPos === konamiSeq.length) {
        konamiPos = 0;
        triggerKonami();
      }
    } else {
      konamiPos = 0;
    }
  });
})();
