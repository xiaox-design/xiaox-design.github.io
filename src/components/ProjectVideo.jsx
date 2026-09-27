import useScrollReveal from '../hooks/useScrollReveal'

export default function ProjectVideo({
  code,
  title = '让产品在真实环境中被看见。',
  description,
  duration,
  video,
  poster,
  videoId,
}) {
  const ref = useScrollReveal()

  return (
    <section
      id={videoId || `video-${String(code).toLowerCase()}`}
      ref={ref}
      className="project-inline-video"
      aria-label={`${code} 产品视频`}
    >
      <div className="project-inline-video-inner">
        <div className="project-inline-video-rule">
          <span>FILM</span><i /><b>PRODUCT FILM / REAL USE</b>
        </div>

        <div className="project-inline-video-head">
          <div className="reveal project-inline-video-title">
            <span className="project-inline-video-tag">PRODUCT FILM</span>
            <h2>{title}</h2>
          </div>
          <div className="reveal project-inline-video-note" style={{ '--delay': '70ms' }}>
            <p>{description}</p>
            <span>{duration} / 1920 × 1080</span>
          </div>
        </div>

        <div className="reveal project-inline-video-frame" style={{ '--delay': '120ms' }}>
          <video
            controls
            playsInline
            preload="metadata"
            poster={poster}
            src={video}
            onLoadedMetadata={(event) => { event.currentTarget.volume = 1 }}
          />
          <div className="project-inline-video-corner">{code} / PRODUCT FILM</div>
        </div>

        <div className="reveal project-inline-video-foot" style={{ '--delay': '170ms' }}>
          <span>VIEW THE PRODUCT IN CONTEXT</span>
          <strong>真实使用 · 产品形态 · 工作方式</strong>
        </div>
      </div>
    </section>
  )
}
