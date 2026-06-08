<script setup>
import { ref, onMounted } from 'vue'
import { personal } from '@/data/portfolio.js'

const roles = ['Frontend Developer', 'Vue.js Developer', 'TypeScript Developer', 'UI/UX Implementer']
const currentRole = ref('')
const roleIndex   = ref(0)
const charIndex   = ref(0)
const deleting    = ref(false)

function typeWriter() {
  const target = roles[roleIndex.value]

  if (!deleting.value) {
    currentRole.value = target.slice(0, ++charIndex.value)
    if (charIndex.value === target.length) {
      deleting.value = true
      setTimeout(typeWriter, 2200)
      return
    }
  } else {
    currentRole.value = target.slice(0, --charIndex.value)
    if (charIndex.value === 0) {
      deleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }
  setTimeout(typeWriter, deleting.value ? 55 : 90)
}

onMounted(() => setTimeout(typeWriter, 800))

function scrollToAbout() {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}
function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero">
    <!-- Gradient orbs -->
    <div class="orb orb-1" />
    <div class="orb orb-2" />

    <div class="container hero-inner">
      <!-- Left: text -->
      <div class="hero-text">
        <!-- Currently working badge -->
        <div class="working-badge fade-in">
          <span class="working-dot" />
          Frontend Developer · Mocero Health Solution
        </div>

        <p class="hero-greeting fade-in">👋 Hello, I'm</p>

        <h1 class="hero-name fade-up">
          {{ personal.name }}
        </h1>

        <div class="hero-role fade-up">
          <span class="role-text">{{ currentRole }}</span>
          <span class="cursor">|</span>
        </div>

        <p class="hero-bio fade-up">{{ personal.bio }}</p>

        <div class="hero-actions fade-up">
          <button class="btn-accent" @click="scrollToContact">
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button class="btn-outline" @click="scrollToAbout">
            View My Work
          </button>
          <a href="/Gangai_Resume.pdf" download class="btn-outline">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>

        <!-- Quick stats -->
        <div class="hero-stats fade-up">
          <div class="stat">
            <span class="stat-num">3.3+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-num">4</span>
            <span class="stat-label">Projects Delivered</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-num">Vue.js</span>
            <span class="stat-label">Core Expertise</span>
          </div>
        </div>
      </div>

      <!-- Right: avatar card -->
      <div class="hero-visual fade-in">
        <div class="avatar-card">
          <div class="avatar-ring">
            <div class="avatar-initials">GR</div>
          </div>
          <!-- Floating badges -->
          <div class="badge badge-vue">Vue.js</div>
          <div class="badge badge-react">TypeScript</div>
          <div class="badge badge-node">PrimeVue</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <button class="scroll-indicator" @click="scrollToAbout" aria-label="Scroll down">
      <div class="scroll-dot" />
    </button>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  opacity: 0.35;

  &-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
    top: -100px; left: -100px;
  }
  &-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, #2563eb 0%, transparent 70%);
    bottom: -50px; right: -50px;
    opacity: 0.2;
  }
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding-top: 2rem;
  padding-bottom: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
}

.working-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.9rem;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #4ade80;
  margin-bottom: 1rem;
  letter-spacing: 0.01em;

  @media (max-width: 900px) { margin-inline: auto; }
}

.working-dot {
  width: 7px;
  height: 7px;
  background: #4ade80;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 6px #4ade80;
  animation: blink-dot 2s ease-in-out infinite;
}

@keyframes blink-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.hero-greeting {
  font-size: 1rem;
  color: var(--accent-light);
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.hero-name {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f0f0f0 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--text-secondary);
  height: 2.2rem;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) { justify-content: center; }
}

.role-text { color: var(--accent-light); }

.cursor {
  display: inline-block;
  color: var(--accent);
  font-weight: 300;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.hero-bio {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 2rem;

  @media (max-width: 900px) { margin-inline: auto; }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;

  @media (max-width: 900px) { justify-content: center; }
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 900px) { justify-content: center; }
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.stat-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent-light);
  line-height: 1;
}
.stat-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--border);
}

// ─── Avatar Card ─────────────────────────────────────────────────────────────
.hero-visual {
  display: flex;
  justify-content: center;

  @media (max-width: 900px) { order: -1; }
}

.avatar-card {
  position: relative;
  width: 280px;
  height: 280px;

  @media (max-width: 600px) { width: 200px; height: 200px; }
}

.avatar-ring {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent) 0%, #2563eb 100%);
  padding: 4px;
  box-shadow: 0 0 80px var(--accent-glow);
  animation: float 4s ease-in-out infinite;
}

.avatar-initials {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  background: var(--bg-secondary);
  color: var(--accent);

  @media (max-width: 600px) { font-size: 2.8rem; }
}

.badge {
  position: absolute;
  padding: 0.4rem 0.9rem;
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 700;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  white-space: nowrap;

  &-vue  { top: 5%;  right: -18%; animation: float 3.5s 0.2s ease-in-out infinite; }
  &-react { bottom: 20%; right: -22%; animation: float 4s 0.8s ease-in-out infinite; }
  &-node { bottom: 5%; left: -18%; animation: float 3.8s 0.4s ease-in-out infinite; }

  @media (max-width: 600px) { display: none; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

// ─── Scroll Indicator ────────────────────────────────────────────────────────
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: 2px solid var(--border);
  border-radius: 100px;
  width: 28px;
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding-top: 8px;
  transition: border-color var(--transition);

  &:hover { border-color: var(--accent-light); }
}

.scroll-dot {
  width: 4px;
  height: 8px;
  background: var(--accent-light);
  border-radius: 2px;
  animation: scroll-anim 1.8s ease-in-out infinite;
}

@keyframes scroll-anim {
  0%   { transform: translateY(0);   opacity: 1; }
  80%  { transform: translateY(14px); opacity: 0; }
  100% { transform: translateY(0);   opacity: 0; }
}
</style>
