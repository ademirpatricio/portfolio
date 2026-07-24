// decisions: [{
//   title: string,
//   decision: string,
//   alternative: string,
//   impact: string
// }]

function CaseDecisoes({ eyebrow = 'Processo e decisões', title, decisions = [] }) {
  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
        {eyebrow}
      </p>
      {title && (
        <h2 className="text-h3 font-bold text-white mb-10">{title}</h2>
      )}

      <div className={`grid gap-4 ${decisions.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {decisions.map((item, i) => (
          <div
            key={i}
            className="border border-white-07 rounded-card p-8 bg-white/[0.10] flex flex-col"
          >
            {/* Número + título lado a lado */}
            <div className="flex gap-5 items-start mb-6">
              <span className="text-h2 font-bold text-white-35 leading-none flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-reading leading-tight font-bold text-white pt-1">{item.title}</h3>
            </div>

            {/* Divisor */}
            <div className=" mb-6" />

            {/* O que foi feito */}
            <div className="mb-5">
              <p className="text-label font-semibold uppercase tracking-widest text-white-35 mb-2">
                O que foi feito
              </p>
              <p className="text-caption text-white-85">{item.decision}</p>
            </div>

            {/* Alternativa descartada */}
            <div className="mb-6">
              <p className="text-label font-semibold uppercase tracking-widest text-white-35 mb-2">
                Alternativa descartada
              </p>
              <p className="text-caption text-white-85">{item.alternative}</p>
            </div>

            {/* Divisor + Impacto */}
            <div className="border-t border-white-07 mt-auto pt-6">
              <p className="text-label font-semibold uppercase tracking-widest text-orbit-cyan mb-2">
                Impacto
              </p>
              <p className="text-caption text-white-85">{item.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseDecisoes
