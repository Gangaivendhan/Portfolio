<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function onScroll() {
  const scrolled  = window.scrollY
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  progress.value  = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0
}

onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="scroll-progress-track">
    <div class="scroll-progress-fill" :style="{ width: progress + '%' }" />
  </div>
</template>

<style lang="scss" scoped>
.scroll-progress-track {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 2000;
  background: transparent;
}

.scroll-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  border-radius: 0 2px 2px 0;
  transition: width 0.1s linear;
  box-shadow: 0 0 8px var(--accent-glow);
}
</style>
