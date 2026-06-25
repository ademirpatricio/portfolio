import aboutImg from '../images/about-img-1.jpg'

import Title from '../ui/Title'

function HomeAbout() {
    return (
        <section id="about" aria-labelledby="about-title" 
        className="bg-midnight-deep py-20 md:py-40">
          
          <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            
            <div
              className="relative hidden h-[420px] items-center justify-center overflow-hidden rounded-card border border-white/5 bg-spacy-navy lg:flex"
              aria-hidden="true"
            >
              {/* Imagem de background */} 
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
                span= "Sobre" 
                title = "Não começo pela solução"
                content = "Tenho mais de 10 anos projetando interfaces e construindo o que projeto. Passei por agências, produtos digitais e times de tecnologia. O que não mudou: entender o problema antes de abrir qualquer ferramenta."
              />
              <a
                className="inline-flex items-center gap-2 text-[15px] font-semibold 
                text-cosmic-blue transition-all hover:gap-3.5"
                href="/sobre"
              >
                Saiba mais →
              </a>
            </div>
          </div>
        </section>
    )
}
export default HomeAbout;