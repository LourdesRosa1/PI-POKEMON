import React from "react";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterByTypes, orderByName, orderByAttack, filterByCreated} from "../../redux/actions/index.js";
import Card from "../Card/Card.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from 'react-router-dom';
import style from './Home.module.css'

export default function Home () {
    const dispatch= useDispatch();

    const allPokemons=useSelector((state) => state.pokemons);
   // const alltypes=useSelector((state) => state.types)

    let [orden, setOrden] = useState('')

    const[currentPage,setCurrentPage]=useState(1);
    const[pokemonPerPage]=useState(12)
    const indeOfLastPoke=currentPage * pokemonPerPage;
    const indexOfFirstPoke= indeOfLastPoke - pokemonPerPage;
    const currentPoke=allPokemons.slice(indexOfFirstPoke, indeOfLastPoke)

    const paginado=pageNumber => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getTypes());
        dispatch(getPokemons());
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
		dispatch(getPokemons());
    }


    function handleFilterByType(e) {
        e.preventDefault();
        dispatch(filterByTypes(e.target.value))
        setCurrentPage(1);
    }

    function handleFilterByCreate(e) {
        e.preventDefault();
        dispatch(filterByCreated(e.target.value))
        setCurrentPage(1);
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleByAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className={style.home}>
            <Link to='/pokemons'>Crear Pokemons</Link>

        <div>
            <h1>Pokemons</h1>
            <button onClick={e => {handleClick(e)}}>Cargar Pokemons</button>
        </div>

        <h3>Creados :</h3>
        <select onChange={e => handleFilterByCreate(e)}>
            <option value='All'>Todos</option>
            <option value='Created'>Creados</option>
        </select>

        <h3 >Orden :</h3>
        <select onChange={e => handleSort(e)}>
            <option value='asc'>A - Z</option>
            <option value='desc'>Z - A</option>
        </select>

        <h3>Atack :</h3>
        <select onClick={e => handleByAttack(e)}>
        <option value="atkH">Ataque más alto</option>
        <option value="atkL">Ataque más bajo</option>
        </select>

        <h2>Types :</h2>
        <select onChange={e => handleFilterByType(e)}>
            <option value='type'>Los tipos</option>
            {/* {
            alltypes?.map(type => (
            <option value={type.name} key={type.id}>{type.name}</option>
            ))
        } */}
        </select>


        <Paginado
        pokemonPerPage={pokemonPerPage}
        allPokemons={allPokemons.length}
        currentPage={currentPage}
        paginado={paginado}
        />
        <SearchBar/>
        {
            currentPoke?.map((e) =>{
                return (
                    <div key={e.id}>
                        <Link to={'/details/' + e.id}>
                        <Card
                        name={e.name}
                        img={e.img}
                        types={e.types}
                        key={e.id}
                        id={e.id}
                        />
                        </Link>
                    </div>
                )
            })
        }

        </div>
    )
}