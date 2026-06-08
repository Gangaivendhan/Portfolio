<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { theme, toggle } = useTheme()

const scrolled   = ref(false)
const menuOpen   = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'about',    label: 'About'    },
  { id: 'skills',   label: 'Skills'   },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  },
]

function scrollTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  scrolled.value = window.scrollY > 40

  const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean)
  const current = sections.findLast(s => s.getBoundingClientRect().top <= 120)
  if (current) activeSection.value = current.id
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['navbar-wrapper', { scrolled }]">
    <nav class="nav-inner container">
      <!-- Logo -->
      <button class="nav-logo" @click="scrollTo('home')">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-name">Gangai</span>
        <span class="logo-bracket">/&gt;</span>
      </button>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.id">
          <button
            :class="['nav-link', { active: activeSection === link.id }]"
            @click="scrollTo(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <!-- CTA + theme toggle + hamburger -->
      <div class="nav-actions">
        <!-- Theme toggle -->
        <button class="theme-toggle" @click="toggle" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
          <!-- Sun (shown in dark mode) -->
          <svg v-if="theme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon (shown in light mode) -->
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </button>

        <a href="/Gangai_Resume.pdf" download class="btn-outline btn-sm" title="Download Resume">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>

        <a href="#contact" class="btn-accent btn-sm" @click.prevent="scrollTo('contact')">
          Hire Me
        </a>
        <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="mobile-menu">
        <ul>
          <li v-for="link in navLinks" :key="link.id">
            <button class="mobile-link" @click="scrollTo(link.id)">{{ link.label }}</button>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: background var(--transition), backdrop-filter var(--transition), box-shadow var(--transition);

  &.scrolled {
    background: rgba(13, 13, 13, 0.85);
    backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 var(--border);
    padding: 0.6rem 0;
  }
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav-logo {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  padding: 0;

  .logo-bracket { color: var(--accent-light); }
  .logo-name    { color: var(--text-primary); margin: 0 2px; }
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.25rem;

  @media (max-width: 768px) { display: none; }
}

.nav-link {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);

  &:hover, &.active {
    color: var(--text-primary);
    background: rgba(255,255,255,0.06);
  }
  &.active { color: var(--accent-light); }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle {
  width: 36px;
  height: 36px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
  flex-shrink: 0;

  &:hover {
    color: var(--accent-light);
    border-color: var(--border-accent);
  }
}

.btn-outline.btn-sm {
  @media (max-width: 900px) { display: none; }
}

.btn-sm { padding: 0.45rem 1.1rem; font-size: 0.82rem; }

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 768px) { display: flex; }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  &.open span:nth-child(2) { opacity: 0; }
  &.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}

.mobile-menu {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 1rem 0 1.5rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
}

.mobile-link {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);

  &:hover {
    color: var(--text-primary);
    background: rgba(255,255,255,0.05);
  }
}

// Mobile menu transition
.slide-down-enter-active,
.slide-down-leave-active { transition: max-height 0.3s ease, opacity 0.3s ease; max-height: 300px; overflow: hidden; }
.slide-down-enter-from,
.slide-down-leave-to   { max-height: 0; opacity: 0; }
</style>
