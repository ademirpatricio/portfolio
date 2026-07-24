import { LuLaugh, LuCalendarCheck, LuPackage, LuCoffee } from "react-icons/lu";

function CaseHero ({
    image,
    imageAlt,
    className,
    title,
    subtitle,
    role,
    type,
    stack,
    year,
    link,
    tags,
}){
    
    return (
        <>
        {/* ── Imagem hero ─────────────────────────────────────── */}
        <section className="pt-36">
            <div className="px-12 max-w-container mx-auto">

                <div className="flex flex-wrap gap-2 mb-6 max-w-6xl">
                {tags.map((tag) => (
                    <span key={tag} className="text-label font-medium uppercase 
                    tracking-widest text-cosmic-blue border border-cosmic-blue/30 
                    bg-cosmic-blue/10 px-3 py-1 rounded-btn">{tag}</span>
                ))}
                </div>

                <h1 className="text-h2 font-bold text-white mb-4 max-w-3xl">{title}</h1>
                <p className="text-body text-white-85 max-w-2xl mb-12">{subtitle}</p>

                <img
                src={image}
                alt={imageAlt}
                className={`w-full rounded-card object-cover ${className}`}
                loading="eager"
                />

            </div>
        </section>

        <section className="pt-12 px-12 max-w-container mx-auto">
            
            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-6 border-b border-white-07 pb-8 md:grid-cols-[repeat(5,max-content)] md:justify-between">
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuLaugh /> Papel</span>
                    <p className="text-caption text-white-85">{role}</p>
                </div>
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuCoffee /> Categoria</span>
                    <p className="text-caption text-white-85">{type}</p>
                </div>
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuPackage /> Tecnologias</span>
                    <p className="text-caption text-white-85">{stack}</p>
                </div>

                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuCalendarCheck /> Ano</span>
                    <p className="text-caption text-white-85">{year}</p>
                </div>
                
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuCalendarCheck /> Projeto</span>
                    <a href={link} target="_blank" rel="noreferrer">
                        <p className="text-caption text-solar-accent hover:text-solar-orange whitespace-nowrap">{link}</p>
                    </a>
                </div>
                
            </div>

        </section>

      </>
    )
}
export default CaseHero 
