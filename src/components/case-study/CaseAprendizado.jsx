function CaseAprendizado({ eyebrow = 'Aprendizado', productOpinion, processOpinion, image, imageAlt = '' }) {
  const content = (
    <>
      <p className="text-small font-medium uppercase text-orbit-cyan mb-4">
        {eyebrow}
      </p>

      {productOpinion && (
        <div className="mb-8">
          <p className="text-label font-semibold uppercase text-white mb-3">
            Sobre o produto
          </p>
          <p className="text-body text-white-60">{productOpinion}</p>
        </div>
      )}

      {processOpinion && (
        <div>
          <p className="text-label font-semibold uppercase text-white mb-3">
            Sobre o processo
          </p>
          <p className="text-body text-white-60">{processOpinion}</p>
        </div>
      )}
    </>
  )

  return (
    <section className="px-12 max-w-container mx-auto pt-16 pb-32">
      {image ? (
        <div className="grid grid-cols-[2fr_3fr] gap-12 items-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-card"
            loading="lazy"
          />
          <div className="border-l-2 border-orbit-cyan pl-10">
            {content}
          </div>
        </div>
      ) : (
        <div className="border-l-2 border-orbit-cyan pl-10 max-w-3xl">
          {content}
        </div>
      )}
    </section>
  )
}

export default CaseAprendizado
