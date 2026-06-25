function Button({
  children,
  href = '#',
  variant = 'primary',
  size = 'md',
  target,
  className = '',
  iconRight
}) {

  const variants = {

    primary: `
      bg-cosmic-blue 
      text-white
      hover:opacity-85
      shadow
      hover:shadow-md
    `,

    secondary: `
      border border-cosmic-blue
      text-white
      hover:bg-cosmic-blue/10
      shadow
      hover:shadow-md
    `,

    ghost: `
      bg-transparent
      text-white-55
      hover:text-white
    `,

    gold: `
      bg-solar-gold text-midnight-deep
      hover:opacity-90
    `,

    disabled: `
      bg-cosmic-blue/40
      text-white-40
      pointer-events-none
    `

  }

  const sizes = {
    sm: 'min-h-10 px-5 text-sm',
    md: 'min-h-13 px-8 text-[15px]',
    lg: 'min-h-15 px-10 text-lg'
  }

  return (

    <a href={href}
    target={target}

      className={`
        inline-flex items-center justify-center gap-3
        rounded-btn font-bold uppercase transition
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
      {iconRight}
    </a>

  )
}

export default Button