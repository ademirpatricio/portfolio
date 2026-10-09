import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

// Projetos com tag, título e descrição já no idioma atual.
// O texto fica em src/locales/<idioma>/projects.json, indexado pelo "id".
function useTranslatedProjects(list) {
  const { t } = useTranslation('projects')
  return list.map((p) => ({
    ...p,
    tag: t(`${p.id}.tag`),
    title: t(`${p.id}.title`, { defaultValue: p.title }),
    description: t(`${p.id}.description`),
  }))
}

export function useProjects() {
  return useTranslatedProjects(projects)
}

export function useFeaturedProjects() {
  return useTranslatedProjects(projects.filter((p) => p.featured))
}
