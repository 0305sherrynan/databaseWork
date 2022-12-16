const courseSqlMap = {
    /**
    *  展示所有的course信息
    */
    findAllMenu:'select * from course',
    /**
    *  增加course信息
     */
    addPerInfo:"INSERT INTO course(cno,cname,tno,chour,credit,shour,swhere,test_hour) VALUES(?,?,?,?,?,?,?,?)",
    /**
     * 索引course的信息
     */
    findSpecialInfo:`select * from course where ?? like ?`,
    findInfoToTname:'select * from course where course.tno in (select tno from teacher where ?? like ?)',
    /**
     * 修改course的信息
     */
    modifyInfo: 'update course set cno = ? , cname = ? , tno = ? , chour = ? , credit = ? , shour = ? , swhere = ? , test_hour = ?WHERE cno = ?',
    /**
     * 删除course的信息
     */
    deleteInfo: 'delete from course where cno = ? '
} 
module.exports = courseSqlMap