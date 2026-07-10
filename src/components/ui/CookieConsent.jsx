import { useCookieConsent } from '../../hooks/useCookieConsent'

function CookieConsent() {
  const { consent, accept, decline } = useCookieConsent()

  if (consent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-999 bg-midnight-deep/55 backdrop-blur-nav">
      <div className="mx-auto flex max-w-container flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="text-sm text-white-55 md:max-w-xl">
          Este site usa cookies para analisar o tráfego e entender melhor quem o visita.
          Ao aceitar, você consente com ferramentas como Google Analytics e LinkedIn Insight Tag.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="min-h-10 rounded-btn px-5 text-sm text-white-55 transition hover:text-white"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="min-h-10 rounded-btn bg-cosmic-blue px-5 text-sm font-bold uppercase text-white shadow transition hover:opacity-85"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
