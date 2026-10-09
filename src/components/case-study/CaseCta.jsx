import { useTranslation } from 'react-i18next'

import Button from '../ui/Button'

// eyebrow?: string
// title: string
// description?: string
// label: string
// href: string
// target?: string

function CaseCta({
  eyebrow,
  title,
  description,
  label,
  href,
  target = '_blank',
  bgImage,
}) {
  const { t } = useTranslation('cases')
  const eyebrowText = eyebrow === undefined ? t('cta.eyebrow') : eyebrow

  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <div
        className="rounded-card py-24 px-12 text-center overflow-hidden"
        style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {eyebrowText && (
          <p className="text-label font-medium uppercase text-solar-orange mb-4">
            {eyebrowText}
          </p>
        )}
        {title && (
          <h3 className="text-h3 font-bold text-white mb-6 max-w-xl mx-auto">{title}</h3>
        )}
        {description && (
          <p className="text-body text-white-60 max-w-md mx-auto mb-10">{description}</p>
        )}
        {href && (
          <Button variant="accent" size="md" href={href} target={target}>
            {label ?? t('cta.label')} ⇢
          </Button>
        )}
      </div>
    </section>
  )
}

export default CaseCta
