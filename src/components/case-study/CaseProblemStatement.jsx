function CaseProblemStatement({ statement, hmw, bgImage }) {
  return (
    <section className="py-16">
      <div
        className="bg-cosmic-blue/8 w-full py-16"
        style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' } : {}}
      >
        <div className="px-12 max-w-container mx-auto">

          {/* Problem Statement */}
          <div className="mb-8">
            <p className="text-label font-medium uppercase tracking-widest text-white-55 mb-5">
              Problem Statement
            </p>
            <p className="text-h3 font-bold text-white leading-snug">{statement}</p>
          </div>

          {/* How Might We */}
          <div>
            <p className="text-label font-medium uppercase tracking-widest text-white-55 mb-5">
              How might we
            </p>
            <p className="text-reading text-white">{hmw}</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CaseProblemStatement
