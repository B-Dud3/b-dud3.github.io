# brandon-liwang — personal engineering portfolio

Portfolio site for Brandon LiWang. Built with [Astro](https://astro.build),
deployed to GitHub Pages at https://b-dud3.github.io/Personal-Website/.

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Local dev server at localhost:4321/Personal-Website/ |
| `npm run build`   | Production build to `dist/`                   |
| `npm run preview` | Preview the production build locally          |
| `npm test`        | Verify the built output (run build first)     |

## Adding a project

1. Create `src/content/projects/<slug>/` (the folder name becomes the URL).
2. Add `index.md` with this frontmatter, then the write-up below it:

   ```yaml
   ---
   title: My Project
   summary: One line, max 140 characters.
   cover: ./cover.png
   coverAlt: What the cover photo shows
   tags: [Tag One, Tag Two]
   date: 2026-01-15
   featured: false   # true pins it to the front of the grid
   github: https://github.com/B-Dud3/repo   # optional
   demo: https://example.com/live-demo      # optional
   ---
   ```

3. Drop `cover.png` (and any inline images) into the same folder.
4. Push to `main` — the site rebuilds and deploys automatically. A file
   with missing/invalid frontmatter fails the build instead of publishing
   a broken page.

## Editing site text

Hero blurb, skills, experience, and contact links live in `src/data/site.ts`.
The resume is `public/resume.pdf` — replace the file to update it.
