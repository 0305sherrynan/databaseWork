<template>
  <div class="studentOp">
      <el-table
          :data="tableDataNew"
          border
          height= "500"
          style="width: 100%;">
            <el-table-column   
                fixed
                prop="tno"
                label="职工号"
                width="120">
            </el-table-column>
            <el-table-column
                prop="tname"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
              prop="tage"
              label="性别"
              width="120">
            </el-table-column>
            <el-table-column
              prop="tbirthday"
              label="出生日期"
              width="120">
            </el-table-column>
            <el-table-column
              prop="sdept"
              label="所在系号"
              width="120">
            </el-table-column>
            <el-table-column
              prop="post"
              label="职称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="major"
              label="专业"
              width="120">
            </el-table-column>
            <el-table-column
              prop="direction"
              label="教学方向"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="200"
              style="display:flex">
              <template slot="header" slot-scope="scope" >
                <el-select v-model="select" placeholder="请选择查询" width="80">
                      <el-option label="职工号" value="tno"></el-option>
                      <el-option label="姓名" value="tname"></el-option>
                      <el-option label="系号" value="sdept"></el-option>
                </el-select>
                <el-input
                  name='search'
                  width="80"
                  v-model="search"
                  size="mini"
                  @keyup.enter.native="searchData"
                  placeholder="索引"/>
              </template>
              <template slot-scope="scope">
                <el-button @click="deleInfo(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small" @click="editInfo(scope.row)">编辑</el-button>

              </template>
            </el-table-column>
      </el-table>
      <el-dialog :append-to-body="true" title="教师信息编辑" :visible.sync="dialogFormVisible" class="thisblack-bgc">
          <el-form :model="singalInfo" class="flexForm">
              <el-form-item label="职工号" :label-width="formLabelWidth">
                  <el-input v-model="singalInfo.tno" :placeholder="singalInfo.sno" autocomplete="off" class="popWinInput"></el-input>
              </el-form-item>
              <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="singalInfo.tname" :placeholder="singalInfo.sname" autocomplete="off" class="popWinInput"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                  <el-input v-model="singalInfo.tage" autocomplete="off" class="popWinInput"></el-input>
              </el-form-item>
              <el-form-item label="出生日期" :label-width="formLabelWidth">
                  <el-date-picker type="date"  v-model="singalInfo.tbirthday" style="width: 100%;"  value-format="yyyy-MM-dd" class="popWinInput"></el-date-picker>
              </el-form-item>
              <el-form-item label="所在系号" :label-width="formLabelWidth">
                  <el-input v-model="singalInfo.sdept" autocomplete="off" class="popWinInput"></el-input>
              </el-form-item>
              <el-form-item label="职称" :label-width="formLabelWidth">
                  <el-input v-model="singalInfo.post" autocomplete="off" class="popWinInput"></el-input>
              </el-form-item>
              <el-form-item label="专业" :label-width="formLabelWidth">
                  <el-input v-model="singalInfo.major" autocomplete="off" class="popWinInput"></el-input>
              </el-form-item>
              <el-form-item label="教学方向" :label-width="formLabelWidth">
                  <el-input v-model="singalInfo.direction" autocomplete="off" class="popWinInput"></el-input>
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
import {getTeacherInfo,modifyInfo,deleteInfo,findSpecialInfo} from '@/api/teacher.js'
import {formateDate} from '@/utils/time.js'
export default {
  name:'TeacherOp',
  data(){
    return {
      //索引
      search:'',
      //索引对象
      select:'',
      
      tableDataNew:[
            
        ],

      //dialog
      dialogFormVisible:false,
      //form-item的大小
      formLabelWidth: '120px',
      //单行数据
      singalInfo:{},
      uid:''
    }
  },
  async created(){
    //一开始获得表格数据
    this.getAgainTableData()
  },
  methods: {
      //（重新）获取表格数据并将事件进行格式化
      async getAgainTableData(){
        const {data:res} = await getTeacherInfo()
        this.tableDataNew =   res.result.result
        this.timeFilter()
      },
      //时间格式的过滤
      timeFilter(){
        console.log(this.tableDataNew)
        this.tableDataNew.forEach((value)=>{
          console.log(value)
          value.tbirthday = formateDate(value.tbirthday)
        })
        
      },
      handleClick(row) {
        console.log(row)

      },
      //索引数据
      async searchData(){
        console.log(this.select,this.search)
        const {data:res} = await findSpecialInfo(this.select,this.search)
        console.log(res)
        this.tableDataNew =   res.result.result
        this.timeFilter()
      },
      //编辑数据
      async editInfo(row){
        //标识后面会修改的信息
        this.uid = row.tno
        this.singalInfo = await row
        console.log(this.singalInfo)
        this.dialogFormVisible = true
      },
      //提交数据
      async makesureBtn(){
          const id = this.uid
          const {data:res} = await modifyInfo({id,...this.singalInfo})
          this.dialogFormVisible = false
          console.log(res)
      },
      //删除数据
      async deleInfo(row){
         await deleteInfo(row.tno)
         //重新获得数据
          this.getAgainTableData()
      }

        //       tableRowClassName({row, rowIndex}) {   //设置table的样式
            
        // if (rowIndex%2 === 0) {
        //     // console.log(rowIndex)
        //   return 'warning-row';
        // } else if (rowIndex%2 === 1) {
        //   return 'success-row';
        // }
        // return '';
        // },
    }

}
</script>

<style scoped>
.studentOp{
    width: 100%;
    height: 100%;
}
/* @import "../assets/css/table_text.css"; */
/* ::v-deep .table{
    background: #e2d2d2;
} */
::v-deep .cell{
  display: flex !important;

}
::v-deep .el-input__inner{
  width: 90px;
  height: 40px;
}


::v-deep .popWinInput .el-input__inner{
  width: 100%;
}

::v-deep .el-dialog{
    margin-top: 0 !important;
    width: 500px ;
    /* 居中 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow:none

}
</style>