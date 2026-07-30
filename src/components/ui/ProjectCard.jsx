function ProjectCard({ image, title, tag, description }) {
  return (
    <>
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full object-cover object-center"
        />
      </div>

      <div className="px-8 py-10 bg-spacy-navy">
        <p className="text-label font-medium uppercase text-orbit-cyan mb-4">{tag}</p>
        <h4 className="text-h4 font-bold mb-4">{title}</h4>
        <p className="text-small text-stellar-white hidden md:block">
          {description}
        </p>
      </div>
    </>
  )
}

export default ProjectCard