import { useState } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

// metrics: [{ value: string, label: string, description?: string }]
// testimonials: [{ quote: string, name: string, role: string }]

function CaseResultado({ eyebrow = 'Resultado', title, description, metrics = [], testimonials = [] }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
        {eyebrow}
      </p>
      {title && (
        <h2 className="text-h3 font-bold text-white mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-reading text-white-85 mb-10">{description}</p>
      )}

      <div className="grid md:grid-cols-2 gap-6 items-stretch">

        {/* Coluna esquerda — métricas */}
        <div className="flex flex-col gap-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="border border-white-07 rounded-card px-6 py-5 bg-white/[0.10] flex items-center gap-6 flex-1"
            >
              <p className="text-h2 font-bold text-cosmic-blue leading-none flex-shrink-0">{m.value}</p>
              <div>
                <p className="text-caption font-semibold text-white mb-0.5">{m.label}</p>
                {m.description && (
                  <p className="text-caption text-white-35">{m.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Coluna direita — depoimentos */}
        {testimonials.length > 0 && (
          <div className="border border-white-07 rounded-card p-8 bg-white/[0.10] flex flex-col">

            {/* Aspas grandes */}
            <p className="text-white-35 leading-none" style={{ fontSize: '50px' }}>"</p>

            {/* Quote */}
            <p className="text-reading text-white-85 mb-8 flex-1">
              {testimonials[current].quote}
            </p>

            {/* Autor + navegação */}
            <div className="pt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-nebula-violet/30 flex-shrink-0" />
                <div>
                  <p className="text-md font-semibold text-white">{testimonials[current].name}</p>
                  <p className="text-label text-white-55">{testimonials[current].role}</p>
                </div>
              </div>

              {/* Navegação */}
              {testimonials.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-lg border border-white-07 flex items-center justify-center
                      text-white-35 hover:text-white hover:border-white-35 transition-colors"
                    aria-label="Anterior"
                  >
                    <LuChevronLeft size={16} />
                  </button>

                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === current ? 'w-5 bg-cosmic-blue' : 'w-1.5 bg-white-07'
                        }`}
                        aria-label={`Depoimento ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-lg border border-white-07 flex items-center justify-center
                      text-white-35 hover:text-white hover:border-white-35 transition-colors"
                    aria-label="Próximo"
                  >
                    <LuChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  )
}

export default CaseResultado
