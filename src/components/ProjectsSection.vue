<script setup>
import { ref } from 'vue'
import { projects } from '@/data/portfolio.js'
import ProjectModal from '@/components/ProjectModal.vue'

const activeProject = ref(null)
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="container">

      <div class="section-header fade-up">
        <p class="section-label">Portfolio</p>
        <h2 class="section-title">What Have I Done?</h2>
        <p class="section-sub muted-text">Projects I've built at Mocero Health Solution</p>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card card-glass fade-up"
          :style="{ transitionDelay: `${(i % 2) * 0.1}s` }"
          @click="activeProject = project"
          role="button"
          tabindex="0"
          @keydown.enter="activeProject = project"
        >
          <!-- Top bar -->
          <div class="pcard-top">
            <div class="pcard-folder">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
              </svg>
            </div>
            <a :href="project.github" target="_blank" rel="noopener" aria-label="GitHub" class="pcard-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>

          <h3 class="pcard-title">{{ project.title }}</h3>
          <p class="pcard-desc muted-text">{{ project.description }}</p>

          <ul class="pcard-points">
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>

          <div class="pcard-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>

    </div>

    <ProjectModal :project="activeProject" @close="activeProject = null" />
  </section>
</template>

<style lang="scss" scoped>
.projects-section { background: var(--bg-primary); }

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  .section-title { margin-top: 0.5rem; margin-bottom: 0.75rem; }
}
.section-sub { font-size: 0.95rem; }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
}

.project-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;

  &:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
}

.pcard-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.pcard-folder { color: var(--accent-light); }

.pcard-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  transition: color var(--transition), background var(--transition);
  text-decoration: none;

  &:hover {
    color: var(--accent-light);
    background: rgba(124, 58, 237, 0.1);
  }
}

.pcard-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.pcard-desc {
  font-size: 0.875rem;
  line-height: 1.65;
  margin: 0;
}

.pcard-points {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;

  li {
    font-size: 0.82rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
}

.pcard-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.25rem;
}
</style>
