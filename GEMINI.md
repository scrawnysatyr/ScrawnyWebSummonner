# Scrawny Brand & Signature Background Rule

## Strict Background & Theme Lock (DO NOT MODIFY)

The background, grid pattern, orange ambient glow, and core color palette are the **signature visual identity of Scrawny** across all Scrawny desktop tools, web apps, web games, and landing pages (`ScrawnyWebMain`, `ScrawnyWebEnhancer`, `ScrawnyWebSummonner`, `ScranwyOCR`, `ScrawnyPDF`, `ScrawnyBoards`, `scrawnyenhance-main`, and any future Scrawny project).

**AI agents MUST NEVER modify, remove, replace, or override the signature background or core theme colors unless the user explicitly commands a global brand/background change.**

### Protected Elements & Exact Values

1. **Core Color Palette**
   - Background (`--bg` / `BG_BLACK`): `#050505`
   - Elevated Surface / Cards (`--bg-elevated` / `SURFACE_DARK`): `#0c0c0d`
   - Hover Surface (`--bg-hover` / `ELEVATED_DARK`): `#141416`
   - Borders (`--border` / `BORDER_DARK`): `#222226`
   - Primary Text (`--text` / `TEXT_PRIMARY`): `#ffffff`
   - Muted Text (`--text-muted` / `TEXT_SECONDARY`): `#d4d4d8`
   - Dim Text (`--text-dim` / `TEXT_MUTED`): `#8a8a93`
   - Accent Orange (`--accent` / `ACCENT_ORANGE`): `#ff7300`

2. **Signature Background Layers**
   - **Grid (`.bg-grid` / `.scrawny-bg-grid` / `scrawny_site_background`)**: `40px x 40px` subtle grid lines (`rgba(255, 255, 255, 0.04)`) with radial mask centered around `(50%, 20%)`.
   - **Top Orange Glow (`.bg-glow` / `.scrawny-bg-glow` / `scrawny_site_background`)**: Soft radial orange glow (`rgba(255, 115, 0, 0.16)`) centered at the top of the viewport.
