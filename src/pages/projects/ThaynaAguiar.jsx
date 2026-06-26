import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const meta = {
  title: 'Thayná Aguiar',
  subtitle: 'Presença digital com identidade, estratégia e sofisticação.',
  description:
    'Desenvolvimento de identidade visual e landing page institucional focada em fortalecer o posicionamento digital de Thayná Aguiar.',
  tags: ['Branding', 'UI/UX Design', 'Front-End'],
  role: 'UI/UX Designer & Front-End',
  type: 'Website / Identidade visual',
  stack: 'React + Tailwind',
  year: '2025',
  github: 'https://github.com/ademirpatricio/thaynaaguiar',
  liveUrl: 'https://www.thaynaaguiar.com.br/',
}

const images = {
  hero: 'https://ademirpatricio.com.br/wp-content/uploads/2026/05/1.jpg',
  about: 'https://ademirpatricio.com.br/wp-content/uploads/2026/05/2.jpg',
  objectives: 'https://ademirpatricio.com.br/wp-content/uploads/2026/05/4.jpg',
  mockup: 'https://ademirpatricio.com.br/wp-content/uploads/2026/05/6.jpg',
  mobile: 'https://ademirpatricio.com.br/wp-content/uploads/2026/05/5-313x1024.jpg',
}

const relatedProjects = [
  { title: 'MowCar', slug: 'mowcar' },
  { title: 'Probene', slug: 'probene' },
  { title: 'Thayná & Ademir', slug: 'thayna-ademir' },
]

