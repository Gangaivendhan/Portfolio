import { onMounted, onUnmounted, nextTick } from 'vue'

export function useIntersection(selector = '.fade-up, .fade-in', options = {}) {
  let observer = null

  onMounted(async () => {
    await nextTick()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...options }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
