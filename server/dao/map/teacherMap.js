const teacherSqlMap = {
    /**
    *  展示所有的teacher信息
    */
    findAllMenu:'select * from teacher',
    /**
    *  增加teacher信息
     */
    addPerInfo:"INSERT INTO teacher(tno,tname,tage,tbirthday,sdept,post,major,direction) VALUES(?,?,?,?,?,?,?,?)",
    /**
     * 索引teacher的信息
     */
    findSpecialInfo:`select * from teacher where ?? like ?`,
    /**
     * 修改teacher的信息
     */
    modifyInfo: 'update teacher set tno = ? , tname = ? , tage = ? , tbirthday = ? , sdept = ? , post = ? , major = ? , direction = ?WHERE tno = ?',
    /**
     * 删除teacher的信息
     */
    deleteInfo: 'delete from teacher where tno = ? '
} 
module.exports = teacherSqlMap