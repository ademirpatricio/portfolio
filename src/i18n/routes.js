// Tabela de rotas por idioma.
// A chave "pt" é a rota original do site. A chave "en" é a versão em inglês.
// Para adicionar uma página nova, adicione uma linha aqui e registre o componente em App.jsx.

export const languages = ['pt', 'en']

export const routes = [
  { pt: '/',                          en: '/en' },
  { pt: '/quem-sou',                  en: '/en/about' },
  { pt: '/o-que-faco',                en: '/en/services' },
  { pt: '/projetos',                  en: '/en/projects' },
  { pt: '/projetos/thayna-aguiar',    en: '/en/projects/thayna-aguiar' },
  { pt: '/projetos/proposta-rapida',  en: '/en/projects/proposta-rapida' },
  { pt: '/projetos/mowcar',           en: '/en/projects/mowcar' },
  { pt: '/projetos/design-system',    en: '/en/projects/design-system' },
]

const isExternal = (path) => /^(https?:|mailto:|tel:|#)/.test(path)

// Remove a barra final ("/en/" vira "/en").
const clean = (pathname) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname

// "/en/about" -> "en". Qualquer outro caminho -> "pt".
export function langFromPath(pathname) {
  const p = clean(pathname)
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'pt'
}

// Qualquer caminho conhecido vira o equivalente em português.
// "/en/about" -> "/quem-sou". Caminho desconhecido volta como veio.
export function toPtPath(pathname) {
  const p = clean(pathname)
  const hit = routes.find((r) => r.en === p)
  return hit ? hit.pt : p
}

// Traduz um caminho interno para o idioma pedido. Links externos passam direto.
// localizePath('/projetos', 'en') -> '/en/projects'
export function localizePath(path, lang) {
  if (!path || isExternal(path)) return path

  const [, base, rest] = path.match(/^([^?#]*)(.*)$/)
  const pt = toPtPath(base)
  if (lang !== 'en') return pt + rest

  const hit = routes.find((r) => r.pt === pt)
  return (hit ? hit.en : '/en' + pt) + rest
}

// Destino do botão de idioma: mesma página, outro idioma.
// Se a página atual não existe (404), vai para a Home do idioma.
export function switchLangPath(pathname, targetLang) {
  const pt = toPtPath(pathname)
  const known = routes.some((r) => r.pt === pt)
  if (!known) return targetLang === 'en' ? '/en' : '/'
  return localizePath(pt, targetLang)
}
