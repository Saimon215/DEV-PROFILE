# CIS 376 – Dev Profile (Final Project)

This repository contains my Developer Profile Web App, a fully responsive, multi-page website built as the final project for CIS 376 – Web Development. It showcases my technical projects, achievements, and reflections in a clean, accessible, JSON-driven site deployed from the docs/ folder.

⸻

🔗 Live Resources
- Live Dev Profile: https://saimon215.github.io/DEV-PROFILE/
- Reflection Article (Markdown → HTML w/ Zero-MD): https://saimon215.github.io/DEV-PROFILE/reflection.html
- Nu Validator (Home Page): https://validator.w3.org/nu/?doc=https%3A%2F%2Fsaimon215.github.io%2FDEV-PROFILE%2F
- WAVE Accessibility Report: https://wave.webaim.org/report#/https://saimon215.github.io/DEV-PROFILE/
- GitHub Repository: https://github.com/Saimon215/DEV-PROFILE
- Wiki — Starter Front-End Template: Included per assignment requirement
- Issues: Includes required open + closed issues with code blocks and milestones

⸻

📌 Assignment Requirements – Coverage Summary

This Dev Profile fulfills all required acceptance criteria for the CIS 376 final project:

✔ Responsive multi-page website  
Pages include: Home, Projects, Achievements, Blog, Resources, Reflection

✔ Shared Navigation & Footer  
Consistent across all pages, fully responsive with Bootstrap.

✔ JSON-Driven Content
- projects.json → Projects page
- achievements.json → Achievements page  
Loaded via Fetch API with proper error handling.

✔ JavaScript Functionality
- Dynamic card rendering
- Search/filter
- try/catch blocks
- console logging for debugging
- Footer auto-year updating
- Zero-MD Markdown rendering

✔ Directory structure  
Logical layout with separate folders for css/, jscripts/, pages/, assets/, and assets/data/.

✔ Libraries Used
- Bootstrap 5
- Bootstrap Icons
- Normalize.css
- Zero-MD
- Native ES6 JavaScript

✔ Reflection Article  
Covers:
- Technology definitions (block quotes)
- Architecture & infrastructure
- Dev processes (issues, milestones, wireframing)
- Diagram explanation
- Final takeaway

✔ Accessibility Verified
- Passed Nu HTML Validator
- Passed WAVE
- Lighthouse reviewed

✔ GitHub Issues
Required:
- ✅ 2 Closed Issues
- ✅ 1 Open Issue  
Includes permalinks, code blocks, labels, and milestones

✔ GitHub Wiki
Contains a reusable front-end starter template (HTML + CSS + JS + JSON).

⸻

🧠 Tech Stack (Infrastructure)

This project’s infrastructure consists of all tools, libraries, languages, and platforms used to build, test, and deploy the application.
- HTML5 + CSS3 + JavaScript (ES6)
- Bootstrap 5 + Bootstrap Icons
- Normalize.css
- Zero-MD for Markdown rendering
- GitHub Pages (static hosting, deploys from /docs/)
- GitHub Repo + Issues + Wiki
- VS Code + Live Server
- Chrome DevTools (Lighthouse, WAVE extension)
- Nu HTML Validator

⸻

🧱 Architecture (How Everything Fits Together)

Local Development
↓
VS Code (Live Server)
↓
GitHub Repository (commits)
↓
GitHub Pages builds from /docs/
↓
Browser loads HTML/CSS/JS
↓
JavaScript fetches data from /assets/data/
↓
Pages render dynamic cards + Markdown

Content Flow
- HTML loads UI
- CSS applies theme and responsive styles
- JS fetches JSON → builds cards dynamically
- Reflection.md rendered using Zero-MD

Process Flow
- Create issue → write solution → close issue
- Commit changes with messages referencing issues
- Push to GitHub → GitHub Pages redeploys
- Validate with WAVE + Nu
- Update README + Wiki

⸻

📘 Block-Quoted Definitions (Required by Assignment)

> IT Infrastructure  
> “The combined set of hardware, software, networks, facilities, and services required for an organization’s technology operations.” — IBM Documentation

> IS Architecture  
> “A conceptual model that defines the structure and operation of an organization’s information systems.” — TechTarget

> RESTful API  
> “An API that adheres to the constraints of REST architecture, enabling interaction through HTTP methods like GET, POST, PUT, DELETE.” — MDN Web Docs

> Fetch API  
> “A modern interface for making asynchronous HTTP requests in JavaScript.” — MDN Web Docs

> Agile / Scrum  
> “Scrum is an agile framework using iterative sprints to deliver incremental value while emphasizing collaboration, transparency, and adaptability.” — Scrum.org

⸻

📂 Folder Structure (cleaned and consistent)

Top-level repository layout and deployment folder shown below. The docs/ folder is used for GitHub Pages deployment and mirrors the built site (copy of top-level HTML/CSS/JS resources or generated build output). Keep docs/ in sync with your source files when deploying.
``` text

DEV-PROFILE/                    
├─ index.html                 
├─ reflection.html            
├─ README.md
├─ css/
│  └─ style.css
├─ jscripts/
│  └─ scripts.js
├─ pages/
│  ├─ projects.html
│  ├─ achievements.html
│  ├─ blog.html
│  └─ resources.html
└─ assets/
   ├─ profile.jpg
   ├─ resume.pdf
   └─ data/
      ├─ projects.json
      └─ achievements.json
```
Notes:
- For a small static site, copying the root files into docs/ is sufficient for GitHub Pages deployment. If you adopt a build tool later, configure the build output to target docs/.
- Make sure assets/data/ is available in both the source and the docs/ deployment so Fetch requests succeed when hosted.

⭐ Key Features of the Application

🎨 Modern UI/UX
- Custom theme
- Gradients, shadows, rounded design
- Mobile-first layout

📁 Dynamic Cards
- Projects & Achievements are loaded from JSON with live app links + GitHub links

🔍 Search & Filter
- Case-insensitive
- Searches title, tags, and descriptions

📄 Blog Articles
- Handwritten content
- Fully styled

📝 Reflection Article
- Rendered via Zero-MD (Markdown → HTML)

⸻

♿ Accessibility (A11y)

The site is validated through:
- Nu HTML Validator (all pages verified)
- WAVE Accessibility Checker (alt text, heading hierarchy, contrast, nav structure, labeled inputs)
- Lighthouse Accessibility Score (high scores)

⸻

🚀 How to Run the App Locally

1. Clone the repository:
```bash
git clone https://github.com/Saimon215/DEV-PROFILE.git
```
2. Open the folder in VS Code.
3. Start Live Server (or open the HTML files directly in a browser):
- Right-click → Open with Live Server
4. Visit:
```text
http://localhost:5500/index.html
```

If you serve from docs/:
- Open docs/index.html in the browser or point your server to docs/ as the site root.

✨ Future Improvements (Open Issue: Sprint 99)
- Add Dark Mode toggle
- Add animations & transitions
- Add category filters to Projects
- Convert JSON loading into a reusable JS module
- Add more blog posts

⸻

🤖 AI-Assistance Disclosure

Some parts of this project—including code explanations, debugging help, and structural recommendations—were created with assistance from ChatGPT (OpenAI). All code was reviewed, tested, and implemented by me.

⸻

© License

Open-source for educational and portfolio purposes.
