import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLang } from '../../hooks/useLang'

// Mantém o i18n e o <html lang> alinhados com o idioma da URL.
function LanguageSync() {
  const lang = useLang()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang)
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [lang, i18n])

  return null
}

export default LanguageSync
