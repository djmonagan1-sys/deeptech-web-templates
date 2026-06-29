# Deeptech Web Templates

A growing collection of polished, production-minded website templates for
deeptech companies — the kind of hard-science startups that need a credible,
modern web presence without a heavyweight build pipeline.

Each template is **self-contained static HTML/CSS/JS**: no framework, no build
step, no dependencies to install. Open the file in a browser and it works.
Drop it on any static host (GitHub Pages, Netlify, Cloudflare Pages, S3) as-is.

## Templates

| Template | Industry | Path |
| --- | --- | --- |
| **Lattice Quantum** | Quantum sensing | [`quantum-sensing/`](./quantum-sensing) |

> More verticals (photonics, fusion, biotech, space, advanced materials) will
> follow the same structure.

## Quantum Sensing — `quantum-sensing/`

A landing page for a fictional quantum-sensing company, *Lattice Quantum*.
Demonstrates the conventions every template in this repo follows.

![Lattice Quantum hero](./quantum-sensing/assets/preview.png)

### Features

- Responsive, dark "deep-space" theme with a quantum cyan/violet accent system
- Animated hero with a lightweight `<canvas>` "quantum lattice" particle field
  (auto-pauses off-screen and respects `prefers-reduced-motion`)
- Reveal-on-scroll animations via `IntersectionObserver`
- Sections: hero, trust bar, technology, how-it-works, products with spec
  tables, applications, company, and a contact form
- Accessible: skip link, semantic landmarks, keyboard-friendly nav,
  reduced-motion support
- Zero dependencies beyond a Google Fonts link (Sora + Inter)

### Run it locally

No build step. Either open the file directly:

```bash
open quantum-sensing/index.html        # macOS
xdg-open quantum-sensing/index.html    # Linux
```

…or serve it (recommended, so relative paths behave like production):

```bash
cd quantum-sensing
python3 -m http.server 8000
# then visit http://localhost:8000
```

### File layout

```
quantum-sensing/
├── index.html        # all markup / content
├── css/styles.css    # design tokens + components (edit :root to re-theme)
├── js/main.js        # nav, scroll reveal, hero canvas, form handler
└── assets/
    └── favicon.svg
```

### Make it yours

- **Re-theme** by editing the CSS custom properties in `:root`
  (`--accent`, `--accent-2`, `--bg`, fonts, radius).
- **Re-content** by editing the copy and `--spec` tables in `index.html`.
  Company name, product names, and figures are placeholders.
- **Wire the contact form** to a real backend — the current handler in
  `js/main.js` is a client-side demo that validates and shows a confirmation.

> ⚠️ All company details, specifications, and figures are **illustrative**,
> created for this demonstration template.
