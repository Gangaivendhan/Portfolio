<script setup>
defineProps({ project: { type: Object, default: null } })
const emit = defineEmits(['close'])
</script>

<template>
  <Transition name="modal">
    <div v-if="project" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-box">

        <!-- Header -->
        <div class="modal-header">
          <div class="modal-folder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
            </svg>
          </div>
          <button class="modal-close" @click="emit('close')" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Title & Description -->
        <h2 class="modal-title">{{ project.title }}</h2>
        <p class="modal-desc muted-text">{{ project.description }}</p>

        <!-- Points -->
        <ul class="modal-points">
          <li v-for="point in project.points" :key="point">
            <span class="point-dot" />
            {{ point }}
          </li>
        </ul>

        <!-- Tags -->
        <div class="modal-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1500;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-box {
  background: var(--bg-card);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-xl);
  padding: 2rem;
  width: 100%;
  max-width: 560px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.modal-folder { color: var(--accent-light); }

.modal-close {
  width: 32px;
  height: 32px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.4);
    color: #ef4444;
  }
}

.modal-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
  letter-spacing: -0.02em;
}

.modal-desc {
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.modal-points {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
}

.point-dot {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.45rem;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

// Modal transition
.modal-enter-active { transition: opacity 0.25s ease; }
.modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-active .modal-box { animation: modal-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-leave-active .modal-box { animation: modal-out 0.2s ease forwards; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

@keyframes modal-in  { from { transform: scale(0.9) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
@keyframes modal-out { from { transform: scale(1); opacity: 1; } to { transform: scale(0.95); opacity: 0; } }
</style>
