const studentSqlMap = {
    /**
    *  展示所有的student信息
    */
    findAllMenu:'select * from student',
    /**
    *  增加student信息
     */
    addPerInfo:"INSERT INTO student(sno,sname,sage,sbirthday,sinitscore,sdept) VALUES(?,?,?,?,?,?)",
    /**
     * 索引student的信息
     */
    findSpecialInfo:`select * from student where ?? like ?`,
    /**
     * 修改student的信息
     */
    modifyInfo: 'update student set sno = ? , sname = ? , sage = ? , sbirthday = ? , sinitscore = ? , sdept = ? WHERE sno = ?',
    /**
     * 删除student的信息
     */
    deleteInfo: 'delete from student where sno = ? '
} 
module.exports = studentSqlMap