<script setup>
import { ref } from 'vue'
import { skills } from '@/data/portfolio.js'

const categories = [
  { key: 'Web Technologies',       label: 'Web Technologies',       icon: '🌐' },
  { key: 'Frameworks & Libraries', label: 'Frameworks & Libraries', icon: '🧩' },
  { key: 'Development Tools',      label: 'Dev Tools',              icon: '🛠️' },
  { key: 'Database',               label: 'Database',               icon: '🗄️' },
  { key: 'Soft Skills',            label: 'Soft Skills',            icon: '🤝' },
]

const active = ref('Web Technologies')
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container">

      <div class="section-header fade-up">
        <p class="section-label">Skills</p>
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-sub muted-text">Technologies and tools I work with</p>
      </div>

      <!-- Category tabs -->
      <div class="skill-tabs fade-up">
        <button
          v-for="cat in categories"
          :key="cat.key"
          :class="['skill-tab', { active: active === cat.key }]"
          @click="active = cat.key"
        >
          <span>{{ cat.icon }}</span>
          {{ cat.label }}
        </button>
      </div>

      <!-- Skill tags -->
      <Transition name="fade-slide" mode="out-in">
        <div :key="active" class="skills-tags">
          <span
            v-for="(skill, i) in skills[active]"
            :key="skill"
            class="skill-tag"
            :style="{ animationDelay: `${i * 0.06}s` }"
          >
            {{ skill }}
          </span>
        </div>
      </Transition>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills-section { background: var(--bg-primary); }

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
  .section-title { margin-top: 0.5rem; margin-bottom: 0.75rem; }
}
.section-sub { font-size: 0.95rem; }

.skill-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.skill-tab {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);

  &:hover {
    border-color: var(--border-accent);
    color: var(--text-primary);
  }

  &.active {
    background: rgba(124, 58, 237, 0.15);
    border-color: var(--accent);
    color: var(--accent-light);
    font-weight: 600;
  }
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  min-height: 100px;
  align-items: flex-start;
  align-content: flex-start;
}

.skill-tag {
  padding: 0.6rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: border-color var(--transition), color var(--transition), transform var(--transition), box-shadow var(--transition);
  animation: pop-in 0.4s ease both;
  cursor: default;

  &:hover {
    border-color: var(--border-accent);
    color: var(--accent-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px var(--accent-glow);
  }
}

@keyframes pop-in {
  from { opacity: 0; transform: scale(0.85) translateY(10px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);    }
}

.fade-slide-enter-active,
.fade-slide-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-slide-enter-from   { opacity: 0; transform: translateY(8px); }
.fade-slide-leave-to     { opacity: 0; transform: translateY(-8px); }
</style>
