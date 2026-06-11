# kazakov.xyz — local development & checks
#
# Quick start:
#   make serve          # local dev server with drafts
#   make check          # full local validation before push
#
# CV PDFs are NOT hosted on the site (privacy decision, 2026-06):
# they are generated in the job-search repo (99-automation/cv_pdfs.py)
# and shared on request only.

HUGO       ?= hugo
HUGO_PORT  ?= 1313
PUBLIC_DIR := public

.PHONY: help serve build clean check

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

serve: ## Run local dev server (drafts + fast render off for accuracy)
	$(HUGO) server -D --disableFastRender --port $(HUGO_PORT)

build: ## Production build into public/ (same flags as CI)
	$(HUGO) --minify --printPathWarnings
	@echo "[SUCCESS] build complete: $(PUBLIC_DIR)/"

clean: ## Remove generated artifacts
	rm -rf $(PUBLIC_DIR) resources/_gen
	@echo "[SUCCESS] cleaned"

check: build ## Full local validation
	@test ! -d static/files || { echo "[ERROR] static/files exists - CV PDFs must not be committed (by-request policy)"; exit 1; }
	@echo "[SUCCESS] all checks passed"
