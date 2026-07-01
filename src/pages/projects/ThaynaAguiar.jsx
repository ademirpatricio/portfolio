{/* ── geral ─────────────────────────────────────── */}
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

{/* ── blocos ─────────────────────────────────────── */}
import CaseHero from '../../components/case-study/CaseHero'
import CaseSection from '../../components/case-study/CaseSection'
import CaseHighlights from '../../components/case-study/CaseHighlights'
import CasePdf from '../../components/case-study/CasePdf'
import CaseDevelop from '../../components/case-study/CaseDevelop'
import CaseSectionList from '../../components/case-study/CaseSectionList'

import HomeCta from '../../components/blocs/HomeCta'
import CaseCarousel from '../../components/case-study/CaseCarousel'

{/* ── imagens ─────────────────────────────────────── */}
import imgHero from '../../assets/projects/thayna-aguiar/1.jpg'
import imgAbout from '../../assets/projects/thayna-aguiar/2.jpg'
import imgObjectives from '../../assets/projects/thayna-aguiar/3.jpg'
import imgMockup from '../../assets/projects/thayna-aguiar/4.jpg'
import imgWeb from '../../assets/projects/thayna-aguiar/5.jpg'

import galery1 from '../../assets/projects/thayna-aguiar/carrossel-thayna_01.jpg'
import galery2 from '../../assets/projects/thayna-aguiar/carrossel-thayna_02.jpg'
import galery3 from '../../assets/projects/thayna-aguiar/carrossel-thayna_03.jpg'
import galery4 from '../../assets/projects/thayna-aguiar/carrossel-thayna_04.jpg'
import galery5 from '../../assets/projects/thayna-aguiar/carrossel-thayna_05.jpg'
import galery6 from '../../assets/projects/thayna-aguiar/carrossel-thayna_06.jpg'

{/* ========================================================== */}

const project = {
  title: 'Thayná Aguiar',
  subtitle: 'Presença digital com identidade, estratégia e sofisticação.',
  description:
  'Desenvolvimento de identidade visual e landing page institucional focada em fortalecer o posicionamento digital de Thayná Aguiar.',
  tags: ['Branding', 'UI/UX Design', 'Front-End'],
  infos : {
    role: 'UI/UX Designer & Front-End',
    type: 'Website / Identidade visual',
    stack: 'React + Tailwind',
    year: '2025',
  },
  links: {
    github: 'https://github.com/ademirpatricio/thaynaaguiar',
    behance: 'https://www.behance.net/gallery/213505967/Thayna-Aguiar-Landingpage',
    liveUrl: 'https://www.thaynaaguiar.com.br/',
  },
  tips: ['Controle total sobre animações', 'Carregamento fluido', 'Estrutura escalável'],
}

const images = {
  hero: imgHero,
  about: imgAbout,
  objectives: imgObjectives,
  mockup: imgMockup,
  web: imgWeb,
}

const gallery = [
  {src: galery1, alt: 'galery1',},
  {src: galery2, alt: 'galery2',},
  {src: galery3, alt: 'galery3',},
  {src: galery4, alt: 'galery4',},
  {src: galery5, alt: 'galery5',},
  {src: galery6, alt: 'galery6',},
]

