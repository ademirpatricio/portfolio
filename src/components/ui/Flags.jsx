// Bandeiras simples em SVG. Emoji de bandeira não aparece no Windows,
// então desenhamos aqui para ficar igual em qualquer sistema.

export function FlagBR({ className = '' }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true" focusable="false">
      <rect width="28" height="20" fill="#009B3A" />
      <polygon points="14,2.5 25.5,10 14,17.5 2.5,10" fill="#FEDF00" />
      <circle cx="14" cy="10" r="4.6" fill="#002776" />
    </svg>
  )
}

export function FlagUS({ className = '' }) {
  const stripe = 40 / 13
  const stars = []
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      stars.push([2.4 + col * 4.4 + (row % 2) * 2.2, 2.8 + row * 4.6])
    }
  }

  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true" focusable="false">
      <rect width="60" height="40" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * stripe} width="60" height={stripe} fill="#B22234" />
      ))}
      <rect width="26" height={stripe * 7} fill="#3C3B6E" />
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.9" fill="#fff" />
      ))}
    </svg>
  )
}
