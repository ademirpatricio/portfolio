import Button from '../ui/Button'

import { FaBehance } from "react-icons/fa";

function CaseSectionList({
  eyebrow,
  title,
  subtitle,
  children,
  image,
  imageAlt,
  linkBehance,
  btLabel,
  href,
  target,
  reverse = false,
  btVariant = 'secondary',
  gridCols = 'lg:grid-cols-2',
  }) {
    
  const textOrder = reverse ? 'md:order-2' : ''
  const imageOrder = reverse ? 'md:order-1' : ''

  return (
    
    <section className="px-12 max-w-container mx-auto pt-10 pb-40">
      <div className={`grid grid-cols-1 gap-20 items-center ${gridCols}`}>

        {/* Conteúdo */}
        <div className={textOrder}>
          <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">{eyebrow}</p>
          <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
          <h3 className="text-h4 font-medium text-white mb-6">{subtitle}</h3>
          <div className="text-body text-white-85 mb-8">{children}</div>
          {btLabel && (
            <Button variant={btVariant} href={href} target={target} size="md">{btLabel}</Button>
          )}
        </div>

        {/* Imagem */}
        <img
          src={image}
          alt={imageAlt}
          className={`w-full rounded-card object-cover ${imageOrder}`}
          loading="lazy"
        />

      </div>
    </section>

  )
}

export default CaseSectionList
