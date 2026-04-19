# Tapash Sutradhar — Portfolio (Multi-Page HTML/CSS/JS)

## Folder structure

```
portfolio-multipage/
├── index.html              ← Home page
├── css/
│   ├── global.css          ← Shared styles (all pages import this)
│   ├── skills.css
│   ├── experience.css
│   ├── projects.css
│   ├── services.css
│   ├── education.css
│   ├── research.css
│   ├── articles.css
│   └── resume.css
├── js/
│   ├── shared.js           ← Nav, footer, theme, utils (all pages import this)    166 line ---- ${DATA.navPages.map(p => `<a class="footer-link" href="${root}pages/${p}.html" style="text-transform:capitalize">${p}</a>`).join('')} ---replaced
│   ├── skills.js
│   ├── experience.js
│   ├── projects.js
│   ├── services.js
│   ├── education.js
│   ├── research.js
│   ├── articles.js
│   └── resume.js
├── pages/
│   ├── about.html
│   ├── skills.html
│   ├── experience.html
│   ├── projects.html
│   ├── services.html
│   ├── education.html
│   ├── research.html
│   ├── articles.html
│   ├── contact.html        ← EmailJS contact form
│   └── resume.html
├── images/
│   ├── profile.jpg         ← Add your photo (600×800px)
│   ├── project-asset.jpg
│   ├── project-automation.jpg
│   ├── project-ecommerce.jpg
│   └── project-airport.jpg
└── resume/
    ├── Tapash_Sutradhar_Resume.pdf
    └── Profile.pdf
```

## How to run locally

Just open `index.html` in any browser — no server needed.

## EmailJS Setup (contact form)

1. Go to https://www.emailjs.com — sign up free
2. Add Email Service → Gmail → Connect account → copy SERVICE ID
3. Create Email Template with variables:
   - {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}}
   → Copy TEMPLATE ID
4. Account → General → Public Key → copy it
5. Open `pages/contact.html` and replace:
   - YOUR_PUBLIC_KEY
   - YOUR_SERVICE_ID
   - YOUR_TEMPLATE_ID

## Deploy on GitHub Pages

```bash
git init
git add .
git commit -m "portfolio launch"
git branch -M main
git remote add origin https://github.com/tapashsutradhar/portfolio.git
git push -u origin main
```

Then: GitHub repo → Settings → Pages → Source: main / (root) → Save

Live at: https://tapashsutradhar.github.io/portfolio




================================================================



# Folder Structure — 30 files, cleanly separated
```
portfolio-multipage/
├── index.html              ← Home (fixed hero margins, stats grid)
├── css/
│   ├── global.css          ← ONE shared file for nav, footer, buttons, typography
│   ├── skills.css          ← skill bars only
│   ├── experience.css      ← timeline only
│   ├── projects.css        ← project rows only
│   ├── services.css        ← service rows only
│   ├── education.css       ← edu/courses/certs only
│   ├── research.css        ← paper rows + search only
│   ├── articles.css        ← article list + reader + form only
│   └── resume.css          ← resume cards only
├── js/
│   ├── shared.js           ← nav, footer, theme, toast, reveal — ALL pages use this
│   ├── skills.js           ← skills data + render + bar animation
│   ├── experience.js       ← experience data + timeline render
│   ├── projects.js         ← projects data + render
│   ├── services.js         ← services data + render
│   ├── education.js        ← edu/certs/courses data + render
│   ├── research.js         ← research data + search filter
│   ├── articles.js         ← full CRUD + reader + admin mode
│   └── resume.js           ← resume page render
└── pages/
    ├── about.html contact.html skills.html experience.html
    ├── projects.html services.html education.html
    ├── research.html articles.html resume.html
```

#### Contact form → email — uses EmailJS (free, no backend needed, works on GitHub Pages). When someone fills the form it sends directly to example@gmail.com

#### EmailJS Setup — 3 steps to get email

1. Go to emailjs.com → sign up free
2. Connect Gmail → get your Service ID, Template ID, Public Key
3. Open pages/contact.html and replace these 3 lines:

```
js

const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```
Your template variables must be: {{from_name}}, {{from_email}}, {{subject}}, {{message}}

# GitHub Pages Deploy

```
git init
git add .
git commit -m "portfolio launch"
git branch -M main
git remote add origin https://github.com/tapashsutradhar/portfolio.git
git push -u origin main
```
Then GitHub → Settings → Pages → Source: main / /(root) → Save
Live at: https://tapashsutradhar.github.io/portfolio
