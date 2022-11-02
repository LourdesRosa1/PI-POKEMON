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
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        img: "",
        types:[]
    })
    
    useEffect(() => {
        dispatch(getTypes())
    }, [])

    const handleOnChange= (e) => {
        e.preventDefault()
        
        if (e.target.type === 'text') 
          setInput({...input, [e.target.name]: e.target.value.toUpperCase()})
    
        else if (e.target.type === 'number')
          setInput({...input, [e.target.name]: parseInt(e.target.value)})
        
        else setInput({...input, [e.target.name]: e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(postPokemons(input))
        alert('Pokemon Creado')
        setInput({
            name: "",
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            img: "",
            types:[]
        })
        history.push('/home') //me redirige a la ruta que yo digo
    }



    return(
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crea tu personaje: </h1>
            <form onSubmit={(e) => handleOnSubmit(e)} >
                <div>
                    <label>Nombre: </label>
                    <input type='text' value={input.name} name='name' onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>HP: </label>
                    <input type='number' value={input.hp} name='hp' onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>Attack: </label>
                    <input type='number' value={input.attack} name='attack' onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>Defense: </label>
                    <input type='number' value={input.defense} name='defense' onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>Speed: </label>
                    <input type='number' value={input.speed} name='speed' onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>Height: </label>
                    <input type='number' value={input.height} name='height' onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>Weight: </label>
                    <input type='number' value={input.weight} name='weight' onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>Imagen: </label>
                    <input type='text' value={input.img} name='img' onChange={(e) => handleOnChange(e)}/>
                </div>
            </form>

            
            <button type='submit'>Crear Pokemon</button>
            
        </div>
    )
}