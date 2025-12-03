# CIS 376 – Dev Profile (Final Project)

This repository contains my **Developer Profile Web App**, a multi‑page static website built for the CIS 376 final project. It showcases my coursework, technical projects, achievements, and a written reflection. The site is fully responsive, accessibility‑checked, and deployed using **GitHub Pages**.

---

## 🔗 Live Resources

- **Live Site:** https://saimon215.github.io/Saimon215/
- **Reflection Article:** https://saimon215.github.io/Saimon215/reflection.html  
- **Nu HTML Validator Report (Home Page):** *(insert updated Nu validation link after validating)*  
- **WAVE Accessibility Report:** *(insert updated WAVE report link after testing)*  

---

## 📌 Project Requirements Coverage (Summary)

This Dev Profile meets all requirements of the CIS 376 Final Project:

### ✔ Multi‑Page Responsive Website  
Includes **Home, Projects, Achievements, Blog, Resources, Reflection**, each using clean HTML and Bootstrap 5.

### ✔ Shared Navigation + Footer  
A consistent navbar and footer appear across all pages, improving UX and accessibility.

### ✔ JSON‑Driven Dynamic Content  
- `projects.json` populates the **Projects page** dynamically.  
- Achievements also load from JSON using the Fetch API.

### ✔ JavaScript Functionality  
- Dynamic rendering of cards  
- Search/filter functionality  
- Error handling for JSON loading  
- Footer year auto‑update  
- Zero‑MD rendering of Markdown

### ✔ Bootstrap Components + Custom CSS  
Uses Bootstrap grid, buttons, cards, and responsive utilities + a full custom theme with gradients, shadows, and reusable classes.

### ✔ Accessibility  
Tested and refined using:
- **WAVE**
- **W3C Nu Validator**
- **Lighthouse**

### ✔ Reflection Article  
A required written component, delivered in Markdown and rendered in‑page using **zero‑md**.

---

## 🛠 Tech Stack

### **Languages & Frameworks**
- HTML5  
- CSS3 (custom styles + Bootstrap 5 + Normalize.css)  
- JavaScript (ES6+)

### **Libraries**
- Bootstrap Icons  
- Zero‑MD (Markdown rendering)

### **Data**
- JSON project/achievement objects  
  - `docs/assets/data/projects.json`  
  - `docs/assets/data/achievements.json`

### **Tools**
- GitHub Pages  
- GitHub Issues / Wiki  
- VS Code  
- Chrome DevTools  

---

## ⭐ Key Features

### 🎨 Modern, Responsive UI
- Custom design system (colors, badges, panels, shadows)
- Mobile‑first layout

### 📁 Dynamic Project Gallery
- Populated with Fetch API  
- Searchable and filterable  
- Supports tags, tech lists, images, live links, and GitHub links  

### 🏅 Achievements Page
- Loaded dynamically from JSON  
- Certificate images included  

### 📝 Blog Page
- Hand‑authored HTML articles  
- Includes images stored in `docs/assets/`

### 📄 Reflection Page
- Markdown document rendered via Zero‑MD  
- Fully accessible and styled  

---

## 📂 Folder Structure (Simplified)

```
DEV PROFILE/
│ index.html
│ README.md
│
├── docs/
│   ├── css/style.css
│   ├── jscripts/scripts.js
│   ├── reflection.html
│   ├── pages/
│   │   ├── project.html
│   │   ├── achievements.html
│   │   ├── blog.html
│   │   └── resources.html
│   └── assets/
│       ├── profile.jpg
│       ├── resume.pdf
│       └── data/
│           ├── projects.json
│           └── achievements.json
```

---

## 🚀 How to Run Locally

1. Clone the repository:  
   `git clone https://github.com/Saimon215/DEV-PROFILE.git`

2. Open the folder in VS Code.

3. Use the Live Server extension (recommended):  
   Right‑click → **Open with Live Server**

4. Navigate to:  
   `http://localhost:5500/index.html`

---

## ✨ Future Improvements

- Add pagination or category filters to the Projects page  
- Expand the Blog with more writing  
- Add dark mode toggle  
- Add animations for cards and transitions  

---

## 📚 License

Open-source for educational and portfolio purposes.

