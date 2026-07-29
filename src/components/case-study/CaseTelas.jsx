// mainScreen: { src: string, alt: string, caption: string }
// screens: [{ src: string, alt: string, caption: string }]

function CaseTelas({ eyebrow = 'As telas', title, mainScreen, screens = [] }) {
  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
        {eyebrow}
      </p>
      {title && (
        <h2 className="text-h3 font-bold text-white mb-10">{title}</h2>
      )}

      {/* Tela principal */}
      {mainScreen && (
        <div className="mb-10">
          <img
            src={mainScreen.src}
            alt={mainScreen.alt}
            className="w-full object-cover rounded"
            loading="lazy"
          />
          {mainScreen.caption && (
            <p className="text-small text-white-50 mt-3">{mainScreen.caption}</p>
          )}
        </div>
      )}

      {/* Grid de telas secundárias */}
      {screens.length > 0 && (
        <div className={`grid gap-10 ${screens.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {screens.map((screen, i) => (
            <div key={i}>
              <img
                src={screen.src}
                alt={screen.alt}
                className="w-full object-cover rounded"
                loading="lazy"
              />
              {screen.caption && (
                <p className="text-small text-white-50 mt-2">{screen.caption}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default CaseTelas
