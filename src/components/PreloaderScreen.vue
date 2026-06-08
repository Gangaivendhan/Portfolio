<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  setTimeout(() => { visible.value = false }, 2000)
})
</script>

<template>
  <Transition name="preloader">
    <div v-if="visible" class="preloader">
      <div class="preloader-content">
        <div class="logo-wrap">
          <span class="bracket">&lt;</span>
          <span class="letter">G</span>
          <span class="bracket">/&gt;</span>
        </div>
        <div class="loader-bar">
          <div class="loader-fill" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logo-wrap {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  animation: pulse 1s ease-in-out infinite;

  .bracket { color: var(--accent-light); }
  .letter  { color: var(--text-primary); margin: 0 4px; }
}

.loader-bar {
  width: 160px;
  height: 3px;
  background: var(--border);
  border-radius: 3px;
  overflow: hidden;
}

.loader-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  border-radius: 3px;
  animation: load 1.8s ease forwards;
}

@keyframes load {
  from { width: 0; }
  to   { width: 100%; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.7; transform: scale(0.97); }
}

// Exit transition
.preloader-enter-active { transition: opacity 0.4s ease; }
.preloader-leave-active { transition: opacity 0.5s ease 0.1s; }
.preloader-enter-from,
.preloader-leave-to     { opacity: 0; }
</style>
