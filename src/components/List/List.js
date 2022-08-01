import React from "react"; /* es lo primero que se hace*/
import ListRow from "../ListRow/ListRow"; /*ésto se importa quí, no en App */

function List(props) { /*se crea la estrucutra de una función, en vista que se le dio props de -fruta="morango"- a List en App, uno aqui coloca props dentro del paréntesis*/

    console.log("PROPIEDADES DA LISTA", props)
    // props.produtos
    return (
        <div className="listContainer">
            <h3>Lista</h3>
            {
                props.produtos.map(function (produto) {
                    const valorTotal = produto.quantidade * produto.valor;
                    return (
                        <ListRow /*Y se usa el componente aquí, y como le hemos creado propiedades, le colocamos (props) ahora  a function en ListRow */
                            nome={produto.nome}
                            valorTotal={valorTotal}
                            imagen={produto.imagen}
                        />
                    )
                })
            }
        </div>
    )
}

export default List; /*todo componente precisa ser exportado, vamos colocar el mismo nombre por ser dev junior*/
// se usa en App.js, es nuestro componente padre