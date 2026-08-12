'use client'
import { useEffect, useRef } from 'react'

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    type Particle = { x: number; y: number; r: number; speed: number; opacity: number; drift: number }
    const particles: Particle[] = []
    const colors = ['255,140,0', '255,80,20', '255,200,50']

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: height + Math.random() * height,
        r: Math.random() * 2.5 + 0.5,
        speed: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        drift: Math.random() * 0.6 - 0.3,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},${p.opacity})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `rgba(${color},0.8)`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}