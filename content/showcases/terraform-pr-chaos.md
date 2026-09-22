+++
title = "Terraform changes reviewable in the pull request"
description = "Atlantis (or similar): plan and apply right in the PR. Reviewers see terraform plan output, approvals gate apply, state stays consistent. Terraform changes become reviewable and safe."
date = "2026-02-18"
weight = 6
keywords = ["Terraform", "Atlantis", "IaC", "GitOps", "infrastructure as code", "Terraform workflow", "Kirill Kazakov"]
category = "Terraform · GitOps"
ask = "Terraform PRs are chaos — no plan in the PR, apply is manual and scary."
stack = ["Terraform", "Atlantis", "Gated apply", "Remote state"]
+++

Plan and apply move into the pull request: reviewers read the actual `terraform plan` output, approval gates the apply, and state stays consistent.

Infrastructure changes become reviewable instead of "run plan locally and hope".
