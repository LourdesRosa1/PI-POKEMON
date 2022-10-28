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
            return{
                ...state,
                pokemons:action.payload
            }

        case "GET_TYPES":
            return {
                ...state,
                types: action.payload,
            }

            case "FILTER_BY_TYPES":
                let pokemons = state.allPokemons;
                let filterType = action.payload === 'type' ? pokemons : pokemons.filter((e)=> e.types?.includes(action.payload));
                return{
                    ...state,
                    pokemons: filterType
            };

            case 'ORDER_BY_NAME':
                let sortedArray = action.payload === 'asc' ?  state.pokemons.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
            }
                return 0;
                }) : state.pokemons.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
            }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
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


            default: 
        return state;
    }
}

export default rootReducer;