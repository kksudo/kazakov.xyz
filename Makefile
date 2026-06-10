# kazakov.xyz — local development & checks
#
# Quick start:
#   make serve          # local dev server with drafts
#   make check          # full local validation before push
#
# CV PDFs are generated from the job-search repo sources (CV 5.2.0 base):
#   make cv-sync JOB_SEARCH_DIR=~/projects/personal/job-search

HUGO            ?= hugo
HUGO_PORT       ?= 1313
JOB_SEARCH_DIR  ?= $(HOME)/projects/personal/job-search
PUBLIC_DIR      := public

.PHONY: help serve build clean check redirects-check cv-sync cv-verify

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

check: build redirects-check cv-verify ## Full local validation (build + redirects + CV files)
	@echo "[SUCCESS] all checks passed"

redirects-check: ## Every _redirects target must exist in the build output
	@test -f static/_redirects || { echo "[ERROR] static/_redirects missing"; exit 1; }
	@fail=0; \
	while read -r src dst code; do \
		case "$$src" in ""|"#"*) continue ;; esac; \
		f="$(PUBLIC_DIR)$$dst"; \
		if [ ! -f "$$f" ]; then echo "[ERROR] $$src -> $$dst : file not found in $(PUBLIC_DIR)/"; fail=1; fi; \
	done < static/_redirects; \
	[ "$$fail" = "0" ] && echo "[SUCCESS] redirects targets exist"

cv-verify: ## CV PDFs present and non-empty in static/files
	@fail=0; \
	for f in Kirill-Kazakov-CV.pdf Kirill-Kazakov-CV-SRE.pdf Kirill-Kazakov-CV-Lead.pdf Kirill-Kazakov-CV-Crypto.pdf; do \
		p="static/files/$$f"; \
		if [ ! -s "$$p" ]; then echo "[ERROR] missing or empty: $$p"; fail=1; \
		else head -c4 "$$p" | grep -q "%PDF" || { echo "[ERROR] not a PDF: $$p"; fail=1; }; fi; \
	done; \
	[ "$$fail" = "0" ] && echo "[SUCCESS] CV PDFs OK"

cv-sync: ## Regenerate CV PDFs from job-search md sources (needs uv + weasyprint deps)
	@test -d "$(JOB_SEARCH_DIR)" || { echo "[ERROR] job-search repo not found: $(JOB_SEARCH_DIR)"; exit 1; }
	cd "$(JOB_SEARCH_DIR)/impl/python" && \
	{ [ "$$(uname -s)" = "Darwin" ] && export DYLD_FALLBACK_LIBRARY_PATH="/opt/homebrew/lib$${DYLD_FALLBACK_LIBRARY_PATH:+:$$DYLD_FALLBACK_LIBRARY_PATH}"; } ; \
	uv run --project "$(JOB_SEARCH_DIR)/impl/python" python "$(CURDIR)/scripts/cv_pdfs.py" \
		--cv-dir "$(JOB_SEARCH_DIR)/05-career-data/cv" --out-dir "$(CURDIR)/static/files"
	@$(MAKE) cv-verify