export default function ThaynaAguiar() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${project.title} — Ademir Patrício`
  }, [])

  {/* ========================================================== */}
  return (
    <>

    <main className="bg-spacy-navy text-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────── */}
      <CaseHero
        image={images.hero}
        imageAlt="Thayná Aguiar — identidade visual e landing page"
        className="object-[82%_center] md:object-center"
        title={project.title}
        subtitle="Presença digital com identidade, estratégia e sofisticação."
        role = {project.infos.role}
        type = {project.infos.type}
        stack = {project.infos.stack}
        year = {project.infos.year}
        link = {project.links.liveUrl}
        tags= {project.tags}
      />

      {/* ── Sobre o projeto ─────────────────────────────────── */}
      <CaseSection
        eyebrow = "Sobre o projeto"
        title = "Presença digital com identidade, estratégia e sofisticação."
        image={images.about}
        imageAlt="Detalhes da identidade visual de Thayná Aguiar">
        <p>
          Desenvolvimento de identidade visual e landing page institucional 
          focada em fortalecer o posicionamento digital de Thayná Aguiar.
        </p>
      </CaseSection>

      <CaseSection
        title = "Sobre o Projeto."
        image={images.objectives}
        imageAlt="Detalhes da identidade visual de Thayná Aguiar"
        reverse>
        <p className="mb-4">
          Copywriter, recifense, apaixonada por futebol e pelo universo digital. 
          <a href={project.links.liveUrl} target="_blank" rel="noreferrer"
          className="text-solar-gold hover:text-solar-orange transition-colors"
          > Thayná Aguiar</a>, é especialista em criar conteúdos que fazem a diferença 
          nas redes sociais. Transforma marcas em histórias que conectam pessoas, 
          engajam e convertem.
        </p>
        <p>
          Ela já tinha uma ideia muito bem estruturada do que queria para a identidade, 
          então seguimos o conceito. Criamos a identidade e a desdobramos para o site, 
          criativos para as redes sociais e midiakit.
        </p>
      </CaseSection>

      {/* ── Objetivos ───────────────────────────────────────── */}
      <CaseHighlights
        title="Objetivos do Projeto 🎯"
        items={[
          'Fortalecer a presença digital da profissional',
          'Facilitar o contato com potenciais clientes',
          'Criar uma experiência moderna e intuitiva',
          'Garantir boa performance em desktop e mobile',
          'Apoiar ações de marketing e geração de leads',

        ]}>
        <p>
          A proposta era criar uma identidade capaz de transmitir autoridade,
          personalidade e confiança. A interface precisava de navegação leve,
          elegante e intuitiva.
        </p>
        <p>
          A direção visual apostou em minimalismo, tipografia forte, respiro e
          micro interações sutis para construir uma experiência mais memorável.
        </p>
      </CaseHighlights>

      {/* ── Mídia Kit ───────────────────────────────────────── */}
      <CasePdf
        eyebrow="Mídia Kit"
        title="Material gráfico do Projeto 🎯"
        btLabel="Download do MidiaKit ↗"
        href="https://drive.google.com/file/d/1DYMAKzxxF7iTj5k_gSW_kDRszFigters/view?usp=drive_link"
        target="_blank"
        image={images.mockup}
        imageAlt="Detalhes da identidade visual de Thayná Aguiar"
        >
        <p>
          Confere também o material gráfico que a gente preparou para o projeto.
          Números, informações de trabalho e links para contato com clientes.   
        </p>
      </CasePdf>  

      {/* ── Desenvolvimento ───────────────────────────────────────── */}
      <CaseDevelop
        eyebrown={"Desenvolvimento"}
        title={"React + Tailwind. Hospedado na Cloudflare."}
        tips= {project.tips}
        linkGithub={project.links.github}
        linkBehance={project.links.behance}
        >
        <p>
          O site foi desenvolvido em React com Tailwind e hospedado na 
          Cloudflare com foco em performance, fluidez e escalabilidade.
        </p>
      </CaseDevelop>
      
      {/* ── O que foi entregue ──────────────────────────────── */}
      <CaseSectionList
        eyebrow = "o que foi entregue"
        title = "Do conceito ao deploy."
        image={images.web}
        imageAlt="Detalhes da identidade visual de Thayná Aguiar"
        btLabel="Confere o projeto no Behance ⇢"
        href="https://drive.google.com/file/d/1DYMAKzxxF7iTj5k_gSW_kDRszFigters/view?usp=drive_link"
        target="_blank"
        reverse>
        <ul>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Identidade visual completa com todos os desdobramentos
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Landing page responsiva com navegação intuitiva
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Criativos para redes sociais alinhados à identidade
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Mídia kit completo com números e links de contato
          </li>
        </ul>
      </CaseSectionList>
      <CaseCarousel images={gallery} />
      <HomeCta/>
    </main>

    </>
  )
}
