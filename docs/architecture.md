# hamdan.id — Technical Architecture

Personal website of [Hamdan Prakoso](https://hamdan.id). Built with Next.js 15 App Router + Tailwind CSS v4.

---

## Stack Overview

| Layer      | Tech                                                               |
| ---------- | ------------------------------------------------------------------ |
| Framework  | Next.js 15.3.2 (App Router, RSC, SSG/ISR)                          |
| Language   | TypeScript 5                                                       |
| Styling    | Tailwind CSS v4 (`@tailwindcss/postcss`)                           |
| State      | Component-local (`useState`/`useRef`), `next-themes` for dark mode |
| Deployment | Vercel                                                             |
| CMS        | Decap CMS (Git-based, writes MDX to repo)                          |
| Animations | Framer Motion 12 + GSAP 3.13 + Lenis                               |
| 3D         | Three.js 0.176 + @react-three/fiber 9.1 + @react-three/drei 10     |
| Analytics  | Umami Cloud + Sentry 9.22                                          |
| Comments   | giscus (GitHub Discussions)                                        |
| Search     | Fuse.js 7.1 (client-side, pre-built index)                         |
| Content    | MDX via next-mdx-remote + rehype-pretty-code (Shiki)               |
| Maps       | Mapbox GL JS 3.12                                                  |

---

## Routing

| Route                      | Type         | Description                                                  |
| -------------------------- | ------------ | ------------------------------------------------------------ |
| `/`                        | Static       | Home — Hero, About, 3D Cube, Latest Posts, Socials           |
| `/about`                   | Static (CSR) | Full-page scroll experience with GSAP + Framer               |
| `/blog`                    | SSG          | Paginated blog list (6 per page), `getAllPosts()`            |
| `/blog/[category]`         | SSG          | Posts filtered by category, `getPostsByCategory()`           |
| `/blog/[category]/[slug]`  | SSG          | Single post, MDX compiled to React, `generateStaticParams()` |
| `/notes`                   | ISR (60s)    | Notion-powered notes list, `getPublishedNotes()`             |
| `/notes/[slug]`            | ISR (60s)    | Single note from Notion, custom block renderer               |
| `/life`                    | Static       | Interests hub (Inter Milan, Travel, etc.)                    |
| `/life/inter`              | Static       | Inter Milan hub                                              |
| `/life/inter/achievements` | Static (CSR) | Trophy timeline with achievement modals                      |
| `/life/inter/blog`         | Static       | Under development                                            |
| `/life/inter/matches`      | Static       | Under development                                            |
| `/life/travel`             | Static (CSR) | Travel page with Mapbox, Lenis, GSAP scroll                  |
| `/rss.xml`                 | Static       | RSS 2.0 feed from latest 10 posts                            |
| `/admin`                   | Static       | Decap CMS admin UI (requires auth)                           |

---

## Content Pipeline

```
src/content/*.mdx
    │
    ├── getAllPosts() ──────────► BlogCard / LatestPosts / RSS / Search Index
    │                              (reads frontmatter via gray-matter, returns PostMeta[])
    │
    └── getPostBySlug() ───────► compileMdx() ───► React Node ───► BlogPostPage
                                  │
                                  ├── remarkFrontmatter
                                  └── rehypePrettyCode (Shiki, github-dark)
```

### PostMeta Type

```typescript
type PostMeta = {
  slug: string; // derived from filename
  category: string; // from frontmatter, defaults to "general"
  title: string;
  date: string; // YYYY-MM-DD
  excerpt?: string;
  coverImage?: string;
};
```

### Files

| File                                 | Purpose                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| `src/lib/getAllPosts.ts`             | Reads all `.mdx` from `src/content/`, parses frontmatter, returns sorted `PostMeta[]`        |
| `src/lib/getPostsByCategory.ts`      | Filters `getAllPosts()` by category                                                          |
| `src/lib/getMdxPost.ts`              | Finds `.mdx` file (flat path + directory fallback), reads, calls `compileMdx()`              |
| `src/lib/mdx.ts`                     | `compileMDX()` from `next-mdx-remote/rsc` with Shiki syntax highlighting + Callout component |
| `src/scripts/generateSearchIndex.ts` | Postbuild: generates `public/search-index.json` from `getAllPosts()`                         |
| `src/app/rss.xml/route.ts`           | Route handler: generates RSS 2.0 from latest 10 posts                                        |

### MDX Components Available in Content

```mdx
<Callout type="info" title="Note">
  Any React component can be embedded in MDX.
</Callout>
```

Custom components are mapped in `src/lib/mdx.ts`. Only `Callout` is registered.

---

## Decap CMS

Decap CMS is a Git-based headless CMS — it writes `.mdx` files directly to your GitHub repo.

### Setup

- **Entry:** `public/admin/index.html` — loads Decap from CDN
- **Config:** `public/admin/config.yml`
- **Collection:** Blog posts stored in `src/content/` as `{{slug}}.mdx`
- **Images:** Uploaded to `public/images/`, served as `/images/...`
- **Workflow:** Editorial (draft → review → ready → publish)

### Config Structure

```yaml
backend:
  name: github
  repo: hmdnprks/hamdan-id
  branch: main

media_folder: public/images
public_folder: /images

collections:
  - name: blog
    folder: src/content
    slug: '{{slug}}'
    fields:
      - title, date, description, excerpt, coverImage, category, body
```

### Auth

Requires GitHub OAuth or Git Gateway. No auth endpoint is implemented in this app yet — configure via GitHub OAuth app or Netlify's Git Gateway.

---

## Notion (Notes)

**Status:** Partially implemented, **not currently functional**. The Notion integration uses the official `@notionhq/client` but the query uses a non-existent `dataSources.query()` method — likely a v1 API mismatch.

### Files

| File                                    | Purpose                                                                |
| --------------------------------------- | ---------------------------------------------------------------------- |
| `src/lib/notion/client.ts`              | Initializes Notion client with `NOTION_TOKEN`                          |
| `src/lib/notion/getNotes.ts`            | **Broken** — uses `dataSources.query()`; should be `databases.query()` |
| `src/lib/notion/getNoteBySlug.ts`       | Filters notes by slug                                                  |
| `src/lib/notion/getNoteBlocks.ts`       | Paginated block children fetch                                         |
| `src/lib/notion/guards.ts`              | Type guard for `PageObjectResponse`                                    |
| `src/lib/notion/types.ts`               | `Note` type definition                                                 |
| `src/components/notes/NotionBlocks.tsx` | Renders 4 block types: paragraph, h2, bulleted list, image             |

### Expected Notion Database Schema

| Property    | Type                               |
| ----------- | ---------------------------------- |
| `title`     | title                              |
| `slug`      | rich_text                          |
| `excerpt`   | rich_text                          |
| `date`      | date                               |
| `cover`     | files                              |
| `type`      | select (essay, note, travel, tech) |
| `tags`      | multi_select                       |
| `published` | checkbox                           |

---

## Components

### Layout

| Component     | Route         | Purpose                                            |
| ------------- | ------------- | -------------------------------------------------- |
| `Header`      | Global        | Sticky nav, search, theme toggle, RSS, mobile menu |
| `HeaderInter` | `/life/inter` | Inter-themed navigation                            |
| `Footer`      | Global        | Copyright + built-with links                       |
| `BlogLayout`  | Blog post     | Sidebar + framer-motion page transition            |
| `BlogSidebar` | Blog post     | Nav links (All Posts, About, Projects)             |
| `Providers`   | Root          | `next-themes` ThemeProvider                        |

### Page Components

| Component     | Route   | Lib                                         |
| ------------- | ------- | ------------------------------------------- |
| `Hero`        | `/`     | Framer Motion, image card-flip              |
| `About`       | `/`     | Brief bio                                   |
| `LatestPosts` | `/`     | Server component, calls `getAllPosts()`     |
| `Socials`     | `/`     | Social link icons (react-feather)           |
| `ThreeCube`   | `/`     | @react-three/fiber rotating cube            |
| `BlogCard`    | `/blog` | Card with cover image, title, date, excerpt |

### About Page

| Component                | Animation                                              |
| ------------------------ | ------------------------------------------------------ |
| `IntroScrollReveal`      | GSAP — text scales 15x on scroll                       |
| `AboutHero`              | Framer Motion — name reveal                            |
| `AboutIdentity`          | Framer Motion — "I DESIGN / I CODE / I CREATE" stagger |
| `AboutTimeline`          | Framer Motion — career timeline 2012–2025              |
| `AboutPhilosophy`        | Framer Motion — 4 design principles                    |
| `AboutTechGrid`          | Framer Motion — tool logos                             |
| `AboutHorizontalJourney` | GSAP + ScrollTrigger — 4-panel horizontal scroll       |
| `ContactCTA`             | Framer Motion — CTA section                            |

### Travel Page

| Component                  | Purpose                                     |
| -------------------------- | ------------------------------------------- |
| `SmoothScrollProvider`     | Lenis smooth scroll wrapper                 |
| `TravelHero`               | Video background (ImageKit URL)             |
| `TravelCategoryFilters`    | Category filter buttons (UI only)           |
| `TravelMapStory`           | Mapbox map + scroll story 2-column layout   |
| `MapboxMap`                | Mapbox GL map with markers, `flyToLocation` |
| `ScrollStory`              | Scroll triggers `flyTo` on map              |
| `FeaturedLocationCarousel` | Horizontal scrollable destination cards     |
| `TravelJournalPreview`     | Hardcoded journal entry cards               |
| `TravelTimeline`           | Vertical timeline of years + places         |
| `TravelCTASection`         | CTA links                                   |
| `CinematicTravelScroll`    | GSAP horizontal image strip (unused)        |

### Inter Milan

| Component              | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `TrophyRecap`          | 7 trophy SVG badges with count                 |
| `AchievementModal`     | Modal with YouTube embed                       |
| 7 SVG badge components | ItalianBadge, UCLBadge, CoppaItaliaBadge, etc. |

### SEO

| Component        | Route     | Purpose         |
| ---------------- | --------- | --------------- |
| `SEOSchema`      | Root      | Person JSON-LD  |
| `BlogPostSchema` | Blog post | Article JSON-LD |
| `CanonicalTag`   | Blog post | Canonical URL   |

---

## Styling

### Tailwind v4

Uses `@tailwindcss/postcss` (v4 CSS-first config). Primary CSS in `src/app/globals.css`:

```css
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-primary: var(--primary);
  --color-dark: var(--dark);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
}
```

### Dark Mode

- `class`-based via `next-themes`
- Toggle in Header with `.wav` sound effects
- `.dark` class on `<html>` activates dark CSS variables

### Color Tokens

| Token          | Light     | Dark      | Inter Theme |
| -------------- | --------- | --------- | ----------- |
| `--background` | `#ffffff` | `#0f1c24` | `#001f3f`   |
| `--surface`    | `#f8f8f8` | `#2b3a45` | `#0b2a52`   |
| `--primary`    | `#3c5b6f` | `#3c5b6f` | `#56b3f1`   |
| `--dark`       | `#153448` | `#dfd0b8` | -           |
| `--foreground` | `#1a1a1a` | `#f0f0f0` | `#f1f1f1`   |

### Fonts

| Font              | Type           | Role                         |
| ----------------- | -------------- | ---------------------------- |
| Pogonia Sans      | Local `.woff`  | Default sans (`--font-sans`) |
| Poppins           | Google Fonts   | Fallback sans                |
| JetBrains Mono    | Google Fonts   | Monospace (`--font-mono`)    |
| Plus Jakarta Sans | Google Fonts   | Utility                      |
| Just Sans         | Local `.woff2` | Utility                      |
| Melangit Sans     | Local `.woff2` | Utility                      |

---

## Animation Architecture

### Framer Motion (20+ components)

- Scroll reveals: `whileInView` + `viewport={{ once: true }}`
- Layout animations: `layoutId` for shared element transitions
- Spring animations: LikeButton, Hero card-flip, modals
- AnimatePresence: modals, menus, theme toggle icons, 404

### GSAP (4 components)

- `AboutHorizontalJourney`: horizontal scroll + ScrollTrigger scrub
- `IntroScrollReveal`: pinned section, text scales 1x→15x
- `CinematicTravelScroll`: horizontal image strip (currently unused)

### Lenis (2 locations)

- `/about`: Direct instantiation, custom easing
- `SmoothScrollProvider`: Wrapper for travel sub-pages

---

## 3D (Three.js)

Only `ThreeCube` is active (home page). Rotates a BoxGeometry mesh, colors adapt to dark/light theme.

Unused 3D components:

- `Gears` / `DJIOsmoModel` — GLTF model of DJI Osmo Pocket 3 (commented out)
- `GearOrbit` — Floating spheres with HTML labels (not imported)

---

## Build & Deploy

### Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "postbuild": "next-sitemap && tsx src/scripts/generateSearchIndex.ts",
  "lint": "next lint"
}
```

### Build Output

| Route                     | Strategy                         |
| ------------------------- | -------------------------------- |
| `/blog/[category]/[slug]` | SSG via `generateStaticParams()` |
| `/notes/*`                | ISR with `revalidate = 60`       |
| Everything else           | Static                           |

### Vercel

Hosted on Vercel with standard Next.js build. Postbuild generates sitemap + search index.

---

## Dev Tooling

| Tool                 | Purpose                                                            |
| -------------------- | ------------------------------------------------------------------ |
| ESLint (flat config) | Linting with `next/core-web-vitals` + TypeScript + Prettier compat |
| Prettier             | Formatting: single quotes, trailing commas, 100 print width        |
| Husky                | Git hooks: `pre-commit` (lint-staged), `commit-msg` (commitlint)   |
| commitlint           | Conventional commits (`feat:`, `fix:`, etc.)                       |
| lint-staged          | Stages: ESLint on `*.{js,ts,tsx}`, Prettier on everything          |

---

## Environment Variables

```
NEXT_PUBLIC_UMAMI_ID=           # Umami analytics site ID
NEXT_PUBLIC_UMAMI_SRC=          # Umami script URL
NEXT_PUBLIC_MAPBOX_TOKEN=       # Mapbox public token
SENTRY_AUTH_TOKEN=              # Sentry auth
NOTION_TOKEN=                   # Notion internal integration token
NOTION_NOTES_DATASOURCE_ID=     # Notion database ID for notes
```

---

## Unused Dependencies

| Package          | Reason                                           |
| ---------------- | ------------------------------------------------ |
| `@mdx-js/loader` | Not configured in webpack                        |
| `@mdx-js/react`  | Uses `next-mdx-remote` instead                   |
| `@next/mdx`      | Installed but not configured in `next.config.ts` |
| `react-notion-x` | Custom Notion block renderer used instead        |
| `@imagekit/next` | Not imported; ImageKit used as raw URL only      |

## Unused Components

| Component                                          | Not used on any route                   |
| -------------------------------------------------- | --------------------------------------- |
| `ThemeToggle`                                      | Theme toggle built into Header          |
| `Gears` / `DJIOsmoModel`                           | Commented out                           |
| `GearOrbit`                                        | Not imported                            |
| `FuseSearch`                                       | SearchModal is the active search        |
| `PageTransition` / `TopLoadingBar` / `LoadingDots` | Not rendered                            |
| `CinematicTravelScroll`                            | Defined but not imported on travel page |

---

## Known Issues

1. **Notion notes** — `dataSources.query()` doesn't exist in Notion API v2; should be `databases.query()`
2. **Decap CMS auth** — No `/api/auth` endpoint implemented
3. **Like button** — Heart animation only, no persistence
4. **Broken links** — `/life/travel/journal/[slug]`, `/life/travel/map`, `/life/music`, `/life/books`, `/life/astronomy`, `/life/coffee` routes don't exist
5. **Duplicate `@import "tailwindcss"`** — Appears twice in `globals.css`
6. **Dual ESLint configs** — Both `.eslintrc.json` and `eslint.config.mjs` exist (flat config takes precedence)
