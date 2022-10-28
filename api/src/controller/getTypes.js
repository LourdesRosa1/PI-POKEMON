const  axios  = require("axios");
const {Type}=require('../db.js')

const getTypes= async () => {
    try{
        let dbTypes = await Type.findAll().catch(e => undefined)
        if (!dbTypes.length){
            let api = await axios.get("https://pokeapi.co/api/v2/type")
            .catch(e=>{return {message:'No logro acceder a la API'}})
            let types = api.data.results.map(e => e.name)
            for (let i = 0; i<types.length; i++){
                await Type.create({name: types[i]})
            }
            dbTypes = await Type.findAll()
            return dbTypes
        } 
    } catch (error) {
        console.log(error);
    }
}

module.exports={ getTypes}