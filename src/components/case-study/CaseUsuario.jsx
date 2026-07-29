// personas: [{
//   image: string,
//   name: string,
//   role: string,
//   bio: string,
//   pain: string,
//   tags: string[]
// }]

function CaseUsuario({ eyebrow = 'O usuário', title, personas = [] }) {
  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
        {eyebrow}
      </p>
      {title && (
        <h2 className="text-h3 font-bold text-white mb-10">{title}</h2>
      )}

      <div className={`grid gap-6 ${personas.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {personas.map((persona, i) => (
          <div
            key={i}
            className="border border-white-10 rounded-card overflow-hidden bg-white-10"
          >
            {/* Foto */}
            <div className="w-full h-72 overflow-hidden">
              <img
                  src={persona.image}
                  alt={persona.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
            </div>
            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-h3 font-bold text-white mb-2">{persona.name}</h3>
              <p className="text-label uppercase text-white-80 mb-4">{persona.role}</p>
              {persona.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {persona.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label text-white 
                    bg-white-10 rounded px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              )}
              <p className="text-body text-white-60 mb-4">{persona.bio}</p>
              <div className="pt-4 mb-4">
                <p className="text-label font-semibold uppercase text-solar-orange mb-2">
                  Dor principal
                </p>
                <p className="text-body text-white-60">
                  {persona.pain}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseUsuario
