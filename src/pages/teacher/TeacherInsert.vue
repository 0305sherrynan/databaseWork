<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog :append-to-body="true" title="修改信息" :visible.sync="dialogFormVisible" class="thisblack-bgc">
            <el-form :model="form" class="flexForm">
                <el-form-item label="职工号" :label-width="formLabelWidth">
                    <el-input v-model="form.tno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.tname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-input v-model="form.tage" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" :label-width="formLabelWidth">
                    <el-date-picker type="date"  v-model="form.tbirthday"   value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="所在系号" :label-width="formLabelWidth">
                    <el-input v-model="form.sdept" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="职称" :label-width="formLabelWidth">
                    <el-input v-model="form.post" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="专业" :label-width="formLabelWidth">
                    <el-input v-model="form.major" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="教学方向" :label-width="formLabelWidth">
                    <el-input v-model="form.direction" autocomplete="off"></el-input>
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
import {insertTeacherInfo} from '@/api/teacher.js'
export default {
    name:'TeacherInsert',
    data(){
        return {
            dialogFormVisible: false,
            form: {
                tno:'',
                tname:'',
                tage:'',
                tbirthday:'',
                sdept:'',
                post:'',
                major:'',
                direction:''
                },
            formLabelWidth: '120px'
        }
    },
    methods:{
        async makesureBtn(){
            // 
            this.dialogFormVisible = false
            console.log(this.form)
            const data = await insertTeacherInfo(this.form)
            console.log(data)
        }
    }
}
</script>

<style scoped>
.thisblack-bgc{
    /* height: 1000px; */
}
.flexForm{
    display: flex;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap
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