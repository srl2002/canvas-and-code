# 🎨 Surabhi Lambe — Personal Portfolio

> *Where numbers meet brushstrokes.*

A personal portfolio website for **Surabhi Lambe** — Senior Model Validation Analyst at Deutsche Bank and canvas painter. Built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies, no build steps.

**Live site:** [srl2002.github.io/canvas-and-code](https://srl2002.github.io/canvas-and-code/)

---

## ✨ Sections

| Section | Description |
|---|---|
| **Hero** | Introduction, identity tags, call-to-action |
| **About** | Bio, quick facts, hobbies & interests |
| **Art Gallery** | Filterable artwork with lightbox viewer |
| **Resume** | Skills, education, coursework, experience timeline |
| **Projects** | Academic & professional projects with tech tags |
| **Blog** | Data-driven blog — add posts by editing one file |
| **Contact** | Formspree-powered contact form + social links |

---

## 🗂️ Project Structure

```
surabhi-portfolio/
│
├── index.html              ← Main website (all sections)
│
├── css/
│   └── style.css           ← Moon Ink theme — all styling
│
├── js/
│   ├── blog-data.js        ← ✏️ Edit this to add blog posts
│   └── main.js             ← All interactions & blog engine
│
└── images/
    ├── README.md           ← Guide for adding photos & art
    ├── surabhi.jpg         ← Hero profile photo (add yours)
    ├── surabhi-about.jpg   ← About section photo (add yours)
    ├── iit-kgp-2024.jpg    ← InterIIT 2024 canvas (add yours)
    ├── iit-madras-2023.jpg ← InterIIT 2023 canvas (add yours)
    └── ...                 ← Other artwork images
```

---

## 🚀 Deployment

This site is hosted on **GitHub Pages** — completely free.

### Live URL format
```
https://YOUR-USERNAME.github.io/surabhi-portfolio/
```

### How to deploy / redeploy
1. Push all files to the `main` branch
2. Go to **Settings → Pages**
3. Set source to **Branch: main**, folder: `/ (root)`
4. Click **Save** — site goes live in ~60 seconds

---

## ✏️ How to Customise

### Add a new blog post
Open `js/blog-data.js` and add an object at the **top** of the `BLOGS` array:

```js
{
  title: "Your Post Title",
  tag: "Finance",             // shown as filter tab
  emoji: "📊",
  bannerColor: "linear-gradient(135deg,#b8c4d8 0%,#d0cce8 100%)",
  date: "March 2025",
  readTime: "4 min read",
  excerpt: "Short teaser shown on the card.",
  content: `
    <p>Your full post here.</p>
    <h3>A Section Heading</h3>
    <blockquote>A quote you love.</blockquote>
  `
},
```

That's it — no other file needs to be touched. The cards, filters, and modal reader update automatically.

---

### Add artwork to the gallery
1. Drop your image into the `images/` folder (e.g. `images/painting1.jpg`)
2. In `index.html`, find the art card and replace the placeholder:

```html
<!-- BEFORE (placeholder) -->
<div class="art-img art-color-1">
  <div class="art-mock">...</div>
</div>

<!-- AFTER (your image) -->
<div class="art-img">
  <img src="images/painting1.jpg" alt="Your Painting Title">
</div>
```

3. Update the `data-title` and `data-desc` attributes on the card.

---

### Add your profile photo
In `index.html`, find the hero section and replace:

```html
<!-- BEFORE -->
<div class="initials">SL</div>
<div class="ph-label">Add your photo here</div>

<!-- AFTER -->
<img src="images/surabhi.jpg" alt="Surabhi Lambe">
```

---

### Activate the contact form
1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form → copy your Form ID
3. In `index.html`, replace `YOUR_FORM_ID`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

### Update social links
Search for these placeholders in `index.html` and replace with your handles:

| Placeholder | Replace with |
|---|---|
| `YOUR-LINKEDIN-HANDLE` | e.g. `surabhi-lambe` |
| `YOUR-INSTAGRAM-HANDLE` | e.g. `surabhi.paints` |
| `YOUR-GITHUB-HANDLE` | e.g. `surabhilambe` |

---

## 🎨 Design System — Moon Ink Theme

| Token | Value | Used for |
|---|---|---|
| `--accent-primary` | `#556080` | Slate blue — buttons, links, highlights |
| `--accent-mid` | `#8090b8` | Mid-tone blue — secondary accents |
| `--accent-light` | `#d0d5e8` | Light blue — borders, tags |
| `--accent-warm` | `#e8e4d8` | Warm cream — hero gradients |
| `--bg-primary` | `#f4f5f8` | Page background |
| `--bg-dark` | `#1c2033` | Footer, dark elements |
| `--font-serif` | Cormorant Garamond | Headings, names, display text |
| `--font-sans` | DM Sans | Body text, UI elements |
| `--font-mono` | DM Mono | Labels, dates, tags |

To change the accent colour across the entire site, edit just `--accent-primary` in the `:root` block at the top of `css/style.css`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Cormorant Garamond, DM Sans, DM Mono) |
| Form handling | [Formspree](https://formspree.io) (free tier) |
| Hosting | GitHub Pages (free) |
| Build tools | None — zero dependencies |

---

## 🖼️ Image Guidelines

| Image | Recommended size | Format |
|---|---|---|
| Profile photo | 600 × 800 px (portrait) | `.jpg` or `.webp` |
| Art — standard card | 800 × 600 px (landscape) | `.jpg` or `.webp` |
| Art — featured card | 1200 × 675 px (16:9) | `.jpg` or `.webp` |

Compress images before uploading at [squoosh.app](https://squoosh.app) — aim for under 300KB per image to keep the site fast.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| `> 1024px` | Full desktop — two-column layouts |
| `≤ 1024px` | Tablet — stacked columns, 2-col gallery |
| `≤ 768px` | Mobile — single column, hamburger nav |

---

## ⚡ Performance

- Zero JavaScript frameworks — no React, no Vue, no jQuery
- CSS-only animations where possible
- Fonts loaded via `preconnect` for faster rendering
- Images lazy-loaded by the browser natively
- No build step — edit and deploy directly

---

## 📄 License

**Code** (HTML, CSS, JavaScript): [MIT License](LICENSE)
— Free to use, modify, and share with attribution.

**Artwork & Written Content** (paintings, blog posts, resume data):
© 2025 Surabhi Lambe. All rights reserved.
— May not be reproduced without explicit permission.

---

## 🙏 Credits

Designed and built for **Surabhi Lambe**.
Typography: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) · [DM Sans](https://fonts.google.com/specimen/DM+Sans) · [DM Mono](https://fonts.google.com/specimen/DM+Mono) via Google Fonts.
Form handling: [Formspree](https://formspree.io).
Hosted on [GitHub Pages](https://pages.github.com).

---

*Built with 🎨 and ☕*
