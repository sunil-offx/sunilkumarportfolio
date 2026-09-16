# Sunilkumar B — AI & ML Engineer

[Live site](https://sunilkumarportfolio.vercel.app) · [Résumé (PDF)](resume.pdf) · [GitHub](https://github.com/sunil-offx) · [LinkedIn](https://www.linkedin.com/in/sunilkumar-b-2575a3318)

Single-page, dark-theme portfolio built with **plain HTML/CSS/JS** — no framework, no build step. Open `index.html` locally or deploy to any static host.

> AI & ML engineer focused on RAG systems, computer vision, and production ML pipelines. Building at IITM Pravartak Technologies and running ORBIS, a small freelancing agency.

## Featured projects

| Project | Focus |
| --- | --- |
| **Voter Identity Verifier** | Dockerized identity verification with CNN face matching (ResNet-50), OCR, AWS S3, CI/CD |
| **Personalized RAG System** | Document ingestion → chunking → embeddings → FAISS retrieval → LLM responses |
| **Velan Pannai** (team) | Farm-to-consumer dairy e-commerce in React (listings, cart, checkout) |

## Stack

- **Site:** HTML, CSS, JavaScript (vanilla)
- **Type:** Space Grotesk, Inter, IBM Plex Mono (Google Fonts)
- **Theme:** Dark UI with a “build pipeline” motif — amber (in progress) → teal (verified) status rail as you scroll

## Repo layout

```
index.html     full site (structure, styles, behavior)
profile.png    headshot (CSS grayscale filter)
resume.pdf     linked from the hero CTAs
README.md      this file
```

## Run locally

```bash
# option A — open the file
open index.html   # macOS; or double-click on Windows/Linux

# option B — tiny static server (better for PDF / relative links)
python3 -m http.server
# then visit http://localhost:8000
```

## Customize

| What | How |
| --- | --- |
| Copy | Edit text inside each `<section id="...">` in `index.html` |
| Photo | Replace `profile.png` (or update the `<img>` `src` / `alt`) |
| Résumé | Replace `resume.pdf`, or change the hero link `href` |
| Skill bars | Set `data-level` (0–100) on each skill row |
| Contact form | Uses `mailto:` today; point the `<form>` at Formspree / Netlify Forms / your API and drop the mailto `preventDefault` logic at the bottom of `index.html` |

## Deploy

No build command. Publish the repo root (`.`):

- **Vercel / Netlify** — connect the repo or drag-and-drop; publish directory `.`
- **GitHub Pages** — enable Pages on `main` (root)
- **Any static host** — upload `index.html`, `profile.png`, and `resume.pdf`

Live deployment: [sunilkumarportfolio.vercel.app](https://sunilkumarportfolio.vercel.app)

## Accessibility

- Semantic landmarks, skip link, visible `:focus-visible` rings, `aria-label`s on icon-only controls
- WCAG AA contrast on the dark palette
- `prefers-reduced-motion: reduce` disables pulse, scroll-reveal, and smooth scroll
- Responsive: hero stacks; pipeline rail hides below ~900px; nav collapses below ~720px

## Contact

- Email: [sunilkumarsra2@gmail.com](mailto:sunilkumarsra2@gmail.com)
- LinkedIn: [sunilkumar-b-2575a3318](https://www.linkedin.com/in/sunilkumar-b-2575a3318)
- GitHub: [@sunil-offx](https://github.com/sunil-offx)
