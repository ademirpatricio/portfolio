function CaseContexto({ eyebrow = 'Contexto', title, children, image, imageAlt = '' }) {
  if (image) {
    return (
      <section className="px-12 max-w-container mx-auto py-16">
        <div className="grid grid-cols-[2fr_3fr] gap-12 items-center">

          {/* Coluna esquerda — imagem (1/3) */}
          <div>
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-card border border-white-07"
              loading="lazy"
            />
          </div>

          {/* Coluna direita — texto (2/3) */}
          <div>
            <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
              {eyebrow}
            </p>
            {title && (
              <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
            )}
            <div className="text-reading text-white-85 space-y-4">{children}</div>
          </div>

        </div>
      </section>
    )
  }

  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <div className="max-w-3xl">
        <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
          {eyebrow}
        </p>
        {title && (
          <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
        )}
        <div className="text-reading text-white-85 space-y-4">{children}</div>
      </div>
    </section>
  )
}

export default CaseContexto
