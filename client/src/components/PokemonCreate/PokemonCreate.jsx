import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemons} from '../../redux/actions/index.js';
import style from './Create.module.css'
import video from '../Home/video.mp4';

function validate(input){
    let errors = {};
    if(input.name === ''){
        errors.name = 'Es necesario un nombre'
    }
    if(input.hp < 0){
        errors.hp = 'Debe ser mayor a 0'
    }
    if(input.attack < 0){
        errors.attack = 'Debe ser mayor a 0'
    }
    if(input.defense < 0){
        errors.defense = 'Debe ser mayor a 0'
    }
    if(input.speed < 0){
        errors.speed = 'Debe ser mayor a 0'
    }
    if(input.height < 0){
        errors.height = 'Debe ser mayor a 0'
    }
    if(input.weight < 0){
        errors.weight = 'Debe ser mayor a 0'
    }
    if(input.types.length === 0){
        errors.types = 'Debe tener al menos un tipo'
    }
    return errors;
}

export default function PokemonCreate () {
    const dispatch= useDispatch();
    const allTypes = useSelector(state => state.types);
    const history = useHistory();
    const [errors, sertErrors]=useState({});



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
    }, [dispatch])

    const handleOnChange= (e) => {
        e.preventDefault()
        
        if (e.target.type === 'text') 
          setInput({...input, [e.target.name]: e.target.value.toLowerCase()})
    
        else if (e.target.type === 'number')
          setInput({...input, [e.target.name]: parseInt(e.target.value)})
        
        else setInput({...input, [e.target.name]: e.target.value})

        console.log(input)
        sertErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelect = (e) => {
        setInput({
            ...input,
            types:[...input.types , e.target.value]
            // types: input.types.filter(e => e !== 0)
        })
        console.log(input)
        sertErrors(validate( {
            ...input,
            types: [...input.types, e.target.value],
          }))

}

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(postPokemons(input))
        setInput(({
            name: "",
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            img: "",
            types:[]}));
        history.push('/home')
        console.log(input)
    }

    return(
        <div >
            <video className={style.video} muted autoPlay loop>
			<source src={video} type="video/mp4" />
			</video>
            <h1> </h1>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crea tu personaje: </h1>
            <div >
                <h1> </h1>
            </div>
            <div className={style.create}>
            <form className={style.content} onSubmit={(e) => handleOnSubmit(e)} >
                <div>
                    <label>Nombre: </label>
                    <input type='text' value={input.name} name='name'  placeholder='Nombre...' onChange={(e) => handleOnChange(e)}/>
                    {errors.name && (<p>{errors.name}</p>)}
                </div>
                <div>
                <label>HP: </label>
                    <input type='number' value={input.hp} name='hp'  onChange={(e) => handleOnChange(e)}/>
                    {errors.hp && (<p >{errors.hp}</p>)}
                </div>
                <div>
                <label>Attack: </label>
                    <input type='number' value={input.attack} name='attack'  onChange={(e) => handleOnChange(e)}/>
                    {errors.attack && (<p>{errors.attack}</p>)}
                </div>
                <div>
                <label>Defense: </label>
                    <input type='number' value={input.defense} name='defense'  onChange={(e) => handleOnChange(e)}/>
                    {errors.defense && (<p>{errors.defense}</p>)}
                </div>
                <div>
                <label>Speed: </label>
                    <input type='number' value={input.speed} name='speed'  onChange={(e) => handleOnChange(e)}/>
                    {errors.speed && (<p>{errors.speed}</p>)}
                </div>
                <div>
                <label>Height: </label>
                    <input type='number' value={input.height} name='height'   onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                <label>Weight: </label>
                    <input type='number' value={input.weight} name='weight'  onChange={(e) => handleOnChange(e)}/>
                    {errors.weight && (<p>{errors.weight}</p>)}
                </div>
                <div>
                <label>Imagen:  </label>
                    <input type='url' value={input.img} name='img' placeholder='Imagen...' onChange={(e) => handleOnChange(e)}/>
                    {errors.img && (<p>{errors.img}</p>)}
                </div>
                <label>Tipos: </label>
                <select onChange={(e) => handleSelect(e)}>
                    {
                        allTypes?.map((type, i) => {
                            return <option key ={i} value={type.name} >{type.name}</option>
                        })
                        }
                </select>    
                <li>{input.types?.map(e => e + ',')}</li>
            <button className={style.button} type="submit" > Crear Pokemon </button>
            </form>
            </div>
        </div>
    )
}


