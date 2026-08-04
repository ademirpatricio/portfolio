/* 
Este componente é responsável por exibir a seção de contexto de um estudo de caso. 
Ele aceita os seguintes props:
- eyebrow: Texto que aparece acima do título, geralmente usado para categorizar a seção (padrão: 'Contexto').
- title: Título da seção.
- children: Conteúdo adicional que será exibido abaixo do título.
- image: URL da imagem a ser exibida na seção (opcional).
- imageAlt: Texto alternativo para a imagem (padrão: '').

O layout da seção muda dependendo se uma imagem é fornecida ou não. 
Se uma imagem for fornecida, ela será exibida à esquerda e o texto à direita. 
Caso contrário, apenas o texto será exibido alinhado à esquerda.
*/

function CaseContexto({ 
  eyebrow = 'Contexto', 
  title, 
  children, 
  image, 
  imageAlt = '' }) 
  {
  if (image) {
    return (
      <section className="px-12 max-w-container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center">

          {/* Coluna esquerda — imagem (1/3) */}
          <div>
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-card"
              loading="lazy"
            />
          </div>

          {/* Coluna direita — texto (2/3) */}
          <div>
            <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
              {eyebrow}
            </p>
            {title && (
              <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
            )}
            <div className="text-body text-white-60 space-y-4">{children}</div>
          </div>

        </div>
      </section>
    )
  }

  return (
    <section className="px-12 max-w-container mx-auto py-16">
      <div className="max-w-3xl">
        <p className="text-label font-medium uppercase tracking-widest text-orbit-cyan mb-4">
          {eyebrow}
        </p>
        {title && (
          <h2 className="text-h3 font-bold text-white mb-6">{title}</h2>
        )}
        <div className="text-body text-white-60 space-y-4">{children}</div>
      </div>
    </section>
  )
}

export default CaseContexto
