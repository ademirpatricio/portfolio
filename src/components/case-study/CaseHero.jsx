import { LuLaugh, LuCalendarCheck, LuPackage, LuCoffee } from "react-icons/lu";

import Tags from '../ui/Tags'

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
                <Tags tags={tags} />
                <h2 className="text-h2 font-bold text-white mb-4 max-w-3xl">{title}</h2>
                <p className="text-body text-white-60 max-w-2xl mb-12">{subtitle}</p>

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
            <div className="grid grid-cols-2 gap-6 border-b border-white-10 pb-8 md:grid-cols-[repeat(5,max-content)] md:justify-between">
                <div>
                    <span className="text-label font-medium uppercase
                    text-white-25 flex gap-2"><LuLaugh /> Papel</span>
                    <p className="text-small text-white-60">{role}</p>
                </div>
                <div>
                    <span className="text-label font-medium uppercase
                    text-white-25 flex gap-2"><LuCoffee /> Categoria</span>
                    <p className="text-small text-white-60">{type}</p>
                </div>
                <div>
                    <span className="text-label font-medium uppercase
                    text-white-25 flex gap-2"><LuPackage /> Tecnologias</span>
                    <p className="text-small text-white-60">{stack}</p>
                </div>

                <div>
                    <span className="text-label font-medium uppercase
                    text-white-25 flex gap-2"><LuCalendarCheck /> Ano</span>
                    <p className="text-small text-white-60">{year}</p>
                </div>

                <div>
                    <span className="text-label font-medium uppercase
                    text-white-25 flex gap-2"><LuCalendarCheck /> Projeto</span>
                    <a href={link} target="_blank" rel="noreferrer">
                        <p className="text-small text-solar-gold hover:text-solar-orange whitespace-nowrap">{link}</p>
                    </a>
                </div>

            </div>

        </section>

      </>
    )
}
export default CaseHero
