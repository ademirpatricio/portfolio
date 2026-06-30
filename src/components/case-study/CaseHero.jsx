import { LuLaugh, LuCalendarCheck, LuPackage, LuCoffee } from "react-icons/lu";

function CaseHero ({
    image,
    imageAlt,
    title,
    subtitle,
    role,
    type,
    stack,
    year,
    tags,
}){
    
    return (
        <>
        {/* ── Imagem hero ─────────────────────────────────────── */}
        <section className="pt-32">
            <div className="px-12 max-w-container mx-auto">
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-xl h-[500px] rounded-card object-cover"
                    loading="eager"
                />
            </div>
        </section>

        <section className="py-12 px-12 max-w-container mx-auto">
            <h1 className="text-h2 font-bold text-white mb-4 max-w-3xl">{title}</h1>
            <p className="text-body text-white-65 max-w-2xl mb-6">{subtitle}</p>
            
            <div className="flex flex-wrap gap-2 mb-12 max-w-6xl">
                {tags.map((tag) => (
                    <span key={tag} className="text-label font-medium uppercase 
                    tracking-widest text-cosmic-blue border border-cosmic-blue/30 
                    bg-cosmic-blue/10 px-3 py-1 rounded-btn">{tag}</span>
                ))}
            </div>
            
            {/* Meta grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b pb-20 border-white-07 ">
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuLaugh /> Papel</span>
                    <p className="text-sm text-white-85">{role}</p>
                </div>
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuCoffee /> Categoria</span>
                    <p className="text-sm text-white-85">{type}</p>
                </div>
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuPackage /> Tecnologias</span>
                    <p className="text-sm text-white-85">{stack}</p>
                </div>
                <div>
                    <span className="text-label font-medium uppercase tracking-widest 
                    text-white-35 flex gap-2"><LuCalendarCheck /> Ano</span>
                    <p className="text-sm text-white-85">{year}</p>
                </div>
            </div>

        </section>

      </>
    )
}
export default CaseHero 