import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectNextLink({ to, children = 'NEXT PROJECT', className = 'next-project' }) {
  return (
    <Link to={to} className={className}>
      {children} <ArrowUpRight size={15} />
    </Link>
  )
}
