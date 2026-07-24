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
            className="border border-white-07 rounded-card overflow-hidden bg-white/[0.10]"
          >
            {/* Foto */}
            <div className="w-full h-72 bg-spacy-navy overflow-hidden">
              {persona.image ? (
                <img
                  src={persona.image}
                  alt={persona.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white-35 text-caption">
                  Foto
                </div>
              )}
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">{persona.name}</h3>
              <p className="text-label uppercase text-white-75 mb-2">{persona.role}</p>


                {persona.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {persona.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-label text-white-55 border 
                      border-white-07 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}


              <p className="text-caption text-white-85 mb-4">{persona.bio}</p>

              <div className="border-t border-white-07 pt-4 mb-4">
                <p className="text-label font-semibold uppercase tracking-widest text-solar-orange mb-2">
                  Dor principal
                </p>
                <p className="text-caption text-white-85">
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
