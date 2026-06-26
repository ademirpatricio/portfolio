function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto max-w-container px-6 md:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default Container