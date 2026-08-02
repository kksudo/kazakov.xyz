+++
title = "Projects"
description = "Security tools, writing, and experiments by Scott Schlangen"
aliases = ["tools", "projects"]
+++

Work that lives outside the ticket queue — tools operators can use, writing that clarifies the craft, and the home-lab systems I test ideas in. A lot of this ships through [Scott’s Lab](https://scottslab.io/).

## From [scottslab.io](https://scottslab.io/)

### Open tools

- **[Scrambler](https://scramble.scottslab.io)** — Anonymize PII for public LLMs, 100% client-side
- **[WX Dashboard](https://wx.scottslab.io)** — Indiana weather streams and alerts
- **[CyberChef](https://chef.scottslab.io)** — Encoding, decoding, encryption, and data analysis

### Recent writing

- [Hacking with AI: What Security Engineers Get Wrong](https://scottslab.io/posts/hacking-with-ai-security-engineers-guide) — practitioner guide grounded in OWASP vendor criteria
- [Building a Home Lab SIEM with Wazuh](https://scottslab.io/posts/home-lab-siem-wazuh-custom-detection) — 16 hosts, 60+ custom detection rules
- [CSI Linux as a forensics workstation](https://scottslab.io/posts/csi-linux-digital-forensics-workstation)
- [Forensic evidence pipeline](https://scottslab.io/posts/forensic-evidence-pipeline-workstation-to-locker) — workstation to evidence locker
- [Ansible & Ludus home lab IaC](https://scottslab.io/posts/ansible-ludus-homelab-infrastructure-as-code)
- [Action1 as an Ansible alternative for Windows](https://scottslab.io/posts/action1-windows-management-ansible-alternative)

[All Lab posts →](https://scottslab.io/posts)

<div class="project-block">

## [EventID-Scraper](https://github.com/schlangens/EventID-Scraper)

A reference tool for faster Windows security event lookups during detection engineering. Aggregates Event ID context from authoritative sources so analysts spend less time tab-hopping and more time deciding.

**Stack:** Python · web scraping · security research  
**Use when:** Log analysis, detection rule authoring, threat hunting

</div>

<div class="project-block">

## [IR-Logger](https://github.com/schlangens/ir-logger)

A CLI for incident responders who need organized notes while the investigation is still moving. Logs observations, actions, and findings straight into markdown so the timeline survives the handoff.

**Stack:** Python · Markdown · CLI  
**Use when:** Active IR, forensic note-taking, investigation tracking

</div>

<div class="project-block">

## Vulnerability reporting framework

Internal Python framework (built at the City of Carmel) that ingested vulnerability exports across 40+ network segments, mapped findings to MITRE ATT&CK, and produced dual-format reports — cutting monthly analysis from hours to under 30 seconds.

**Stack:** Python · MITRE ATT&CK · reporting pipelines  
**Outcome:** Faster triage, clearer leadership briefs, less spreadsheet archaeology

</div>

<div class="project-block">

## AI agent & MCP automation

Hands-on work running AI coding agents and MCP-integrated automation platforms — scheduled agent jobs, sandboxed execution, and credential-scoped workflows. Written up in more depth on the Lab, including [Hacking with AI](https://scottslab.io/posts/hacking-with-ai-security-engineers-guide).

</div>

---

More on [GitHub](https://github.com/schlangens) and [Scott’s Lab](https://scottslab.io/). Career narrative: [About](/about/) · full [Resume](/cv/).

**Contact:** [scott@scottschlangen.com](mailto:scott@scottschlangen.com)
