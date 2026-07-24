function CaseAprendizado({ eyebrow = 'Aprendizado', productOpinion, processOpinion, image, imageAlt = '' }) {
  const content = (
    <>
      <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
        {eyebrow}
      </p>

      {productOpinion && (
        <div className="mb-8">
          <p className="text-label font-semibold uppercase tracking-widest text-white-35 mb-3">
            Sobre o produto
          </p>
          <p className="text-reading text-white-85">{productOpinion}</p>
        </div>
      )}

      {processOpinion && (
        <div>
          <p className="text-label font-semibold uppercase tracking-widest text-white-35 mb-3">
            Sobre o processo
          </p>
          <p className="text-reading text-white-85">{processOpinion}</p>
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
            className="w-full h-full object-cover rounded-card border border-white-07"
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
