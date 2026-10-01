# Stride Guide

An article-first running knowledge base built with Astro and Markdown.

## Local workflow

```bash
npm install
npm run dev
```

Create a new article in `src/content/articles/` using the frontmatter in the sample post. Preview it locally, then publish with Git:

```bash
git add .
git commit -m "Publish: your article title"
git push
```

## Cloudflare Pages

Connect this repository to Cloudflare Pages with:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

Every push to the production branch will build and deploy the static site.