export default function ThaynaAguiar() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${meta.title} — Ademir Patrício`
  }, [])

  return (
    <>

    <main className="bg-midnight-deep text-white min-h-screen">
        

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 max-w-container mx-auto">

        <div className="flex flex-wrap gap-2 mb-6 max-w-6xl">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="text-label font-medium uppercase tracking-widest text-cosmic-blue border border-cosmic-blue/30 bg-cosmic-blue/10 px-3 py-1 rounded-btn"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-h2 font-bold text-white mb-4 max-w-3xl">
          {meta.title}
        </h1>

        <p className="text-body text-white-65 max-w-2xl mb-10">
          {meta.subtitle}
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white-07 pt-8">
          {[
            { label: 'Papel', value: meta.role },
            { label: 'Tipo', value: meta.type },
            { label: 'Stack', value: meta.stack },
            { label: 'Ano', value: meta.year },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-label font-medium uppercase tracking-widest text-white-35 mb-1">
                {label}
              </p>
              <p className="text-sm text-white-85">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Imagem hero ─────────────────────────────────────── */}
      <div className="px-6 max-w-container mx-auto mb-24">
        <img
          src={images.hero}
          alt="Thayná Aguiar — identidade visual e landing page"
          className="w-full rounded-card object-cover"
          loading="eager"
        />
      </div>

      {/* ── Sobre o projeto ─────────────────────────────────── */}
      <section className="px-6 max-w-container mx-auto mb-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
            Sobre o projeto
          </p>
          <h2 className="text-h3 font-bold text-white mb-6">
            Uma identidade construída de dentro para fora.
          </h2>
          <div className="space-y-4 text-body text-white-65">
            <p>
              Copywriter, recifense, apaixonada por futebol e pelo universo
              digital.{' '}
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-orbit-cyan hover:text-white transition-colors"
              >
                Thayná Aguiar
              </a>{' '}
              é especialista em criar conteúdos que fazem a diferença nas redes
              sociais. Transforma marcas em histórias que conectam pessoas,
              engajam e convertem.
            </p>
            <p>
              Ela já tinha uma ideia muito bem estruturada do que queria para a
              identidade, então seguimos o conceito. Criamos a identidade e a
              desdobramos para o site, criativos para as redes sociais e
              mídia kit.
            </p>
          </div>
        </div>
        <img
          src={images.about}
          alt="Detalhes da identidade visual de Thayná Aguiar"
          className="w-full rounded-card object-cover"
          loading="lazy"
        />
      </section>

      {/* ── Objetivos ───────────────────────────────────────── */}
      <section className="px-6 max-w-container mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src={images.objectives}
            alt="Objetivos do projeto Thayná Aguiar"
            className="w-full rounded-card object-cover order-2 md:order-1"
            loading="lazy"
          />
          <div className="order-1 md:order-2">
            <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
              Objetivos
            </p>
            <h2 className="text-h3 font-bold text-white mb-6">
              Autoridade, personalidade e confiança.
            </h2>
            <p className="text-body text-white-65 mb-6">
              A proposta era criar uma identidade capaz de transmitir autoridade,
              personalidade e confiança. A interface precisava de navegação leve,
              elegante e intuitiva. A direção visual apostou em minimalismo,
              tipografia forte, respiro e micro interações sutis.
            </p>
            <ul className="space-y-3">
              {[
                'Fortalecer a presença digital da profissional',
                'Facilitar o contato com potenciais clientes',
                'Criar uma experiência moderna e intuitiva',
                'Garantir boa performance em desktop e mobile',
                'Apoiar ações de marketing e geração de leads',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white-65">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Mockup full width ───────────────────────────────── */}
      <div className="px-6 max-w-container mx-auto mb-24">
        <img
          src={images.mockup}
          alt="Mockup da landing page de Thayná Aguiar"
          className="w-full rounded-card object-cover"
          loading="lazy"
        />
      </div>

      {/* ── Mídia Kit ───────────────────────────────────────── */}
      <section className="px-6 max-w-container mx-auto mb-24">
        <div className="bg-spacy-navy rounded-card p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center justify-between">
          <div>
            <p className="text-label font-medium uppercase tracking-widest text-solar-gold mb-3">
              Mídia Kit
            </p>
            <h3 className="text-h3 font-bold text-white mb-2">
              Material gráfico do projeto.
            </h3>
            <p className="text-base text-white-55">
              Números, informações de trabalho e links para contato com clientes.
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1DYMAKzxxF7iTj5k_gSW_kDRszFigters/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-btn border border-solar-gold/40 text-solar-gold text-sm font-medium hover:bg-solar-gold/10 transition-colors"
          >
            Ver o PDF
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── O que foi entregue ──────────────────────────────── */}
      <section className="px-6 max-w-container mx-auto mb-24 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
            Entregáveis
          </p>
          <h2 className="text-h3 font-bold text-white mb-6">
            Do conceito ao deploy.
          </h2>
          <ul className="space-y-3">
            {[
              'Identidade visual completa com todos os desdobramentos',
              'Landing page responsiva com navegação intuitiva',
              'Criativos para redes sociais alinhados à identidade',
              'Mídia kit completo com números e links de contato',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white-65">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={images.mobile}
          alt="Versão mobile da landing page de Thayná Aguiar"
          className="w-48 mx-auto rounded-card object-cover"
          loading="lazy"
        />
      </section>

      {/* ── Desenvolvimento ─────────────────────────────────── */}
      <section className="px-6 max-w-container mx-auto mb-24">
        <div className="border border-white-07 rounded-card p-8 md:p-12">
          <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
            Desenvolvimento
          </p>
          <h2 className="text-h3 font-bold text-white mb-4">
            React + Tailwind. Hospedado na Cloudflare.
          </h2>
          <p className="text-body text-white-65 mb-8 max-w-xl">
            O site foi desenvolvido com foco em performance, fluidez e
            escalabilidade. Controle total sobre animações, transições mais
            naturais e estrutura moderna para futuras expansões.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['Controle total sobre animações', 'Carregamento fluido', 'Responsivo', 'Estrutura escalável'].map((item) => (
              <span
                key={item}
                className="text-sm text-white-65 border border-white-07 px-4 py-2 rounded-btn"
              >
                {item}
              </span>
            ))}
          </div>
          <a
            href={meta.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white-65 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Ver repositório no GitHub
          </a>
        </div>
      </section>

      {/* ── Projetos relacionados ────────────────────────────── */}
      <section className="px-6 max-w-container mx-auto pb-32 border-t border-white-07 pt-16">
        <p className="text-label font-medium uppercase tracking-widest text-white-35 mb-8">
          Mais trabalhos
        </p>
        <div className="flex flex-wrap gap-4">
          {relatedProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/trabalhos/${project.slug}`}
              className="text-base text-white-65 hover:text-white border border-white-07 hover:border-white-35 px-5 py-3 rounded-btn transition-colors"
            >
              {project.title}
            </Link>
          ))}
        </div>
      </section>
          
    </main>

    </>
  )
}
