const axios = require('axios');
const { Pokemon, Type } = require('../db.js');

const getPokemonsInApi = async () => {
    try {
        const urlPoke1 = await axios.get( "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40");
    const data=Promise.all(
        urlPoke1.data.results.map( async (poke) =>{
            let p= await axios.get(poke.url)
        let pokemons= {
            id: p.data.id,
            name: p.data.name,
            hp: p.data.stats[0].base_stat,
            attack: p.data.stats[1].base_stat,
            defense: p.data.stats[2].base_stat,
            speed: p.data.stats[5].base_stat,
            height: p.data.height,
            weight: p.data.weight,
            img: p.data.sprites.other.dream_world.front_default,
            types: p.data.types.map((type) => {
                return type.type.name;
                })
            }
            return pokemons
        })
    )
    return data;
    } catch (error) {
        console.log(error);;
    }
    
}

const pokeDbInfo = async () => {
    // try {
    //   const pokemons = await Pokemon.findAll({
    //     include: {
    //       model: Type,
    //       attributes: ['name'],
    //       through: {
    //         attributes: [],
    //       }
    //     }
    //   })
    //   return pokemons;
    // } catch (error) {
    //     console.log(error);
    // }
    try{
      let allInDB = await Pokemon.findAll({
        include: [Type],
      });
      console.log("pokeDbInfo:", allInDB)
      let pokemonsDB = allInDB.map((pokemon) => {
        let allTypes = pokemon.types.map((type) => type.name);
        return {
          id: pokemon.id,
          name: pokemon.name,
          hp: pokemon.hp,
          attack: pokemon.attack,
          defense: pokemon.defense,
          speed: pokemon.speed,
          height: pokemon.height,
          weight: pokemon.weight,
          types: allTypes,
          img: pokemon.img,
        };
      });
      console.log("pokeDbInfo:", pokemonsDB)
      return pokemonsDB;
    }catch (error) {
      console.log(error);
    }
  };
  
  const allPokeInfo = async () => {
    try {
      const pokeInfo = await getPokemonsInApi();
      const dbPokeInfo = await pokeDbInfo();
      console.log("allpokeinfo:", dbPokeInfo)
      const allPokemons = dbPokeInfo.concat(pokeInfo);
      return allPokemons;
    } catch (error) {
        console.log(error);
    }
  };

  

module.exports =  {getPokemonsInApi, pokeDbInfo, allPokeInfo}