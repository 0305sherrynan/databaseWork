const deptMap = {
    /**
    *  展示所有的dept信息
    */
    findAllMenu:'select * from dept',
    /**
    *  增加dept信息
     */
     addPerInfo:"INSERT INTO dept(sdept,sdpet_name,sdpet_brief) VALUES(?,?,?)",
    /**
     * 索引dept的信息
     */
    findSpecialInfo:`select * from dept where ?? like ?`,
    /**
     * 修改dept的信息
     */
    modifyInfo: 'update dept set sdept = ? , sdpet_name = ? , sdpet_brief = ?  WHERE sdept = ?',
    /**
     * 删除dept的信息
     */
    deleteInfo: 'delete from dept where sdept = ? '
} 
module.exports = deptMap