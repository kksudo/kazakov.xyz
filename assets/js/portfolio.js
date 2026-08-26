(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveals() {
    var targets = document.querySelectorAll(".portfolio-section, .impact-item, .voice-quote");
    if (!targets.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  function initLinkTrees() {
    document.querySelectorAll("[data-link-tree]").forEach(function (tree) {
      tree.classList.add("is-ready");

      tree.querySelectorAll(".link-tree__toggle").forEach(function (button) {
        button.addEventListener("click", function () {
          var branch = button.closest(".link-tree__branch");
          if (!branch) return;

          var open = branch.classList.toggle("is-open");
          button.setAttribute("aria-expanded", open ? "true" : "false");
        });
      });
    });
  }

  function initEmailLinks() {
    document.querySelectorAll("a[data-email]").forEach(function (link) {
      var email = link.getAttribute("data-email");
      if (!email) return;

      link.href = "mailto:" + email;
      link.removeAttribute("target");
    });
  }

  initReveals();
  initLinkTrees();
  initEmailLinks();
})();
