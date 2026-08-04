import Container from '../layout/Container'

// items: [{ title: string, content: string }]

function CaseImageItems({ image, imageAlt, eyebrow, title, items = [], reverse = false }) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Conteúdo */}
          <div className={reverse ? 'md:order-1' : ''}>
            {eyebrow && (
              <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-h3 font-bold text-white mb-10">{title}</h2>
            )}
            <ul className="space-y-8">
              {items.map((item, i) => (
                <li key={i}>
                  <h4 className="text-h4 font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-md font-light text-white-50">
                    {item.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagem ou placeholder */}
          <div className={`rounded-card overflow-hidden ${reverse ? 'md:order-2' : ''}`}>
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                className="w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[4/3] rounded-card bg-white/5 border border-white/10" />
            )}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default CaseImageItems
