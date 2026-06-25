function Footer(){
    return(
      <footer className="flex flex-col items-center justify-between gap-4 
      px-6 py-8 text-center md:flex-row md:px-12 md:py-10 
      md:text-left">
        <p className="text-[13px] text-white-35">© 2026 Ademir Patrício - Todos os direitos reservados</p>
        <ul className="flex list-none gap-5 md:gap-8">
          <li>
            <a
              className="text-[13px] text-white-35 transition hover:text-white"
              href="https://linkedin.com/in/ademirpatricio"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-[13px] text-white-35 transition hover:text-white"
              href="https://behance.com/ademirpatricio"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </li>
          <li>
            <a
              className="text-[13px] text-white-35 transition hover:text-white"
              href="https://github.com/ademirpatricio"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          
          <li>
            <a
              className="text-[13px] text-white-35 transition hover:text-white" target="_blank"
              href="https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </footer>
    )
}
export default Footer;