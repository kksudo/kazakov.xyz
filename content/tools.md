---
title: "Projects"
description: "Security tools, writing, and experiments by Scott Schlangen"
aliases: ["tools", "projects"]
eyebrow: "Build"
subtitle: "Tools operators can use, writing that clarifies the craft, and the systems I test ideas in."
sidebar:
  label: "Jump to"
  groups:
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
        - label: "EventID-Scraper"
          href: "https://github.com/schlangens/EventID-Scraper"
          hint: "Python"
        - label: "IR-Logger"
          href: "https://github.com/schlangens/ir-logger"
          hint: "CLI"
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

A lot of this ships through Scott's Lab. The notes below cover what each project is for — use the sidebar to open the live tools, posts, and repos.

### EventID-Scraper

Faster Windows security event lookups during detection engineering. Aggregates Event ID context from authoritative sources so analysts spend less time tab-hopping and more time deciding.

**Stack:** Python · web scraping · security research  
**Use when:** Log analysis, detection rule authoring, threat hunting

### IR-Logger

A CLI for incident responders who need organized notes while the investigation is still moving. Logs observations, actions, and findings straight into markdown so the timeline survives the handoff.

**Stack:** Python · Markdown · CLI  
**Use when:** Active IR, forensic note-taking, investigation tracking

### Vulnerability reporting framework

Internal Python framework built at the City of Carmel. It ingested vulnerability exports across 40+ network segments, mapped findings to MITRE ATT&CK, and produced dual-format reports — cutting monthly analysis from hours to under 30 seconds.

**Stack:** Python · MITRE ATT&CK · reporting pipelines  
**Outcome:** Faster triage, clearer leadership briefs, less spreadsheet archaeology

### AI agent & MCP automation

Hands-on work running AI coding agents and MCP-integrated automation platforms — scheduled agent jobs, sandboxed execution, and credential-scoped workflows. The practical write-up lives in the Lab post on hacking with AI.
