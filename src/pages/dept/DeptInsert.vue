
<template>
  <div class="topBox">
    <div class="enterInfo"><el-button type="text" @click="dialogFormVisible = true" class="enterBtn">点击进行录入</el-button></div>

    <el-dialog :append-to-body="true" title="收货地址" :visible.sync="dialogFormVisible" class="thisblack-bgc">
            <el-form :model="form" class="flexForm">
                <el-form-item label="系号" :label-width="formLabelWidth">
                    <el-input v-model="form.sdept" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="系名称" :label-width="formLabelWidth">
                    <el-input v-model="form.sdpet_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="系的简介" :label-width="formLabelWidth">
                    <el-input v-model="form.sdpet_brief" autocomplete="off"></el-input>
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
import {insertDeptInfo} from '@/api/dept.js'
export default {
    name:'DeptInsert',
    data(){
        return {
            dialogFormVisible: false,
            form: {
                sdept:'',
                sdpet_name:'',
                sdpet_brief:''
                },
            formLabelWidth: '120px'
        }
    },
    methods:{
        async makesureBtn(){
            // 
            this.dialogFormVisible = false
            console.log(this.form)
            const data = await insertDeptInfo(this.form)
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