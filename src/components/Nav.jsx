import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const navItems = [
    { path: '/', label: 'Cover' },
    { path: '/about', label: 'About' },
    { path: '/works', label: 'Works' },
  ]
  const isProject = location.pathname.startsWith('/project/')
  const projectLabel = location.pathname.includes('apex-vitalis')
    ? '01 / APEX VITALIS'
    : location.pathname.includes('moody')
      ? '02 / MOODY'
      : location.pathname.includes('gradient')
        ? '03 / GRADIENT'
        : location.pathname.includes('washwell')
          ? '04 / WASH WELL'
          : 'PROJECT'

  return (
    <header className={`site-nav${isProject ? ' project-nav' : ''}`}>
      <div className="site-nav-inner">
        <div className="nav-context">
          <Link to={isProject ? '/works' : '/'} className="nav-brand">
            {isProject ? <><span className="nav-index">{projectLabel.split(' / ')[0]}</span><span>{projectLabel.split(' / ')[1]}</span></> : '肖湘'}
          </Link>
        </div>
        <nav className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link${location.pathname === item.path ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
