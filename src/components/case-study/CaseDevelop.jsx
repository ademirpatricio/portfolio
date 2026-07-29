import { FaGithub } from 'react-icons/fa6'
import { FaBehance } from "react-icons/fa";

function CaseDevelop ({
    eyebrown,
    title,
    tips,
    linkGithub,
    linkBehance,
    children
}){
    return (
        <section className="px-6 max-w-container mx-auto my-24">
        <div className="bg-white-10 border border-white-10 rounded-card p-8 md:p-12">
            <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
                {eyebrown}
            </p>
            <h3 className="text-h3 font-bold text-white mb-4">{title}</h3>
            <div className="text-body text-white-60 mb-8 max-w-xl">{children}</div>
            <div className="flex flex-wrap gap-3 mb-8">
                {tips.map((tip) => (
                    <span key={tip} className="text-small text-stellar-white 
                    bg-white-10 px-4 py-2 rounded-btn">
                        {tip}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                {linkGithub && (
                    <a
                    href={linkGithub}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-small px-4 py-2 
                    rounded-btn text-white hover:text-stellar-white transition 
                    hover:bg-nebula-violet/50">
                    <FaGithub className="text-orbit-cyan" /> Ver repositório no GitHub</a>
                )}
                {linkBehance && (
                    <a
                    href={linkBehance}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-small px-4 py-2 
                    rounded-btn text-white hover:text-stellar-white transition 
                    hover:bg-nebula-violet/50">
                    <FaBehance className="text-solar-gold" /> Ver projeto no Behance</a>
                )}
            </div>
        </div>
      </section>
    )
}
export default CaseDevelop
