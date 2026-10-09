// Animações compartilhadas do site (framer-motion).
// Edite aqui para mudar o ritmo de todas as páginas de uma vez.

const ease = [0.25, 0.1, 0.25, 1]

// Entrada do topo da página (títulos, subtítulos). Use: <motion.div {...fadeUp(0.2)} />
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
})

// Card que sobe e aparece. Use em filhos de um container com stagger.
export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

// Container que faz os filhos entrarem um depois do outro.
export const createContainerVariants = (stagger = 0.1) => ({
  hidden: {},
  show:   { transition: { staggerChildren: stagger } },
})

// Versão padrão (stagger de 0.1s).
export const containerVariants = createContainerVariants()
