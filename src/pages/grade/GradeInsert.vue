
<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog :append-to-body="true" title="收货地址" :visible.sync="dialogFormVisible" class="thisblack-bgc">
            <el-form :model="form" class="flexForm">
                <el-form-item label="学号" :label-width="formLabelWidth">
                    <el-input v-model="form.sno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="课程号" :label-width="formLabelWidth">
                    <el-input v-model="form.cno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="平时成绩" :label-width="formLabelWidth">
                    <el-input v-model="form.often_score" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="考试成绩" :label-width="formLabelWidth">
                    <el-input v-model="form.test_score" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="总评成绩" :label-width="formLabelWidth">
                    <el-input v-model="form.total_score" autocomplete="off"></el-input>
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
import {insertGradeInfo} from '@/api/grade.js'
export default {
    name:'DeptInsert',
    data(){
        return {
            dialogFormVisible: false,
            form: {
                sno:'',
                cno:'',
                often_score:'',
                test_score:'',
                total_score:''
                },
            formLabelWidth: '120px'
        }
    },
    methods:{
        async makesureBtn(){
            // 
            this.dialogFormVisible = false
            console.log(this.form)
            const data = await insertGradeInfo(this.form)
            console.log(data)
        }
    }
}
</script>

<style scoped>
.flexForm{
    /* display: flex; */
}
::v-deep .el-dialog{
    margin-top: 0 !important;
    width: 500px ;
    /* 居中 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
</style>