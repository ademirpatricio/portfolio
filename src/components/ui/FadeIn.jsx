import { motion } from 'framer-motion'

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const directions = {
    up:    { y: 24, x: 0 },
    left:  { y: 0,  x: -30 },
    right: { y: 0,  x: 30 },
    none:  { y: 0,  x: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
