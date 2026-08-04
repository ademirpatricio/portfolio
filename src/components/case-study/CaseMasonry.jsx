/**
 * CaseMasonry
 *
 * Grid masonry de imagens usando CSS columns.
 * As imagens se distribuem automaticamente em colunas,
 * respeitando alturas diferentes sem spans manuais.
 *
 * Props:
 * @param {Array}  images    - Array de objetos { src, alt }
 * @param {number} cols      - Colunas no desktop. Valores: 2 | 3 | 4. Default: 3
 * @param {string} className - Classe extra no wrapper
 *
 * Exemplos:
 *   <CaseMasonry images={frames} />
 *   <CaseMasonry images={frames} cols={2} />
 */

const colsMap = {
  2: 'md:columns-2',
  3: 'md:columns-3',
  4: 'md:columns-4',
}

function CaseMasonry({ images = [], cols = 3, className = '' }) {
  return (
    <section className={`px-12 max-w-container mx-auto py-16 ${className}`}>
      <div className={`columns-1 ${colsMap[cols] ?? 'md:columns-3'} gap-4`}>
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full mb-4 rounded-card break-inside-avoid"
          />
        ))}
      </div>
    </section>
  )
}

export default CaseMasonry
