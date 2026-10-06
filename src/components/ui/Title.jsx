/* 
Este componente é responsável por renderizar o título de uma seção, 
incluindo um span, um título principal (h2), um subtítulo (h3) e um conteúdo adicional. 
Com a propriedade `center`, o conteúdo fica alinhado à esquerda no mobile e centralizado a partir de md. 
*/

function Title ({
  span, 
  titleH2, 
  titleH3, 
  content, 
  center
})
  {

  return (
    <div className={center ? "text-left md:text-center" : ""}>
      <span className={`
        text-span text-neon text-orbit-cyan
        mb-4 ${center ? "inline-block md:block" : "inline-block"}`}
      >{span}
      </span>
      <h2 className="text-h2 mb-5 font-bold text-white">{titleH2}</h2>
      <h3 className="text-h3 mb-5 font-bold text-white">{titleH3}</h3>
      <p className="text-body font-light text-stellar-white mb-8">{content}</p>
    </div>
  )
}
export default Title