import Button from '../ui/Button'

function CasePdf({
    eyebrow,
    title,
    titleColor = 'text-white',
    subtitle,
    children,
    className,
    style,
    image,
    imageAlt,
    btLabel,
    href,
    target,
    btVariant = 'secondary',
    gridCols = 'lg:grid-cols-2',
}){
    return (

        <section className={`px-12 w-full py-20 ${className}`} style={style}>
            <div className={`mx-auto max-w-container grid grid-cols-1 items-center
            text-center md:text-left gap-10 px-6 md:px-12 ${gridCols} lg:gap-24`}>

            {/* Conteúdo */}
            <div>
                <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">{eyebrow}</p>
                <h2 className={`text-h3 font-bold mb-6 ${titleColor}`}>{title}</h2>
                <h3 className="text-h4 font-medium text-white mb-6">{subtitle}</h3>
                <div className="space-y-4 text-body text-white-85 mb-6">{children}</div>
                {btLabel && (
                    <Button variant={btVariant} href={href} target={target} size="md">{btLabel}</Button>
                )}
            </div>

            {/* Imagem */}
            <img
                src={image}
                alt={imageAlt}
                className="w-full rounded-card object-cover "
                loading="lazy"
            />

            </div>
        </section>

    )
}
export default CasePdf
