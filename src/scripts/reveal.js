/**
 * Reveal-on-scroll (IntersectionObserver)
 *
 * Usage:
 * - Add class "reveal" to any section/container.
 * - Define CSS for .reveal and .reveal.is-visible in global.css.
 */

function shouldReduceMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function revealAllImmediately() {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
}

function initRevealObserver() {
  if (shouldReduceMotion()) {
    revealAllImmediately()
    return
  }

  const elements = Array.from(document.querySelectorAll('.reveal'))
  if (!elements.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }
  )

  elements.forEach((el) => observer.observe(el))
}

function boot() {
  // Ensure we don't miss elements if called early
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRevealObserver, { once: true })
  } else {
    initRevealObserver()
  }
}

boot()

// Astro view transitions support (safe no-op if not used)
document.addEventListener('astro:page-load', () => {
  initRevealObserver()
})
