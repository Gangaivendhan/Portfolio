<script setup>
import { ref, onMounted } from 'vue'
import { skills, proficiency } from '@/data/portfolio.js'

const categories = [
  { key: 'Web Technologies',       label: 'Web Technologies', icon: '🌐' },
  { key: 'Frameworks & Libraries', label: 'Frameworks',       icon: '🧩' },
  { key: 'Development Tools',      label: 'Dev Tools',        icon: '🛠️' },
  { key: 'Database',               label: 'Database',         icon: '🗄️' },
  { key: 'Soft Skills',            label: 'Soft Skills',      icon: '🤝' },
]

const active   = ref('Web Technologies')
const view     = ref('skills') // 'skills' | 'proficiency'
const animated = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { animated.value = true; observer.disconnect() }
  }, { threshold: 0.2 })
  const el = document.getElementById('skills')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container">

      <div class="section-header fade-up">
        <p class="section-label">Skills</p>
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-sub muted-text">Technologies and tools I work with</p>
      </div>

      <!-- View toggle -->
      <div class="view-toggle">
        <button :class="['toggle-btn', { active: view === 'skills' }]"      @click="view = 'skills'">All Skills</button>
        <button :class="['toggle-btn', { active: view === 'proficiency' }]" @click="view = 'proficiency'">Proficiency</button>
      </div>

      <Transition name="fade-slide" mode="out-in">

        <!-- ── Skills view ── -->
        <div v-if="view === 'skills'" key="skills">
          <div class="skill-tabs">
            <button
              v-for="cat in categories"
              :key="cat.key"
              :class="['skill-tab', { active: active === cat.key }]"
              @click="active = cat.key"
            >
              <span>{{ cat.icon }}</span>{{ cat.label }}
            </button>
          </div>
          <Transition name="fade-slide" mode="out-in">
            <div :key="active" class="skills-tags">
              <span
                v-for="(skill, i) in skills[active]"
                :key="skill"
                class="skill-tag"
                :style="{ animationDelay: `${i * 0.06}s` }"
              >{{ skill }}</span>
            </div>
          </Transition>
        </div>

        <!-- ── Proficiency view ── -->
        <div v-else key="proficiency" class="proficiency-list">
          <div
            v-for="(item, i) in proficiency"
            :key="item.name"
            class="prof-item"
            :style="{ transitionDelay: `${i * 0.07}s` }"
          >
            <div class="prof-header">
              <span class="prof-name">{{ item.name }}</span>
              <span class="prof-pct accent-text">{{ item.level }}%</span>
            </div>
            <div class="prof-track">
              <div
                class="prof-fill"
                :style="{ width: animated ? item.level + '%' : '0%', transitionDelay: `${i * 0.07}s` }"
              />
            </div>
          </div>
        </div>

      </Transition>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills-section { background: var(--bg-primary); }

.section-header {
  text-align: center;
  margin-bottom: 2rem;
  .section-title { margin-top: 0.5rem; margin-bottom: 0.75rem; }
}
.section-sub { font-size: 0.95rem; }

// View toggle
.view-toggle {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 4px;
  width: fit-content;
  margin-inline: auto;
}

.toggle-btn {
  padding: 0.4rem 1.2rem;
  border: none;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-secondary);
  background: transparent;
  transition: all var(--transition);

  &.active {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 2px 12px var(--accent-glow);
  }
}

// Skill tabs
.skill-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
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

  &:hover { border-color: var(--border-accent); color: var(--text-primary); }
  &.active { background: rgba(124,58,237,0.15); border-color: var(--accent); color: var(--accent-light); font-weight: 600; }
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.75rem;
  min-height: 80px;
}

.skill-tag {
  padding: 0.5rem 1.1rem;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.22);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-light);
  animation: pop-in 0.4s ease both;
  cursor: default;
  transition: background var(--transition), border-color var(--transition), color var(--transition), transform var(--transition), box-shadow var(--transition);

  &:hover {
    background: rgba(124, 58, 237, 0.18);
    border-color: var(--accent);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px var(--accent-glow);
  }
}

@keyframes pop-in {
  from { opacity: 0; transform: scale(0.85) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

// Proficiency bars
.proficiency-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 3rem;
  max-width: 820px;
  margin-inline: auto;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.prof-item {}

.prof-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.prof-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.prof-pct {
  font-size: 0.82rem;
  font-weight: 700;
}

.prof-track {
  height: 7px;
  background: var(--border);
  border-radius: 10px;
  overflow: hidden;
}

.prof-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  border-radius: 10px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

// Transitions
.fade-slide-enter-active,
.fade-slide-leave-active { transition: opacity 0.22s ease, transform 0.22s ease; }
.fade-slide-enter-from   { opacity: 0; transform: translateY(8px); }
.fade-slide-leave-to     { opacity: 0; transform: translateY(-8px); }
</style>
