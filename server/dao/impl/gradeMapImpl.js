const $sql =require('../map/gradeMap')
const $conf = require('../../conf/db.js')
const $utils = require('../../utils/utils.js')
const mysql = require('mysql')
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
        /**
 *  展示所有的grade信息
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
*  增加grade信息
    */
    addPerInfo :(req,res)=>{
        pool.getConnection((err,connection)=>{
                    //获得参数
            const params = req.body
            // ['1','空我','男','2022-11-11','12','12'],
            console.log(params)  
            connection.query($sql.addPerInfo,[params.sno,params.cno,params.often_score,params.test_score,params.total_score],
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
 *  修改grade的信息
 */
         modifyInfo :(req,res)=>{
            pool.getConnection((err,connection)=>{
                            //获得参数
                const params = req.body
                console.log(params)
                connection.query($sql.modifyInfo,[params.sno,params.cno,params.often_score,params.test_score,params.total_score,params.id,params.id2],(err,result)=>{
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
 * 删除grade的信息
 * 
 * 
 */
 deleteInfo :(req,res)=>{
    pool.getConnection((err,connection)=>{
                    //获得参数
        const params = req.body
        console.log(params)
        connection.query($sql.deleteInfo,[params.sno,params.cno],(err,result)=>{
            if (result){
                result = {
                    code:true,
                    result:'添加成功'
                }
            }
            $utils.closeConnection(res,result,connection)
        })
    })
},
/*
*  索引student的信息
*/
        findSpecialInfo :(req,res)=>{
           pool.getConnection((err,connection)=>{
                           //获得参数
               const params = req.body
               console.log(params)
               connection.query((params.select == 'cname'?$sql.findSpecialInfoByCname:
                                                  (params.select == 'sname'?$sql.findSpecialInfoBySname:
                                                  (params.select == 'tname'?$sql.findSpecialInfoByTname:
                                                  (params.select == 'sdept'?$sql.findSpecialInfoBySdept:
                                                  $sql.findSpecialInfo)))),
               [params.select,`%${params.search}%`],(err,result)=>{
                   let r = {}
                   console.log(result)
                   if (result){
                       r = {
                           code:true,
                           result:result
                       }
                   }
                   console.log(result)
                   $utils.closeConnection(res,r,connection)
   
               })
           })
       },
}