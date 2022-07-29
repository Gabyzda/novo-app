import React from "react";
import ListRow from "../ListRow/ListRow";

function List(props) {

    console.log("PROPIEDADES DA LISTA", props)
    // props.produtos
    return (
        <div className="listContainer">
            <h3>Lista</h3>
            {
                props.produtos.map(function (produto) {
                    const valorTotal = produto.quantidade * produto.valor;
                    return (
                        <ListRow
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

export default List;