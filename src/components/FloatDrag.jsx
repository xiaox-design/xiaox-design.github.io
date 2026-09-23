import useFloatDrag from '../hooks/useFloatDrag'

export default function FloatDrag({
  children,
  className = '',
  maxX = 72,
  maxY = 52,
  hoverScale = 1.045,
  floatDuration = 6.2,
  floatDelay = 0,
  hitInset = 0,
}) {
  const { ref, handlers } = useFloatDrag({ maxX, maxY })

  const hasCustomHit = Number(hitInset) > 0

  return (
    <div
      ref={ref}
      className={`float-drag ${className}`}
      {...(!hasCustomHit ? handlers : {})}
      style={{
        '--float-hover-scale': hoverScale,
        '--float-duration': `${floatDuration}s`,
        '--float-delay': `${floatDelay}s`,
        ...(hasCustomHit ? { pointerEvents: 'none' } : {}),
      }}
    >
      <div className="float-drag-inner" data-float-target>
        {children}
      </div>
      {hasCustomHit && (
        <div
          className="float-drag-hit"
          style={{
            '--hit-inset': `${hitInset}%`,
          }}
          {...handlers}
        />
      )}
    </div>
  )
}
