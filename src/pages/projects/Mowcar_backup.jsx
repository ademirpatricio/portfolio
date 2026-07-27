{/* ── geral ─────────────────────────────────────── */}
import { useEffect } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import { LuLayoutDashboard, LuFileSearch, LuTimer } from 'react-icons/lu'

{/* ── componentes ─────────────────────────────────────── */}
import CaseHero             from '../../components/case-study/CaseHero'
import CaseContexto         from '../../components/case-study/CaseContexto'
import CaseProblema         from '../../components/case-study/CaseProblema'
import CaseUsuario          from '../../components/case-study/CaseUsuario'
import CaseProblemStatement from '../../components/case-study/CaseProblemStatement'
import CaseDecisoes         from '../../components/case-study/CaseDecisoes'
import CaseFluxo            from '../../components/case-study/CaseFluxo'
import CaseTelas            from '../../components/case-study/CaseTelas'
import CaseResultado        from '../../components/case-study/CaseResultado'
import CaseAprendizado      from '../../components/case-study/CaseAprendizado'
import CaseCarousel         from '../../components/case-study/CaseCarousel'
import Cta                  from '../../components/layout/Cta'

{/* ── imagens ─────────────────────────────────────── */}
import imgHero    from '../../assets/projects/mowcar/1.jpg'
import img2       from '../../assets/projects/mowcar/2.jpg'
import img3       from '../../assets/projects/mowcar/3.jpg'
import img4       from '../../assets/projects/mowcar/4.jpg'
import imgBg      from '../../assets/projects/mowcar/case-bg.jpg'
import imgApp     from '../../assets/projects/mowcar/5.png'

import screen1 from '../../assets/projects/mowcar/screen-01.jpg'
import screen2 from '../../assets/projects/mowcar/screen-02.jpg'
import screen3 from '../../assets/projects/mowcar/screen-03.jpg'
import screen4 from '../../assets/projects/mowcar/screen-04.jpg'

import galery1  from '../../assets/projects/mowcar/carrossel-01.jpg'
import galery2  from '../../assets/projects/mowcar/carrossel-02.jpg'
import galery3  from '../../assets/projects/mowcar/carrossel-03.jpg'
import galery4  from '../../assets/projects/mowcar/carrossel-04.jpg'
import galery5  from '../../assets/projects/mowcar/carrossel-05.jpg'
import galery6  from '../../assets/projects/mowcar/carrossel-06.jpg'
import galery7  from '../../assets/projects/mowcar/carrossel-07.jpg'
import galery8  from '../../assets/projects/mowcar/carrossel-08.jpg'
import galery9  from '../../assets/projects/mowcar/carrossel-09.jpg'
import galery10 from '../../assets/projects/mowcar/carrossel-10.jpg'
import galery11 from '../../assets/projects/mowcar/carrossel-11.jpg'
import galery12 from '../../assets/projects/mowcar/carrossel-12.jpg'
import galery13 from '../../assets/projects/mowcar/carrossel-13.jpg'

{/* ========================================================== */}

const project = {
  title: 'Mowcar',
  subtitle: 'Gestão de frotas alugadas sem planilha. Um app para quem retira o carro e para quem responde se ele voltou.',
  tags: ['Produto Digital', 'Aplicativo', 'UX/UI Design', 'Figma'],
  infos: {
    role: 'UX / UI Designer',
    type: 'Projeto pessoal',
    stack: 'Figma · Illustrator',
    year: '2020',
  },
  links: {
    github: '',
    liveUrl: 'https://behance.net/ademirpatricio',
  },
}

const gallery = [
  { src: galery1,  alt: 'Mowcar: tela de login' },
  { src: galery2,  alt: 'Mowcar: tela de boas-vindas' },
  { src: galery3,  alt: 'Mowcar: criar conta' },
  { src: galery4,  alt: 'Mowcar: perfil do usuário' },
  { src: galery5,  alt: 'Mowcar: listagem de veículos' },
  { src: galery6,  alt: 'Mowcar: detalhe do veículo' },
  { src: galery7,  alt: 'Mowcar: fluxo de retirada' },
  { src: galery8,  alt: 'Mowcar: confirmação de retirada' },
  { src: galery9,  alt: 'Mowcar: mapa de localização' },
  { src: galery10, alt: 'Mowcar: histórico de uso' },
  { src: galery11, alt: 'Mowcar: devolução de veículo' },
  { src: galery12, alt: 'Mowcar: painel do gestor' },
  { src: galery13, alt: 'Mowcar: notificações' },
]

{/* ========================================================== */}

