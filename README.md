# hamdan.id — Personal Website

This is the source code for [hamdan.id](https://hamdan.id), the personal site and digital home of Hamdan Prakoso — frontend engineer, tech explorer, and visual storyteller.
Built with **Next.js**, **Tailwind CSS**, **Contentlayer**, and powered by a **Git-based CMS (Contentrain)**.

---

## ✨ Features

- ⚡ Built with [Next.js App Router](https://nextjs.org/docs/app)
- 🎨 Styled using [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- 📄 Content authored in MDX with [Contentlayer](https://www.contentlayer.dev/)
- 🧠 Git-based CMS via [Contentrain](https://contentrain.com)
- 🌙 Dark mode first design, with subtle 3D-inspired visuals
- 🧩 Fully customizable sections: About, Projects, Blog, Uses, Contact
- 🚀 Deployed with [Vercel](https://vercel.com)

---

## 📁 Directory Structure

```bash
/app              # Next.js App Router pages
  /about
  /blog
  /projects
  /uses
  /contact
/content          # MDX content (managed via Contentrain)
  /blog
  about.mdx
  uses.mdx
/components       # Reusable UI components
/lib              # Utilities and helpers
/styles           # Tailwind & global styles
```

## 🛠 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hmdnprks/hamdan-id
cd hamdan-id
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser to view the site locally.

---

## ✍️ Content Management with Contentrain

This site uses Contentrain as a Git-based CMS to manage MDX content.
Content is stored in the /content folder and synced automatically to your GitHub repo.

To edit content:
	1.	Log in to https://contentrain.com
	2.	Choose your repo and collection (e.g. Blog, About, Uses)
	3.	Use the WYSIWYG editor to create or update .mdx content
	4.	Contentrain will push changes to GitHub
	5.	Vercel automatically rebuilds the site on push


## 📦 Deployment (Vercel)
This project is deployed using Vercel.

To deploy your own version:
	1.	Push the code to a GitHub repository
	2.	Go to Vercel Dashboard
	3.	Import the repo and configure build settings (Next.js is auto-detected)
	4.	Set environment variables (if applicable)
	5.	Deploy and connect your custom domain (e.g. hamdan.id)

## 🧠 Credits

	•	Inspired by Josh W. Comeau
	•	Powered by Next.js, Tailwind CSS, and Contentrain
	•	Motion crafted with Framer Motion