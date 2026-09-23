import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'
import apex from '../assets/works/apex.png'
import moody from '../assets/works/moody.png'
import gradient from '../assets/works/gradient.png'
import washwell from '../assets/works/washwell.png'

const projects = [
  { id: 'apex-vitalis', num: '01', title: 'Apex Vitalis', image: apex, pos: 'work-01' },
  { id: 'moody', num: '02', title: 'Moody', image: moody, pos: 'work-02' },
  { id: 'gradient', num: '03', title: 'Gradient', image: gradient, pos: 'work-03' },
  { id: 'washwell', num: '04', title: 'Wash Well', image: washwell, pos: 'work-04' },
]

export default function Works() {
  useEffect(() => {
    document.body.classList.add('works-lock')
    return () => document.body.classList.remove('works-lock')
  }, [])

  return (
    <main className="works-page-v17">
      <div className="works-ambient" aria-hidden="true" />

      <div className="works-content-tag" aria-hidden="true">
        <span>c</span>ontent
      </div>

      <div className="works-stage">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className={`work-group ${project.pos}`}
            style={{ '--delay': `${180 + index * 120}ms` }}
            aria-label={`Open ${project.title}`}
          >
            <div className="work-group-inner">
              <div className="work-number" aria-hidden="true">{project.num}</div>

              <div className="work-card">
                <div className="work-card-image">
                  <img
                    className="work-product"
                    src={project.image}
                    alt=""
                    draggable="false"
                  />
                </div>

                <div className="work-card-label">
                  <span className="work-title">{project.title}</span>
                  <span className="work-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={1.25} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="footer-text works-footer-left">肖 湘&nbsp;&nbsp;/&nbsp;&nbsp;个人作品集</div>
      <div className="footer-text works-footer-right">
        <Mail size={16} strokeWidth={1.5} color="#f5a93c" />
        <span>1418414003@qq.com</span>
      </div>
    </main>
  )
}
