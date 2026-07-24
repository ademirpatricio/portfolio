// flow: {
//   root: string,
//   branches: [{ label: string, children: string[] }]
// }

function CaseFluxo({ eyebrow = 'Fluxo', title, description, flow }) {
  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
        {eyebrow}
      </p>
      {title && (
        <h2 className="text-h3 font-bold text-white mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-reading text-white-85 max-w-2xl mb-12">{description}</p>
      )}

      {flow && (
        <div className="border border-white-07 rounded-card py-12 px-8 bg-white/[0.02] overflow-x-auto">

          {/* Root */}
          <div className="flex justify-center mb-4">
            <div className="bg-cosmic-blue/15 border border-cosmic-blue/30 rounded-lg px-5 py-2">
              <span className="text-caption font-bold text-cosmic-blue">{flow.root}</span>
            </div>
          </div>

          {/* Connector root → branches */}
          <div className="flex justify-center mb-4">
            <div className="w-px h-6 bg-white-07" />
          </div>

          {/* Horizontal connector */}
          <div className="relative flex justify-center mb-4">
            <div
              className="absolute top-0 h-px bg-white-07"
              style={{ width: `${(flow.branches.length - 1) * (100 / flow.branches.length)}%` }}
            />
            <div className={`grid gap-6 w-full`}
              style={{ gridTemplateColumns: `repeat(${flow.branches.length}, 1fr)` }}>
              {flow.branches.map((branch, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-px h-6 bg-white-07 mb-3" />
                  {/* Branch label */}
                  <div className="bg-nebula-violet/20 border border-nebula-violet/30 rounded-lg px-4 py-2 mb-4 text-center">
                    <span className="text-caption font-semibold text-stellar-white">{branch.label}</span>
                  </div>
                  {/* Connector */}
                  {branch.children?.length > 0 && (
                    <div className="w-px h-4 bg-white-07 mb-3" />
                  )}
                  {/* Children */}
                  <div className="flex flex-col gap-2 w-full items-center">
                    {branch.children?.map((child, j) => (
                      <div
                        key={j}
                        className="border border-white-07 rounded-lg px-3 py-1.5 text-center w-full max-w-[180px]"
                      >
                        <span className="text-caption text-white-55">{child}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </section>
  )
}

export default CaseFluxo
