const initielState={
    allPokemons:[],
    pokemons:[],
    types:[],
    detail:[]
}

function rootReducer(state=initielState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons:action.payload,
                allPokemons:action.payload
            }

        case 'GET_POKEMON_BY_NAME':
            console.log(action.payload)
            let result=[...action.payload]
            console.log(result)
            return{
                ...state,
                pokemons:result
            
            }

        case "GET_TYPES":
            return {
                ...state,
                types: action.payload,
            }

            case "FILTER_BY_TYPES":
                const pokemons = state.allPokemons;
                const filterType =  action.payload === 'type' ? pokemons : pokemons.filter(e => {
                    let tipos='';
                    for (let i=0; i<e.types.length; i++) {
                        if(e.types[i] === action.payload.toLowerCase()) {
                            tipos=e.types[i]
                        }
                    }
                    return tipos
                })
                return{
                    ...state,
                    pokemons: filterType
            };

            case 'DELETE_TYPE':
                const delet= state.types.filter(el => el.id!==action.payload)
                return{
                    ...state,
                    types: delet
                }


            case 'FILTER_BY_CREATED':
                
                const createFilter= action.payload === 'All' ? state.allPokemons : state.pokemons.filter(p=>isNaN(p.id))
                return{
                    ...state,
                    pokemons: createFilter
                }

            case 'ORDER_BY_NAME':
                const sortedArray = action.payload === 'asc' ?  state.pokemons.sort((a, b) => {
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                return 1;
            }
                if (b.name.toUpperCase() > a.name.toUpperCase()) {
                return -1;
            }
                return 0;
                }) : state.pokemons.sort((a, b) => {
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                return -1;
            }
                if (b.name.toUpperCase() > a.name.toUpperCase()) {
                return 1;
            }
                return 0;
                })
                return {
                    ...state,
                    pokemons: sortedArray
            }

            case 'ORDER_BY_ATTACK':
                const sort_atk = action.payload === 'atkH' 
                ? state.pokemons.sort((first, second) => {
                return first.attack - second.attack
                })
                : state.pokemons.sort((first, second) => {
                return second.attack - first.attack
                })
                return {
                    ...state,
                    pokemons: sort_atk
            }

            case 'GET_POKEMON_BY_ID':
            return {
                ...state,
                detail:action.payload
            }

            case 'POST_POKEMONS':
                return{
                    ...state,
                }


            default: 
        return state;
    }
}

export default rootReducer;