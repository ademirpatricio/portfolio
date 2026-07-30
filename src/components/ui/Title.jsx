function Title ({span, title, content}){
  return (
    <>
      <span className="
        text-span font-medium uppercase
        text-neon text-orbit-cyan
        mb-4 inline-block"
      >{span}
      </span>
      <h2 id="about-title" className="text-h2 mb-5 font-bold text-white">{title}</h2>
      <p className="text-body font-light text-stellar-white mb-8">{content}</p>
    </>
  )
}
export default Title