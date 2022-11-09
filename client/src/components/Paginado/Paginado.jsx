import React from "react";
import style from './Paginado.module.css'

export default function Paginado({pokemonPerPage,currentPage, allPokemons, paginado }) {
    const pageNumbers=[]
    for (let i=1; i<= Math.ceil(allPokemons/pokemonPerPage); i++) {
        pageNumbers.push(i)
    }
    if(currentPage ) {
        paginado(1)
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