{/* ── geral ─────────────────────────────────────── */}
import { useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import { LuClock, LuFileWarning, LuTrendingDown } from 'react-icons/lu'

{/* ── componentes ─────────────────────────────────────── */}
import CaseHero           from '../../components/case-study/CaseHero'
import CaseContexto       from '../../components/case-study/CaseContexto'
import CaseProblema       from '../../components/case-study/CaseProblema'
import CaseUsuario        from '../../components/case-study/CaseUsuario'
import CaseProblemStatement from '../../components/case-study/CaseProblemStatement'
import CaseDecisoes       from '../../components/case-study/CaseDecisoes'
import CaseFluxo          from '../../components/case-study/CaseFluxo'
import CaseTelas          from '../../components/case-study/CaseTelas'
import CaseResultado      from '../../components/case-study/CaseResultado'
import CaseAprendizado    from '../../components/case-study/CaseAprendizado'
import CaseCta            from '../../components/case-study/CaseCta'
import CaseCarousel       from '../../components/case-study/CaseCarousel'
import Cta                from '../../components/layout/Cta'

{/* ── imagens ─────────────────────────────────────── */}
import imgHero   from '../../assets/projects/proposta-rapida/1.jpg'
import img2      from '../../assets/projects/proposta-rapida/2.jpg'
import img3      from '../../assets/projects/proposta-rapida/3.jpg'
import img5      from '../../assets/projects/proposta-rapida/5.jpg'
import img6      from '../../assets/projects/proposta-rapida/6.jpg'
import img7      from '../../assets/projects/proposta-rapida/7.jpg'

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
  tags: ['Produto Digital', 'SaaS', 'Full-Stack'],
  infos: {
    role: 'Designer & Desenvolvedor',
    type: 'Produto / SaaS',
    stack: 'Next.js + Tailwind + TypeScript',
    year: '2026',
  },
  links: {
    github: 'https://github.com/ademirpatricio/proposta-rapida',
    liveUrl: 'https://propostarapida.malabares.com.br',
  },
}

const gallery = [
  { src: galery1, alt: 'Tela inicial do Proposta Rápida' },
  { src: galery2, alt: 'Formulário de criação de proposta' },
  { src: galery3, alt: 'Preview da proposta em tempo real' },
  { src: galery4, alt: 'PDF gerado pelo Proposta Rápida' },
  { src: galery5, alt: 'Página de vendas da versão PRO' },
  { src: galery6, alt: 'Proposta Rápida em mobile' },
]

{/* ========================================================== */}

