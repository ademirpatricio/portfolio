{/* ── geral ─────────────────────────────────────── */}
import { useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'

{/* ── blocos ─────────────────────────────────────── */}
import CaseHero from '../../components/case-study/CaseHero'
import CaseSection from '../../components/case-study/CaseSection'
import CaseHighlights from '../../components/case-study/CaseHighlights'
import CasePdf from '../../components/case-study/CasePdf'
import CaseDevelop from '../../components/case-study/CaseDevelop'
import CaseSectionList from '../../components/case-study/CaseSectionList'

import Cta from '../../components/layout/Cta'
import CaseCarousel from '../../components/case-study/CaseCarousel'
import CaseScreens from '../../components/case-study/CaseScreens'

{/* ── imagens ─────────────────────────────────────── */}
import imgHero from '../../assets/projects/proposta-rapida/1.jpg'
import imgAbout from '../../assets/projects/proposta-rapida/2.jpg'
import imgObjectives from '../../assets/projects/proposta-rapida/3.jpg'
import imgMockup from '../../assets/projects/proposta-rapida/4.jpg'
import imgWeb from '../../assets/projects/proposta-rapida/5.jpg'
import imgPdfBg from '../../assets/projects/proposta-rapida/6.jpg'

import screen1 from '../../assets/projects/proposta-rapida/screen-01.jpg'
import screen2 from '../../assets/projects/proposta-rapida/screen-02.jpg'
import screen3 from '../../assets/projects/proposta-rapida/screen-03.jpg'
import screen4 from '../../assets/projects/proposta-rapida/screen-04.jpg'

import galery1 from '../../assets/projects/proposta-rapida/carrossel-01.jpg'
import galery2 from '../../assets/projects/proposta-rapida/carrossel-02.jpg'
import galery3 from '../../assets/projects/proposta-rapida/carrossel-03.jpg'
import galery4 from '../../assets/projects/proposta-rapida/carrossel-04.jpg'
import galery5 from '../../assets/projects/proposta-rapida/carrossel-05.jpg'
import galery6 from '../../assets/projects/proposta-rapida/carrossel-06.jpg'

{/* ========================================================== */}

const project = {
  title: 'Proposta Rápida',
  subtitle: 'Propostas profissionais em minutos. Sem cadastro. Sem complicação.',
  description:
  'Produto digital da Malabares para geração de propostas comerciais profissionais. Criado para eliminar o atrito que freelancers e agências enfrentam na hora de fechar negócio.',
  tags: ['Produto Digital', 'SaaS', 'Full-Stack'],
  infos : {
    role: 'Designer & Desenvolvedor',
    type: 'Produto / SaaS',
    stack: 'Next.js + Tailwind + TypeScript',
    year: '2026',
  },
  links: {
    github: 'https://github.com/ademirpatricio/proposta-rapida',
    liveUrl: 'https://propostarapida.malabares.com.br',
  },
  tips: ['Performance e simplicidade', 'Exportação fiel ao preview', 'Modelo freemium'],
}

const images = {
  hero: imgHero,
  about: imgAbout,
  objectives: imgObjectives,
  mockup: imgMockup,
  web: imgWeb,
}

const gallery = [
  {src: galery1, alt: 'Tela inicial do Proposta Rápida',},
  {src: galery2, alt: 'Formulário de criação de proposta',},
  {src: galery3, alt: 'Preview da proposta em tempo real',},
  {src: galery4, alt: 'PDF gerado pelo Proposta Rápida',},
  {src: galery5, alt: 'Página de vendas da versão PRO',},
  {src: galery6, alt: 'Proposta Rápida em mobile',},
]

export default function PropostaRapida() {
  usePageTitle(project.title)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  {/* ========================================================== */}
  return (
    <>

    <main className="bg-[#2a2a2f] text-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────── */}
      <CaseHero
        image={images.hero}
        imageAlt="Proposta Rápida — gerador de propostas comerciais"
        className="h-[600px]"
        title={project.title}
        subtitle="Propostas profissionais em minutos. Sem cadastro. Sem complicação."
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
        title = "Uma ferramenta que resolve o que ninguém quer parar para fazer."
        image={images.about}
        imageAlt="Interface do Proposta Rápida">
        <p>
          Produto digital da Malabares para geração de propostas comerciais profissionais.
          Criado para eliminar o atrito que freelancers e agências enfrentam na hora de fechar negócio.
        </p>
      </CaseSection>

      <CaseSection
        title = "Sobre o Produto."
        image={images.objectives}
        imageAlt="Proposta gerada pelo Proposta Rápida"
        reverse>
        <p className="mb-4">
          Qualquer profissional que já perdeu um cliente por mandar uma proposta
          mal formatada conhece essa dor. Não é falta de competência.
          É falta de ferramenta certa.
        </p>
        <p className="mb-4">
          Ferramentas existentes são pesadas demais, genéricas demais ou caras demais
          para quem está começando. A ideia foi simples: criar algo que qualquer pessoa
          consiga usar em menos de dois minutos, sem precisar criar conta ou aprender nada novo.
        </p>
        <p className="mb-4">
          Um produto da{' '}
          <a href="https://malabares.com.br" target="_blank" rel="noreferrer"
          className="text-solar-gold hover:text-solar-orange transition-colors"
          >Malabares</a>, desenvolvido do zero e lançado como ferramenta real no mercado.
        </p>
      </CaseSection>

      {/* ── Objetivos ───────────────────────────────────────── */}
      <CaseHighlights
        title="O que precisava ser resolvido."
        items={[
          'Gerar propostas em tempo real, sem recarregar a página',
          'Exportar um PDF com visual profissional',
          'Funcionar sem cadastro e sem fricção',
          'Ter um modelo de negócio sustentável (versão PRO)',
          'Ser leve, rápida e acessível em qualquer dispositivo',
        ]}>
        <p>
          A ferramenta precisava ser rápida e não exigir curva de aprendizado.
          Interface com foco total no que importa: preencher e enviar.
        </p>
        <p>
          A direção foi clara: se não for essencial, não entra.
          Nada de distração, nada de configuração.
        </p>
      </CaseHighlights>

      {/* ── Telas do produto ────────────────────────────────────── */}
      <CaseScreens
        eyebrow="O produto em 4 telas"
        title="Do problema ao resultado."
        screens={[
          { src: screen1, alt: 'Landing page do Proposta Rápida', label: 'Landing page' },
          { src: screen2, alt: 'Formulário de criação de proposta', label: 'Criação da proposta' },
          { src: screen3, alt: 'PDF gerado pelo Proposta Rápida', label: 'PDF gerado' },
          { src: screen4, alt: 'Página da versão PRO', label: 'Versão PRO' },
        ]}
      />

      {/* ── O Produto ───────────────────────────────────────── */}
      <CasePdf
        eyebrow="O Produto"
        title="Veja o produto em funcionamento."
        btLabel="Acessar o Proposta Rápida ↗"
        href={project.links.liveUrl}
        target="_blank"
        image={images.mockup}
        imageAlt="Preview do PDF gerado pelo Proposta Rápida"
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${imgPdfBg})` }}
        btVariant="gold"
        >
        <p>
          Do formulário ao PDF profissional em menos de dois minutos.
          A versão gratuita já entrega o essencial. A versão PRO remove a marca d'água.
        </p>
      </CasePdf>

      {/* ── Desenvolvimento ───────────────────────────────────────── */}
      <CaseDevelop
        eyebrown={"Desenvolvimento"}
        title={"Next.js + TypeScript. Hospedado na Vercel."}
        tips= {project.tips}
        linkGithub={project.links.github}
        >
        <p>
          O produto foi desenvolvido com foco em performance e simplicidade de manutenção.
          A exportação em PDF usa <code>window.print()</code> para manter fidelidade total
          ao preview. A versão PRO foi estruturada como uma camada adicional,
          sem impactar a experiência gratuita.
        </p>
      </CaseDevelop>

      {/* ── O que foi entregue ──────────────────────────────── */}
      <CaseSectionList
        eyebrow = "o que foi entregue"
        title = "De uma ideia a um produto no ar."
        image={images.web}
        imageAlt="Proposta Rápida no ar"
        btLabel="Acessar o Proposta Rápida ⇢"
        btVariant="gold"
        href={project.links.liveUrl}
        target="_blank"
        reverse>
        <ul>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Produto funcional com geração de proposta em tempo real
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Exportação em PDF com layout profissional
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Versão gratuita e versão PRO operacionais
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Landing page com proposta de valor clara
          </li>
          <li className="flex items-start gap-3 text-body text-white-65 mb-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
            Deploy na Vercel com domínio próprio
          </li>
        </ul>
      </CaseSectionList>
      <CaseCarousel images={gallery} />
      <Cta/>
    </main>

    </>
  )
}
