<template>
  <div class="topBox">
    <div class="enterInfo"><el-button type="text" @click="dialogFormVisible = true" class="enterBtn">点击进行录入</el-button></div>

    <el-dialog :append-to-body="true" title="修改信息" :visible.sync="dialogFormVisible" class="thisblack-bgc">
            <el-form :model="form" class="flexForm">
                <el-form-item label="课程号" :label-width="formLabelWidth">
                    <el-input v-model="form.cno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="课程名称" :label-width="formLabelWidth">
                    <el-input v-model="form.cname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="任课教师号" :label-width="formLabelWidth">
                    <el-input v-model="form.tno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学时" :label-width="formLabelWidth">
                    <el-input v-model="form.chour" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学分" :label-width="formLabelWidth">
                    <el-input v-model="form.credit" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="上课时间" :label-width="formLabelWidth">
                    <!-- <el-input v-model="form.shour" autocomplete="off"></el-input> -->
                     <el-date-picker type="datetime"  v-model="form.shour"   value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </el-form-item>
                <el-form-item label="上课地点" :label-width="formLabelWidth">
                    <el-input v-model="form.swhere" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="考试时间" :label-width="formLabelWidth">
                    <!-- <el-input v-model="form.test_hour" autocomplete="off"></el-input> -->
                     <el-date-picker type="datetime"  v-model="form.test_hour"   value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="makesureBtn">确 定</el-button>
            </div>
    </el-dialog>
  </div>
</template>

<script>
import {insertCourseInfo} from '@/api/course.js'
export default {
    name:'TeacherInsert',
    data(){
        return {
            dialogFormVisible: false,
            form: {
                cno:'',
                cname:'',
                tno:'',
                chour:'',
                credit:'',
                shour:'',
                swhere:'',
                test_hour:''
                },
            formLabelWidth: '120px'
        }
    },
    methods:{
        async makesureBtn(){
            // 
            this.dialogFormVisible = false
            console.log(this.form)
            const data = await insertCourseInfo(this.form)
            console.log(data)
        }
    }
}
</script>

<style scoped>
.topBox{
    position: relative;
    width: 762px;
    height: 500px;
}
.enterInfo{
    /* font-size: 20px; */
        position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
}
.thisblack-bgc{
    /* height: 1000px; */
}
.flexForm{
    display: flex;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap
}
 ::v-deep .enterInfo>.el-button>span{
    font-size: 30px;
}
::v-deep .el-dialog{
    /* display: flex; */
    margin-top: 0 !important;
    width: 742px ;
    height: 500px;
    /* 居中 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
</style>