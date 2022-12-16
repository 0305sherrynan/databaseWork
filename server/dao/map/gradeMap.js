const gradeMap = {
    /**
    *  展示所有的dept信息
    */
    findAllMenu:'select * from grade',
    /**
    *  增加grade信息
     */
     addPerInfo:"INSERT INTO grade(sno,cno,often_score,test_score,total_score) VALUES(?,?,?,?,?)",
    /**
     * 索引grade的信息
     */
    findSpecialInfo:`select * from grade where ?? like ?`,
    findSpecialInfoBySname:'select * from grade,student where grade.sno = student.sno and student.?? like ?',
    findSpecialInfoByCname:'select * from grade,course where grade.cno = course.cno and course.?? like ?',
    findSpecialInfoByTname:'select * from grade,course,teacher where grade.cno = course.cno and teacher.?? like ? and teacher.tno = course.tno',
    findSpecialInfoBySdept:'select * from grade,student where student.?? like ? and student.sno = grade.sno',
    /**
     * 修改grade的信息
     */
    modifyInfo: 'update grade set sno = ? ,cno = ?, often_score = ? , test_score = ? ,total_score = ? WHERE sno = ? and cno = ?',
    /**
     * 删除grade的信息
     */
    deleteInfo: 'delete from grade where sno = ? and cno = ? '
} 
module.exports = gradeMap