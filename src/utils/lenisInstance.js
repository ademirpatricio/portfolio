// Singleton para compartilhar a instância do Lenis entre componentes
let instance = null

export const setLenis = (lenis) => {
  instance = lenis
}

export const getLenis = () => instance
