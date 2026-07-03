# Sunilkumar B — Portfolio

A single-page, dark-theme portfolio built in **plain HTML/CSS/JS** (no framework, no build step). Everything lives in one `index.html` plus two asset files, so it opens straight from a folder or deploys to any static host.

## Files

```
index.html          the whole site (structure + styles + behavior)
assets/profile.png  headshot, shown with a CSS grayscale filter
assets/resume.pdf    resume behind the "Download résumé" button
```

## Design system at a glance

- **Concept:** a "build pipeline" motif — sections are framed as pipeline stages (`01 about`, `02 experience`…), and a status rail on the left lights up amber (in progress) → teal (passed) as you scroll. This mirrors the CI/CD and data-pipeline work described in the résumé.
- **Color:** background `#0b0d10`, surfaces `#171b21`/`#1e232b`, text `#eae7e0` / `#a3aab3`, accents `#ff9a44` (amber, "running") and `#5eead4` (teal, "verified"). All text/background pairs meet WCAG AA contrast.
- **Type:** Space Grotesk (headings), Inter (body), IBM Plex Mono (labels, timestamps, tags) — loaded from Google Fonts if you add the `<link>` tags (see below), otherwise falls back to system fonts.
- **Motion:** a subtle pulse on the "available" dot, scroll-reveal on section content, and a scroll-driven pipeline rail. All of it is wrapped in `prefers-reduced-motion` checks and degrades to a static, fully visible layout.

## Customize your content

1. **Text** — every résumé section (summary, experience, projects, skills, education, certifications, contact) is written directly into `index.html` as plain HTML. Search for the section by its `<section id="...">` tag and edit the text in place — no data file or build step involved.
2. **Photo** — replace `assets/profile.png` with your own image (keep the filename, or update the `src` in the `<img>` tag inside `.hero-photo`). The image is displayed through a CSS `grayscale()` filter, so you can drop in a color photo and it will render in black-and-white automatically; if you'd rather ship a truly monochrome file, that works too, the filter is harmless on an already-grayscale image. Update the `alt` text if the photo changes.
3. **Résumé PDF** — replace `assets/resume.pdf` with your own file (same filename), or change the `href="assets/resume.pdf"` on the "Download résumé" button.
4. **Skill bars** — each skill row has a `data-level` attribute (0–100) driving the fill width; the dot-scale from the original résumé (`●●●●○○` = 4/6) was converted to a percentage.
5. **Contact form** — currently opens the visitor's email client via a `mailto:` link (no backend). To make it submit properly, point the `<form>` at a service like Formspree, Netlify Forms, or your own endpoint, and remove the `preventDefault()`/`mailto` logic in the script at the bottom of `index.html`.
6. **Fonts** — for the exact typefaces, add this inside `<head>` before the `<style>` tag:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
   ```
   Without it, the page falls back cleanly to system sans-serif/monospace fonts — nothing breaks.

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a "Skip to main content" link.
- All interactive elements have visible focus rings (`:focus-visible`) and accessible labels (icon-only nav dots use `aria-label`).
- Color pairs were chosen for AA contrast on the dark background.
- `prefers-reduced-motion: reduce` disables the pulse animation, scroll-reveal transitions, and smooth-scroll — content is fully visible and static instead of hidden-then-revealed.
- The headshot has descriptive `alt` text; decorative elements (scan-line overlay, background grid, status dot) are `aria-hidden`.
- Layout is responsive down to small phones: hero stacks, the pipeline rail hides below 900px width (its information is redundant with the visible in-page nav), and the nav collapses into a toggleable menu below 720px.

## Deploy

Any static host works since there's no build step:

- **GitHub Pages:** push this folder to a repo, enable Pages on the `main` branch (root), done.
- **Netlify / Vercel:** drag-and-drop the folder in their dashboard, or `netlify deploy` / `vercel` from the CLI — no build command needed, publish directory is `.`.
- **Anywhere else:** upload `index.html` and the `assets/` folder over FTP/SFTP to any web server; it needs no server-side runtime.

Locally, just open `index.html` in a browser, or run a tiny static server (`python3 -m http.server`) from this folder if you want the download links to behave exactly as they will in production.
