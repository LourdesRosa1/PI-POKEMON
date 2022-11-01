import axios from 'axios';


//funcion con la que traigo los pokemons
export function getPokemons () {
    return async function (dispatch) {
        try{
            const json= await axios.get('http://localhost:3001/pokemons')
            return dispatch ({
                type: 'GET_POKEMONS',
                payload:json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

//funcion para obtener pokemon por nombre
export function getPokemonByName (name) {
    return async function (dispatch) {
        try{
            const json= await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: 'GET_POKEMON_BY_NAME',
                payload:json.data
            })
        }catch(error) {
            console.log(error)
        }
    }
}

//funcion para obtener tipos de pokemon
export function getTypes() {
    return async function (dispatch) {
        try{
            const types=await axios.get('http://localhost:3001/types')
            return dispatch({
                type: 'GET_TYPES',
                payload: types.data
            })
        } catch(erro) {
            console.log(erro)
        }
    }
}

//funcion para optener el post
export function postPokemons (payload) {
    return async function (dispatch) {
        try{
            const json= await axios.post('http://localhost:3001/pokemon', payload)
            console.log(json)
            return {
                type:'POST_POKEMONS',
                payload: json
            }
        } catch(erro) {
            console.log(erro)
        }
    }
}


//-----filtro para obtener por tipo de pokemon-----
export function filterByTypes(payload) {
    return {
        type:'FILTER_BY_TYPES',
        payload
    }
}

//----Filtro por pokemon vreado-----
export function filterByCreated(payload) {
    return {
        type: 'FILTER_BY_CREATED',
        payload
    }
}

//------------Ordenar nombre as y des ------------
export function orderByName (payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

//----------Orden por atque-----------
export function orderByAttack (payload) {
    return {
        type: 'ORDER_BY_ATTACK',
        payload
    }
}

//-----------detalle de pokemon po id---------
export function getPokemonById (id) {
    return async function (dispatch) {
        try {
            const json= await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch ({
                type:'GET_POKEMON_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}