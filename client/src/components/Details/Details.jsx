import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonById } from '../../redux/actions/index.js';

export default function Detail() {
    const dispatch = useDispatch();

    const pokemonDetail = useSelector((state) => state.detail);
    const {id}= useParams();

useEffect(() => {
    dispatch(getPokemonById(id));
}, [dispatch, id])


// return (
//     <div>
//         <img src={pokemonDetail.img} alt='Pokemon img'/>
//         <h2>{pokemonDetail.name}</h2>
//         <div>
//             {/* <div>HP:{pokemonDetail.hp} </div> */}
//             <div>Height: {pokemonDetail.height}</div>
//         </div>
//         <Link to='/home'>
//             <button>Volver</button>
//         </Link>
//     </div>
// )

return (
    <div > 

          {/* <h4>{pokemonDetail.id}</h4> */}
          <img src={pokemonDetail.img} alt='Pokemon img'/>
          <h2>{pokemonDetail.name}</h2>
          <div>
            {pokemonDetail.types?.map(e => {
              return <div >{e}</div>
            })}
          </div>
          <div >
            <div>
              <div>HP: {pokemonDetail.hp}</div>
              <div>Attack: {pokemonDetail.attack}</div>
              <div>Defense: {pokemonDetail.defense}</div>
              <div>Speed: {pokemonDetail.speed}</div>
              <div>Height: {pokemonDetail.height}</div>
              <div>Weight: {pokemonDetail.weight}</div>
            </div>
          </div>
      </div>      
      

  )
}
