<div align="center">

<img src="banner.svg" alt="Sunilkumar B — AI & ML Engineer portfolio banner" width="100%" />

<br />

<img src="profile.png" width="128" height="128" alt="Sunilkumar B" style="border-radius: 50%; border: 3px solid #5eead4;" />

# Sunilkumar B
### AI & ML Engineer

I turn research ideas into working systems — RAG pipelines, CNN-based verification, Dockerized services, and the CI/CD that ships them.

[![Live Portfolio](https://img.shields.io/badge/Live-Portfolio-5eead4?style=for-the-badge&logo=vercel&logoColor=0b0d10)](https://sunilkumarportfolio.vercel.app)
[![Résumé](https://img.shields.io/badge/View-Résumé-ff9a44?style=for-the-badge&logo=adobeacrobatreader&logoColor=0b0d10)](resume.pdf)
[![GitHub](https://img.shields.io/badge/GitHub-sunil--offx-171b21?style=for-the-badge&logo=github)](https://github.com/sunil-offx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunilkumar-b-2575a3318)

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000)

</div>

---

## About

AI & ML engineer focused on **RAG systems**, **computer vision**, and **production ML pipelines**. Currently building at **IITM Pravartak Technologies** and running **ORBIS**, a small freelancing agency for web + AI/ML work.

During internship work: automated data ingestion (~60% less manual processing), Dockerized services, CI/CD for faster releases, and an IoT telemetry prototype on AWS S3.

---

## Featured projects

<table>
<tr>
<td width="33%" valign="top">

### Voter Identity Verifier
**Individual** · CNN + OCR

Dockerized identity verification with ResNet-50 face matching, document OCR, AWS S3, and CI/CD.

`ResNet-50` `OCR` `Docker` `AWS S3`

</td>
<td width="33%" valign="top">

### Personalized RAG System
**Individual** · Retrieval

Document ingestion → chunking → embeddings → FAISS retrieval → context-aware LLM answers.

`RAG` `FAISS` `Embeddings` `LLM`

</td>
<td width="33%" valign="top">

### Velan Pannai
**Team** · E-commerce

Farm-to-consumer dairy storefront in React — product listings, cart, and checkout.

`React` `E-commerce` `Ongoing`

</td>
</tr>
</table>

---

## Design system

Dark “build pipeline” UI — sections read like CI stages, and a status rail shifts **amber → teal** as you scroll.

| Token | Hex | Role |
| :---: | :---: | --- |
| <img src="https://via.placeholder.com/18/0b0d10/0b0d10.png" alt="" /> | `#0b0d10` | Background |
| <img src="https://via.placeholder.com/18/171b21/171b21.png" alt="" /> | `#171b21` | Surfaces |
| <img src="https://via.placeholder.com/18/eae7e0/eae7e0.png" alt="" /> | `#eae7e0` | Text |
| <img src="https://via.placeholder.com/18/ff9a44/ff9a44.png" alt="" /> | `#ff9a44` | Amber · running |
| <img src="https://via.placeholder.com/18/5eead4/5eead4.png" alt="" /> | `#5eead4` | Teal · verified |

**Type:** Space Grotesk · Inter · IBM Plex Mono  
**Motion:** scroll-reveal + pipeline rail, all gated by `prefers-reduced-motion`

---

## Quick start

```bash
# clone
git clone https://github.com/sunil-offx/sunilkumarportfolio.git
cd sunilkumarportfolio

# serve (keeps PDF / relative links happy)
python3 -m http.server
# → http://localhost:8000
```

Or just open `index.html` in a browser.

<details>
<summary><strong>Repo layout</strong></summary>

```
index.html     full site (structure + styles + behavior)
banner.svg     README hero banner
profile.png    headshot (CSS grayscale on-site)
resume.pdf     linked from hero CTAs
README.md      you are here
```

</details>

<details>
<summary><strong>Customize content</strong></summary>

| What | How |
| --- | --- |
| Copy | Edit text inside each `<section id="...">` in `index.html` |
| Photo | Replace `profile.png` (or update the `<img>` `src` / `alt`) |
| Résumé | Replace `resume.pdf`, or change the hero link `href` |
| Skill bars | Set `data-level` (0–100) on each skill row |
| Contact form | Uses `mailto:` today — point the form at Formspree / Netlify Forms / your API to go live |

</details>

---

## Deploy

Zero build step. Publish the repo root (`.`):

| Host | Notes |
| --- | --- |
| **Vercel** | Live now → [sunilkumarportfolio.vercel.app](https://sunilkumarportfolio.vercel.app) |
| **Netlify** | Drag-and-drop or connect repo; publish `.` |
| **GitHub Pages** | Enable Pages on `main` (root) |

---

## Accessibility

- Semantic landmarks + skip link + `:focus-visible` rings
- WCAG AA contrast on the dark palette
- `prefers-reduced-motion: reduce` turns motion off
- Responsive down to phones (rail hides ~900px; nav collapses ~720px)

---

<div align="center">

### Let's build something

[📧 Email](mailto:sunilkumarsra2@gmail.com) · [💼 LinkedIn](https://www.linkedin.com/in/sunilkumar-b-2575a3318) · [🐙 GitHub](https://github.com/sunil-offx) · [🌐 Live site](https://sunilkumarportfolio.vercel.app)

<br />

<sub>Built with vanilla HTML / CSS / JS — no framework, no build step.</sub>

</div>
