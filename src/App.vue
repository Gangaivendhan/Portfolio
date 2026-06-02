<script setup>
import NavBar          from '@/components/NavBar.vue'
import HeroSection     from '@/components/HeroSection.vue'
import AboutSection    from '@/components/AboutSection.vue'
import SkillsSection   from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection  from '@/components/ContactSection.vue'
import FooterSection   from '@/components/FooterSection.vue'
import { useIntersection } from '@/composables/useIntersection'

useIntersection()
</script>

<template>
  <div class="noise-overlay" aria-hidden="true" />
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<style>
/* Container utility (Tailwind-compatible) */
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}
</style>
