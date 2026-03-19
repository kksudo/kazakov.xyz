// Console easter egg — DevOps terminal in browser console
(function () {
  var CYAN = 'color:#00bcd4;font-weight:bold';
  var GREEN = 'color:#4caf50;font-weight:bold';
  var YELLOW = 'color:#ff9800';
  var WHITE = 'color:inherit';
  var BOLD = 'font-weight:bold;font-size:14px';
  var MONO = 'font-family:monospace;font-size:12px';

  // Banner on load
  console.log(
    '%c╔══════════════════════════════════════════╗\n' +
    '║  kazakov.xyz — DevOps with love           ║\n' +
    '╚══════════════════════════════════════════╝',
    CYAN
  );
  console.log('%cType %chelp()%c for available commands.', WHITE, GREEN, WHITE);

  // Define commands as global functions
  window.help = function () {
    console.log('%c Available commands:', BOLD);
    console.log('%c  whoami      %c— about me', GREEN, WHITE);
    console.log('%c  skills      %c— tech stack', GREEN, WHITE);
    console.log('%c  certs       %c— certifications', GREEN, WHITE);
    console.log('%c  contact     %c— reach out', GREEN, WHITE);
    console.log('%c  projects    %c— open source', GREEN, WHITE);
    console.log('%c  hire        %c— you know what to do', GREEN, WHITE);
    console.log('%c  sudo("...")  %c— try anything', YELLOW, WHITE);
    return '💡 Pro tip: try sudo("hire-me")';
  };

  window.whoami = function () {
    console.log('%c Kirill Kazakov', BOLD);
    console.log('%c Platform & DevOps Engineer · CTO · Author', MONO);
    console.log('%c 17 years in IT, 9+ in Kubernetes/AWS/Terraform', MONO);
    console.log('%c Currently: CTO @ Aura X Capital (350k+ users, 1.2B+ tx)', MONO);
    console.log('%c Previously: GlobalDots (DevOps as a Service)', MONO);
    return 'Saint Petersburg, Russia';
  };

  window.skills = function () {
    console.log('%c Tech Stack:', BOLD);
    console.log('%c ┌─ Orchestration: Kubernetes, EKS, GKE', MONO);
    console.log('%c ├─ Cloud:         AWS, GCP', MONO);
    console.log('%c ├─ IaC:           Terraform, Pulumi, CDK', MONO);
    console.log('%c ├─ CI/CD:         GitHub Actions, ArgoCD, GitOps', MONO);
    console.log('%c ├─ Observability:  Prometheus, Grafana, Loki, Thanos', MONO);
    console.log('%c ├─ Languages:     Python, Go, Bash', MONO);
    console.log('%c └─ AI/LLM:        Claude, OpenAI, LangChain', MONO);
    return 'Full stack DevOps 🛠️';
  };

  window.certs = function () {
    console.log('%c Certifications:', BOLD);
    console.log('%c  ✓ CKA — Certified Kubernetes Administrator (CNCF)', MONO);
    console.log('%c  ✓ AWS Solutions Architect — Associate', MONO);
    console.log('%c  ✓ GCP Professional Cloud Architect', MONO);
    console.log('%c  ✓ GitOps Fundamentals (Codefresh)', MONO);
    return 'All active ✅';
  };

  window.contact = function () {
    console.log('%c Let\'s connect:', BOLD);
    console.log('%c  📧 k@kazakov.xyz', MONO);
    console.log('%c  💼 linkedin.com/in/kazakovk', MONO);
    console.log('%c  🐙 github.com/kksudo', MONO);
    console.log('%c  📝 notes.kazakov.xyz', MONO);
    return 'Waiting for your message 📬';
  };

  window.projects = function () {
    console.log('%c Open Source:', BOLD);
    console.log('%c  PRGate — AI-powered code review for GitHub PRs', MONO);
    console.log('%c           github.com/kksudo/prgate', MONO);
    console.log('%c  Digital Garden — public knowledge base', MONO);
    console.log('%c           notes.kazakov.xyz', MONO);
    console.log('%c  Kubernetes Cookbook — 171-page book on Amazon', MONO);
    return 'Star ⭐ if you like it';
  };

  window.hire = function () {
    console.log('%c 🚀 Interested in working together?', BOLD);
    console.log('%c', 'font-size:1px;padding:40px 120px;background:url(https://kazakov.xyz/img/og-image.png) no-repeat center/contain');
    console.log('%c  Reach out: k@kazakov.xyz', MONO);
    console.log('%c  Or connect on LinkedIn: linkedin.com/in/kazakovk', MONO);
    return 'Looking forward to it! 🤝';
  };

  window.sudo = function (cmd) {
    if (!cmd) {
      return 'Usage: sudo("command")';
    }
    if (cmd === 'hire-me') {
      console.log('%c', 'font-size:40px', '🎉');
      console.log('%c ACCESS GRANTED', 'color:#4caf50;font-size:20px;font-weight:bold');
      console.log('%c Sending CV to your inbox...', MONO);
      console.log('%c Just kidding. But seriously:', MONO);
      console.log('%c → k@kazakov.xyz', GREEN);
      console.log('%c → linkedin.com/in/kazakovk', GREEN);
      return '✨ Thanks for playing! You found the easter egg.';
    }
    if (cmd === 'rm -rf /') {
      console.log('%c Nice try 😄', YELLOW);
      return 'Permission denied: this is a read-only website';
    }
    if (cmd === 'make me a sandwich') {
      return 'Okay. 🥪';
    }
    return cmd + ': command not found. Try help()';
  };
})();
