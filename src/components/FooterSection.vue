<script setup>
import { personal } from '@/data/portfolio.js'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">

      <div class="footer-brand">
        <button class="footer-logo" @click="scrollTo('home')">
          <span class="logo-bracket">&lt;</span>Gangai<span class="logo-bracket">/&gt;</span>
        </button>
        <p class="footer-tagline muted-text">Building modern web & mobile experiences.</p>
      </div>

      <nav class="footer-links" aria-label="Footer navigation">
        <button @click="scrollTo('about')">About</button>
        <button @click="scrollTo('skills')">Skills</button>
        <button @click="scrollTo('experience')">Experience</button>
        <button @click="scrollTo('projects')">Projects</button>
        <button @click="scrollTo('contact')">Contact</button>
      </nav>

      <div class="footer-socials">
        <a :href="personal.github"   target="_blank" rel="noopener" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a :href="personal.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a :href="`mailto:${personal.email}`" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>

    </div>
    <div class="footer-copy">
      <div class="container">
        <p class="muted-text">© {{ year }} Gangaivendhan Ravi. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) { flex-direction: column; text-align: center; }
}

.footer-logo {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-primary);
  padding: 0;
  margin-bottom: 0.35rem;
  .logo-bracket { color: var(--accent-light); }
}

.footer-tagline { font-size: 0.82rem; margin: 0; }

.footer-links {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 0.875rem;
    padding: 0.3rem 0.7rem;
    border-radius: var(--radius-sm);
    transition: color var(--transition), background var(--transition);

    &:hover { color: var(--text-primary); background: rgba(255,255,255,0.05); }
  }
}

.footer-socials {
  display: flex;
  gap: 0.75rem;

  a {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    text-decoration: none;
    transition: all var(--transition);

    &:hover {
      color: var(--accent-light);
      border-color: var(--border-accent);
      transform: translateY(-2px);
    }
  }
}

.footer-copy {
  border-top: 1px solid var(--border);
  padding: 1rem 0;
  text-align: center;

  p { font-size: 0.8rem; margin: 0; }
}
</style>
