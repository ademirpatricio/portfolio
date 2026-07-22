function Title ({span, title, content}){
  return (
    <>
      <span className="
        text-span font-medium uppercase
        text-neon text-orbit-cyan
        mb-4 inline-block"
      >{span}
      </span>
      <h2 id="about-title" className="
        mb-5 text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] 
        tracking-[-0.025em] text-white"
        >{title}
      </h2>
      <p className="text-body font-light text-stellar-white mb-8">{content}</p>
    </>
  )
}
export default Title