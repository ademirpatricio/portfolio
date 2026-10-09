import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../../utils/lenisInstance'
import { toPtPath } from '../../i18n/routes'

function ScrollToTop() {
  const { pathname } = useLocation()

  // Compara a página, não o idioma: trocar PT/EN não leva ao topo.
  const page = toPtPath(pathname)

  useEffect(() => {
    const lenis = getLenis()

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [page])

  return null
}

export default ScrollToTop
