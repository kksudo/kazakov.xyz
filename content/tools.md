---
title: "Projects"
description: "Security tools, writing, and experiments by Scott Schlangen"
aliases: ["tools", "projects"]
eyebrow: "Build"
subtitle: "Tools operators can use, writing that clarifies the craft, and the systems I test ideas in."
sidebar:
  label: "Jump to"
  groups:
    - title: "On this page"
      items:
        - label: "SOAR lab"
          href: "#soar-lab-a-human-gate-between-the-siem-and-the-firewall"
          hint: "New"
        - label: "In-house app hosting"
          href: "#in-house-hosting-for-the-lab"
          hint: "Platform"
        - label: "Vulnerability framework"
          href: "#vulnerability-reporting-framework"
          hint: "Python"
        - label: "AI agents and MCP"
          href: "#ai-agent--mcp-automation"
          hint: "Ops"
    - title: "SOAR lab"
      items:
        - label: "Project page and video"
          href: "https://soardemo.scottslab.io"
          hint: "Live"
        - label: "Write-up"
          href: "https://soardemo.scottslab.io/writeup"
          hint: "12 min"
        - label: "Code, MIT"
          href: "https://github.com/schlangens/soar-lab"
          hint: "Repo"
    - title: "Open tools"
      items:
        - label: "Scrambler"
          href: "https://scramble.scottslab.io"
          hint: "PII"
        - label: "WX Dashboard"
          href: "https://wx.scottslab.io"
          hint: "Weather"
        - label: "CyberChef"
          href: "https://chef.scottslab.io"
          hint: "Transform"
    - title: "Writing"
      items:
        - label: "Hacking with AI"
          href: "https://scottslab.io/posts/hacking-with-ai-security-engineers-guide"
          hint: "AI"
        - label: "Home lab SIEM"
          href: "https://scottslab.io/posts/home-lab-siem-wazuh-custom-detection"
          hint: "Wazuh"
        - label: "Hardening pass"
          href: "https://scottslab.io/posts/infrastructure-security-hardening-firewall-ids-siem"
          hint: "pfSense"
        - label: "CSI Linux forensics"
          href: "https://scottslab.io/posts/csi-linux-digital-forensics-workstation"
          hint: "DFIR"
        - label: "Evidence pipeline"
          href: "https://scottslab.io/posts/forensic-evidence-pipeline-workstation-to-locker"
          hint: "DFIR"
        - label: "Ansible & Ludus"
          href: "https://scottslab.io/posts/ansible-ludus-homelab-infrastructure-as-code"
          hint: "IaC"
        - label: "Action1 for Windows"
          href: "https://scottslab.io/posts/action1-windows-management-ansible-alternative"
          hint: "RMM"
        - label: "All Lab posts"
          href: "https://scottslab.io/posts"
          hint: "Archive"
    - title: "GitHub"
      items:
        - label: "soar-lab"
          href: "https://github.com/schlangens/soar-lab"
          hint: "SOAR"
        - label: "soardemo"
          href: "https://github.com/schlangens/soardemo"
          hint: "Next.js"
        - label: "All repositories"
          href: "https://github.com/schlangens"
          hint: "Profile"
    - title: "This site"
      items:
        - label: "About"
          href: "/about/"
          hint: "Story"
        - label: "Resume"
          href: "/cv/"
          hint: "Timeline"
        - label: "Now"
          href: "/now/"
          hint: "Focus"
        - label: "Email"
          href: "mailto:scott@scottschlangen.com"
          hint: "Mail"
---

Most of this ships through Scott's Lab. Each entry below says what the project is for and what it produced. The sidebar jumps to a section here or opens the live tool, the write-up, or the repo.

### SOAR lab: a human gate between the SIEM and the firewall

Wazuh was already blocking flood sources on the pfSense WAN, with no context: a scanner and a large CDN got the same 24 hour block, and one night it blocked Google, Meta and my own media server. This build puts a SOAR layer in front of that action. The Wazuh alert posts to a Shuffle webhook, the playbook enriches the source (RDAP, Tor exits, Spamhaus DROP, the lab's own 40,000 entry IOC list, AbuseIPDB and VirusTotal when keys are present), applies an allowlist and an out-of-state check before any scoring, and posts a verdict back into Wazuh as an event. Three rules turn that verdict into block, close or escalate, and only the block rule reaches the existing pfSense response. Escalations land in DFIR-IRIS with the evidence attached and carry a one-click, token-gated approve link served by n8n, plus a push to my phone. Every outcome, automatic or approved, is a case.

**Stack:** Wazuh · Shuffle · n8n · DFIR-IRIS · pfSense · Next.js for the project page  
**Outcome:** Three verdict paths tested end to end, under a second from alert to the block table, and a 12 hour report that counts the right things: 24 firewall blocks, 16 SOAR verdicts, 8 escalations on the first run  
**See it:** [project page with the 86 second walkthrough](https://soardemo.scottslab.io), [the write-up](https://soardemo.scottslab.io/writeup), [the code, scrubbed and MIT](https://github.com/schlangens/soar-lab)

### In-house hosting for the lab

The SOAR project page, and the lab's status dashboard behind it, run on my own hardware: a small Debian container on Proxmox, one systemd template unit per Next.js app, a deploy that is git pull, build and restart, and a Cloudflare tunnel with an Access policy in front of anything that is not meant to be public. No Vercel, no exposed ports. A new app scaffolds from a script in about thirty seconds and is on GitHub from its first commit.

**Stack:** Proxmox LXC · Debian · Node via mise · systemd · Cloudflare Tunnel and Access · Next.js + shadcn  
**Use when:** You want a portfolio piece or an internal tool live on your own infrastructure with identity in front of it, and you want the next one to take minutes

### Vulnerability reporting framework

Internal Python framework built at the City of Carmel. It ingested vulnerability exports across 40+ network segments, mapped findings to MITRE ATT&CK, and produced dual-format reports, cutting monthly analysis from hours to under 30 seconds.

**Stack:** Python · MITRE ATT&CK · reporting pipelines  
**Outcome:** Faster triage, clearer leadership briefs, less spreadsheet archaeology

### AI agent & MCP automation

Hands-on work running AI coding agents and MCP-integrated automation platforms: scheduled agent jobs, sandboxed execution, and credential-scoped workflows. The SOAR lab above was built this way, across a fleet of agent sessions on the lab's own machines. The practical write-up lives in the Lab post on hacking with AI.
