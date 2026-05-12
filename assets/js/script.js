/* DYNAMIC CONTENT RENDERING */

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
        const navContainer = document.getElementById('navLinksContainer');
        const themeToggleHtml = `
            <li class="nav-item ms-3">
                <button class="theme-toggle" id="themeToggle" aria-label="Basculer le thème">
                    <i class="fas fa-moon"></i>
                </button>
            </li>
        `;

        let navHtml = NAV_LINKS.map(link => `
            <li class="nav-item">
                <a class="nav-link" href="${link.href}">${link.label}</a>
            </li>
        `).join('');

        navContainer.innerHTML = navHtml + themeToggleHtml;
    }

    renderHero() {
        document.getElementById('heroName').innerHTML = `
            ${PERSONAL_INFO.lastName}<br>
            <span class="gradient-text">${PERSONAL_INFO.firstName}</span>
        `;
        document.getElementById('heroTitle').textContent = PERSONAL_INFO.title;
        document.getElementById('heroIntro').textContent = PERSONAL_INFO.introduction;
    }

    renderAbout() {
        document.getElementById('aboutShortBio').textContent = PERSONAL_INFO.shortBio;
        document.getElementById('aboutInterests').innerHTML = 
            `Hors du code, je suis passionné par ${PERSONAL_INFO.interests.join(' et ')}.`;

        const statsHtml = STATISTICS.map((stat, index) => `
            <div class="stat-card fade-in" style="animation-delay: ${index * 0.1}s;">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
        document.getElementById('statsContainer').innerHTML = statsHtml;
    }

    renderSkills() {
        const skillCategories = [
            { title: 'Frontend', icon: 'fas fa-paint-brush', skills: SKILLS_FRONTEND },
            { title: 'Backend', icon: 'fas fa-server', skills: SKILLS_BACKEND },
            { title: 'Architecture & Concepts', icon: 'fas fa-project-diagram', skills: SKILLS_ARCHITECTURE },
            { title: 'Bases de Données', icon: 'fas fa-database', skills: SKILLS_DATABASES },
            { title: 'Outils', icon: 'fas fa-tools', skills: SKILLS_TOOLS },
            { title: 'Systèmes & OS', icon: 'fab fa-linux', skills: SKILLS_SYSTEMS }
        ];

        const groups = [
            { key: 'avancé',        label: 'Avancé',        cls: 'level-advanced' },
            { key: 'intermédiaire', label: 'Intermédiaire', cls: 'level-intermediate' },
            { key: 'débutant',      label: 'Débutant',      cls: 'level-beginner' }
        ];

        let skillsHtml = skillCategories.map((category, categoryIndex) => {
            const groupsHtml = groups.map(group => {
                const filtered = category.skills.filter(s => s.level === group.key);
                if (!filtered.length) return '';
                const items = filtered.map(skill => `
                    <div class="skill-item">
                        <i class="${skill.icon} skill-icon-colored"></i>
                        <span>${skill.name}</span>
                    </div>
                `).join('');
                return `
                    <div class="skill-group">
                        <div class="skill-group-label ${group.cls}">${group.label}</div>
                        <div class="skills-grid">${items}</div>
                    </div>
                `;
            }).join('');

            return `
                <div class="skill-category fade-in" style="animation-delay: ${categoryIndex * 0.1}s;">
                    <div class="category-header">
                        <i class="${category.icon}"></i>
                        <h3>${category.title}</h3>
                    </div>
                    <div class="skill-groups">${groupsHtml}</div>
                </div>
            `;
        }).join('');

        document.getElementById('skillsContainer').innerHTML = skillsHtml;
    }

    renderEducation() {
        const educationHtml = EDUCATION.map((edu, index) => `
            <div class="timeline-entry fade-in" style="animation-delay: ${index * 0.15}s;">
                <div class="timeline-left">
                    <div class="timeline-dot">
                        <i class="${edu.icon}"></i>
                    </div>
                    ${index < EDUCATION.length - 1 ? '<div class="timeline-line"></div>' : ''}
                </div>
                <div class="timeline-card">
                    <div class="timeline-card-period">${edu.period}</div>
                    <h3 class="timeline-card-title">${edu.title}</h3>
                    <p class="timeline-card-institution"><i class="fas fa-map-marker-alt"></i> ${edu.institution}</p>
                    <p class="timeline-card-description">${edu.description}</p>
                </div>
            </div>
        `).join('');

        document.getElementById('educationContainer').innerHTML = educationHtml;
    }

    renderExperience() {
        const experienceHtml = EXPERIENCE.map((exp, index) => `
            <div class="experience-item fade-in" style="animation-delay: ${index * 0.1}s;">
                <div class="experience-date">${exp.period}</div>
                <div class="experience-content">
                    <h3 class="experience-title">${exp.title}</h3>
                    <p class="experience-company">${exp.company}</p>
                    <ul class="experience-list">
                        ${exp.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

        document.getElementById('experienceContainer').innerHTML = experienceHtml;
    }

    renderProjects() {
        const featuredProjects = PROJECTS.filter(p => p.featured);
        
        const projectsHtml = featuredProjects.map((project, index) => `
            <div class="project-card fade-in" style="animation-delay: ${index * 0.1}s;">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-icons">
                        <i class="fab fa-github"></i>
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-stack">
                    ${project.stack.map(tech => `<span class="stack-badge">${tech}</span>`).join('')}
                </div>
                <a href="${project.github}" class="project-link" target="_blank">
                    <i class="fas fa-code"></i> Voir le code <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `).join('');

        document.getElementById('projectsContainer').innerHTML = projectsHtml;
    }

    renderContact() {
        const contacts = [
            {
                icon: 'fas fa-envelope',
                title: 'Email',
                value: CONTACT_INFO.email,
                href: `mailto:${CONTACT_INFO.email}`,
                type: 'email'
            },
            {
                icon: 'fas fa-phone',
                title: 'Téléphone',
                value: CONTACT_INFO.phone,
                href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
                type: 'phone'
            },
            {
                icon: 'fab fa-github',
                title: 'GitHub',
                value: 'Voir mon profil',
                href: CONTACT_INFO.github,
                type: 'external'
            },
            {
                icon: 'fab fa-linkedin',
                title: 'LinkedIn',
                value: 'Me suivre',
                href: CONTACT_INFO.linkedin || '#',
                type: 'external'
            },
            {
                icon: 'fab fa-facebook',
                title: 'Facebook',
                value: 'Me suivre',
                href: CONTACT_INFO.facebook,
                type: 'external'
            }
        ];

        const contactHtml = contacts.map((contact, index) => `
            <a href="${contact.href}" class="contact-card fade-in" style="animation-delay: ${index * 0.1}s;" ${contact.type === 'external' ? 'target="_blank"' : ''}>
                <div class="contact-icon">
                    <i class="${contact.icon}"></i>
                </div>
                <h3>${contact.title}</h3>
                <p>${contact.value}</p>
            </a>
        `).join('');

        document.getElementById('contactContainer').innerHTML = contactHtml;
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

/* THEME MANAGEMENT */

class ThemeManager {
    constructor() {
        this.STORAGE_KEY = 'theme-preference';
        this.DARK = 'dark';
        this.LIGHT = 'light';
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? this.DARK : this.LIGHT);
        
        this.setTheme(initialTheme);
        this.bindToggleButton();
    }

    setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
        this.updateToggleIcon(theme);
    }

    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === this.DARK ? this.LIGHT : this.DARK;
        this.setTheme(newTheme);
    }

    updateToggleIcon(theme) {
        const toggleBtn = document.getElementById('themeToggle');
        if (!toggleBtn) return;
        
        const icon = toggleBtn.querySelector('i');
        if (theme === this.DARK) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    bindToggleButton() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleTheme());
        }
    }
}

