import { useTranslation } from 'react-i18next'
import Whatsapp from '../ui/Whatsapp'
import useWhatsappLink from '../../hooks/useWhatsappLink'

function Footer(){
    const { t } = useTranslation('common')
    const whatsappLink = useWhatsappLink()

    return(
      <footer className="flex flex-col items-center justify-between gap-4 
      px-6 py-8 text-center md:flex-row md:px-12 md:py-10 
      md:text-left">
        <p className="text-small text-white-25">{t('footer.rights')}</p>
        <ul className="flex list-none gap-5 md:gap-8">
          <li>
            <a
              className="text-small text-stellar-white transition hover:text-white"
              href="https://linkedin.com/in/ademirpatricio"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-small text-stellar-white transition hover:text-white"
              href="https://behance.com/ademirpatricio"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
          <li>
            <a
              className="text-small text-stellar-white transition hover:text-white"
              href="https://github.com/ademirpatricio"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          
          <li>
            <a
              className="text-small text-stellar-white transition hover:text-white" target="_blank"
              href={whatsappLink}
            >
              WhatsApp
            </a>
          </li>
        </ul>
        <Whatsapp/>
      </footer>
      
    )
}
export default Footer;