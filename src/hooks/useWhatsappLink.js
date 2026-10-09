import { useTranslation } from 'react-i18next'

const PHONE = '5581998590849'

// Link do WhatsApp com a mensagem inicial no idioma atual.
export default function useWhatsappLink() {
  const { t } = useTranslation('common')
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(t('whatsapp.message'))}`
}
