import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions/index.js";


export default function SearchBar() {
    const dispatch = useDispatch()
    let [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getPokemonByName(name))
        dispatch()
        setName("");
        console.log(name)

    }

    return (
    <div>

        <input
            type="text"
            placeholder="Buscar Pokemon..."
            onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
            Buscar
        </button>
        

    </div>
    )
}
