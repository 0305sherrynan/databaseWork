const $sql =require('../map/courseMap')
const $conf = require('../../conf/db.js')
const $utils = require('../../utils/utils.js')
const mysql = require('mysql')
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
    /**
 *  展示所有的course信息
 */
    findAllMenu :(req, res)=>{
        console.log(req)
        pool.getConnection((err,connection)=>{
            connection.query($sql.findAllMenu,(err,result)=>{
                let r = {}
                if (result){
                    r = {
                        code:true,
                        result:result
                    }
                }
                $utils.closeConnection(res,r,connection)

            })
        })
    },

    /**
*  增加course信息
    */
    addPerInfo :(req,res)=>{
        pool.getConnection((err,connection)=>{
                    //获得参数
            const params = req.body
            // ['1','空我','男','2022-11-11','12','12'],
            console.log(params)  
            connection.query($sql.addPerInfo,[params.cno,params.cname,params.tno,params.chour,params.credit,params.shour,params.swhere,params.test_hour],
                    (err,result)=>{
                        result = {
                            code:true,
                            result:'添加成功'
                        }
                        $utils.closeConnection(res,result,connection)
                    })
        })
    },
        /**
 *  索引course的信息
 */
         findSpecialInfo :(req,res)=>{
            

            pool.getConnection((err,connection)=>{
                            //获得参数
                const params = req.body
                console.log(params)
                connection.query((params.select === 'tname'?$sql.findInfoToTname:$sql.findSpecialInfo) ,[params.select,`%${params.search}%`],(err,result)=>{
                    let r = {}
                    console.log(result)
                    if (result){
                        r = {
                            code:true,
                            result:result
                        }
                    }
                    $utils.closeConnection(res,r,connection)
    
                })
            })
        },


        /**
 *  修改course的信息
 */
        modifyInfo :(req,res)=>{
            pool.getConnection((err,connection)=>{
                            //获得参数
                const params = req.body
                console.log(params)
                connection.query($sql.modifyInfo,[params.cno,params.cname,params.tno,params.chour,params.credit,params.shour,params.swhere,params.test_hour,params.id],
                    (err,result)=>{
                    let r = {}
                    console.log(result)
                    if (result){
                        r = {
                            code:true,
                            result:result
                        }
                    }
                    $utils.closeConnection(res,r,connection)
    
                })
            })
        },

/**
 * 删除course的信息
 * 
 * 
 */
        deleteInfo :(req,res)=>{
            pool.getConnection((err,connection)=>{
                            //获得参数
                const params = req.body
                console.log(params)
                connection.query($sql.deleteInfo,[params.cno],(err,result)=>{
                    if (result){
                        result = {
                            code:true,
                            result:'添加成功'
                        }
                    }
                    $utils.closeConnection(res,result,connection)
                })
            })
        }

        
}