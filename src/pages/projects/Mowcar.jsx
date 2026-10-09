
import { useTranslation } from 'react-i18next'
import usePageTitle from '../../hooks/usePageTitle'

import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FiFigma } from "react-icons/fi";


import CaseHero from '../../components/case-study/CaseHero'
import CaseSection from '../../components/case-study/CaseSection'
import CasePdf from '../../components/case-study/CasePdf'
import CaseSectionList from '../../components/case-study/CaseSectionList'

import Cta from '../../components/layout/Cta'
import CaseCarousel from '../../components/case-study/CaseCarousel'


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



const project = {
  title: 'Mowcar',
  infos: { stack: 'Figma', year: '2023' },
  links: { liveUrl: 'https://behance.net/ademirpatricio' },
}

const images = {
  hero: imgHero,
  about: imgAbout,
  objectives: imgObjectives,
  app: imgApp,
  workflow: imgWorkflow,
}

const galleryImages = [galery1, galery2, galery3, galery4, galery5, galery6, galery7, galery8, galery9, galery10, galery11, galery12, galery13]

export default function Mowcar() {
  const { t } = useTranslation('case-mowcar')
  usePageTitle(project.title)

  const gallery = galleryImages.map((src, i) => ({
    src,
    alt: i === 0 ? t('gallery.first') : project.title,
  }))

  return (
    <>
      <main className="bg-[#0e2945] text-white min-h-screen">

        {/* ── Hero ─────────────────────────────────────── */}
        <CaseHero
          image={images.hero}
          imageAlt={t('hero.imageAlt')}
          className="h-[450px]"
          title={project.title}
          subtitle={t('hero.subtitle')}
          role={t('meta.role')}
          type={t('meta.type')}
          stack={project.infos.stack}
          year={project.infos.year}
          link={project.links.liveUrl}
          tags={t('meta.tags', { returnObjects: true })}
        />

        {/* ── Sobre o projeto ──────────────────────────── */}
        <CaseSection
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
          image={images.about}
          imageAlt={t('about.imageAlt')}>
          <p className="mb-4">{t('about.p1')}</p>
          <p className="mb-4">{t('about.p2')}</p>
        </CaseSection>

        <CaseSectionList
          title={t('challenge.title')}
          image={images.objectives}
          imageAlt={t('challenge.imageAlt')}
          href={project.links.liveUrl}
          target="_blank"
          reverse>
          <p className="mb-4">{t('challenge.p1')}</p>
          <p className="mb-4">{t('challenge.p2')}</p>
          <ul>
          {t('challenge.items', { returnObjects: true }).map((item) => (
            <li key={item} className="flex items-start gap-3 text-body text-white-65 mb-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        </CaseSectionList>

        <CaseCarousel
          className="mb-20 px-4"
          trackClassName="-ml-4"
          slideClassName="pl-4"
          imageClassName="rounded"
          images={gallery} />

        <CasePdf
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          titleColor="text-spacy-navy"
          gridCols="lg:grid-cols-[1fr_2fr]"
          image={images.workflow}
          imageAlt={t('process.imageAlt')}
          className="bg-cover bg-center py-24"
          style={{ backgroundImage: `url(${imgBg})`, marginBottom: '100px' }}
        >
          <ul>
          {t('process.items', { returnObjects: true }).map((item) => (
            <li key={item} className="flex items-start gap-3 text-body text-spacy-navy mb-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        </CasePdf>

        {/* ── O que foi entregue ───────────────────────── */}
        <CaseSectionList
          eyebrow={t('solution.eyebrow')}
          title={t('solution.title')}
          image={images.app}
          gridCols="lg:grid-cols-[1fr_2fr]"
          imageAlt={t('solution.imageAlt')}
          btLabel={t('solution.button')}
          href={project.links.liveUrl}
          target="_blank"
          reverse>
          <ul className="mb-10">
          {t('solution.items', { returnObjects: true }).map((item) => (
            <li key={item} className="flex items-start gap-3 text-body text-white-65 mb-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
          <p className="mb-10">{t('solution.note')}</p>
          <h3 className="text-2xl font-bold text-white mb-4">{t('solution.toolsTitle')}</h3>
          <ul className="mb-4">
            <li className="flex items-start gap-3 text-body text-white-65 mb-2">
              <FiFigma color="#ff0090" style={{ marginTop: '5px' }}/>
              {t('solution.tools.figma')}
            </li>
            <li className="flex items-start gap-3 text-body text-white-65 mb-2">
              <DiIllustrator color="#ff9a00" style={{ marginTop: '5px' }}/>
              {t('solution.tools.illustrator')}
            </li>
            <li className="flex items-start gap-3 text-body text-white-65 mb-2">
              <DiPhotoshop color="#31a8ff" style={{ marginTop: '5px' }}/>
              {t('solution.tools.photoshop')}
            </li>
          </ul>
        </CaseSectionList>

        <Cta />
      </main>
    </>
  )
}
