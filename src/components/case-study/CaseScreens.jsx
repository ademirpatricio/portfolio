function CaseScreens({ eyebrow, title, screens = [] }) {
  return (
    <section className="px-12 max-w-container mx-auto pt-10 pb-40">

      {/* Cabeçalho opcional */}
      {(eyebrow || title) && (
        <div className="mb-10">
          {eyebrow && (
            <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-h3 font-bold text-white">{title}</h2>
          )}
        </div>
      )}

      {/* Grid de telas */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {screens.map((screen, index) => (
          <div key={index} className="flex flex-col gap-3">
            <img
              src={screen.src}
              alt={screen.alt}
              className="w-full rounded-card object-cover object-top"
              loading="lazy"
            />
            <div className="flex items-center gap-2">
              <span className="text-label font-medium text-orbit-cyan">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-label text-white-65">{screen.label}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CaseScreens
