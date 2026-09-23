import { useEffect, useRef } from 'react'

function soften(value, limit) {
  const amount = Math.abs(value)
  if (!amount) return 0
  // Soft asymptotic travel: every extra bit of pointer movement still moves the
  // object, but the response gradually diminishes instead of hitting a hard wall.
  return Math.sign(value) * limit * Math.tanh(amount / (limit * 1.65))
}

export default function useFloatDrag({ maxX = 72, maxY = 52 } = {}) {
  const ref = useRef(null)
  const state = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    let frame = 0

    const render = () => {
      const inner = el.querySelector('[data-float-target]')
      if (!inner) return
      inner.style.setProperty('--drag-x', `${state.current.x.toFixed(2)}px`)
      inner.style.setProperty('--drag-y', `${state.current.y.toFixed(2)}px`)
    }

    const tick = () => {
      const s = state.current
      s.x += (s.targetX - s.x) * (s.active ? 0.22 : 0.13)
      s.y += (s.targetY - s.y) * (s.active ? 0.22 : 0.13)
      render()
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const setDragging = (active) => {
    state.current.active = active
    if (ref.current) ref.current.dataset.dragging = active ? 'true' : 'false'
  }

  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    const s = state.current
    s.startX = event.clientX
    s.startY = event.clientY
    s.originX = s.targetX
    s.originY = s.targetY
    s.active = true
    setDragging(true)
    event.currentTarget.setPointerCapture?.(event.pointerId)
    event.preventDefault()
  }

  const onPointerMove = (event) => {
    const s = state.current
    if (!s.active) return
    const dx = event.clientX - s.startX
    const dy = event.clientY - s.startY
    s.targetX = s.originX + soften(dx, maxX)
    s.targetY = s.originY + soften(dy, maxY)
  }

  const release = () => {
    const s = state.current
    s.active = false
    s.targetX = 0
    s.targetY = 0
    setDragging(false)
  }

  return {
    ref,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: release,
      onPointerCancel: release,
      onLostPointerCapture: release,
    },
  }
}
