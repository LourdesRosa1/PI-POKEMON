const {Router}=require('express')
const {getTypes}=require('../controller/getTypes.js')
const router=Router();

router.get('/types', async (req, res) => {
    try{
        const type= await getTypes();
        return res.send(type)
    } catch (error) {
        console.log(error);
    }
})

module.exports= router