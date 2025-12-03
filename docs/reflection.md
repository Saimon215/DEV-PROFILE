# CIS 376 Dev Profile – Knowledge Reflection  
> “Ship small, learn fast, and keep improving.”

## Infrastructure (Tech Stack)

This dev profile is a static front-end app deployed on GitHub Pages.

- **Languages:** HTML5, modern CSS, JavaScript (ES6+)
- **Frameworks & Libraries:** Bootstrap 5, Bootstrap Icons, Normalize.css, zero-md
- **Data Files:**  
  - `assets/data/projects.json` – project cards  
  - `assets/data/achievements.json` – achievements cards
- **Layout & Components:** Bootstrap grid, cards, navbar, buttons, forms
- **Hosting & Repo:** GitHub Pages, GitHub Issues, GitHub Wiki, GitHub Milestones
- **Validation & Accessibility:** W3C Nu HTML Validator, WAVE, Chrome Lighthouse
- **Dev Tools:** VS Code, Live Server, browser DevTools, Git, macOS
- **AI Tools:** OpenAI ChatGPT to help refactor code, debug paths, and improve wording

> **IT Infrastructure** is the mix of hardware, software, networks, and services that support apps and data for an organization.

> **IS Architecture** explains how data, applications, and infrastructure fit together to support real business processes and goals.

> **RESTful API** is a web service style that uses standard HTTP methods (GET, POST, etc.) and URLs to access and manipulate resources in a stateless way.

> The **Fetch API** is a modern JavaScript interface that lets the browser make network requests (like HTTP GET) and handle responses with promises.

## Architecture (How It Fits Together)

At a high level, my dev profile is a small, modular front-end app:

- The **Home page** (`index.html`) introduces who I am, shows a hero card with badges, and links to Projects, Achievements, Blog, Resources, and Reflection.
- The **Projects page** (`pages/project.html`) loads project data from `assets/data/projects.json` using the Fetch API and renders dynamic Bootstrap cards. A search box filters projects by title, tech, or tags.
- The **Achievements page** (`pages/achievements.html`) loads data from `assets/data/achievements.json` and displays centered certificate cards (President’s List, Dean’s List, etc.).
- The **Blog page** (`pages/blog.html`) is hand-authored HTML that shares the same navbar, footer, and CSS.
- The **Resources page** (`pages/resources.html`) links to MDN, Bootstrap docs, Nu, WAVE, and my resume/GitHub/LinkedIn.
- The **Reflection page** (`reflection.html`) uses the zero-md web component to render this `reflection.md` file as HTML inside the app.

Most pages share:

- A common **navbar** (Bootstrap 5 + gradient `.bg-brand`)
- A common **footer** with year set dynamically in `jscripts/scripts.js`
- Shared styling from `css/style.css`

### Data Flow: Projects Page

1. Browser loads `docs/pages/project.html`.
2. On `DOMContentLoaded`, `jscripts/scripts.js` runs.
3. The script checks for `#projectsContainer`.
4. It calls `fetch("../assets/data/projects.json")`.
5. JSON is parsed into JavaScript objects.
6. JavaScript builds HTML for each Bootstrap card (title, description, tech, buttons).
7. Cards are injected into the DOM.
8. When I type in the search box, the script filters the in-memory array and re-renders the list.

```text
Local code  →  git commit  →  GitHub repo
                 ↓
             GitHub Pages
                 ↓
         Browser loads HTML
                 ↓
   JS (scripts.js) → Fetch JSON
                 ↓
      JSON → JS objects → Cards
```

Even though I am not calling an external REST API here, the pattern (request → JSON response → render UI) is similar to working with a small RESTful backend.

## Dev Process & Workflow

For this project I tried to follow a simple Agile style: small steps, check results, and iterate.

- I started with a **wireframe** of the home page, projects page, and navigation.
- I used **user story–style thinking**, for example:  
  _“As a recruiter, I want to quickly see this student’s best projects and achievements so I can decide if I should interview him.”_
- I turned these into **GitHub Issues** with labels and milestones:
  - One closed issue links HTML, JS, and JSON together for the Projects page (Fetch, cards, search).
  - Another issue covers a different piece of code (like the animated hero or home mini cards).
  - An open issue under **Milestone: Sprint 99** describes a future improvement idea.
- Workflow steps:
  1. Build or refactor code locally in VS Code.
  2. Test with Live Server and browser DevTools.
  3. Validate with Nu and WAVE, then fix errors and contrast issues.
  4. Commit changes with clear messages.
  5. Push to GitHub; GitHub Pages rebuilds the site.
  6. Re-check the live site and adjust if needed.

> **Agile / Scrum** focuses on delivering small, working pieces of software in short cycles, getting feedback, and improving continuously instead of trying to build everything perfectly in one big step.

## Accessibility & Quality

Accessibility was a big part of this project:

- I ran the app through **W3C Nu HTML Validator** and fixed structural HTML errors.
- I used **WAVE** to spot missing alt text, contrast issues, and heading order problems.
- I experimented with **Chrome Lighthouse** to check performance, SEO, and accessibility scores.
- I added:
  - Alt text on all important images (profile photo, certificates, project screenshots).
  - Clear labels on the search input and buttons.
  - Semantic headings (`h1`, `h2`, `h3`) in a logical order.
  - A consistent navbar and footer so navigation feels predictable.

These tools helped me see the site not only as “works for me” but as something more friendly for many users.

## Key Takeaways (Tech & Process Advice to My Past Self)

If I could talk to my past self at the start of CIS 376, I would give this advice:

1. **Start with structure, not colors.**  
   Get basic HTML and layout working first. Then add CSS, gradients, and animations later. It’s much easier to polish a site that already works.

2. **Keep your folders clean from day one.**  
   Use separate `css/`, `jscripts/`, `assets/`, and `pages/` folders. Broken paths cause a lot of stress, especially when you start using Fetch and JSON.

3. **Use GitHub Issues like a todo list.**  
   Write small issues with clear goals, add labels and milestones, and close them when done. It makes the project feel more professional and manageable.

4. **Rely on tools, not just your eyes.**  
   Always run Nu, WAVE, and (if possible) Lighthouse. Let them show you hidden problems in your HTML and accessibility.

5. **Practice Fetch early.**  
   Get comfortable loading a simple JSON file, looping through it, and rendering cards. This pattern appears in many modern web apps and APIs.

6. **Ask for help and iterate.**  
   It’s okay to use AI tools like ChatGPT for guidance, refactoring, and debugging—but always read the code, test it, and understand why it works.

This dev profile is more than just a final project. It’s a small “real” app that I can keep improving, reuse as a template, and extend as I grow in web development, cloud, and cybersecurity.