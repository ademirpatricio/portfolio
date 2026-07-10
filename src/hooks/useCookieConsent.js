import { useState, useEffect } from 'react'

const CONSENT_KEY = 'ap_cookie_consent'

function applyConsent(accepted) {
  if (typeof window.gtag !== 'function') return
  const value = accepted ? 'granted' : 'denied'
  window.gtag('consent', 'update', {
    analytics_storage:  value,
    ad_storage:         value,
    ad_user_data:       value,
    ad_personalization: value,
  })
}

export function useCookieConsent() {
  const [consent, setConsent] = useState(null) // null = ainda não decidiu

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      applyConsent(stored === 'accepted')
      setConsent(stored)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    applyConsent(true)
    setConsent('accepted')
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    applyConsent(false)
    setConsent('declined')
  }

  return { consent, accept, decline }
}
