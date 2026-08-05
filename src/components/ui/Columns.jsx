/* 

Componente estilo bloco para ser usado como 3 colunas.
Cada uma pode ter ícone, título e parágrafo.

*/

function Columns ({
    title1, 
    content1, 
    title2, 
    content2, 
    title3, 
    content3
}) {
    return (
        
        <div class="flex gap-20 center py-8">
            <div>
                <h4 className="text-h4 text-white font-medium mb-4">{title1}</h4>
                <p className="text-body font-light text-white-60">{content1}</p>
            </div>
            <div>
                <h4 className="text-h4 text-white font-medium mb-4">{title2}</h4>
                <p className="text-body font-light text-white-60">{content2}</p>
            </div>
            <div>
                <h4 className="text-h4 text-white font-medium mb-4">{title3}</h4>
                <p className="text-body font-light text-white-60">{content3}</p>
            </div>
        </div>
    )
}
export default Columns