import React from "react"; /*siempre */
import './ListRow.css';

function ListRow(props) { /*En segundo lugar la función , colocamos (props) porque le creamos propiedades a ListRow en List.js*/
     return (
        <div className="listRowContainer">
            <div className="listName">
                <label>{`Nome: ${props.nome}`}</label>
                {/* <br></br> */}
                <label>{`Valor: ${props.valorTotal}`}</label>
            </div>
            <br></br>
            <img src={props.imagen} width={100} />
        </div> /*Para que aparezcan en la pantalla deben estar cercados con {}, produtos y no frutas, porque allá recibe un produto */
    )
}

export default ListRow;
/* estructura básica 1-import react, 2-function, 3-export... este componente se exporta en LIst, es ahí donde se va a exportar */
// este componente de line se va a importar en Lista (List.js), y la lista en App