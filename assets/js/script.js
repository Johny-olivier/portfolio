const TOGGLE_ICONS = {
  nav: { open: 'ph-list', close: 'ph-x' },
  theme: { dark: 'ph-moon', light: 'ph-sun' }
};

class PortfolioRenderer {
  constructor() {
    this.render();
  }

  render() {
    this.renderNavigation();
    this.renderHero();
    this.renderAbout();
    this.renderSkills();
    this.renderEducation();
    this.renderExperience();
    this.renderProjects();
    this.renderContact();
    this.renderFooter();
    this.setupGithubLinks();
  }

  renderNavigation() {
    const container = document.getElementById('navLinksContainer') || document.getElementById('navLinks');
    const html = NAV_LINKS.map(link => `
      <li class="nav-item" role="none">
        <a class="nav-link" href="${link.href}" role="menuitem">${link.label}</a>
      </li>
    `).join('') + `
      <li class="nav-item" role="none">
        <button class="theme-toggle" id="themeToggle" aria-label="Changer le thème">
          <i class="ph ${TOGGLE_ICONS.theme.dark}"></i>
        </button>
      </li>
    `;
    container.innerHTML = html;
  }

  renderHero() {
    document.getElementById('heroName').innerHTML = `
      ${PERSONAL_INFO.lastName}<br>
      <span class="hero-glow">${PERSONAL_INFO.firstName}</span>
    `;
    document.getElementById('heroTitle').textContent = PERSONAL_INFO.title;
    document.getElementById('heroIntro').textContent = PERSONAL_INFO.introduction;
  }

  renderAbout() {
    document.getElementById('aboutShortBio').textContent = PERSONAL_INFO.shortBio;
    document.getElementById('aboutInterests').textContent =
      `Hors du code, je suis passionné par ${PERSONAL_INFO.interests.join(' et ')}.`;

    document.getElementById('statsContainer').innerHTML =
      STATISTICS.map((stat, i) => `
        <div class="stat-card reveal reveal-delay-${i}">
          <span class="stat-number">${stat.number}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `).join('');
  }

  renderSkills() {
    const categories = [
      { title: 'Frontend', icon: 'ph ph-code', skills: SKILLS_FRONTEND },
      { title: 'Backend', icon: 'ph ph-gear-six', skills: SKILLS_BACKEND },
      { title: 'Architecture & Concepts', icon: 'ph ph-share-network', skills: SKILLS_ARCHITECTURE },
      { title: 'Bases de Données', icon: 'ph ph-database', skills: SKILLS_DATABASES },
      { title: 'Outils', icon: 'ph ph-wrench', skills: SKILLS_TOOLS },
      { title: 'Systèmes & OS', icon: 'ph ph-terminal', skills: SKILLS_SYSTEMS }
    ];

    const groups = [
      { key: 'avancé', label: 'Avancé', cls: 'level-advanced' },
      { key: 'intermédiaire', label: 'Intermédiaire', cls: 'level-intermediate' },
      { key: 'débutant', label: 'Débutant', cls: 'level-beginner' }
    ];

    document.getElementById('skillsContainer').innerHTML =
      categories.map((cat, ci) => {
        const groupsHtml = groups.map(group => {
          const items = cat.skills.filter(s => s.level === group.key);
          if (!items.length) return '';
          return `
            <div class="skill-group">
              <div class="skill-group-header ${group.cls}">${group.label}</div>
              <div class="skill-chips">
                ${items.map(s => `
                  <span class="skill-chip">
                    <i class="${s.icon}"></i>
                    <span>${s.name}</span>
                  </span>
                `).join('')}
              </div>
            </div>
          `;
        }).join('');

        return `
          <div class="skill-cat reveal reveal-delay-${Math.min(ci, 5)}">
            <div class="skill-cat-header">
              <i class="skill-cat-icon ${cat.icon}"></i>
              <span class="skill-cat-title">${cat.title}</span>
            </div>
            <div class="skill-groups">${groupsHtml}</div>
          </div>
        `;
      }).join('');
  }

