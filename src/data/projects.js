import propostarapidaImg   from '../assets/projects/proposta-rapida/thumbnail.jpg'
import malabaresweddingImg  from '../assets/projects/malabares-wedding/thumbnail.jpg'
import thaynaguiarImg       from '../assets/projects/thayna-aguiar/thumbnail.jpg'
import malabaresImg         from '../assets/projects/malabares/thumbnail.jpg'
import institutovalentimImg from '../assets/projects/instituto-valentim/thumbnail.jpg'
import mowcarImg            from '../assets/projects/mowcar/thumbnail.jpg'
import designsystemImg      from '../assets/projects/design-system/thumbnail.jpg'
import anatomazelliImg      from '../assets/projects/ana-tomazelli/thumbnail.jpg'
import thaynaeademirImg     from '../assets/projects/thayna-e-ademir/thumbnail.jpg'

// Textos (tag e descrição) ficam em src/locales/<idioma>/projects.json, pelo "id".
// Leia os projetos pelo hook useProjects() / useFeaturedProjects().
//
// featured: true → aparece na home (HomeProjects)
// featured: false → apenas na página /projetos

export const projects = [
  {
    image: propostarapidaImg,
    id: 'proposta-rapida',
    title: 'Proposta Rápida',
    link: '/projetos/proposta-rapida',
    external: false,
    featured: true,
  },
  {
    image: mowcarImg,
    id: 'mowcar',
    title: 'Mowcar',
    link: '/projetos/mowcar',
    external: false,
    featured: true,
  },
  {
    image: thaynaguiarImg,
    id: 'thayna-aguiar',
    title: 'Thayná Aguiar',
    link: '/projetos/thayna-aguiar',
    external: false,
    featured: true,
  },
  {
    image: designsystemImg,
    id: 'design-system',
    title: 'Design System',
    link: '/projetos/design-system',
    external: false,
    featured: true,
  },
  {
    image: malabaresImg,
    id: 'malabares',
    title: 'Malabares MKT & TEC',
    link: 'https://malabares.com.br',
    external: true,
    featured: true,
  },
  {
    image: malabaresweddingImg,
    id: 'malabares-wedding',
    title: 'Malabares Wedding',
    link: 'https://wedding.malabares.com.br',
    external: true,
    featured: false,
  },
  {
    image: institutovalentimImg,
    id: 'instituto-valentim',
    title: 'Instituto Valentim',
    link: 'https://www.behance.net/gallery/233370685/Instituto-Valentim-Pagina-e-Anuncios',
    external: true,
    featured: true,
  },
  {
    image: thaynaeademirImg,
    id: 'thayna-e-ademir',
    title: 'Thayná e Ademir',
    link: 'https://www.behance.net/gallery/218119979/Thayna-Ademir-Id-Visual-do-Casamento',
    external: true,
    featured: false,
  },
  {
    image: anatomazelliImg,
    id: 'ana-tomazelli',
    title: 'Aminders - Ana Tomazelli',
    link: 'https://www.behance.net/gallery/224264037/Ana-Tomazelli-Landingpage',
    external: true,
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
