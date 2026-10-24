import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const CONTENT_ROUTES = ["/guides"]

export default function AdSenseBanner() {
  const location = useLocation()
  const adRef = useRef<HTMLModElement>(null)
  const allowed = CONTENT_ROUTES.some((route) => route === "/" ? location.pathname === "/" : location.pathname.startsWith(route))

  useEffect(() => {
    if (!allowed) return
    const existing = document.querySelector('script[data-jtore-adsense="true"]')
    if (!existing) {
      const script = document.createElement("script")
      script.async = true
      script.crossOrigin = "anonymous"
      script.dataset.jtoreAdsense = "true"
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4997339220786278"
      document.head.appendChild(script)
    }
    const timer = window.setTimeout(() => {
      if (adRef.current && !adRef.current.dataset.loaded) {
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
          adRef.current.dataset.loaded = "true"
        } catch { /* AdSense may be unavailable in preview or blocked by an extension. */ }
      }
    }, 250)
    return () => window.clearTimeout(timer)
  }, [allowed, location.pathname])

  if (!allowed) return null
  return <div className="mx-auto my-8 min-h-[100px] max-w-5xl overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] text-center"><ins ref={adRef} className="adsbygoogle" style={{ display: "block", minHeight: 90 }} data-ad-client="ca-pub-4997339220786278" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true" /></div>
}

declare global { interface Window { adsbygoogle?: unknown[] } }
