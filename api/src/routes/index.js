const { Router } = require('express');
// Importar todos los routers;
const pokemons= require('./pokemons.js')
const type=require('./type.js')


const router = Router();

// Configurar los routers
router.use('/', pokemons)
router.use('/',type)

module.exports = router;
