document.addEventListener("DOMContentLoaded", () => {
  console.log("DEV PROFILE: document loaded ✅");

  // Figure out base path for JSON depending on page location
  // - Home, reflection.html => "/docs"
  // - pages/*.html          => "/docs/pages"
  // From pages we need "..", from root we need "."
  const isInPagesDir = window.location.pathname.includes("/pages/");
  const BASE = isInPagesDir ? ".." : ".";

  // =====================
  // FOOTER YEAR
  // =====================
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // =====================
  // FUN BUTTON ON HOME
  // =====================
  const btn = document.getElementById("btnClicky");
  if (btn) {
    btn.addEventListener("click", () => {
      btn.style.transform = "rotate(15deg)";
      btn.style.transition = "transform 200ms";
      console.log("btnClicky rotated");
      setTimeout(() => (btn.style.transform = "rotate(0deg)"), 250);
    });
  }

  // =====================
  // PROJECTS PAGE
  // =====================
  const projectsContainer = document.getElementById("projectsContainer");
  const projectSearchInput = document.getElementById("searchInput");

  if (projectsContainer) {
    console.log("Projects page detected ✅");

    let allProjects = [];

    const renderProjects = (list) => {
      if (!list.length) {
        projectsContainer.innerHTML =
          '<p class="text-muted">No projects found. Try clearing the search.</p>';
        return;
      }

      const html = list
        .map((p) => {
          const techList = p.tech ? p.tech.join(", ") : "";
          const tags = p.tags || [];
          const liveUrl = p.liveUrl || p.app || "";
          const codeUrl = p.codeUrl || p.source || "";

          return `
            <div class="col-md-6 col-lg-4">
              <article class="card h-100 shadow-soft">
                ${
                  p.image
                    ? `<img src="${p.image}" class="card-img-top" alt="${p.title} screenshot" loading="lazy">`
                    : ""
                }
                <div class="card-body d-flex flex-column">
                  <h3 class="h5 card-title">${p.title}</h3>
                  <p class="card-text small mb-2">${p.description}</p>
                  ${
                    techList
                      ? `<p class="small text-muted mb-2"><strong>Tech:</strong> ${techList}</p>`
                      : ""
                  }
                  ${
                    tags.length
                      ? `<p class="small mb-3">${tags
                          .map(
                            (t) =>
                              `<span class="badge text-bg-secondary me-1 mb-1">${t}</span>`
                          )
                          .join("")}</p>`
                      : ""
                  }
                  <div class="mt-auto d-flex flex-wrap gap-2">
                    ${
                      liveUrl
                        ? `<a href="${liveUrl}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
                             Live App
                           </a>`
                        : ""
                    }
                    ${
                      codeUrl
                        ? `<a href="${codeUrl}" class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener" aria-label="View source code on GitHub">
                             <i class="bi bi-github"></i> Source
                           </a>`
                        : ""
                    }
                  </div>
                </div>
              </article>
            </div>
          `;
        })
        .join("");

      projectsContainer.innerHTML = html;
    };

    const filterProjects = (term) => {
      const q = term.trim().toLowerCase();
      if (!q) {
        renderProjects(allProjects);
        return;
      }

      const filtered = allProjects.filter((p) => {
        const haystack = [
          p.title,
          p.description,
          (p.tech || []).join(" "),
          (p.tags || []).join(" ")
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(q);
      });

      renderProjects(filtered);
    };

    (async () => {
      try {
        // JSON lives at /docs/assets/data/projects.json
        const response = await fetch(`${BASE}/assets/data/projects.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Projects JSON loaded:", data);

        allProjects = Array.isArray(data) ? data : data.projects || [];
        renderProjects(allProjects);
      } catch (error) {
        console.error("Error loading projects.json:", error);
        projectsContainer.innerHTML = `
          <div class="alert alert-danger" role="alert">
            Sorry, I couldn’t load the project list right now.
          </div>
        `;
      }
    })();

    if (projectSearchInput) {
      projectSearchInput.addEventListener("input", (event) => {
        filterProjects(event.target.value);
      });
    }
  }

  // =====================
  // ACHIEVEMENTS PAGE
  // =====================
  const achievementsContainer = document.getElementById("achievementsContainer");
  const achSearchInput = document.getElementById("achSearchInput");

  if (achievementsContainer) {
    console.log("Achievements page detected ✅");

    let allAchievements = [];

    const renderAchievements = (list) => {
      if (!list.length) {
        achievementsContainer.innerHTML =
          '<p class="text-muted">No achievements match your search.</p>';
        return;
      }

      const html = list
        .map((a) => {
          const termLine = a.term
            ? `<p class="small text-muted mb-1">${a.term}${
                a.category ? " · " + a.category : ""
              }</p>`
            : "";
          const img = a.image
            ? `<img src="${a.image}" alt="${a.title} certificate" class="achievement-img">`
            : "";

          return `
            <div class="col-12 achievement-card">
              <article class="card shadow-soft h-100">
                <div class="card-body text-center">
                  <h3 class="h5 mb-1">${a.title}</h3>
                  ${termLine}
                  <p class="mb-3">${a.description}</p>
                  ${img}
                </div>
              </article>
            </div>
          `;
        })
        .join("");

      achievementsContainer.innerHTML = html;
    };

    const filterAchievements = (term) => {
      const q = term.trim().toLowerCase();
      if (!q) {
        renderAchievements(allAchievements);
        return;
      }

      const filtered = allAchievements.filter((a) => {
        const haystack = [
          a.title,
          a.term,
          a.category,
          a.description
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(q);
      });

      renderAchievements(filtered);
    };

    (async () => {
      try {
        // JSON lives at /docs/assets/data/achievements.json
        const response = await fetch(`${BASE}/assets/data/achievements.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Achievements JSON loaded:", data);

        allAchievements = Array.isArray(data)
          ? data
          : data.achievements || [];
        renderAchievements(allAchievements);
      } catch (error) {
        console.error("Error loading achievements.json:", error);
        const errDiv = document.getElementById("achievementsError");
        if (errDiv) {
          errDiv.classList.remove("d-none");
        } else {
          achievementsContainer.innerHTML = `
            <div class="alert alert-danger" role="alert">
              Sorry, I couldn’t load the achievements list right now.
            </div>
          `;
        }
      }
    })();

    if (achSearchInput) {
      achSearchInput.addEventListener("input", (event) => {
        filterAchievements(event.target.value);
      });
    }
  }
});