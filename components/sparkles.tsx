"use client"

import { useEffect, useRef, useState } from "react"
import { useMousePosition } from "@/lib/hooks/use-mouse-position"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number

  constructor(canvas: HTMLCanvasElement, minSize: number, maxSize: number) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * (maxSize - minSize) + minSize
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25 

  }

  update(mousePosition: { x: number; y: number }, canvas: HTMLCanvasElement) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > canvas.width) this.x = 0
    if (this.x < 0) this.x = canvas.width
    if (this.y > canvas.height) this.y = 0
    if (this.y < 0) this.y = canvas.height

    // Mouse interaction
    const dx = mousePosition.x - this.x
    const dy = mousePosition.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance < 100) {
      const angle = Math.atan2(dy, dx)
      this.x -= Math.cos(angle) * 1
      this.y -= Math.sin(angle) * 1
    }
  }

  draw(ctx: CanvasRenderingContext2D, particleColor: string) {
    ctx.fillStyle = particleColor
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "h-full w-full",
  particleColor = "#FFFFFF",
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    if (typeof window === "undefined") return

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Увеличение разрешения канваса для улучшения качества
    canvas.width = window.innerWidth * 2 // Увеличиваем разрешение
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    ctx.imageSmoothingEnabled = true // Включаем сглаживание
    ctx.imageSmoothingQuality = "high" // Устанавливаем качество сглаживания на высокий уровень

    let particles: Particle[] = []
    let animationFrameId: number

    const init = () => {
      particles = []
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle(canvas, minSize, maxSize))
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(mousePosition, canvas)
        particle.draw(ctx, particleColor)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      if (typeof window === "undefined") return

      // Обновляем разрешение при изменении размера окна
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight * 2
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [maxSize, minSize, particleColor, particleDensity, mousePosition.x, mousePosition.y])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  )
}
