// decisions: [{
//   title: string,
//   decision: string,
//   alternative: string,
//   impact: string
// }]

import { useTranslation } from 'react-i18next'

function CaseDecisoes({ eyebrow, title, decisions = [] }) {
  const { t } = useTranslation('cases')

  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
        {eyebrow ?? t('decisions.eyebrow')}
      </p>
      {title && (
        <h2 className="text-h3 font-bold text-white mb-10">{title}</h2>
      )}

      <div className={`grid gap-4 ${decisions.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {decisions.map((item, i) => (
          <div
            key={i}
            className="border border-white-10 rounded-card p-8 bg-white-10 flex flex-col"
          >
            {/* Número + título lado a lado */}
            <div className="flex gap-5 items-start mb-12">
              <span className="text-h2 font-bold text-white-25 leading-none flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="text-h4 font-bold text-white ">{item.title}</h4>
            </div>


            {/* O que foi feito */}
            <div className="mb-5">
              <p className="text-label font-semibold uppercase 
              text-white mb-2">
                {t('decisions.done')}
              </p>
              <p className="text-body text-white-60">{item.decision}</p>
            </div>

            {/* Alternativa descartada */}
            <div className="mb-6">
              <p className="text-label font-semibold uppercase 
              text-white mb-2">
                {t('decisions.alternative')}
              </p>
              <p className="text-body text-white-60">{item.alternative}</p>
            </div>

            {/* Divisor + Impacto */}
            <div className="border-t border-white-10 mt-auto pt-6">
              <p className="text-label font-semibold uppercase text-orbit-cyan mb-2">
                {t('decisions.impact')}
              </p>
              <p className="text-body text-white-60">{item.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseDecisoes
