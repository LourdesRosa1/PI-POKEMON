import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemons} from '../../redux/actions/index.js';

export default function PokemonCreate () {
    const dispatch= useDispatch();
    const allTypes = useSelector(state => state.types);
    const allPokemons= useSelector(state => state.allPokemons); // para buscar que no se repita el nombre
    const history = useHistory();

    const [input, setInput] = useState({
        name: "",
        hp: 0,
        attack: 5,
        defense: 5,
        speed: 5,
        height: 1,
        weight: 1,
        img: "",
        types:[]
    })
    
    useEffect(() => {
        dispatch(getTypes())
    }, [])


    return(
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crea tu personaje: </h1>
            <form >
                <div>
                    <label>Nombre: </label>
                    <input type='text' value={input.name} name='name'/>
                </div>
                <div>
                <label>HP: </label>
                    <input type='number' value={input.hp} name='hp'/>
                </div>
                <div>
                <label>Attack: </label>
                    <input type='number' value={input.attack} name='attack'/>
                </div>
                <div>
                <label>Defense: </label>
                    <input type='number' value={input.defense} name='defense'/>
                </div>
                <div>
                <label>Speed: </label>
                    <input type='number' value={input.speed} name='speed'/>
                </div>
                <div>
                <label>Height: </label>
                    <input type='number' value={input.height} name='height'/>
                </div>
                <div>
                <label>Weight: </label>
                    <input type='number' value={input.weight} name='weight'/>
                </div>
                <div>
                <label>Imagen: </label>
                    <input type='text' value={input.img} name='img'/>
                </div>
            </form>
        </div>
    )
}