import { Link } from 'react-router-dom'

function NavLink({
  href,
  children,
  variant = 'default',
  onClick,
}) {
  const variants = {
    default: `
      text-md
      font-medium
      text-white-55
      transition
      hover:text-white
    `,

    cta: `
      rounded-btn
      bg-cosmic-blue
      px-5.5
      py-2.5
      font-bold
      text-white
      transition
      hover:opacity-85
    `,
  }

  // Anchor links (#) and external URLs stay as <a>
  const isExternal = href?.startsWith('http') || href?.startsWith('#')

  if (isExternal) {
    return (
      <li>
        <a href={href} onClick={onClick} className={variants[variant]}>
          {children}
        </a>
      </li>
    )
  }

  return (
    <li>
      <Link to={href} onClick={onClick} className={variants[variant]}>
        {children}
      </Link>
    </li>
  )
}

export default NavLink
