const router = require('express').Router()

router.get('/', (req,res)=>{
    res.sendFile('./home.html',{
        root:__dirname
    })
})


router.get('/about', (req,res)=>{
    res.sendFile('./about.html',{
        root:__dirname
    })
})

router.get('/product/:category/:stocks/:price', (req,res)=>{
    const {category, stocks, price} = req.params
    res.send({
        category,
        stocks,
        price
    })
})

module.exports = router