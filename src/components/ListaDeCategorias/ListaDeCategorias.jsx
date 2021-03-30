import React, {Component} from "react";

class ListaDeCategorias extends Component {
    render() {
        return(
        <section className="lista-categorias">
            <ul className="lista-categorias_lista">
                <li className="lista-categorias_item">Categorias</li>
                <li className="lista-categorias_item">Categorias</li>
                <li className="lista-categorias_item">Categorias</li>
                <li className="lista-categorias_item">Categorias</li>
            </ul>
            <input type="text" className="lista-categorias_input" placeholder="Adicionar categorias" />
        </section>
        );
    }
}

export default ListaDeCategorias;