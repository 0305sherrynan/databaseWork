<template>
  <div class="topBox">
    <div class="enterInfo"><el-button type="text" @click="dialogFormVisible = true" class="enterBtn">点击进行录入</el-button></div>

    <el-dialog :append-to-body="true" title="收货地址" :visible.sync="dialogFormVisible" class="thisblack-bgc">
            <el-form :model="form" class="flexForm">
                <el-form-item label="学号" :label-width="formLabelWidth">
                    <el-input v-model="form.sno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.sname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-input v-model="form.sage" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" :label-width="formLabelWidth">
                    <el-date-picker type="date"  v-model="form.sbirthday" style="width: 100%;"  value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="入学成绩" :label-width="formLabelWidth">
                    <el-input v-model="form.sinitscore" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="所在系号" :label-width="formLabelWidth">
                    <el-input v-model="form.sdept" autocomplete="off"></el-input>
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
import {insertStudentInfo} from '@/api/student.js'
export default {
    name:'StudentInsert',
    data(){
        return {
            dialogFormVisible: false,
            form: {
                sno:'',
                sname:'',
                sage:'',
                sbirthday:'',
                sinitscore:'',
                sdept:''
  
                },
            formLabelWidth: '120px'
        }
    },
    methods:{
        async makesureBtn(){
            // 
            this.dialogFormVisible = false
            console.log(this.form)
            const data = await insertStudentInfo(this.form)
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
.flexForm{
    /* display: flex; */
}
 ::v-deep .enterInfo>.el-button>span{
    font-size: 30px;
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