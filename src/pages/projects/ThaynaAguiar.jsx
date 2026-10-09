// ── geral ───────────────────────────────────────
import { useTranslation, Trans } from 'react-i18next'
import usePageTitle from '../../hooks/usePageTitle'

// ── blocos ──────────────────────────────────────
import CaseHero from '../../components/case-study/CaseHero'
import CaseSection from '../../components/case-study/CaseSection'
import CaseHighlights from '../../components/case-study/CaseHighlights'
import CasePdf from '../../components/case-study/CasePdf'
import CaseDevelop from '../../components/case-study/CaseDevelop'
import CaseSectionList from '../../components/case-study/CaseSectionList'

import Cta from '../../components/layout/Cta'
import CaseCarousel from '../../components/case-study/CaseCarousel'

// ── imagens ─────────────────────────────────────
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

// ====================================================
// Textos do case: src/locales/<idioma>/case-thayna-aguiar.json
// Aqui ficam só dados que não mudam com o idioma.

const project = {
  title: 'Thayná Aguiar',
  tags: ['Branding', 'UI/UX Design', 'Front-End'],
  infos: {
    role: 'UI/UX Designer & Front-End',
    type: 'Web / Branding',
    stack: 'React + Tailwind + Vite',
    year: '2025',
  },
  links: {
    github: 'https://github.com/ademirpatricio/thaynaaguiar',
    behance: 'https://www.behance.net/gallery/213505967/Thayna-Aguiar-Landingpage',
    liveUrl: 'https://thaynaaguiar.com.br',
    mediaKit: 'https://drive.google.com/file/d/1DYMAKzxxF7iTj5k_gSW_kDRszFigters/view?usp=drive_link',
  },
}

const images = {
  hero: imgHero,
  about: imgAbout,
  objectives: imgObjectives,
  mockup: imgMockup,
  web: imgWeb,
}

const gallery = [
  { src: galery1, alt: 'galery1' },
  { src: galery2, alt: 'galery2' },
  { src: galery3, alt: 'galery3' },
  { src: galery4, alt: 'galery4' },
  { src: galery5, alt: 'galery5' },
  { src: galery6, alt: 'galery6' },
]

export default function ThaynaAguiar() {
  const { t } = useTranslation('case-thayna-aguiar')
  usePageTitle(project.title)

  const goals = t('goals.items', { returnObjects: true })
  const delivered = t('delivered.items', { returnObjects: true })
  const tips = t('develop.tips', { returnObjects: true })

  return (
    <>

    <main className="bg-[#34125b] text-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────── */}
      <CaseHero
        image={images.hero}
        imageAlt={t('hero.imageAlt')}
        className="object-[82%_center] md:object-center h-[500px]"
        title={project.title}
        subtitle={t('hero.subtitle')}
        role={project.infos.role}
        type={project.infos.type}
        stack={project.infos.stack}
        year={project.infos.year}
        link={project.links.liveUrl}
        tags={project.tags}
      />

      {/* ── Sobre o projeto ─────────────────────────────────── */}
      <CaseSection
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        image={images.about}
        imageAlt={t('imageAlt')}>
        <p>{t('about.text')}</p>
      </CaseSection>

      <CaseSection
        title={t('client.title')}
        image={images.objectives}
        imageAlt={t('imageAlt')}
        reverse>
        <p className="mb-4">
          <Trans
            t={t}
            i18nKey="client.p1"
            components={{
              client: (
                <a
                  href={project.links.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-solar-accent hover:text-solar-orange transition-colors"
                />
              ),
            }}
          />
        </p>
        <p className="mb-4">{t('client.p2')}</p>
        <p className="mb-4">{t('client.p3')}</p>
      </CaseSection>

      {/* ── Objetivos ───────────────────────────────────────── */}
      <CaseHighlights title={t('goals.title')} items={goals}>
        <p>{t('goals.p1')}</p>
        <p>{t('goals.p2')}</p>
      </CaseHighlights>

      {/* ── Mídia Kit ───────────────────────────────────────── */}
      <CasePdf
        eyebrow={t('mediaKit.eyebrow')}
        title={t('mediaKit.title')}
        btLabel={t('mediaKit.button')}
        href={project.links.mediaKit}
        target="_blank"
        image={images.mockup}
        imageAlt={t('imageAlt')}
        className="bg-nebula-violet"
        >
        <p>{t('mediaKit.text')}</p>
      </CasePdf>

      {/* ── Desenvolvimento ───────────────────────────────────────── */}
      <CaseDevelop
        eyebrown={t('develop.eyebrow')}
        title={t('develop.title')}
        tips={tips}
        linkGithub={project.links.github}
        linkBehance={project.links.behance}
        >
        <p>{t('develop.text')}</p>
      </CaseDevelop>

      {/* ── O que foi entregue ──────────────────────────────── */}
      <CaseSectionList
        eyebrow={t('delivered.eyebrow')}
        title={t('delivered.title')}
        image={images.web}
        imageAlt={t('imageAlt')}
        btLabel={t('delivered.button')}
        href={project.links.mediaKit}
        target="_blank"
        reverse>
        <ul>
          {delivered.map((item) => (
            <li key={item} className="flex items-start gap-3 text-body text-white-65 mb-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orbit-cyan flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CaseSectionList>

      <CaseCarousel images={gallery} />
      <Cta/>
    </main>

    </>
  )
}
