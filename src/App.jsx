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

function scrollToHashTarget(targetId) {
  if (!targetId) return

  const target = document.getElementById(targetId)

  if (!target) return

  const navOffset = 76
  const top =
    target.getBoundingClientRect().top +
    window.scrollY -
    navOffset

  window.scrollTo({
    top,
    left: 0,
    behavior: 'auto',
  })
}

function forceTopBeforePaint(targetId = '') {
  const html = document.documentElement
  const body = document.body
  const scroller = document.scrollingElement || html
  const previousHtml = html.style.scrollBehavior
  const previousBody = body.style.scrollBehavior

  html.classList.add('route-jump-lock')
  html.style.scrollBehavior = 'auto'
  body.style.scrollBehavior = 'auto'

  // First reset: prevent the previous page position from being reused.
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

      if (targetId) {
        const restoreHashPosition = () => {
          scrollToHashTarget(targetId)
        }

        // Scroll once immediately after the route has mounted.
        restoreHashPosition()

        // Then retry after images / layout / fonts have had time to settle.
        window.setTimeout(restoreHashPosition, 150)
        window.setTimeout(restoreHashPosition, 500)
        window.setTimeout(restoreHashPosition, 1000)

        // On a fresh page load, make one final correction after all resources load.
        if (document.readyState !== 'complete') {
          window.addEventListener('load', restoreHashPosition, { once: true })
        }

        if (document.fonts?.ready) {
          document.fonts.ready.then(restoreHashPosition).catch(() => {})
        }
      }
    })
  })
}

export default function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const targetId = location.hash
      ? decodeURIComponent(location.hash.slice(1))
      : ''

    forceTopBeforePaint(targetId)
  }, [location.pathname, location.hash])

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