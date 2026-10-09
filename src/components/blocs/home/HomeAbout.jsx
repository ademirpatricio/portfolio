import { FaFilePdf } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

import Title from '../../ui/Title'
import IconeText from '../../ui/IconeText'
import Button from '../../ui/Button'
import FadeIn from '../../ui/FadeIn'

import aboutImg from '../../../assets/images/about-img-1.jpg'


function HomeAbout() {
    const { t } = useTranslation('home')

    return (
        <section id="about" aria-labelledby="about-title" 
        className="bg-midnight-deep py-6 md:py-28">
          
          <div className="mx-auto grid 
          max-w-container grid-cols-1 items-center 
          text-left gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            
            <FadeIn direction="left">
            <div
              className="relative h-[280px] md:h-[520px] items-center justify-center
              overflow-hidden rounded-card border border-white/5 bg-spacy-navy lg:flex"
              aria-hidden="true"
            >

              <img
                src={aboutImg}
                alt=""
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  object-center
                " 
              />

            </div>
            </FadeIn>

            <FadeIn direction="top">
            <div>
              <Title 
                span={t('about.eyebrow')}
                titleH2={t('about.title')}
                content={t('about.content')}
              />
              <Button mobileFullWidth variant="secondary" 
              href="/quem-sou" size="md">
                {t('about.cta')}
              </Button>
              
              <div className="flex flex-col md:flex-row md:gap-10">
                <IconeText
                  className="mt-8 flex"
                  icon={FaFilePdf}
                  iconClassName="text-red-500"
                  title={t('about.resumeTitle')}
                  label={t('about.resumeLabel')}
                  link={'/ademir-patricio-curriculo.pdf'}
                  target={'_blank'}
                />
                <IconeText 
                  className="mt-8 flex"
                  icon={FaGithub}
                  iconClassName="text-orbit-cyan"
                  title={t('about.codeTitle')}
                  label={t('about.codeLabel')}
                  link={'https://github.com/ademirpatricio'}
                  target={'_blank'}
                />
              </div>

            </div>
            </FadeIn>
          </div>
        </section>
    )
}
export default HomeAbout;