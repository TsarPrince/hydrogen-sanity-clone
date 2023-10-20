import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

export const usePreserveScroll = () => {
  const router = useRouter()

  const scrollPositions = useRef({})
  const isBack = useRef(false)

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true
      return true
    })

    const onRouteChangeStart = () => {
      const url = router.pathname
      scrollPositions.current[url] = window.scrollY
    }

    const onRouteChangeComplete = () => {
      // url from pathname = /buy
      // url from onRouteChangeComplete callback function = /buy?sort=ModificationTimestamp:DESC
      const url = router.pathname
      if (isBack.current && scrollPositions.current[url]) {
        window.scroll({
          top: scrollPositions.current[url],
          behavior: 'smooth',
        })
      }

      isBack.current = false
    }

    router.events.on('routeChangeStart', onRouteChangeStart)
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart)
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router])
}
