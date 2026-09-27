import { ArrowLeft, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import apexVideo from '../../assets/apex-video/apex-vitalis-product-film.mp4'
import apexPoster from '../../assets/apex-video/apex-vitalis-product-film-poster.jpg'

export default function ApexVitalisVideo() {
  return (
    <main className="project-video-page apex-video-page">
      <section className="project-video-hero">
        <div className="project-video-container">
          <div className="project-video-kicker">
            <span>01</span>
            <i />
            <b>APEX VITALIS / PRODUCT FILM</b>
          </div>

          <div className="project-video-heading">
            <div>
              <span className="project-video-label">PRODUCT VIDEO</span>
              <h1>Apex Vitalis</h1>
              <p>高原雪山遇险者生命体征保障头盔</p>
            </div>
            <div className="project-video-meta">
              <span>00:58</span>
              <span>1920 × 1080</span>
            </div>
          </div>

          <div className="project-video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              poster={apexPoster}
              src={apexVideo}
            />
            <div className="project-video-play-hint" aria-hidden="true">
              <Play size={16} fill="currentColor" />
              <span>PLAY PRODUCT FILM</span>
            </div>
          </div>

          <div className="project-video-caption-row">
            <p>从真实救援流程出发，将供氧、保温、防护与生命体征监测组织成一个连续的生命保障系统。</p>
            <span>APEX VITALIS / 2026</span>
          </div>

          <div className="project-video-footer">
            <Link to="/project/apex-vitalis" className="project-video-back">
              <ArrowLeft size={15} />
              返回作品介绍
            </Link>
            <span>VIDEO EXPERIENCE / DIRECT LINK</span>
          </div>
        </div>
      </section>
    </main>
  )
}
