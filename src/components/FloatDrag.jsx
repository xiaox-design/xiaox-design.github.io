import useFloatDrag from '../hooks/useFloatDrag'

export default function FloatDrag({
  children,
  className = '',
  maxX = 72,
  maxY = 52,
  hoverScale = 1.045,
  floatDuration = 6.2,
  floatDelay = 0,
}) {
  const { ref, handlers } = useFloatDrag({ maxX, maxY })

  return (
    <div
      ref={ref}
      className={`float-drag ${className}`}
      style={{
        '--float-hover-scale': hoverScale,
        '--float-duration': `${floatDuration}s`,
        '--float-delay': `${floatDelay}s`,
      }}
      {...handlers}
    >
      <div className="float-drag-inner" data-float-target>
        {children}
      </div>
    </div>
  )
}
