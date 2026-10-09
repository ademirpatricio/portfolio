import { useTranslation, Trans } from 'react-i18next'

import Container from '../../layout/Container'
import FadeIn from '../../ui/FadeIn'
import IconeText from '../../ui/IconeText'

import aboutImg from '../../../assets/images/about-img-2.jpg'

import { FaFilePdf } from 'react-icons/fa6'
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa6'

function AboutTrajetory() {
    const { t } = useTranslation('about')

    return(
              
      <section className="bg-deep-blue py-20 md:py-28">
        <Container>

          <div className="grid grid-cols-1 items-center
          gap-12 md:grid-cols-2 lg:gap-20">

            <FadeIn direction="up">
            <div>

              <div
              className="relative h-[280px] md:h-[550px] justify-center 
              overflow-hidden rounded-lg bg-spacy-navy lg:flex"
              aria-hidden="true"
              >
                <img
                src={aboutImg}
                alt=""
                className="
                absolute inset-0
                h-full w-full
                object-cover
                object-top
                "/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <IconeText
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaFilePdf}
                  iconClassName="text-red-500"
                  title={t('trajectory.links.resumeTitle')}
                  label={t('trajectory.links.resumeLabel')}
                  link={'/ademir-patricio-curriculo.pdf'}
                  target={'_blank'}
                />
                <IconeText 
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaBehance}
                  iconClassName="text-solar-gold"
                  title={t('trajectory.links.behanceTitle')}
                  label={t('trajectory.links.behanceLabel')}
                  link={'https://www.behance.net/ademirpatricio'}
                  target={'_blank'}
                />
                <IconeText 
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaGithub}
                  iconClassName="text-orbit-cyan"
                  title={t('trajectory.links.githubTitle')}
                  label={t('trajectory.links.githubLabel')}
                  link={'https://github.com/ademirpatricio'}
                  target={'_blank'}
                />
                <IconeText 
                  className="bg-midnight-deep/20 
                  hover:bg-midnight-deep/40 rounded-lg p-6"
                  icon={FaLinkedinIn}
                  iconClassName="text-white"
                  title={t('trajectory.links.linkedinTitle')}
                  label={t('trajectory.links.linkedinLabel')}
                  link={'https://linkedin.com/in/ademirpatricio'}
                  target={'_blank'}
                />
              </div>

            </div>
            </FadeIn>

            <FadeIn direction="up">
            <div className="text-body font-light text-stellar-white">
              <span className="mb-7 inline-flex
              text-span text-orbit-cyan text-neon">
                {t('trajectory.eyebrow')}
              </span>
              <h2 className="text-h2 font-bold text-white mb-6">
                {t('trajectory.title')}
              </h2>
              <p className="mb-6">{t('trajectory.p1')}</p>
              <p className="mb-6">{t('trajectory.p2')}</p>
              <p className="mb-6">{t('trajectory.p3')}</p>
              <p className="mb-6">
                <Trans
                  t={t}
                  i18nKey="trajectory.p4"
                  components={{
                    malabares: (
                      <a
                        href="https://malabares.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-solar-gold font-black"
                      />
                    ),
                  }}
                />
              </p>
              <p className="mb-6">{t('trajectory.p5')}</p>
            </div>
            </FadeIn>

          </div>

        </Container>
      </section>
    )
}
  export default AboutTrajetory;


  