import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonById } from '../../redux/actions/index.js';

export default function Details() {
    const dispatch = useDispatch();

    const pokemonDetail = useSelector((state) => state.detail);
    const {id}= useParams();

useEffect(() => {
    dispatch(getPokemonById(id));
}, [dispatch])

    return (
                <div > 
                    {
                        pokemonDetail.length > 0
                        ? <div>
                            <img src={pokemonDetail[0].img} alt='Pokemon img' width='400px' height='400px'/>
                            <h2>{pokemonDetail[0].name}</h2>
                            <div> {pokemonDetail.types?.map(e => {
                                return <div >{e}</div>
                                })}
                                </div>
                                <div>
                                    <div>HP: {pokemonDetail[0].hp}</div>
                                    <div>Attack: {pokemonDetail[0].attack}</div>
                                    <div>Defense: {pokemonDetail[0].defense}</div>
                                    <div>Speed: {pokemonDetail[0].speed}</div>
                                    <div>Height: {pokemonDetail[0].height}</div>
                                    <div>Weight: {pokemonDetail[0].weight}</div> 
                                    </div>
                                    </div> : <p>Cargando ...</p>
                    }
                        <Link to='/home'>
                            <button>Volver</button>
                        </Link>
                </div>      
    )
}
