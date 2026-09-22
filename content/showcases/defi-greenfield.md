+++
title = "Greenfield AWS platform for a DeFi product"
description = "CTO at Aura X Capital: AWS from scratch (EKS, Terraform, FluxCD), reusable CI/CD for ~20 services, observability stack, custom CDN. 350k+ users, 60k MAU, 1.2B+ transactions."
date = "2026-08-27"
weight = 0
keywords = ["DeFi infrastructure", "FinTech startup", "greenfield AWS", "EKS", "FluxCD", "CTO", "Kirill Kazakov"]
category = "DeFi · Greenfield"
metric = "1.2B+"
metricLabel = "transactions"
ask = "We're launching a FinTech/DeFi product and need infra that holds from day one."
stack = ["EKS", "Terraform", "FluxCD", "Prometheus", "Grafana", "Loki", "GitHub Actions", "Custom CDN"]
+++

Built the platform at Aura X Capital from an empty AWS account: EKS and FluxCD on Terraform, Prometheus, Grafana and Loki for visibility, and one set of reusable GitHub Actions workflows shared by roughly 20 services.

Where third-party CDNs are blocked, the product stays reachable through [CDNN](https://cdnn.cloud/), a custom CDN I designed for it.
