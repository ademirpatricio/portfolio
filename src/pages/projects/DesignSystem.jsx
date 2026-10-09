/* == imports gerais ========================================== */
import { useTranslation } from 'react-i18next'
import usePageTitle from '../../hooks/usePageTitle'

/* == componentes utilizados ================================== */
import CaseHero           from '../../components/case-study/CaseHero'
import CaseContexto       from '../../components/case-study/CaseContexto'
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

const frameImages = [mansory01, mansory02, mansory03, mansory04]

import galery1 from '../../assets/projects/design-system/carrossel-01.jpg'
import galery2 from '../../assets/projects/design-system/carrossel-02.jpg'
import galery3 from '../../assets/projects/design-system/carrossel-03.jpg'
import galery4 from '../../assets/projects/design-system/carrossel-04.jpg'
import galery5 from '../../assets/projects/design-system/carrossel-05.jpg'
import galery6 from '../../assets/projects/design-system/carrossel-06.jpg'

/* ========================================================== */
/* 
A váriável project contém todas as informações do projeto, 
como título, subtítulo, tags, infos e links. Ela é usada para
preencher os componentes de hero, contexto, resultado e cta.
*/
const project = {
  title: 'Design System',
  tags: ['Design System', 'UI Design', 'Front-End'],
  infos: {
    stack: 'Figma + React + Tailwind CSS',
    year: '2026',
  },
  links: {
    liveUrl: 'https://ademirpatricio.com',
    figma: 'https://www.figma.com/design/guMcFy55s0bvcfNLjpd4ts/Ademir-Patr%C3%ADcio-%E2%80%94-Design-System?node-id=0-1&t=TbDbN1rAsX56ium2-1',
  },
}
/* ========================================================== */

const gallery = [
  {src: galery1, alt: 'galery1',},
  {src: galery2, alt: 'galery2',},
  {src: galery3, alt: 'galery3',},
  {src: galery4, alt: 'galery4',},
  {src: galery5, alt: 'galery5',},
  {src: galery6, alt: 'galery6',},
]



export default function DesignSystem() {
  const { t } = useTranslation('case-design-system')
  usePageTitle(project.title)

  const frames = frameImages.map((src, i) => ({
    src,
    alt: `${project.title} ${String(i + 1).padStart(2, '0')}`,
  }))

  return (
    <>
      <main className="bg-nebula-violet text-white min-h-screen">

        {/* ── Hero ─────────────────────────────────────── */}
        <CaseHero
          image={imgHero}
          imageAlt={t('hero.imageAlt')}
          className="h-[500px] object-top"
          title={project.title}
          subtitle={t('hero.subtitle')}
          role={t('meta.role')}
          type={t('meta.type')}
          stack={project.infos.stack}
          year={project.infos.year}
          link={project.links.liveUrl}
          tags={project.tags}
        />

        {/* ── Contexto ─────────────────────────────────── */}
        <CaseContexto
          image={imgContexto}
          imageAlt={t('context.imageAlt')}
          eyebrow={t('context.eyebrow')}
          title={t('context.title')}
        >
          <p>{t('context.p1')}</p>
          <p>{t('context.p2')}</p>
        </CaseContexto>

        {/* ── Problema ─────────────────────────────────── */}
        <CaseImageItems
          reverse
          image={imgProblema}
          imageAlt={t('problem.imageAlt')}
          eyebrow={t('problem.eyebrow')}
          title={t('problem.title')}
          items={t('problem.items', { returnObjects: true })}
        />

        {/* ── Decisões ─────────────────────────────────── */}
        <CaseDecisoes
          eyebrow={t('decisions.eyebrow')}
          title={t('decisions.title')}
          decisions={t('decisions.items', { returnObjects: true })}
        />

        {/* ── Masonry ──────────────────────────────────── */}
        <CaseMasonry images={frames} cols={2} />

        {/* ── Resultado ────────────────────────────────── */}
        <CaseResultado
          eyebrow={t('result.eyebrow')}
          title={t('result.title')}
          description={t('result.description')}
          metrics={t('result.metrics', { returnObjects: true })}
        />

        {/* ── Aprendizado ──────────────────────────────── */}
        <CaseAprendizado
          image={imgAprendizado}
          eyebrow={t('learning.eyebrow')}
          productOpinion={t('learning.product')}
          processOpinion={t('learning.process')}
        />

        {/* ── CTA ──────────────────────────────────────── */}
        <CaseCta
          label={t('cta.label')}
          href={project.links.figma}
          eyebrow={t('cta.eyebrow')}
          title={t('cta.title')}
          bgImage={imgCta}
        />

        <CaseCarousel images={gallery} mdSlides={2} lgSlides={3} />

        <Cta />
      </main>
    </>
  )
}
