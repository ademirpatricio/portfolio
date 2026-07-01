function Gallery({ images }) {
  return (
    <section className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div className="flex">

        {images.map((image, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}

      </div>
    </section>
  )
}

export default Gallery