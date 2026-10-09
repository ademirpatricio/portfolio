import { useTranslation } from 'react-i18next'
import usePageTitle from '../../hooks/usePageTitle'
import { LuClock, LuFileWarning, LuTrendingDown } from 'react-icons/lu'

import CaseHero           from '../../components/case-study/CaseHero'
import CaseContexto       from '../../components/case-study/CaseContexto'
import CaseProblema       from '../../components/case-study/CaseProblema'
import CaseUsuario        from '../../components/case-study/CaseUsuario'
import CaseProblemStatement from '../../components/case-study/CaseProblemStatement'
import CaseDecisoes       from '../../components/case-study/CaseDecisoes'
import CaseFluxo          from '../../components/case-study/CaseFluxo'
import CaseTelas          from '../../components/case-study/CaseTelas'
import CaseAprendizado    from '../../components/case-study/CaseAprendizado'
import CaseCta            from '../../components/case-study/CaseCta'
import CaseCarousel       from '../../components/case-study/CaseCarousel'
import Cta                from '../../components/layout/Cta'

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


const project = {
  title: 'Proposta Rápida',
  infos: {
    stack: 'Next.js + Tailwind + TypeScript',
    year: '2026',
  },
  links: {
    github: 'https://github.com/ademirpatricio/proposta-rapida',
    liveUrl: 'https://propostarapida.malabares.com.br',
  },
}

const galleryImages = [galery1, galery2, galery3, galery4, galery5, galery6]
const painIcons = [<LuClock size={32} />, <LuFileWarning size={32} />, <LuTrendingDown size={32} />]
const personaImages = [img5, img7]
const screenImages = [screen2, screen3, screen4]

export default function PropostaRapida() {
  const { t } = useTranslation('case-proposta-rapida')
  usePageTitle(project.title)

  const gallery = galleryImages.map((src, i) => ({
    src,
    alt: t('gallery', { returnObjects: true })[i],
  }))

  const pain = t('problem.pain', { returnObjects: true }).map((item, i) => ({
    ...item,
    icon: painIcons[i],
  }))

  const personas = t('users.personas', { returnObjects: true }).map((item, i) => ({
    ...item,
    image: personaImages[i],
  }))

  const screens = t('screens.items', { returnObjects: true }).map((item, i) => ({
    ...item,
    src: screenImages[i],
  }))

  return (
    <main className="bg-[#2a2a2f] text-white min-h-screen">

      {/* 01 ── Hero */}
      <CaseHero
        image={imgHero}
        imageAlt={t('hero.imageAlt')}
        className="h-[600px]"
        title={project.title}
        subtitle={t('hero.subtitle')}
        role={t('meta.role')}
        type={t('meta.type')}
        stack={project.infos.stack}
        year={project.infos.year}
        link={project.links.liveUrl}
        tags={t('meta.tags', { returnObjects: true })}
      />

      {/* 02 ── Contexto */}
      <CaseContexto
        eyebrow={t('context.eyebrow')}
        image={img2}
        imageAlt={t('context.imageAlt')}
      >
        <p>{t('context.p1')}</p>
        <p>{t('context.p2')}</p>
      </CaseContexto>

      {/* 03 ── O Problema */}
      <CaseProblema
        eyebrow={t('problem.eyebrow')}
        title={t('problem.title')}
        pain={pain}
      >
        <p>{t('problem.p1')}</p>
        <p>{t('problem.p2')}</p>
      </CaseProblema>

      {/* 04 ── O Usuário */}
      <CaseUsuario
        eyebrow={t('users.eyebrow')}
        title={t('users.title')}
        personas={personas}
      />

      {/* 05 ── Problem Statement */}
      <CaseProblemStatement
        bgImage={img6}
        statement={t('statement.text')}
        hmw={t('statement.hmw')}
      />

      {/* 06 ── Processo e Decisões */}
      <CaseDecisoes
        eyebrow={t('decisions.eyebrow')}
        title={t('decisions.title')}
        decisions={t('decisions.items', { returnObjects: true })}
      />

      {/* 07 ── Fluxo */}
      <CaseFluxo
        eyebrow={t('flow.eyebrow')}
        title={t('flow.title')}
        description={t('flow.description')}
        flow={{
          root: t('flow.root'),
          branches: t('flow.branches', { returnObjects: true }),
        }}
      />

      {/* 08 ── As Telas */}
      <CaseTelas
        eyebrow={t('screens.eyebrow')}
        title={t('screens.title')}
        mainScreen={{ src: screen1, ...t('screens.main', { returnObjects: true }) }}
        screens={screens}
      />

      {/* CTA produto */}
      <CaseCta
        eyebrow={t('cta.eyebrow')}
        title={t('cta.title')}
        description={t('cta.description')}
        label={t('cta.label')}
        href={project.links.liveUrl}
        bgImage={img6}
      />

      {/* 09 ── Aprendizado */}
      <CaseAprendizado
        eyebrow={t('learning.eyebrow')}
        image={img3}
        imageAlt={t('learning.imageAlt')}
        productOpinion={t('learning.product')}
        processOpinion={t('learning.process')}
      />

      {/* Resultado desativado até haver dados reais (ver git history) */}

      {/* Galeria */}
      <CaseCarousel images={gallery} />

      <Cta />

    </main>
  )
}
