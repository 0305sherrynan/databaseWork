const express = require('express')
const  router = express.Router()

router.get('/getInfo',(req,res)=>{
    res.send({'zwz':'123'})
})


module.exports = router