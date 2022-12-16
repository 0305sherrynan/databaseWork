const express = require('express')
const  router = express.Router()
const $sql = require('../dao/impl/courseMapImpl.js')


/**
 *  展示所有的course信息
 */
router.get('/findAllMenu',(req,res)=>{
    // res.send({'zwz':'123'})
    $sql.findAllMenu(req,res)
})

/**
 *  增加course信息
 */
router.post('/addPerInfo',(req,res)=>{
    // console.log(req.body)
    $sql.addPerInfo(req,res)
})

/**
 * 索引course的信息
 */
router.post('/findSpecialInfo',(req,res)=>{
    $sql.findSpecialInfo(req,res)
})

/**
 * 修改course的信息
 */
router.post('/modifyInfo',(req,res)=>{
    $sql.modifyInfo(req,res)
})

/**
 * 删除course的信息
 */
 router.post('/deleteInfo',(req,res)=>{
    $sql.deleteInfo(req,res)
})


module.exports = router