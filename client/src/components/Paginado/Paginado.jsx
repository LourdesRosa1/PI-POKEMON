import React from "react";

export default function Paginado({pokemonPerPage, allPokemons, currentPage, paginado }) {
    const pageNumbers=[]
    for (let i=1; i<= Math.ceil(allPokemons/pokemonPerPage); i++) {
        pageNumbers.push(i)
    }

    if(currentPage === 5) {
        paginado(1)
    }
    
    return(
        <div>
            <button
				onClick={() =>
					paginado(currentPage === 1 ? pageNumbers.length : currentPage - 1)
				}
			> « </button>

            {pageNumbers && pageNumbers.map(number => (
                <button
                key={number}
                onClick={() => paginado(number)}
            >
            {currentPage === number ? <b>{number}</b> : number}
            </button>
            ))}

            <button
				onClick={() =>
					paginado(
						currentPage === 0 ? currentPage : currentPage + 1,
					)
				}
			> » </button>

            
        </div>
    )
}