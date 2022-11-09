import React from "react";
import style from './Paginado.module.css'

export default function Paginado({pokemonPerPage, allPokemons, paginado }) {
    const pageNumbers=[]
    for (let i=1; i<= Math.ceil(allPokemons/pokemonPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return(
        <div className={style.paginado}>
            {pageNumbers && pageNumbers.map(number => (
                <button
                className={style.buttons}
                key={number}
                onClick={() => paginado(number)}
            >
            {number}
            </button>
            ))}
            
        </div>
    )
}