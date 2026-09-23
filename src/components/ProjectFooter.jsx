import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function ProjectFooter({ nextLabel = '返回作品目录页' }) {
  return (
    <footer className="project-footer-shared">
      <div className="project-footer-email">
        <Mail size={15} strokeWidth={1.5} />
        <span>1418414003@qq.com</span>
      </div>
      <Link to="/works" className="project-footer-next">
        <span>{nextLabel}</span>
        <ArrowUpRight size={15} strokeWidth={1.65} />
      </Link>
    </footer>
  )
}