  renderEducation() {
    document.getElementById('educationContainer').innerHTML =
      EDUCATION.map((edu, i) => `
        <div class="timeline-entry reveal reveal-delay-${Math.min(i, 5)}">
          <div class="timeline-meta">
            <div class="timeline-dot">
              <i class="${edu.icon}"></i>
            </div>
            ${i < EDUCATION.length - 1 ? '<div class="timeline-line"></div>' : ''}
          </div>
          <div class="timeline-card">
            <div class="timeline-period">${edu.period}</div>
            <h3 class="timeline-degree">${edu.title}</h3>
            <p class="timeline-school"><i class="ph ph-map-pin"></i> ${edu.institution}</p>
            <p class="timeline-desc">${edu.description}</p>
          </div>
        </div>
      `).join('');
  }

  renderExperience() {
    document.getElementById('experienceContainer').innerHTML =
      EXPERIENCE.map((exp, i) => `
        <div class="exp-item reveal reveal-delay-${Math.min(i, 5)}">
          <div class="exp-date">${exp.period}</div>
          <div class="exp-body">
            <h3 class="exp-title">${exp.title}</h3>
            <p class="exp-company">${exp.company}</p>
            <ul class="exp-duties">
              ${exp.tasks.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('');
  }

  renderProjects() {
    document.getElementById('projectsContainer').innerHTML =
      PROJECTS.filter(p => p.featured).map((project, i) => `
        <div class="project-card reveal reveal-delay-${Math.min(i, 5)}">
          <div class="project-header">
            <h3 class="project-name">${project.title}</h3>
            <a href="${project.github}" class="project-ext-link" target="_blank" aria-label="Voir sur GitHub">
              <i class="ph ph-github-logo"></i>
            </a>
          </div>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech">
            ${project.stack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <a href="${project.github}" class="project-action" target="_blank">
            <i class="ph ph-code"></i> Voir le code
            <i class="ph ph-arrow-right"></i>
          </a>
        </div>
      `).join('');
  }

  renderContact() {
    const contacts = [
      { icon: 'ph ph-envelope', title: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, type: 'email' },
      { icon: 'ph ph-phone', title: 'Téléphone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`, type: 'phone' },
      { icon: 'ph ph-github-logo', title: 'GitHub', value: 'Voir mon profil', href: CONTACT_INFO.github, type: 'external' },
      { icon: 'ph ph-linkedin-logo', title: 'LinkedIn', value: 'Me suivre', href: CONTACT_INFO.linkedin || '#', type: 'external' },
      { icon: 'ph ph-facebook-logo', title: 'Facebook', value: 'Me suivre', href: CONTACT_INFO.facebook, type: 'external' }
    ];

    document.getElementById('contactContainer').innerHTML =
      contacts.map((c, i) => `
        <a href="${c.href}" class="contact-item reveal reveal-delay-${Math.min(i, 5)}" ${c.type === 'external' ? 'target="_blank"' : ''}>
          <div class="contact-icon-box"><i class="${c.icon}"></i></div>
          <div>
            <h3>${c.title}</h3>
            <p>${c.value}</p>
          </div>
        </a>
      `).join('');
  }

  renderFooter() {
    document.getElementById('footerName').textContent = `${PERSONAL_INFO.lastName} ${PERSONAL_INFO.firstName}`;
    document.getElementById('footerLocation').textContent = PERSONAL_INFO.location;
  }

  setupGithubLinks() {
    document.querySelectorAll('.github-link').forEach(link => {
      link.href = CONTACT_INFO.github;
    });
  }
}

class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'theme';
    this.init();
  }

  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.set(saved || (prefersDark ? 'dark' : 'light'));
    document.addEventListener('click', e => {
      const btn = e.target.closest('#themeToggle');
      if (btn) this.toggle();
    });
  }

  set(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      const icon = btn.querySelector('.ph');
      icon.className = `ph ${TOGGLE_ICONS.theme[theme]}`;
    }
  }

  toggle() {
    const current = document.body.getAttribute('data-theme');
    this.set(current === 'dark' ? 'light' : 'dark');
  }
}

