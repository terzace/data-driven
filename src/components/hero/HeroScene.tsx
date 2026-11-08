import { useEffect, useRef } from 'react'
import styles from './HeroScene.module.scss'

// 3D-волна данных за первым экраном: сетка точек на canvas без сторонних библиотек.
// Рисуется только когда видна, на телефоне сетка реже, при prefers-reduced-motion один статичный кадр.
function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    let frame = 0
    let running = false
    let visible = true
    let mouseX = 0
    let mouseY = 0
    let tiltX = 0
    let tiltY = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const small = width < 700
      cols = small ? 26 : 46
      rows = small ? 16 : 24
    }

    const draw = (time: number) => {
      const t = time * 0.00045
      tiltX += (mouseY - tiltX) * 0.04
      tiltY += (mouseX - tiltY) * 0.04

      const angleY = -0.5 + Math.sin(t * 0.6) * 0.18 + tiltY * 0.25
      const angleX = 1.08 + tiltX * 0.08
      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)
      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)
      const scale = width < 700 ? width * 0.62 : width * 0.44
      const centerX = width < 700 ? width * 0.5 : width * 0.62
      const centerY = height * 0.74
      const distance = 2.6

      const px = new Float32Array(cols * rows)
      const py = new Float32Array(cols * rows)
      const depth = new Float32Array(cols * rows)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = (c / (cols - 1)) * 2.4 - 1.2
          const z = (r / (rows - 1)) * 2.4 - 1.2
          const y =
            Math.sin(x * 2.6 + t * 2) * 0.17 +
            Math.cos(z * 3.1 + t * 1.6) * 0.14 +
            Math.sin((x + z) * 1.7 - t * 1.2) * 0.09

          const rx = x * cosY - z * sinY
          const rz = x * sinY + z * cosY
          const ry = y * cosX - rz * sinX
          const rz2 = y * sinX + rz * cosX

          const perspective = distance / (distance + rz2)
          const i = r * cols + c
          px[i] = centerX + rx * scale * perspective
          py[i] = centerY + ry * scale * perspective
          depth[i] = perspective
        }
      }

      ctx.clearRect(0, 0, width, height)

      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(56, 169, 248, 0.2)'
      ctx.beginPath()
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c
          if (c < cols - 1) {
            ctx.moveTo(px[i], py[i])
            ctx.lineTo(px[i + 1], py[i + 1])
          }
          if (r < rows - 1) {
            ctx.moveTo(px[i], py[i])
            ctx.lineTo(px[i + cols], py[i + cols])
          }
        }
      }
      ctx.stroke()

      for (let i = 0; i < px.length; i++) {
        const d = depth[i]
        const size = Math.max(0.7, (d - 0.5) * 3)
        const alpha = Math.min(0.95, Math.max(0.15, (d - 0.55) * 1.8))
        ctx.fillStyle = d > 1.02 ? `rgba(110, 168, 255, ${alpha})` : `rgba(56, 169, 248, ${alpha})`
        ctx.beginPath()
        ctx.arc(px[i], py[i], size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (time: number) => {
      draw(time)
      frame = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running || reduceMotion || !visible || document.hidden) return
      running = true
      frame = requestAnimationFrame(loop)
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(frame)
    }

    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5
      mouseY = event.clientY / window.innerHeight - 0.5
    }

    const onVisibility = () => (document.hidden ? stop() : start())

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })

    const onResize = () => {
      resize()
      if (!running) draw(performance.now())
    }

    resize()
    draw(performance.now())
    observer.observe(canvas)
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      stop()
      observer.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.scene} aria-hidden="true" />
}

export default HeroScene
