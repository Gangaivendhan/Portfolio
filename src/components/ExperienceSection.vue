<script setup>
import { experience, education } from '@/data/portfolio.js'
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">

      <div class="section-header fade-up">
        <p class="section-label">Background</p>
        <h2 class="section-title">Experience & Education</h2>
      </div>

      <div class="exp-edu-grid">

        <!-- Work Experience -->
        <div class="timeline-col fade-up">
          <h3 class="col-heading">
            <span class="col-icon">💼</span> Work Experience
          </h3>
          <div class="timeline">
            <div
              v-for="(job, i) in experience"
              :key="i"
              class="timeline-item"
            >
              <div class="timeline-dot" />
              <div class="timeline-card card-glass">
                <div class="tcard-header">
                  <div>
                    <h4 class="tcard-role">{{ job.role }}</h4>
                    <p class="tcard-company">{{ job.company }}</p>
                  </div>
                  <div class="tcard-meta">
                    <span class="tag">{{ job.period }}</span>
                    <span class="tcard-location muted-text">📍 {{ job.location }}</span>
                  </div>
                </div>
                <ul class="tcard-points">
                  <li v-for="point in job.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="timeline-col fade-up" style="transition-delay:0.15s">
          <h3 class="col-heading">
            <span class="col-icon">🎓</span> Education
          </h3>
          <div class="timeline">
            <div
              v-for="(edu, i) in education"
              :key="i"
              class="timeline-item"
            >
              <div class="timeline-dot" />
              <div class="timeline-card card-glass">
                <div class="tcard-header">
                  <div>
                    <h4 class="tcard-role">{{ edu.degree }}</h4>
                    <p class="tcard-company">{{ edu.institution }}</p>
                  </div>
                  <div class="tcard-meta">
                    <span class="tag">{{ edu.period }}</span>
                    <span class="tcard-location muted-text">🏅 {{ edu.grade }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience-section { background: var(--bg-secondary); }

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
  .section-title { margin-top: 0.5rem; }
}

.exp-edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 860px) { grid-template-columns: 1fr; gap: 2.5rem; }
}

.col-heading {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
}
.col-icon { font-size: 1.3rem; }

.timeline {
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent), transparent);
    border-radius: 2px;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 1.5rem;

  &:last-child { margin-bottom: 0; }
}

.timeline-dot {
  position: absolute;
  left: -1.5rem;
  top: 1.25rem;
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  transform: translateX(-4px);
  box-shadow: 0 0 10px var(--accent-glow);
}

.timeline-card { padding: 1.5rem; }

.tcard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tcard-role {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}
.tcard-company {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

.tcard-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  flex-shrink: 0;
}

.tcard-location {
  font-size: 0.75rem;
}

.tcard-points {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  li {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
}
</style>
