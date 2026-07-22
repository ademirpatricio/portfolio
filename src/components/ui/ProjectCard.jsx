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

      <div className="p-7 pt-6">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-orbit-cyan">
          {tag}
        </p>

        <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]">
          {title}
        </h3>

        <p className="text-caption leading-[1.65] text-white-55 hidden md:block">
          {description}
        </p>
      </div>
    </>
  )
}

export default ProjectCard