class NavManager {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.toggle = document.getElementById('navToggle');
    this.menu = document.getElementById('navLinks');
    this.init();
  }

  init() {
    this.toggle?.addEventListener('click', () => this.toggleMenu());
    document.addEventListener('click', e => {
      const link = e.target.closest('.nav-link');
      if (link && this.menu?.classList.contains('open')) this.closeMenu();
    });
    this.onScroll();
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  toggleMenu() {
    const open = this.menu?.classList.toggle('open');
    this.toggle?.setAttribute('aria-expanded', !!open);
    const icon = this.toggle?.querySelector('.ph');
    if (icon) icon.className = `ph ${open ? TOGGLE_ICONS.nav.close : TOGGLE_ICONS.nav.open}`;
  }

  closeMenu() {
    this.menu?.classList.remove('open');
    this.toggle?.setAttribute('aria-expanded', 'false');
    const icon = this.toggle?.querySelector('.ph');
    if (icon) icon.className = `ph ${TOGGLE_ICONS.nav.open}`;
  }

  onScroll() {
    const scrolled = window.scrollY > 20;
    this.navbar?.classList.toggle('scrolled', scrolled);
  }
}

class SmoothScroll {
  constructor() {
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.navbar')?.offsetHeight || 0;
      window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    });
  }
}

class ScrollReveal {
  constructor() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
  }
}

class MeshGradient {
  constructor() {
    this.canvas = document.getElementById('meshCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.blobs = [];
    this.mouse = { x: 0.5, y: 0.5 };
    this.raf = null;
    this.init();
  }

  init() {
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#22c55e';
    this.colors = [
      accent, '#06b6d4', '#0891b2', '#164e63',
      getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || '#09090b'
    ];
    this.initBlobs();
    this.resize();
    this.bind();
    this.animate();
  }

  initBlobs() {
    for (let i = 0; i < 4; i++) {
      this.blobs.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.25 + Math.random() * 0.2,
        vx: (Math.random() - 0.5) * 0.0015,
        vy: (Math.random() - 0.5) * 0.0015,
        color: this.colors[i % this.colors.length],
        alpha: 0.08 + Math.random() * 0.06
      });
    }
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * devicePixelRatio;
    this.canvas.height = rect.height * devicePixelRatio;
    this.canvas.style.width = rect.width + 'px';
    this.canvas.style.height = rect.height + 'px';
    this.ctx.scale(devicePixelRatio, devicePixelRatio);
    this.w = rect.width;
    this.h = rect.height;
  }

  bind() {
    window.addEventListener('resize', () => this.resize());
    this.canvas.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX / this.w;
      this.mouse.y = e.clientY / this.h;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.w, this.h);

    this.blobs.forEach(b => {
      b.x += b.vx;
      b.y += b.vy;
      b.x += (this.mouse.x - b.x) * 0.0004;
      b.y += (this.mouse.y - b.y) * 0.0004;
      if (b.x < 0) b.x = 1;
      if (b.x > 1) b.x = 0;
      if (b.y < 0) b.y = 1;
      if (b.y > 1) b.y = 0;
    });

    this.blobs.forEach(b => {
      const g = this.ctx.createRadialGradient(
        b.x * this.w, b.y * this.h, 0,
        b.x * this.w, b.y * this.h, b.r * this.w
      );
      g.addColorStop(0, b.color + Math.round(b.alpha * 255).toString(16).padStart(2, '0'));
      g.addColorStop(0.4, b.color + Math.round(b.alpha * 0.5 * 255).toString(16).padStart(2, '0'));
      g.addColorStop(1, 'transparent');
      this.ctx.fillStyle = g;
      this.ctx.fillRect(0, 0, this.w, this.h);
    });

    this.raf = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.resize);
  }
}

class ActiveNav {
  constructor() {
    this.links = document.querySelectorAll('.nav-link[href^="#"]');
    this.sections = document.querySelectorAll('section[id]');
    this.onScroll();
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  onScroll() {
    const pos = window.scrollY + 120;
    let current = '';
    this.sections.forEach(s => {
      if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
        current = s.getAttribute('id');
      }
    });
    this.links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioRenderer();
  new ThemeManager();
  new NavManager();
  new SmoothScroll();
  new ScrollReveal();
  new ActiveNav();
  new MeshGradient();
});
