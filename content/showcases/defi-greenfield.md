+++
title = "\"We're launching an RWA/DeFi product and need infra that holds from day one.\""
description = "CTO at Aura X Capital: RWA in DeFi — liquidity vaults for tokenized Centrifuge funds. Architecture, scaling, FinOps and security boundaries; AWS from scratch, ~20 services, custom CDN. 350k+ users, 1.2B+ transactions."
date = "2026-08-27"
weight = 0
keywords = ["RWA", "tokenized real-world assets", "DeFi infrastructure", "FinTech startup", "greenfield AWS", "EKS", "FluxCD", "CTO", "Kirill Kazakov"]
category = "RWA · DeFi"
+++

Aura X Capital, where I'm CTO. The platform's flagship line is RWA in DeFi: liquidity vaults for tokenized real-world-asset funds from [Centrifuge](https://centrifuge.io/) — deJAAA, deJTRSY and deHYB, with subscription and redemption in USDC. I own the architecture end to end: how the on-chain side meets the backend, how it holds up as load grows, FinOps and the unit economics of the cloud bill, security and access boundaries, and the engineering process across ~20 services. In execution: AWS from an empty account with Terraform, EKS and FluxCD; Prometheus, Grafana and Loki; reusable GitHub Actions workflows; and [CDNN](https://cdnn.cloud/), a custom CDN so the product stays reachable where third-party CDNs are blocked. Today: 350k+ users, 60k MAU, 1.2B+ transactions.
