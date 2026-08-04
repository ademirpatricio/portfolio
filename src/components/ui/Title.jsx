/* 
Este componente é responsável por renderizar o título de uma seção, 
incluindo um span, um título principal (h2), um subtítulo (h3) e um conteúdo adicional. 
Ele também permite centralizar o conteúdo com base na propriedade `center`. 
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
    <div className={center ? "text-center" : ""}>
      <span className={`
        text-span font-medium uppercase
        text-neon text-orbit-cyan
        mb-4 ${center ? "block" : "inline-block"}`}
      >{span}
      </span>
      <h2 className="text-h2 mb-5 font-bold text-white">{titleH2}</h2>
      <h3 className="text-h3 mb-5 font-bold text-white">{titleH3}</h3>
      <p className="text-body font-light text-stellar-white mb-8">{content}</p>
    </div>
  )
}
export default Title