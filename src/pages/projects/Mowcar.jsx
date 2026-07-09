{/* ── geral ─────────────────────────────────────── */}
import { useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'

import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

{/* ── blocos ─────────────────────────────────────── */}
import CaseHero from '../../components/case-study/CaseHero'
import CaseSection from '../../components/case-study/CaseSection'
import CasePdf from '../../components/case-study/CasePdf'
import CaseSectionList from '../../components/case-study/CaseSectionList'

import Cta from '../../components/layout/Cta'
import CaseCarousel from '../../components/case-study/CaseCarousel'

{/* ── imagens ─────────────────────────────────────── */}
import imgHero from '../../assets/projects/mowcar/1.jpg'
import imgAbout from '../../assets/projects/mowcar/2.jpg'
import imgObjectives from '../../assets/projects/mowcar/3.jpg'
import imgApp from '../../assets/projects/mowcar/5.png'
import imgBg from '../../assets/projects/mowcar/case-bg.jpg'
import imgWorkflow from '../../assets/projects/mowcar/workflow.png'

import galery1 from '../../assets/projects/mowcar/carrossel-01.jpg'
import galery2 from '../../assets/projects/mowcar/carrossel-02.jpg'
import galery3 from '../../assets/projects/mowcar/carrossel-03.jpg'
import galery4 from '../../assets/projects/mowcar/carrossel-04.jpg'
import galery5 from '../../assets/projects/mowcar/carrossel-05.jpg'
import galery6 from '../../assets/projects/mowcar/carrossel-06.jpg'
import galery7 from '../../assets/projects/mowcar/carrossel-07.jpg'
import galery8 from '../../assets/projects/mowcar/carrossel-08.jpg'
import galery9 from '../../assets/projects/mowcar/carrossel-09.jpg'
import galery10 from '../../assets/projects/mowcar/carrossel-10.jpg'
import galery11 from '../../assets/projects/mowcar/carrossel-11.jpg'
import galery12 from '../../assets/projects/mowcar/carrossel-12.jpg'
import galery13 from '../../assets/projects/mowcar/carrossel-13.jpg'

{/* ========================================================== */}

const project = {
  title: 'Mowcar',
  subtitle: 'Aplicativo para gerenciamento de aluguel de veículos',
  description:
  'O Mowcar é um projeto pessoal de estudo de caso desenvolvido com o objetivo de explorar soluções digitais para gerenciamento de aluguel de carros de passeio e frotas, focando em simplicidade e rapidez de implementação.',
  tags: ['Produto Digital', 'Aplicativo', 'UX/UI Design', 'Figma'],
  infos : {
    role: 'UX / UI Designer',
    type: 'Aplicativo',
    stack: 'Figma',
    year: '2023',
  },
  links: {
    github: '',
    liveUrl: 'https://behance.net/ademirpatricio',
  },
  tips: ['Performance e simplicidade', 'Exportação fiel ao preview', 'Modelo freemium'],
}

const images = {
  hero: imgHero,
  about: imgAbout,
  objectives: imgObjectives,
  app: imgApp,
  workflow: imgWorkflow,
}

const gallery = [
  {src: galery1, alt: 'Mowcar - Tela inicial',},
  {src: galery2, alt: 'Mowcar',},
  {src: galery3, alt: 'Mowcar',},
  {src: galery4, alt: 'Mowcar',},
  {src: galery5, alt: 'Mowcar',},
  {src: galery6, alt: 'Mowcar',},
  {src: galery7, alt: 'Mowcar',},
  {src: galery8, alt: 'Mowcar',},
  {src: galery9, alt: 'Mowcar',},
  {src: galery10, alt: 'Mowcar',},
  {src: galery11, alt: 'Mowcar',},
  {src: galery12, alt: 'Mowcar',},
  {src: galery13, alt: 'Mowcar',},
]

export default function Mowcar() {
  usePageTitle(project.title)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  {/* ========================================================== */}
  return (
    <>

    <main className="bg-[#0e2945] text-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────── */}
      <CaseHero
        image={images.hero}
        imageAlt="MowCar - Aplicativo para gerenciamento de aluguel de veículos"
        className="h-[450px]"
        title={project.title}
        subtitle="Aplicativo para gerenciamento de aluguel de veículos"
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
        title = "Aplicativo para gerenciamento de aluguel de veículos."
        image={images.about}
        imageAlt="Interface do Mowcar">
        <p className="mb-4">
            O Mowcar é um projeto pessoal de estudo de caso desenvolvido com o objetivo de explorar soluções digitais para gerenciamento de aluguel de carros de passeio e frotas, focando em simplicidade e rapidez de implementação.
        </p>
        <p className="mb-4">
            A proposta foi criar um MVP funcional, com fluxos claros e uma experiência intuitiva tanto para usuários finais quanto para gestores de frota.
        </p>
      </CaseSection>

      <CaseSectionList
        title = "Contexto e desafio"
        image={images.objectives}
        imageAlt="Mowcar - Contexto e desafio"
        href={project.links.liveUrl}
        target="_blank"
        reverse>
        <p className="mb-4">
            O mercado de aluguel de veículos envolve múltiplas etapas operacionais:
            cadastro de usuários, controle de veículos, retirada, devolução, histórico de uso e acompanhamento de rotas.
        </p>
        <p className="mb-4">
            Precisei encurtar o fluxo para desenvolvimento rápido de MVP.
        </p>
        <ul>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Definição de escopo do MVP e arquitetura da informação
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Criação de fluxos de navegação, Wireframes e prototipação
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Design visual da interface e padronização de componentes
          </li>
        </ul>
      </CaseSectionList>

      <CaseCarousel
      className="mb-20 px-4" 
      trackClassName="-ml-4"
      slideClassName="pl-4"
      imageClassName="rounded"
      images={gallery} />

      <CasePdf
        eyebrow="Processo"
        title="O projeto foi desenvolvido seguindo uma abordagem prática e orientada a produto:"
        titleColor = "text-spacy-navy"
        gridCols="lg:grid-cols-[1fr_2fr]"
        image={images.workflow}
        imageAlt="Mowcar - Workflow do projeto"
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${imgBg})`, marginBottom: '100px' }}
        >
        <ul>
          <li className="flex items-start gap-3 text-body text-spacy-navy mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Definição de escopo do MVP e arquitetura da informação
          </li>
          <li className="flex items-start gap-3 text-body text-spacy-navy mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Criação de fluxos de navegação, Wireframes e prototipação
          </li>
          <li className="flex items-start gap-3 text-body text-spacy-navy mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Design visual da interface e padronização de componentes
          </li>
        </ul>
      </CasePdf>


{/* ── O que foi entregue ──────────────────────────────── */}
      <CaseSectionList
        eyebrow = "Solução proposta"
        title = "A solução final foi um aplicativo mobile com foco em:"
        image={images.app}
        gridCols="lg:grid-cols-[1fr_2fr]"
        imageAlt="Mowcar - Solução proposta"
        btLabel="Confere o projeto no Behance ⇢"
        href={project.links.liveUrl}
        target="_blank"
        reverse>
        <ul className="mb-10">
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Interface limpa e objetiva
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Uso de mapas para contextualizar localização e rotas
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Redução de passos em tarefas críticas
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Destaque para ações primárias (retirar, abrir, devolver veículo)
          </li>
        </ul>
        <p className="mb-10">O design prioriza rapidez de uso, especialmente em contextos onde o usuário precisa agir com agilidade.</p>
        <h3 className="text-2xl font-bold text-white mb-4">Ferramentas utilizadas</h3>
        <ul className="mb-4">
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <FiFigma color="#ff0090" style={{ marginTop: '5px' }}/>
            Figma — UI Design, UX flows e prototipação
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <DiIllustrator color="#ff9a00" style={{ marginTop: '5px' }}/>
            Adobe Illustrator — Criação de ícones e elementos gráficos
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <DiPhotoshop color="#31a8ff" style={{ marginTop: '5px' }}/>
            Adobe Photoshop — Ajustes visuais e tratamento de imagens
          </li>
        </ul>
      </CaseSectionList>
      <Cta/>
    </main>

    </>
  )
}
