// pain: [{ icon: <ReactNode>, title: string, description: string }]

function CaseProblema({ eyebrow = 'O problema', title, children, pain = [] }) {
  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <div className="
      grid md:grid-cols-2 gap-0 
      items-center border border-white-07 
      rounded-card py-12 bg-white/[0.10]">

        {/* Coluna esquerda — texto */}
        <div className="px-14">
          <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
            {eyebrow}
          </p>
          <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
          <div className="text-reading text-white-85 space-y-4">{children}</div>
        </div>

        {/* Divisor vertical */}
        <div className="border-l border-white-07 px-14">
          {/* Coluna direita — dores */}
          <ul className="space-y-8">
            {pain.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                {/* Ícone solto */}
                <span className="text-orbit-cyan text-lg flex-shrink-0 mt-0.5">{item.icon}</span>

                {/* Conteúdo */}
                <div>
                  <p className="text-reading font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-md text-white-65">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default CaseProblema
