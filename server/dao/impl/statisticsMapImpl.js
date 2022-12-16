
const $sql =require('../map/statisticsMap')
const $conf = require('../../conf/db.js')
const $utils = require('../../utils/utils.js')
const mysql = require('mysql')
//声明一个连接池
const pool = mysql.createPool($utils.extends({},$conf.mysql))
module.exports = {
        /**
 *  展示所有的grade信息
 */
        searchGradeByCno :(req, res)=>{
            console.log(req)
            const params = req.body
            pool.getConnection((err,connection)=>{
                connection.query($sql.searchGradeByCno,params.search,(err,result)=>{
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
    }