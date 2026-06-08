<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="fade-up-btn">
    <button v-if="visible" class="back-to-top" @click="scrollTop" aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  </Transition>
</template>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 44px;
  height: 44px;
  background: var(--accent);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px var(--accent-glow);
  transition: background var(--transition), transform var(--transition);

  &:hover {
    background: var(--accent-light);
    transform: translateY(-3px);
  }
}

.fade-up-btn-enter-active,
.fade-up-btn-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-up-btn-enter-from,
.fade-up-btn-leave-to     { opacity: 0; transform: translateY(12px); }
</style>
