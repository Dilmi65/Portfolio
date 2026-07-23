# Dilmi Edirisinghe — Portfolio

Personal portfolio website for **Dilmi Edirisinghe** — IT undergraduate (HNDIT) and Psychology & Counselling student.

🔗 **Live site:** _add your deployed URL here once hosted_
📄 **Résumé:** [`public/Dilmi_Edirisinghe_Resume.pdf`](./public/Dilmi_Edirisinghe_Resume.pdf)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)

---

## ✨ Design concept

The site's identity — **"Builds software. Understands people."** — reflects a dual
IT + Psychology & Counselling background:

- **Teal** accent → the technical / engineering side
- **Coral** accent → the people-facing / counselling side
- A repeating **"braid" motif** (two woven SVG threads) ties the two together as a
  section divider throughout the page

**Type:**

| Role | Font |
|---|---|
| Headings | [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif) |
| Body | [Inter](https://fonts.google.com/specimen/Inter) |
| Labels / dates | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |

## 🛠️ Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router, static export) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) with a custom theme (`tailwind.config.ts`) |
| Fonts | Google Fonts, loaded via runtime CSS `@import` |
| Hosting target | Any static host (Vercel, Netlify, GitHub Pages, etc.) |

No backend, no database — this is a static site. Content lives directly in the
component files (see below), so no CMS is needed for a portfolio this size.

## 📂 Project structure

```
portfolio/
├─ app/
│  ├─ layout.tsx        # root layout, metadata
│  ├─ page.tsx          # assembles all sections
│  └─ globals.css       # Tailwind + font imports + custom CSS
├─ components/
│  ├─ Nav.tsx           # sticky nav bar
│  ├─ Hero.tsx          # name, tagline, photo, résumé link, socials
│  ├─ About.tsx         # bio
│  ├─ Education.tsx     # education timeline
│  ├─ Experience.tsx    # internship
│  ├─ Projects.tsx      # project cards
│  ├─ Skills.tsx        # technical / interpersonal skill tags
│  ├─ Contact.tsx       # contact details
│  └─ Braid.tsx         # decorative signature divider (SVG)
├─ public/
│  ├─ profile.jpg
│  └─ Dilmi_Edirisinghe_Resume.pdf
├─ tailwind.config.ts    # custom colors, fonts
└─ next.config.mjs       # static export config
```

## 🚀 Getting started

```bash
npm install       # first time only
npm run dev       # start local dev server
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Build for production

```bash
npm run build
```

Outputs a static site to `out/` (via `output: "export"` in `next.config.mjs`) —
deploy that folder to any static host.

## ✏️ Editing content

| To change... | Edit this file |
|---|---|
| Name, tagline, photo, résumé link, socials | `components/Hero.tsx` |
| Bio | `components/About.tsx` |
| Education entries | `components/Education.tsx` |
| Internship / work experience | `components/Experience.tsx` |
| Projects | `components/Projects.tsx` |
| Skills | `components/Skills.tsx` |
| Contact details | `components/Contact.tsx` |

To swap your photo or résumé, just replace `public/profile.jpg` or
`public/Dilmi_Edirisinghe_Resume.pdf` with a new file of the same name.

## 📤 Deployment

Push this repo to GitHub, then connect it to [Vercel](https://vercel.com) (built
by the Next.js team) for one-click deploys on every push — no extra config needed.

## 📄 License

Personal portfolio — feel free to fork for inspiration, but please don't reuse
the content/photos as your own.
