import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useLang } from '../../hooks/useLang'
import { languages, switchLangPath } from '../../i18n/routes'
import { FlagBR, FlagUS } from '../ui/Flags'

const flags = { pt: FlagBR, en: FlagUS }

// Botão PT / EN. O idioma atual fica destacado; o outro é um link
// para a mesma página no outro idioma.
function LanguageSwitcher({ className = '', onClick }) {
  const lang = useLang()
  const { pathname } = useLocation()
  const { t } = useTranslation('common')

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className={`flex items-center gap-2 text-body font-medium ${className}`}
    >
      {languages.map((code, index) => {
        const Flag = flags[code]
        const flag = (
          <Flag className="h-3.5 w-auto rounded-[2px] shadow-sm" />
        )

        return (
          <Fragment key={code}>
            {index > 0 && (
              <span aria-hidden="true" className="text-white-25">/</span>
            )}

            {code === lang ? (
              <span
                aria-current="true"
                className="flex items-center gap-1.5 font-bold text-white"
              >
                {flag}
                {code.toUpperCase()}
              </span>
            ) : (
              <Link
                to={switchLangPath(pathname, code)}
                lang={code}
                hrefLang={code}
                onClick={onClick}
                className="flex items-center gap-1.5 text-white-60 transition hover:text-white"
              >
                {flag}
                {code.toUpperCase()}
              </Link>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
