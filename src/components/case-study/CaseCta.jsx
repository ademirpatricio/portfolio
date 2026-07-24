import Button from '../ui/Button'

// eyebrow?: string
// title: string
// description?: string
// label: string
// href: string
// target?: string

function CaseCta({
  eyebrow = 'Ver produto',
  title,
  description,
  label = 'Abrir produto',
  href,
  target = '_blank',
  bgImage,
}) {
  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <div
        className="rounded-card py-16 px-12 text-center overflow-hidden"
        style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {eyebrow && (
          <p className="text-label font-medium uppercase tracking-widest text-solar-orange mb-4">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-h3 font-bold text-white mb-4 max-w-xl mx-auto">{title}</h2>
        )}
        {description && (
          <p className="text-reading text-white-65 max-w-md mx-auto mb-10">{description}</p>
        )}
        {href && (
          <Button variant="accent" size="md" href={href} target={target}>
            {label} ⇢
          </Button>
        )}
      </div>
    </section>
  )
}

export default CaseCta
