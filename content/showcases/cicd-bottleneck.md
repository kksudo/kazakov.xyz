+++
title = "Self-service delivery for 100+ microservices"
description = "Built a self-service platform for 100+ microservices: ArgoCD, Argo Events, Argo Workflows, reusable GitHub Actions. Result: −9% CI time, zero config drift, teams deploying without waiting on infra."
date = "2026-02-18"
weight = 1
keywords = ["CI/CD bottleneck", "self-service platform", "ArgoCD", "Argo Events", "Argo Workflows", "microservices", "GitHub Actions", "platform engineering", "Kirill Kazakov"]
category = "CI/CD · Platform"
metric = "&minus;9%"
metricLabel = "CI time"
ask = "Our CI/CD is a bottleneck. Every new service takes forever to onboard."
stack = ["ArgoCD", "Argo Events", "Argo Workflows", "GitHub Actions", "GitOps"]
+++

Reusable GitHub Actions workflows with the Argo family as the core, so a new service onboards itself instead of waiting on an infrastructure ticket.

CI time down 9%, config drift gone, and the same pattern now runs across 6+ client environments.
