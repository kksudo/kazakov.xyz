#!/usr/bin/env python3
"""Generate CV PDFs for kazakov.xyz from job-search md sources.

Uses job-search FormatConverter (same engine as `make pdf-generate`),
so the styling matches vacancy CV PDFs. Run via `make cv-sync`.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


PAIRS = [
    ("versions/CV.5.2.0.md", "Kirill-Kazakov-CV.pdf"),
    ("variants/CV.5.2.0-sre.md", "Kirill-Kazakov-CV-SRE.pdf"),
    ("variants/CV.5.2.0-lead.md", "Kirill-Kazakov-CV-Lead.pdf"),
    ("variants/CV.5.2.0-crypto.md", "Kirill-Kazakov-CV-Crypto.pdf"),
]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cv-dir", required=True, type=Path, help="job-search 05-career-data/cv dir")
    parser.add_argument("--out-dir", required=True, type=Path, help="site static/files dir")
    args = parser.parse_args()

    try:
        from job_search.infrastructure.format_converter import FormatConverter
    except ImportError as e:
        print(f"[ERROR] job_search package not importable ({e}); run via `uv run --project <job-search>/impl/python`")
        return 1

    args.out_dir.mkdir(parents=True, exist_ok=True)
    converter = FormatConverter()
    for src_rel, dst_name in PAIRS:
        src = args.cv_dir / src_rel
        if not src.is_file():
            print(f"[ERROR] source not found: {src}")
            return 1
        dst = args.out_dir / dst_name
        dst.write_bytes(converter.convert(src.read_text(), "pdf"))
        print(f"[SUCCESS] {dst_name} ({dst.stat().st_size} bytes) <- {src_rel}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
