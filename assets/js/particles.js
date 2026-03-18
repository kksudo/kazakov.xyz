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
})();
