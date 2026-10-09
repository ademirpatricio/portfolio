import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { langFromPath } from './routes'

// Carrega sozinho todo arquivo src/locales/<idioma>/<nome>.json.
// O nome do arquivo vira o namespace: useTranslation('home') lê home.json.
// Para traduzir uma página nova, basta criar o par pt/en. Não precisa registrar aqui.
const files = import.meta.glob('../locales/*/*.json', { eager: true, import: 'default' })

const resources = {}
for (const [path, data] of Object.entries(files)) {
  const [, lang, namespace] = path.match(/locales\/([^/]+)\/([^/]+)\.json$/)
  resources[lang] ??= {}
  resources[lang][namespace] = data
}

// O idioma vem da URL (/en = inglês). Lemos o caminho já na inicialização
// para a página não piscar em português antes de trocar.
i18n.use(initReactI18next).init({
  resources,
  lng: langFromPath(window.location.pathname),
  fallbackLng: 'pt', // texto ainda sem tradução aparece em português
  defaultNS: 'common',
  interpolation: { escapeValue: false }, // o React já protege contra XSS
})

export default i18n
