/* == imports gerais ========================================== */
import { useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'

/* == componentes utilizados ================================== */
import CaseHero           from '../../components/case-study/CaseHero'
import CaseContexto       from '../../components/case-study/CaseContexto'
import CaseProblema       from '../../components/case-study/CaseProblema'
import CaseDecisoes       from '../../components/case-study/CaseDecisoes'
import CaseResultado      from '../../components/case-study/CaseResultado'
import CaseAprendizado    from '../../components/case-study/CaseAprendizado'
import CaseCta            from '../../components/case-study/CaseCta'
import Cta                from '../../components/layout/Cta'

import CaseImageItems     from '../../components/case-study/CaseImageItems'
import CaseMasonry       from '../../components/case-study/CaseMasonry'
import CaseCarousel from '../../components/case-study/CaseCarousel'

/* == imagens do case ======================================== */
import imgHero from '../../assets/projects/design-system/hero.jpg'
import imgContexto from '../../assets/projects/design-system/contexto.jpg'
import imgAprendizado from '../../assets/projects/design-system/aprendizado.jpg'
import imgCta from '../../assets/projects/design-system/cta.jpg'
import imgProblema from '../../assets/projects/design-system/CaseImageItems.png'

import mansory01 from '../../assets/projects/design-system/mansory-01.jpg'
import mansory02 from '../../assets/projects/design-system/mansory-02.jpg'
import mansory03 from '../../assets/projects/design-system/mansory-03.jpg'
import mansory04 from '../../assets/projects/design-system/mansory-04.jpg'

const frames = [
  { src: mansory01, alt: 'Design System — frame 01' },
  { src: mansory02, alt: 'Design System — frame 02' },
  { src: mansory03, alt: 'Design System — frame 03' },
  { src: mansory04, alt: 'Design System — frame 04' },
]

import galery1 from '../../assets/projects/design-system/carrossel-01.jpg'
import galery2 from '../../assets/projects/design-system/carrossel-02.jpg'
import galery3 from '../../assets/projects/design-system/carrossel-03.jpg'
import galery4 from '../../assets/projects/design-system/carrossel-04.jpg'
import galery5 from '../../assets/projects/design-system/carrossel-05.jpg'
import galery6 from '../../assets/projects/design-system/carrossel-06.jpg'
import galery7 from '../../assets/projects/design-system/carrossel-07.jpg'
import galery8 from '../../assets/projects/design-system/carrossel-08.jpg'
import galery9 from '../../assets/projects/design-system/carrossel-09.jpg'
import galery10 from '../../assets/projects/design-system/carrossel-10.jpg'
import galery11 from '../../assets/projects/design-system/carrossel-11.jpg'
import galery12 from '../../assets/projects/design-system/carrossel-12.jpg'

/* ========================================================== */
/* 
A váriável project contém todas as informações do projeto, 
como título, subtítulo, tags, infos e links. Ela é usada para
preencher os componentes de hero, contexto, resultado e cta.
*/
const project = {
  title: 'Design System',
  subtitle: 'Uma linguagem visual consistente, do Figma ao código.',
  tags: ['Design System', 'UI Design', 'Front-End'],
  infos: {
    role: 'Designer & Desenvolvedor',
    type: 'Sistema de Design',
    stack: 'Figma + React + Tailwind CSS',
    year: '2026',
  },
  links: {
    liveUrl: 'https://ademirpatricio.com',
  },
}
/* ========================================================== */

const decisions = [
  {
    title: 'Arquitetura de dois níveis de tokens',
    decision:
      'Separamos os tokens em duas camadas: Primitives (valores brutos, como #6465F7) e Semantic (o que aquele valor significa, como cosmic-blue). Nenhum componente usa um valor direto. Tudo passa pelo token semântico.',
    alternative:
      'Usar valores hexadecimais diretamente no código e no Figma, como estava sendo feito nos componentes iniciais.',
    impact:
      'Qualquer mudança de cor ou espaçamento passa por um único lugar. A consistência entre Figma e código deixa de depender de memória.',
  },
  {
    title: 'Sync entre Figma Variables e Tailwind',
    decision:
      'Cada token do Figma tem um par exato em tailwind.config.js, com o mesmo nome. cosmic-blue no Figma é text-cosmic-blue no Tailwind, sem tradução ou divergência.',
    alternative:
      'Manter os dois sistemas independentes e sincronizar manualmente a cada mudança, que era exatamente o que estava acontecendo.',
    impact:
      'O Figma passou a ser a referência visual e o Tailwind a referência de implementação, com os mesmos nomes dos dois lados.',
  },
  {
    title: 'Padrão de documentação por componente',
    decision:
      'Cada componente tem um frame de documentação com: eyebrow, título, caminho do arquivo, preview das variantes, QUANDO USAR e QUANDO NÃO USAR.',
    alternative:
      'Deixar os componentes no Figma sem contexto de uso, apenas como referência visual e sem critério de aplicação.',
    impact:
      'Qualquer pessoa que abrir o arquivo entende não só o que o componente é, mas quando e onde usá-lo.',
  },
]

const gallery = [
  {src: galery1, alt: 'galery1',},
  {src: galery2, alt: 'galery2',},
  {src: galery3, alt: 'galery3',},
  {src: galery4, alt: 'galery4',},
  {src: galery5, alt: 'galery5',},
  {src: galery6, alt: 'galery6',},
]


const metrics = [
  {
    value: '6',
    label: 'Componentes documentados',
    description: 'Button, Tags, Project Card, NavLink, Nav Desktop, Title',
  },
  {
    value: '2',
    label: 'Camadas de tokens',
    description: 'Primitives + Semantic, Figma e Tailwind em sync',
  },
  {
    value: '8',
    label: 'Estilos tipográficos',
    description: 'h1 até span, todos com line-height e tracking definidos',
  },
]

{/* ========================================================== */}

export default function DesignSystem() {
  usePageTitle(project.title)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="bg-nebula-violet text-white min-h-screen">

        {/* ── Hero ─────────────────────────────────────── */}
        <CaseHero
          image={imgHero}
          imageAlt="Design System — Vastidão Contemplativa"
          className="h-[500px] object-top"
          title={project.title}
          subtitle={project.subtitle}
          role={project.infos.role}
          type={project.infos.type}
          stack={project.infos.stack}
          year={project.infos.year}
          link={project.links.liveUrl}
          tags={project.tags}
        />

        {/* ── Contexto ─────────────────────────────────── */}
        
        <CaseContexto
          image={imgContexto}
          eyebrow="Contexto"
          title="Um portfólio sem sistema é uma série de decisões isoladas."
        >
          <p>
            O site já existia. Os componentes também. Mas cada um tinha sido
            construído de forma independente, sem uma referência compartilhada.
            Cores repetidas com nomes diferentes, tipografia inconsistente entre
            Figma e código, tokens que existiam só na memória.
          </p>
          <p>
            O Design System veio de uma necessidade concreta: ter um lugar para
            consultar, reutilizar e evoluir cada decisão visual sem perder
            consistência.
          </p>
        </CaseContexto>

        {/* ── Problema ─────────────────────────────────── */}
        <CaseImageItems
          reverse
          image={imgProblema}
          imageAlt="Tokens primitivos e semânticos no Figma"
          eyebrow="O problema"
          title="O que estava errado antes do sistema existir."
          items={[
            {
              title: 'Tokens sem contratos definidos',
              content: 'Cores como #6465F7 apareciam direto no código, sem nome e sem contrato. Qualquer mudança dependia de lembrar onde aquele valor tinha sido usado.',
            },
            {
              title: 'Figma e código desconectados',
              content: 'Um componente podia ser atualizado no Figma enquanto o código continuava com o valor antigo, sem nenhum alerta.',
            },
            {
              title: 'Componentes sem critério de uso e documentação',
              content: 'Existiam botões, cards e tags no Figma, mas sem documentar quando usar cada um. A decisão dependia de quem lembrava.',
            },
          ]}
        />
        

        {/* ── Decisões ─────────────────────────────────── */}
        <CaseDecisoes
          eyebrow="Processo e decisões"
          title="Três escolhas que definiram a estrutura do sistema."
          decisions={decisions}
        />

        {/* ── Masonry ──────────────────────────────────── */}
        <CaseMasonry images={frames} cols={2} />

        {/* ── Resultado ────────────────────────────────── */}
        <CaseResultado
          eyebrow="Resultado"
          title="Um sistema em evolução, não um produto acabado."
          description="O DS do portfólio não é um entregável final. É uma base viva. Cada novo componente que entra no site passa primeiro pelo sistema. Cada decisão visual fica registrada."
          metrics={metrics}
        />

        {/* ── Aprendizado ──────────────────────────────── */}
        <CaseAprendizado
          image={imgAprendizado}
          eyebrow="Aprendizado"
          productOpinion="Um design system de portfólio individual tem um critério diferente de um DS corporativo. Não precisa cobrir tudo, só o que é repetido e o que mais vai mudar. Começar pelos tokens e deixar os componentes para depois teria poupado retrabalho."
          processOpinion="Construir o DS em paralelo ao site revelou inconsistências que estavam invisíveis. Tokens com nomes deprecated, classes que não existiam no Tailwind, variações de cor sem propósito. O processo de documentar forçou a limpeza."
        />

        {/* ── CTA ──────────────────────────────────────── */}
        <CaseCta
          label="Minha identidade visual"
          href='https://ademirpatricio.com.br/files/ademir-patricio-manual-de-identidade.pdf'
          eyebrow="O sistema em uso"
          title="Tudo que você está vendo foi e continua sendo construído com esse sistema."
          bgImage={imgCta}
        />

        <CaseCarousel images={gallery} mdSlides={2} lgSlides={3}/>

        <Cta />
      </main>
    </>
  )
}
