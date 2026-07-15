# Dilmi Edirisinghe — Portfolio

A personal portfolio site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Design concept

The site's visual identity ("Builds software. Understands people.") reflects the
dual IT + Psychology & Counselling background: a teal accent for the technical
side, a coral accent for the people-facing side, tied together by a repeating
"braid" motif used as a section divider.

- **Display font:** Fraunces (serif, used for headings)
- **Body font:** Inter
- **Utility/label font:** IBM Plex Mono (used for eyebrow labels, dates)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build a static site (for hosting anywhere)

```bash
npm run build
```

This outputs a static site to the `out/` folder (configured via `output: "export"`
in `next.config.mjs`), which you can deploy to Vercel, Netlify, GitHub Pages, or
any static host.

## Editing content

- `components/Hero.tsx` — name, tagline, photo, résumé download link, socials
- `components/About.tsx` — bio copy
- `components/Education.tsx` — education timeline (array at top of file)
- `components/Experience.tsx` — internship details
- `components/Projects.tsx` — project cards (array at top of file)
- `components/Skills.tsx` — technical/interpersonal skill tags
- `components/Contact.tsx` — contact details

Replace `public/profile.jpg` with a new photo any time — just keep the same
filename, or update the `src` in `Hero.tsx`.

Replace `public/Dilmi_Edirisinghe_Resume.pdf` to update the downloadable résumé.