/* SMOOTH SCROLL NAVIGATION */

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('a[href^="#"]')) {
                this.handleLinkClick(e);
            }
        });
    }

    handleLinkClick(e) {
        const link = e.target.closest('a[href^="#"]');
        const href = link.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        e.preventDefault();
        this.closeMobileMenu();
        
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        window.history.pushState(null, '', href);
    }

    closeMobileMenu() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    }
}

/* SCROLL REVEAL ANIMATIONS */

class ScrollReveal {
    constructor() {
        this.revealElements = [];
        this.init();
    }

    init() {
        setTimeout(() => {
            // Hero elements: make visible immediately
            document.querySelectorAll('.hero-section .fade-in, .hero-content').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.animation = 'none';
            });

            // Other fade-in: convert to scroll-reveal
            document.querySelectorAll('.fade-in:not(.hero-section .fade-in)').forEach(el => {
                el.style.animation = 'none';
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                if (!el.classList.contains('scroll-reveal')) {
                    el.classList.add('scroll-reveal');
                }
                this.revealElements.push({ element: el, revealed: false });
            });

            this.addScrollRevealElements();
            this.checkReveal();
            window.addEventListener('scroll', () => this.checkReveal(), { passive: true });
        }, 200);
    }

    addScrollRevealElements() {
        const selectors = [
            '.about-section .about-text',
            '.skill-category',
            '.project-card',
            '.contact-card',
            '.stat-card'
        ];
        
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (!el.classList.contains('fade-in')) {
                    el.classList.add('scroll-reveal');
                    this.revealElements.push({ element: el, revealed: false });
                }
            });
        });
    }

    checkReveal() {
        const windowBottom = window.scrollY + window.innerHeight;

        this.revealElements.forEach(item => {
            if (item.revealed) return;
            const el = item.element;
            const top = el.getBoundingClientRect().top + window.scrollY;
            if (top < windowBottom + 80) {
                const delay = parseInt(el.dataset.delay || el.style.animationDelay || 0) || 0;
                setTimeout(() => {
                    el.classList.add('active');
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    item.revealed = true;
                }, delay);
            }
        });
    }
}

/* NAVBAR EFFECTS */

class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateNavbar(), { passive: true });
    }

    updateNavbar() {
        if (window.scrollY > 50) {
            this.navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            this.navbar.style.boxShadow = 'none';
        }
    }
}

class ActiveNavLink {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        this.sections = document.querySelectorAll('section[id]');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateActiveLink(), { passive: true });
        this.updateActiveLink();
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

/* INITIALIZATION */

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioRenderer();
    new ThemeManager();
    new SmoothScroll();
    new ScrollReveal();
    new NavbarScroll();
    new ActiveNavLink();
    
    console.log('Portfolio fully loaded and interactive');
});

/* PERFORMANCE OPTIMIZATION */

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });