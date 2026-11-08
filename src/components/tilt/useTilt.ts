import { useEffect } from 'react'

const MAX_ANGLE = 7

// 3D-наклон карточек с атрибутом data-tilt за курсором. Только для мыши, при prefers-reduced-motion выключен.
function useTilt() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    let active: HTMLElement | null = null

    const reset = (el: HTMLElement) => {
      el.style.transition = 'transform 0.5s ease, border-color 0.3s ease'
      el.style.transform = ''
    }

    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>('[data-tilt]') ?? null
      if (active && active !== target) reset(active)
      active = target
      if (!target) return

      const rect = target.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      target.style.transition = 'transform 0.12s ease-out, border-color 0.3s ease'
      target.style.transform =
        `perspective(900px) rotateX(${(-y * MAX_ANGLE).toFixed(2)}deg) rotateY(${(x * MAX_ANGLE).toFixed(2)}deg) translateY(-4px)`
    }

    const onLeave = () => {
      if (active) reset(active)
      active = null
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])
}

export default useTilt
