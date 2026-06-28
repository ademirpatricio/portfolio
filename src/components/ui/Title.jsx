function Title ({span, title, content}){
    return (
        <>
            <span className="mb-4 text-neon text-orbit-cyan inline-block text-[11px] 
            font-medium uppercase tracking-[0.15em] text-md ">
                {span}
              </span>
              <h2
                className="mb-5 text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] 
                tracking-[-0.025em] text-white"
                id="about-title"
              >
                {title}
              </h2>
              <p className="mb-8 text-[17px] leading-tight text-white-55">
                {content}
              </p>
        </>
    )
}
export default Title