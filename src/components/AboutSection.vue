<script setup>
import { personal, services } from '@/data/portfolio.js'
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container">

      <!-- Section header -->
      <div class="section-header fade-up">
        <p class="section-label">About Me</p>
        <h2 class="section-title">Who I Am</h2>
      </div>

      <div class="about-grid">
        <!-- Text block -->
        <div class="about-text fade-up">
          <p class="about-intro">
            Hi Folk's 👋 I'm <strong class="accent-text">Gangaivendhan Ravi</strong>, a Frontend Developer
            with <strong class="accent-text">3.3 years of experience</strong> in Vue.js, TypeScript, and SCSS.
          </p>
          <p class="about-body muted-text">
            Skilled in building responsive, high-performance web applications and collaborating with cross-functional
            teams — design, backend, and QA — to deliver scalable, user-focused solutions.
          </p>
          <p class="about-body muted-text">
            Currently at <strong style="color: var(--text-primary)">Mocero Health Solution</strong>, I develop and maintain
            web applications that streamline healthcare workflows, from inventory management and billing to CRM and user access systems.
          </p>

          <div class="about-actions">
            <a :href="personal.linkedin" target="_blank" rel="noopener" class="btn-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a :href="personal.github" target="_blank" rel="noopener" class="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Info card -->
        <div class="about-info fade-up">
          <div class="info-card card-glass">
            <h3 class="info-title">Quick Info</h3>
            <ul class="info-list">
              <li>
                <span class="info-icon">📍</span>
                <div><span class="info-key">Location</span><span class="info-val">{{ personal.location }}</span></div>
              </li>
              <li>
                <span class="info-icon">✉️</span>
                <div><span class="info-key">Email</span><span class="info-val">{{ personal.email }}</span></div>
              </li>
              <li>
                <span class="info-icon">📱</span>
                <div><span class="info-key">Phone</span><span class="info-val">{{ personal.phone }}</span></div>
              </li>
              <li>
                <span class="info-icon">💼</span>
                <div><span class="info-key">Status</span><span class="info-val available">Available for work</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="services-grid">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="service-card card-glass fade-up"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="service-icon-wrap">
            <!-- Monitor -->
            <svg v-if="service.icon === 'Monitor'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <!-- Code -->
            <svg v-else-if="service.icon === 'Code'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <!-- Layers -->
            <svg v-else-if="service.icon === 'Layers'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            <!-- Zap -->
            <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc muted-text">{{ service.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-section { background: var(--bg-secondary); }

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;

  .section-title { margin-top: 0.5rem; }
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.about-intro {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-primary);
  margin-bottom: 1rem;
}
.about-body {
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}

.about-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;
}

// Info Card
.info-card { padding: 1.75rem; }
.info-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}
.info-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
.info-icon { font-size: 1.1rem; line-height: 1.4; }
.info-key {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 1px;
}
.info-val {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  &.available { color: #4ade80; }
}

// Services
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 580px)  { grid-template-columns: 1fr; }
}

.service-card {
  padding: 1.75rem 1.5rem;
}

.service-icon-wrap {
  width: 48px;
  height: 48px;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.service-desc { font-size: 0.875rem; line-height: 1.65; }
</style>
