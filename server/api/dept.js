const express = require('express')
const  router = express.Router()
const $sql = require('../dao/impl/deptMapImpl.js')


/**
 *  展示所有的dept信息
 */
 router.get('/findAllMenu',(req,res)=>{
    // res.send({'zwz':'123'})
    $sql.findAllMenu(req,res)
})
module.exports = router

/**
 *  增加dept信息
 */
 router.post('/addPerInfo',(req,res)=>{
    // console.log(req.body)
    $sql.addPerInfo(req,res)
})

/**
 * 修改dept的信息
 */
 router.post('/modifyInfo',(req,res)=>{
    $sql.modifyInfo(req,res)
})

/**
 * 删除dept的信息
 */
 router.post('/deleteInfo',(req,res)=>{
    $sql.deleteInfo(req,res)
})

/**
 * 索引dept的信息
 */
 router.post('/findSpecialInfo',(req,res)=>{
    $sql.findSpecialInfo(req,res)
})