export default function Mowcar() {
  usePageTitle(project.title)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[#0e2945] text-white min-h-screen">

      {/* 01 ── Hero ───────────────────────────────────── */}
      <CaseHero
        image={imgHero}
        imageAlt="Mowcar: aplicativo de gestão de aluguel de veículos"
        className="h-[450px]"
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
      <CaseContexto eyebrow="Contexto" image={img2} imageAlt="Mowcar: interface do aplicativo">
        <p>
          Mowcar é um projeto pessoal de 2020. O problema que eu queria entender: locadoras de
          veículos ainda gerenciam frota com planilha, papel e mensagem de WhatsApp.
        </p>
        <p>
          Fui UX e UI designer do começo ao fim, do mapeamento do problema ao protótipo navegável,
          usando Figma. O foco foi testar se um único app conseguia servir dois perfis muito
          diferentes: o gestor que controla a frota e o cliente que retira o carro.
        </p>
      </CaseContexto>

      {/* 03 ── O Problema ─────────────────────────────── */}
      <CaseProblema
        eyebrow="O problema"
        title="Gerenciar uma frota sem sistema é operar no escuro."
        pain={[
          {
            icon: <LuLayoutDashboard size={32} />,
            title: 'Controle manual sem visibilidade',
            description:
              'Gestores controlam retiradas e devoluções em planilhas. Sem status atualizado, qualquer consulta vira telefonema.',
          },
          {
            icon: <LuTimer size={32} />,
            title: 'Retirada que demora mais do que deveria',
            description:
              'O processo ainda é físico: conferência de documento em papel, formulário à mão, assinatura. O cliente espera 20 minutos para sair com o carro.',
          },
          {
            icon: <LuFileSearch size={32} />,
            title: 'Histórico impossível de rastrear',
            description:
              'Rastrear quem retirou qual carro e quando exige consultar planilha, e-mail e caderno ao mesmo tempo. Não existe uma fonte de verdade.',
          },
        ]}
      >
        <p>
          O processo de aluguel de veículos tem muitas partes: cadastro de clientes, controle de
          frota, retirada, devolução, histórico e rotas. Tudo acontece ao mesmo tempo e, na maioria
          das locadoras, sem nenhum sistema que centralize isso.
        </p>
        <p>
          O resultado é um processo lento para o cliente e opaco para o gestor. Qualquer falha de
          comunicação vira problema na hora de devolver o carro.
        </p>
      </CaseProblema>

      {/* 04 ── O Usuário ──────────────────────────────── */}
      <CaseUsuario
        eyebrow="Principais personas"
        title="Dois perfis, uma mesma dor de processo."
        personas={[
          {
            image: img3,
            name: 'Lucas',
            role: 'Gestor de frota · 38 anos',
            bio:
              'Administra uma locadora com 30+ veículos. Usa planilha do Google para controlar retiradas e devoluções. Gasta cerca de 1 hora por dia consolidando informações que chegam por WhatsApp.',
            pain: 'Quando o cliente chega para retirar o carro, o processo é todo manual. Fica constrangido com a demora e não tem como provar o estado do veículo na saída.',
            tags: ['Locadora', 'Recife', '30+ veículos'],
          },
          {
            image: img4,
            name: 'Juliana',
            role: 'Usuária final · 29 anos',
            bio:
              'Aluga veículos com frequência em viagens de trabalho. Estranha o processo analógico num setor que cobra como se fosse moderno. Prefere resolver tudo pelo celular.',
            pain: 'Toda retirada exige assinar papel, conferir documento e esperar o gestor digitar tudo no computador. Leva 20 minutos só para sair com o carro.',
            tags: ['Autônoma', 'Viagens frequentes', 'Mobile-first'],
          },
        ]}
      />

      {/* 05 ── Problem Statement ──────────────────────── */}
      <CaseProblemStatement
        bgImage={imgBg}
        statement="Gestores de locadoras precisam de um sistema que mostre o status da frota sem depender de planilha, porque o que não está centralizado não existe na hora certa."
        hmw="Como poderíamos redesenhar o fluxo de retirada para que o cliente saia com o carro em menos de 5 minutos, sem que o gestor perca o controle do que aconteceu?"
      />

      {/* 06 ── Processo e Decisões ────────────────────── */}
      <CaseDecisoes
        eyebrow="Processo e decisões"
        title="Por que o produto ficou assim."
        decisions={[
          {
            title: 'App único com perfis vs. dois apps separados',
            decision:
              'Um único app com visualizações por perfil. Gestor e cliente acessam contextos diferentes com o mesmo login.',
            alternative:
              'Dois aplicativos separados: um para gestores, um para clientes.',
            impact:
              'Manter dois apps é o dobro do trabalho. Com perfis no mesmo app, o gestor consegue ver o que o cliente vê sem precisar de outro dispositivo. O onboarding também fica mais simples.',
          },
          {
            title: 'Fluxo linear de retirada vs. dashboard com todas as ações',
            decision:
              'Fluxo guiado em etapas para retirada: veículo, confirmação, conclusão.',
            alternative:
              'Dashboard com todas as ações disponíveis de uma vez, sem sequência definida.',
            impact:
              'A retirada acontece presencialmente, com cliente esperando. Um fluxo em etapas reduz o espaço para erro e não exige treinamento. O gestor consegue usar o app pela primeira vez sem ler documentação.',
          },
          {
            title: 'Mapa integrado vs. endereço em texto',
            decision:
              'Mapa com localização do veículo integrado diretamente à tela de detalhes.',
            alternative:
              'Exibir apenas o endereço em texto, deixando o usuário abrir o Maps por conta.',
            impact:
              'Com o endereço em texto, o cliente ainda precisa abrir outro app para chegar até o carro. O mapa integrado resolve isso na mesma tela. Menos uma razão para ligar para o gestor.',
          },
        ]}
      />

      {/* 07 ── Fluxo ──────────────────────────────────── */}
      <CaseFluxo
        eyebrow="Fluxo"
        title="Arquitetura do MVP."
        description="Desenhei o produto em torno dos dois fluxos críticos: retirada e devolução. Tudo o mais é suporte a eles."
        flow={{
          root: 'Mowcar',
          branches: [
            {
              label: 'Onboarding',
              children: ['Login', 'Criar conta', 'Definir perfil'],
            },
            {
              label: 'Gestor',
              children: ['Listar frota', 'Cadastrar veículo', 'Aprovar retirada', 'Registrar devolução'],
            },
            {
              label: 'Cliente',
              children: ['Buscar veículo', 'Ver detalhes + mapa', 'Solicitar retirada', 'Histórico'],
            },
            {
              label: 'Compartilhado',
              children: ['Mapa integrado', 'Notificações', 'Perfil'],
            },
          ],
        }}
      />

      {/* 08 ── As Telas ───────────────────────────────── */}
      <CaseTelas
        eyebrow="As telas"
        title="Interface pensada para o momento de uso."
        mainScreen={{
          src: screen1,
          alt: 'Tela principal do Mowcar',
          caption:
            'Visão geral da frota: o gestor vê o status de todos os veículos antes de qualquer ação.',
        }}
        screens={[
          {
            src: screen2,
            alt: 'Fluxo de login do Mowcar',
            caption: 'Login com opção social para quem não quer criar mais uma senha.',
          },
          {
            src: screen3,
            alt: 'Criação de conta',
            caption: 'Conta criada em etapas mínimas: só o necessário para o primeiro acesso.',
          },
          {
            src: screen4,
            alt: 'Card de veículo',
            caption: 'Card do veículo com o que importa: placa, status e histórico recente.',
          },
        ]}
      />

      {/* 09 ── Resultado ──────────────────────────────── */}
      <CaseResultado
        eyebrow="Resultado"
        title="O que o MVP validou."
        description="Como projeto de estudo de caso, o resultado é qualitativo: o que o protótipo provou e o que ficou de fora do escopo."
        metrics={[
          {
            value: '3',
            label: 'Fluxos principais implementados',
            description: 'Onboarding, retirada e devolução cobrem o ciclo completo de uso.',
          },
          {
            value: '3 telas',
            label: 'Para completar uma retirada',
            description: 'Contra um processo presencial de 8+ etapas em papel e planilha.',
          },
          {
            value: '2 perfis',
            label: 'Em um único app',
            description: 'Gestor e cliente usam o mesmo app sem interferir no contexto um do outro.',
          },
        ]}
        testimonials={[]}
      />

      {/* 10 ── Aprendizado ────────────────────────────── */}
      <CaseAprendizado
        eyebrow="Aprendizado"
        image={imgApp}
        imageAlt="Mowcar: detalhe da interface"
        productOpinion="Gestor e cliente têm expectativas opostas para a mesma interação. O gestor quer controle; o cliente quer terminar logo. Percebi isso tarde demais. O app deveria ter dois modos de UX desde o início, não apenas ícones e textos diferentes."
        processOpinion="Desenhei as telas antes de fechar o fluxo. O diagrama de MVP que fiz depois do wireframe teria poupado uma rodada de revisão. Dá para aprender essa lição umas três vezes e ainda esquecer."
      />

      {/* ── Galeria ───────────────────────────────────── */}
      <CaseCarousel images={gallery} />

      <Cta />

    </main>
  )
}