export default function PropostaRapida() {
  usePageTitle(project.title)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[#2a2a2f] text-white min-h-screen">

      {/* 01 ── Hero ───────────────────────────────────── */}
      <CaseHero
        image={imgHero}
        imageAlt="Proposta Rápida — gerador de propostas comerciais"
        className="h-[600px]"
        title={project.title}
        subtitle={project.subtitle}
        role={project.infos.role}
        type={project.infos.type}
        stack={project.infos.stack}
        year={project.infos.year}
        link={project.links.liveUrl}
        tags={project.tags}
      />

      {/* 02 ── Contexto ───────────────────────────────── */}
      <CaseContexto eyebrow="Contexto" image={img2} imageAlt="Proposta Rápida — interface do produto">
        <p>
          Proposta Rápida nasceu de um problema que eu via direto: profissionais autônomos
          perdendo clientes por causa de propostas mal feitas ou enviadas tarde demais.
        </p>
        <p>
          Fui designer e desenvolvedor, do zero ao deploy, usando Next.js, Tailwind e TypeScript.
          Um produto da Malabares que está no ar desde 2026.
        </p>
      </CaseContexto>

      {/* 03 ── O Problema ─────────────────────────────── */}
      <CaseProblema
        eyebrow="O problema"
        title="O processo de venda quebra antes de começar."
        pain={[
          {
            icon: <LuClock size={32} />,
            title: 'Tempo perdido em formatação',
            description:
              'Montar uma proposta no Word consome em média 2 horas, tempo que podia estar no projeto.',
          },
          {
            icon: <LuFileWarning size={32} />,
            title: 'Visual que não transmite confiança',
            description:
              'Propostas sem padrão visual passam imagem de improviso, mesmo quando o profissional é bom.',
          },
          {
            icon: <LuTrendingDown size={32} />,
            title: 'Atraso que custa o cliente',
            description:
              'Chegar primeiro importa mais do que chegar bem feito. A proposta que fecha é a que chegou antes.',
          },
        ]}
      >
        <p>
          Profissionais autônomos perdem clientes não por falta de competência, mas pelo
          processo de venda. Montar uma proposta no Word leva horas, exige formatação manual
          e ainda chega tarde, quando o cliente já fechou com outra pessoa.
        </p>
        <p>
          As ferramentas que existem são pesadas, genéricas ou caras demais para quem está
          começando.
        </p>
      </CaseProblema>

      {/* 04 ── O Usuário ──────────────────────────────── */}
      <CaseUsuario
        eyebrow="Principais personas"
        title="Quem perde tempo criando propostas todo dia."
        personas={[
          {
            image: img5,
            name: 'Rafael',
            role: 'Designer freelancer · 34 anos',
            bio:
              'Trabalha com 4 a 6 clientes simultâneos. Passa cerca de 2 horas por semana montando propostas no Word, perdendo tempo que poderia dedicar a projetos.',
            pain: 'Já perdeu clientes por demora na resposta. Sabe que o problema não é o preço — é o tempo de reação.',
            tags: ['Autônomo', 'São Paulo', 'R$ 8–15k/mês'],
          },
          {
            image: img7,
            name: 'Carla',
            role: 'Gestora de agência · 41 anos',
            bio:
              'Comanda uma pequena agência com 4 pessoas. O processo de proposta não tem padrão — cada pessoa faz do seu jeito, o que gera retrabalho e inconsistência visual.',
            pain: 'Não tem tempo para padronizar o processo internamente. Precisa de uma ferramenta que já venha pronta.',
            tags: ['Agência pequena', 'Curitiba', '4 colaboradores'],
          },
        ]}
      />

      {/* 05 ── Problem Statement ──────────────────────── */}
      <CaseProblemStatement
        bgImage={img6}
        statement="Profissionais autônomos precisam de uma forma rápida de criar e enviar propostas porque o processo manual os faz perder clientes para concorrentes mais ágeis."
        hmw="Como poderíamos reduzir o tempo de criação de uma proposta para que o profissional consiga responder ao cliente no mesmo dia, sem abrir mão de um resultado visualmente profissional?"
      />

      {/* 06 ── Processo e Decisões ────────────────────── */}
      <CaseDecisoes
        eyebrow="Processo e decisões"
        title="Por que o produto ficou assim."
        decisions={[
          {
            title: 'Formulário único vs. wizard em etapas',
            decision:
              'Formulário único com preview da proposta ao lado, atualizado em tempo real.',
            alternative:
              'Wizard em múltiplas etapas, que pareceria mais estruturado mas adicionaria cliques desnecessários.',
            impact:
              'Com o preview ao lado, o usuário vê o resultado enquanto preenche. Não há tela intermediária entre o formulário e o PDF.',
          },
          {
            title: 'Exportação via window.print() vs. biblioteca PDF',
            decision:
              'Exportação usando window.print() com estilos dedicados para impressão.',
            alternative:
              'Biblioteca de geração de PDF como pdfmake ou puppeteer no servidor.',
            impact:
              'O print() mantém fidelidade total ao preview: o que você vê é o que o cliente recebe. Bibliotecas externas introduzem diferenças de renderização e custos de servidor.',
          },
          {
            title: 'Freemium vs. pago direto',
            decision:
              'Versão gratuita com marca d\'água + versão PRO sem marca d\'água.',
            alternative:
              'Produto pago desde o primeiro uso, com trial de 7 dias.',
            impact:
              'O freemium elimina a barreira de entrada. O usuário experimenta o produto antes de pagar, e a marca d\'água no PDF funciona como divulgação passiva.',
          },
        ]}
      />

      {/* 07 ── Fluxo ──────────────────────────────────── */}
      <CaseFluxo
        eyebrow="Fluxo"
        title="Arquitetura da experiência."
        description="Desenhei o produto para que criar e enviar uma proposta nunca passasse de 4 passos."
        flow={{
          root: 'Proposta Rápida',
          branches: [
            {
              label: 'Landing',
              children: ['Proposta de valor', 'CTA — Criar grátis'],
            },
            {
              label: 'Criar proposta',
              children: ['Informações básicas', 'Detalhes do projeto', 'Valores e prazo'],
            },
            {
              label: 'Preview + PDF',
              children: ['Preview em tempo real', 'Exportar via print()', 'Marca d\'água (free)'],
            },
            {
              label: 'Versão PRO',
              children: ['Página de venda', 'PDF sem marca d\'água', 'Confirmação'],
            },
          ],
        }}
      />

      {/* 08 ── As Telas ───────────────────────────────── */}
      <CaseTelas
        eyebrow="As telas"
        title="Do formulário ao PDF profissional."
        mainScreen={{
          src: screen1,
          alt: 'Landing page do Proposta Rápida',
          caption:
            'Landing page — proposta de valor clara antes de qualquer cadastro ou fricção.',
        }}
        screens={[
          {
            src: screen2,
            alt: 'Formulário de criação de proposta',
            caption: 'Usuário define escopo e valor antes de visualizar o documento final.',
          },
          {
            src: screen3,
            alt: 'PDF gerado pelo Proposta Rápida',
            caption: 'Preview fiel ao PDF exportado — o que você vê é o que o cliente recebe.',
          },
          {
            src: screen4,
            alt: 'Página da versão PRO',
            caption: 'Versão PRO apresentada no momento certo — quando o usuário já sentiu o valor.',
          },
        ]}
      />

      {/* ── CTA produto ───────────────────────────────── */}
      <CaseCta
        eyebrow="Ver produto"
        title="Quer ver como fica na prática?"
        description="O Proposta Rápida está no ar. Cria uma proposta grátis em menos de 8 minutos."
        label="Abrir Proposta Rápida"
        href={project.links.liveUrl}
        bgImage={img6}
      />

      {/* 09 ── Aprendizado ────────────────────────────── */}
      <CaseAprendizado
        eyebrow="Aprendizado"
        image={img3}
        imageAlt="Proposta Rápida — detalhe do produto"
        productOpinion="O produto resolve o que se propõe a resolver. Mas a maior descoberta foi perceber que a barreira não era técnica: era de confiança. O usuário precisa ver o PDF sair profissional antes de arriscar enviar para um cliente real. Melhorar o preview foi o que mais moveu a adoção."
        processOpinion="Comecei a codar antes de ter clareza total no fluxo. Erro clássico. Refiz a tela de criação duas vezes. Se tivesse passado mais tempo no wireframe antes de abrir o VS Code, teria economizado uma semana."
      />

      {/* 10 ── Resultado ──────────────────────────────── */}
      {/* TODO: reativar quando tiver dados reais */}
      {false && <CaseResultado
        eyebrow="Resultado"
        title="O que mudou depois que o produto existiu."
        description="O produto está no ar e em uso ativo. Os dados abaixo refletem os primeiros meses de operação real."
        metrics={[
          {
            value: '—',
            label: 'Propostas geradas',
            description: 'A preencher com dados reais',
          },
          {
            value: '< 8 min',
            label: 'Tempo médio de criação',
            description: 'Contra ~2h no processo manual anterior',
          },
          {
            value: '—',
            label: 'Usuários ativos',
            description: 'A preencher com dados reais',
          },
        ]}
        testimonials={[
          {
            quote:
              'Finalmente uma ferramenta que não me faz perder tempo. Mando proposta no mesmo dia que o cliente pede e isso já fechou alguns projetos que antes eu perderia.',
            name: 'Rafael M.',
            role: 'Designer freelancer',
          },
          {
            quote:
              'Antes eu passava horas ajustando planilha e ainda ficava com vergonha de mandar. Agora o PDF sai profissional em minutos e o cliente já comentou positivamente na primeira vez.',
            name: 'Carla S.',
            role: 'Gestora de agência',
          },
        ]}
      />}

      {/* ── Galeria ───────────────────────────────────── */}
      <CaseCarousel images={gallery} />

      <Cta />

    </main>
  )
}
