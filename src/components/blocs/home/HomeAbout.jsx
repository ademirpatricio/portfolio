import { FaFilePdf } from 'react-icons/fa6'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'

import { Link } from 'react-router-dom'

import Title from '../../ui/Title'
import IconeText from '../../ui/IconeText'
import Button from '../../ui/Button'

import aboutImg from '../../../assets/images/about-img-1.jpg'


function HomeAbout() {
    return (
        <section id="about" aria-labelledby="about-title" 
        className="bg-midnight-deep py-20 md:py-28">
          
          <div className="mx-auto grid max-w-container grid-cols-1 items-center text-center md:text-left gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            
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

            <div>
              <Title 
                span= "Sobre o Designer" 
                title = "Não começo pela solução"
                content = "Tenho mais de 15 anos projetando interfaces e construindo o que projeto. Passei por agências, produtos digitais e times de tecnologia. O que não mudou: entender o problema antes de abrir qualquer ferramenta."
              />
              <Button mobileFullWidth variant="secondary" href="/quem-sou" size="md">Saiba mais sobre o Designer ⇢</Button>
              
              <div className="flex gap-10">
                <IconeText
                  className="mt-8"
                  icon={FaFilePdf}
                  iconClassName="text-red-500"
                  title={'Mais informações:'}
                  label={'Download do Currículo'}
                  link={'/ademir-patricio-curriculo.pdf'}
                  target={'_blank'}
                />
                <IconeText 
                  className="mt-8"
                  icon={FaGithub}
                  iconClassName="text-orbit-cyan"
                  title={'Meus códigos:'}
                  label={'Github em Construção'}
                  link={'https://github.com/ademirpatricio'}
                  target={'_blank'}
                />
              </div>

            </div>
          </div>
        </section>
    )
}
export default HomeAbout;