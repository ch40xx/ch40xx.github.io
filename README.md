# Personal Blog

### Next.js, MDX

This is a minimal, fast, and secure personal blog built from scratch using **Next.js App Router**, **Tailwind CSS**, and **MDX**. The project is structured for long-term extensibility and serves as my professional portfolio project.

---

## Features

- Built with **Next.js App Router**
- Styled with **Tailwind CSS** and **@tailwindcss/typography**
- Blog content written in **Markdown/MDX**
- Supports **custom React components** in blog posts
- **Dark mode** enabled by default
- Security-first setup with content sanitization
- Optimized performance with static rendering
- Table of contents support (planned)
- MVP architecture with future CMS or dynamic post creation planned

---

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Typography plugin
- **Markdown:** next-mdx-remote + gray-matter
- **Icons:** [Lucide](https://lucide.dev/) (planned)
- **Animation:** Tailwind-compatible animate.css plugin
- **Hosting:** Vercel / any static host (not committed)

---

## Project Structure

<pre>
src/
├── app/
│ ├── layout.tsx # App shell
│ ├── page.tsx # Home page
│ └── posts/[slug]/ # Dynamic blog post route
├── components/ # Reusable components
├── lib/ # MDX parser, post fetcher, utils
├── styles/ # Global styles
public/ # Static assets
content/posts/ # Markdown or MDX blog posts
</pre>

---

# INSTALLATION & USAGE

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/blog-project.git
   cd blog-project
   ```
2. **Install Dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```
3. **Run Locally**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

## ✍️ Writing Posts

Add .mdx files in content/posts/ like this:

```markdown
    ---
    title: "My First Blog Post"
    date: "2025-05-18"
    desc: "A brief description shown on the homepage"
    ---

    # Welcome to My Blog

    This is my first post. Here's a <strong>custom component</strong>:

    <MyComponent />
```

## 🧠 Future Plans

- [ ] Auto-generated **Table of Contents** from Markdown headings (`#`, `##`, etc.)
- [ ] Display **author info**, **tags**, and **estimated read time**
- [ ] Optional **CMS integration** for post creation (e.g., Sanity, Contentlayer)
- [ ] Add **pagination** or **infinite scroll** for long post lists
- [ ] Improve **keyboard navigation** and overall **accessibility (a11y)**

---

MIT License © 2025 ch40xx (https://ch40xx.github.com)
