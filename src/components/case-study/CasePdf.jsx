import Button from '../ui/Button'

function CasePdf({
    eyebrow,
    title,
    subtitle,
    children,
    image,
    imageAlt,
    btLabel,
    href,
    target,
}){
    return (
        
        <section className="px-12 w-full bg-nebula-violet py-20">
            <div className="mx-auto max-w-container grid grid-cols-1 items-center 
            text-center md:text-left gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">

            {/* Conteúdo */}
            <div>
                <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">{eyebrow}</p>
                <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
                <h3 className="text-h4 font-medium text-white mb-6">{subtitle}</h3>
                <div className="space-y-4 text-body text-white-65 mb-6">{children}</div>
                <Button variant="secondary" href={href} target={target} size="md">{btLabel}</Button>
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