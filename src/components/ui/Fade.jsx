function Fade({
  size = 'md',
  color = 'blue',
  position = 'bottom',
}) {
  const sizes = {
    sm: 'h-20',
    md: 'h-30',
    lg: 'h-60',
    xl: 'h-80',
  }
  const colors = {
    midnightdeep : 'from-transparent to-midnight-deep',
    deepblue : 'from-transparent to-deep-blue',
    spacynavy : 'from-transparent to-spacy-navy',
  }

  const positions = {
    bottom: 'bottom-0 bg-gradient-to-b',
    top: 'top-0 bg-gradient-to-t',
  }

  return (
    <div
      className={`
        absolute
        left-0
        w-full

        ${sizes[size]}
        ${colors[color]}
        ${positions[position]}

        pointer-events-none
      `}
    />
  )
}

export default Fade