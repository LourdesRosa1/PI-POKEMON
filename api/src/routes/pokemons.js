const axios = require("axios");
const { getPokemonsInApi, allPokeInfo} = require('../controller/getPokemonApi.js')
const { Router } = require('express');
const { Pokemon, Type } = require('../db.js');


const router = Router();

router.get('/pokemons', async (req, res) => {
    try{
        const {name}= req.query;
        const pokemons= await allPokeInfo();
        if (name) {
            const pokeByName= pokemons?.filter(
                (p) => p.name.toLowerCase() === name.toLowerCase()
              );
              pokeByName.length > 0 ? res.status(200).json(pokeByName) : res.json([]);
            } else {
              res.status(200).json(pokemons)
            }
        
    } catch (error) {
        res.status(500).send('Pokemon not found')
    }

})

router.get('/pokemons/:id', async (req, res) => {
    const {id}=req.params;
    try {
        const pokemonsTodos= await allPokeInfo();
         
            let pokemosId=  pokemonsTodos.filter( (e) => e.id == id)
            pokemosId.length?
            res.status(200).send(pokemosId) :
            res.status(404).send("No existe ese Pokemon")
        
    
    } catch(error) {
    console.log(error);
    }
        });


router.post('/pokemon', async (req, res) => {
    
    const {
    name,
    types,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
    create
    } = req.body;
    try {
    if (name) {
        const pokemonCreated = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        create
        })

        const pokemonTypes = await Type.findAll({
        where: { name: types }
        })

        pokemonCreated.addType(pokemonTypes)
        return res.send('Pokemon created 😊')
    } else {
        return res.status(400).send('Pokemon name is required')
    }
    }
    catch (error) {
    res.status(400).json(error.message);
    }
})



module.exports = router;