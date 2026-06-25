import Title from '../ui/Title'
import Fade from '../ui/Fade'

const projects = [
  {
    accent: 'from-spacy-navy to-orbit-cyan/18',
    tag: 'Produto Digital',
    title: 'Proposta Rápida',
    description:
      'Gerador de propostas comerciais para freelancers e agências. Do zero ao deploy.',
  },
  {
    accent: 'from-spacy-navy to-nebula-violet/55',
    tag: 'Web',
    title: 'Malabares Wedding',
    description:
      'Site para agência de casamentos com foco em experiência emocional e storytelling visual.',
  },
  {
    accent: 'from-spacy-navy to-solar-gold/18',
    tag: 'Web',
    title: 'Thayná Aguiar',
    description:
      'Portfólio pessoal construído em React, do wireframe ao ar em uma semana.',
  },
]

function HomeProjects() {
  return (
    <section
      className="bg-deep-blue py-20 md:pt-30 pb-40 relative"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="mb-10 md:mb-16">
          <Title 
          span="Projetos em destaque"
          title="Do problema ao deploy."
          content="Projetos reais. Coisas que estão em órbita."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 relative z-20">
          {projects.map((project) => (
            <a
              href="#"
              className="block overflow-hidden rounded-card border border-white/5 bg-midnight-deep text-white transition hover:-translate-y-1.5 hover:border-cosmic-blue/30"
              key={project.title}
            >
              <div
                className={`flex aspect-video w-full items-center justify-center bg-gradient-to-br ${project.accent}`}
              >
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/18">
                  thumbnail
                </span>
              </div>
              <div className="p-7 pt-6">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-orbit-cyan">
                  {project.tag}
                </p>
                <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]">
                  {project.title}
                </h3>
                <p className="text-sm leading-[1.65] text-white-55">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
       
    </section>
  )
}

export default HomeProjects
