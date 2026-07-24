function CaseSection({
  eyebrow,
  title,
  subtitle,
  children,
  image,
  imageAlt,
  reverse = false
  }) {
    
  const textOrder = reverse ? 'md:order-2' : ''
  const imageOrder = reverse ? 'md:order-1' : ''

  return (
    
    <section className="px-12 max-w-container mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* Conteúdo */}
        <div className={textOrder}>
          <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">{eyebrow}</p>
          <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
          <h3 className="text-h4 font-medium text-white mb-6">{subtitle}</h3>
          <div className="text-body text-white-85">{children}</div>
        </div>

        {/* Imagem */}
        <img
          src={image}
          alt={imageAlt}
          className={`w-full rounded-card object-cover ${imageOrder}`}
          loading="lazy"
        />

      </div>
    </section>

  )
}

export default CaseSection
