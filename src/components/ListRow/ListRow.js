import React from "react";
import './ListRow.css';

function ListRow(props) {
    return (
        <div className="listContainer">
            <label>Nome: {props.nome}</label>
            <br></br>
            <label>Valor: {props.valorTotal}</label>
            <br></br>
            <img src={props.imagen} width={100} />
        </div>
    );
}

export default ListRow;