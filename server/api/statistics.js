const express = require('express')
const  router = express.Router()
const $sql = require('../dao/impl/statisticsMapImpl.js')


/**
 *  展示所有的student信息
 */
router.post('/searchGradeByCno',(req,res)=>{
    // res.send({'zwz':'123'})
    $sql.searchGradeByCno(req,res)
})

module.exports = router