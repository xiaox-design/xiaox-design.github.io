import { Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Nav from './components/Nav'
import Cover from './pages/Cover'
import About from './pages/About'
import Works from './pages/Works'
import ApexVitalis from './pages/projects/ApexVitalis'
import Moody from './pages/projects/Moody'
import Gradient from './pages/projects/Gradient'
import WashWell from './pages/projects/WashWell'

function forceTopBeforePaint() {
  const html = document.documentElement
  const body = document.body
  const scroller = document.scrollingElement || html
  const previousHtml = html.style.scrollBehavior
  const previousBody = body.style.scrollBehavior

  html.classList.add('route-jump-lock')
  html.style.scrollBehavior = 'auto'
  body.style.scrollBehavior = 'auto'

  // Reset every likely scroll container synchronously, before the browser paints
  // the newly mounted route. This prevents the old page's bottom position from
  // being animated through the new page's content.
  scroller.scrollTop = 0
  html.scrollTop = 0
  body.scrollTop = 0
  window.scrollTo(0, 0)

  requestAnimationFrame(() => {
    scroller.scrollTop = 0
    html.scrollTop = 0
    body.scrollTop = 0
    window.scrollTo(0, 0)

    requestAnimationFrame(() => {
      scroller.scrollTop = 0
      html.scrollTop = 0
      body.scrollTop = 0
      window.scrollTo(0, 0)
      html.style.scrollBehavior = previousHtml
      body.style.scrollBehavior = previousBody
      html.classList.remove('route-jump-lock')
    })
  })
}

export default function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    forceTopBeforePaint()
  }, [location.pathname])

  return (
    <>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Cover />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/project/apex-vitalis" element={<ApexVitalis />} />
        <Route path="/project/moody" element={<Moody />} />
        <Route path="/project/gradient" element={<Gradient />} />
        <Route path="/project/washwell" element={<WashWell />} />
      </Routes>
    </>
  )
}
