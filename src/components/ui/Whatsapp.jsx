import { useTranslation } from 'react-i18next'
import useWhatsappLink from '../../hooks/useWhatsappLink'

export default function Whatsapp() {
  const { t } = useTranslation('common')
  const whatsappLink = useWhatsappLink()

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.ariaLabel')}
      className="whatsapp-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-7 h-7 fill-current"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 224.8 32 103.3 32 4.1 131.2 4.1 252.7c0 44.5 11.6 87.9 33.6 126.1L0 480l104.3-37.3c36.6 20 77.8 30.6 120.5 30.6h.1c121.5 0 220.7-99.2 220.7-220.7 0-58.4-23.1-114.2-64.7-156.2z" />
      </svg>
    </a>
  )
}