import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function CaseCarousel({ images, className ='', trackClassName = '', slideClassName = '', imageClassName='' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className={`relative w-full ${className}`}>

      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className={`flex ${trackClassName}`}>

          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0
                basis-full
                md:basis-1/3
                lg:basis-1/5
                ${slideClassName}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full
                  object-cover
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                  ${imageClassName}`}
              />
            </div>
          ))}

        </div>
      </div>

      {/* Botão esquerda */}

      <button
        onClick={scrollPrev}
        className="
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          w-12
          h-12
          rounded-full
          bg-spacy-navy/80
          backdrop-blur
          border
          border-white/10
          flex
          items-center
          justify-center
          hover:bg-cosmic-blue
          transition
        "
      >
        <HiChevronLeft size={22} />
      </button>

      {/* Botão direita */}

      <button
        onClick={scrollNext}
        className="
          absolute
          right-6
          top-1/2
          -translate-y-1/2
          w-12
          h-12
          rounded-full
          bg-spacy-navy/80
          backdrop-blur
          border
          border-white/10
          flex
          items-center
          justify-center
          hover:bg-cosmic-blue
          transition
        "
      >
        <HiChevronRight size={22} />
      </button>

    </section>
  )
}

export default CaseCarousel
