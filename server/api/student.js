const express = require('express')
const  router = express.Router()
const $sql = require('../dao/impl/studentMapImpl.js')


/**
 *  展示所有的student信息
 */
router.get('/findAllMenu',(req,res)=>{
    // res.send({'zwz':'123'})
    $sql.findAllMenu(req,res)
})

/**
 *  增加student信息
 */
router.post('/addPerInfo',(req,res)=>{
    // console.log(req.body)
    $sql.addPerInfo(req,res)
})

/**
 * 索引student的信息
 */
router.post('/findSpecialInfo',(req,res)=>{
    $sql.findSpecialInfo(req,res)
})

/**
 * 修改student的信息
 */
router.post('/modifyInfo',(req,res)=>{
    $sql.modifyInfo(req,res)
})

/**
 * 删除student的信息
 */
 router.post('/deleteInfo',(req,res)=>{
    $sql.deleteInfo(req,res)
})


module.exports = router