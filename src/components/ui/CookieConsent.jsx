import { useTranslation } from 'react-i18next'
import { useCookieConsent } from '../../hooks/useCookieConsent'

function CookieConsent() {
  const { t } = useTranslation('common')
  const { consent, accept, decline } = useCookieConsent()

  if (consent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-999 bg-midnight-deep/55 backdrop-blur-nav">
      <div className="mx-auto flex max-w-container flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="text-caption text-white-55 md:max-w-xl">
          {t('cookie.text')}
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="min-h-10 rounded-btn px-5 text-caption text-white-55 transition hover:text-white"
          >
            {t('cookie.decline')}
          </button>
          <button
            onClick={accept}
            className="min-h-10 rounded-btn bg-cosmic-blue px-5 text-caption font-bold uppercase text-white shadow transition hover:opacity-85"
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
