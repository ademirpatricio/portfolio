function CaseHighlights({
  eyebrow,
  title,
  subtitle,
  children,
  items,
  reverse = false
}) {

    const textOrder = reverse ? 'md:order-2' : ''
    const imageOrder = reverse ? 'md:order-1' : ''

    return (
        <section className="px-12 max-w-container mx-auto mb-30">
            <div className="grid md:grid-cols-2 gap-16 rounded-card items-center
            border border-white-07 rounded-card py-10 px-14">
        
                {/* Conteúdo */}
                <div className={textOrder}>
                    <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">{eyebrow}</p>
                    <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
                    <div className="space-y-4 text-body text-white-65">{children}</div>
                </div>
                
                {/* Lista de tópicos */}
                <div className={imageOrder}>
                    <ul className="space-y-5">
                        {items.map((item) => (
                        <li key={item} className="flex items-start gap-4">
                            <span className="mt-2 h-2 w-2 rounded-full bg-orbit-cyan flex-shrink-0" />
                            <span className="text-body text-white-65">
                            {item}
                            </span>
                        </li>
                        ))}
                    </ul>
                </div>
            
            </div>
        </section>
    )
}
export default CaseHighlights