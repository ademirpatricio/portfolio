import { Link } from 'react-router-dom'

function Button({
  children,
  target,
  href = '',
  variant = 'primary',
  size = 'md',
  className = '',
  mobileFullWidth = false,
  iconRight
}) {

  const variants = {
    primary: `bg-cosmic-blue hover:opacity-85`,
    secondary: `border border-cosmic-blue hover:bg-cosmic-blue/30`,
    accent: `bg-solar-gold text-midnight-deep hover:bg-solar-orange`,
    disabled: `bg-disabled text-midnight-deep opacity-40 pointer-events-none`
  }

  const sizes = {
    sm: 'min-h-10 px-5 text-caption',
    md: 'min-h-13 px-8 text-reading',
    lg: 'min-h-15 px-10 text-lg',
  }

  return (
    <Link
      to = {href}
      target = {target}
      className = {`
        font-medium text-white uppercase
        inline-flex items-center justify-center
        gap-3 rounded-btn
        transition shadow hover:shadow-md

        ${mobileFullWidth ? 'w-full md:w-auto' : ''}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
      {iconRight}
    </Link>
  )
}

export default Button