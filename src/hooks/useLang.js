import { useLocation } from 'react-router-dom'
import { langFromPath, localizePath } from '../i18n/routes'

// Idioma atual, lido da URL: 'pt' ou 'en'.
export function useLang() {
  const { pathname } = useLocation()
  return langFromPath(pathname)
}

// Devolve uma função que traduz caminhos internos para o idioma atual.
// const lp = useLocalizedPath(); lp('/projetos') -> '/en/projects' (no inglês)
export function useLocalizedPath() {
  const lang = useLang()
  return (path) => localizePath(path, lang)
}
