import propostarapidaImg   from '../assets/projects/proposta-rapida/thumbnail.jpg'
import malabaresweddingImg  from '../assets/projects/malabares-wedding/thumbnail.jpg'
import thaynaguiarImg       from '../assets/projects/thayna-aguiar/thumbnail.jpg'
import malabaresImg         from '../assets/projects/malabares/thumbnail.jpg'
import institutovalentimImg from '../assets/projects/instituto-valentim/thumbnail.jpg'
import mowcarImg            from '../assets/projects/mowcar/thumbnail.jpg'
import designsystemImg      from '../assets/projects/design-system/thumbnail.jpg'
import anatomazelliImg      from '../assets/projects/ana-tomazelli/thumbnail.jpg'
import thaynaeademirImg     from '../assets/projects/thayna-e-ademir/thumbnail.jpg'

// featured: true → aparece na home (HomeProjects)
// featured: false → apenas na página /projetos

export const projects = [
  {
    image: propostarapidaImg,
    tag: 'Produto / SaaS',
    title: 'Proposta Rápida',
    link: '/projetos/proposta-rapida',
    external: false,
    featured: true,
    description:
      'Gerador de propostas comerciais para freelancers e agências. Do zero ao deploy.',
  },
  {
    image: mowcarImg,
    tag: 'Aplicativo',
    title: 'Mowcar',
    link: '/projetos/mowcar',
    external: false,
    featured: true,
    description:
      'Aplicativo para gerenciamento de aluguel de veículos de frotas corporativas.',
  },
  {
    image: thaynaguiarImg,
    tag: 'Web / Branding',
    title: 'Thayná Aguiar',
    link: '/projetos/thayna-aguiar',
    external: false,
    featured: true,
    description:
      'Portfólio pessoal construído em React, do wireframe ao ar em uma semana.',
  },
  {
    image: designsystemImg,
    tag: 'Design System',
    title: 'Design System',
    link: '/projetos/design-system',
    external: false,
    featured: true,
    description:
      'Sistema de design do portfólio. Tokens, componentes e padrões visuais.',
  },
  {
    image: malabaresImg,
    tag: 'Web / Branding',
    title: 'Malabares MKT & TEC',
    link: 'https://malabares.com.br',
    external: true,
    featured: true,
    description:
      'Agência de marketing digital completa. Tudo que você precisa para o seu negócio.',
  },
  {
    image: malabaresweddingImg,
    tag: 'Web',
    title: 'Malabares Wedding',
    link: 'https://wedding.malabares.com.br',
    external: true,
    featured: false,
    description:
      'Serviço focado em identidade visual, sites de casamento e experiência emocional.',
  },
  {
    image: institutovalentimImg,
    tag: 'Web / Branding',
    title: 'Instituto Valentim',
    link: 'https://www.behance.net/gallery/233370685/Instituto-Valentim-Pagina-e-Anuncios',
    external: true,
    featured: true,
    description:
      'Instituto focado em metodologias próprias e desenvolvimento humano.',
  },
  {
    image: thaynaeademirImg,
    tag: 'Web / Branding',
    title: 'Thayná e Ademir',
    link: 'https://www.behance.net/gallery/218119979/Thayna-Ademir-Id-Visual-do-Casamento',
    external: true,
    featured: false,
    description:
      'Personalidade, simplicidade e delicadeza definem bem a nossa identidade visual.',
  },
  {
    image: anatomazelliImg,
    tag: 'Web / Branding',
    title: 'Aminders - Ana Tomazelli',
    link: 'https://www.behance.net/gallery/224264037/Ana-Tomazelli-Landingpage',
    external: true,
    featured: false,
    description:
      'Desenvolvimento da landing page oficial para o evento Aminders.',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
