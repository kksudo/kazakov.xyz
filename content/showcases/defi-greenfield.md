+++
title = "Greenfield AWS platform for an RWA/DeFi product"
description = "CTO at Aura X Capital: RWA in DeFi — liquidity vaults for tokenized Centrifuge funds. Architecture, scaling, FinOps and security boundaries; AWS from scratch, ~20 services, custom CDN. 350k+ users, 1.2B+ transactions."
date = "2026-08-27"
weight = 0
keywords = ["RWA", "tokenized real-world assets", "DeFi infrastructure", "FinTech startup", "greenfield AWS", "EKS", "FluxCD", "CTO", "Kirill Kazakov"]
category = "RWA · DeFi"
metric = "1.2B+"
metricLabel = "transactions"
ask = "We're launching an RWA/DeFi product and need infra that holds from day one."
stack = ["EKS", "Terraform", "FluxCD", "Prometheus", "Grafana", "Loki", "GitHub Actions", "Custom CDN"]
+++

Aura X Capital runs liquidity vaults for tokenized real-world-asset funds from [Centrifuge](https://centrifuge.io/) — deJAAA, deJTRSY and deHYB, with subscription and redemption in USDC. As CTO I own the architecture: how the on-chain side meets the backend, how it holds up as load grows, FinOps, security boundaries, and the engineering process across roughly 20 services.

Underneath it, an empty AWS account turned into a platform: EKS and FluxCD on Terraform, Prometheus, Grafana and Loki for visibility, one set of reusable GitHub Actions workflows shared by those services, and [CDNN](https://cdnn.cloud/) — a custom CDN I designed so the product stays reachable where third-party CDNs are blocked.
