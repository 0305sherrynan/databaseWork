<template>
  <div class="studentOp">
      <div class="leftArea">
          <div>          
            <div><span>查询学生成绩</span></div>
            <div><el-input v-model="search_cno" placeholder="请输入课程号" @keyup.enter.native="searchData"></el-input></div>
          </div>
          <div  class="courseInfoList">
              <div v-for="(item,index) in Object.keys(courseInfo)" :key="index" class="courseInfoListEach">
                <span>{{showList[item]}}:{{courseInfo[item]}}</span>
              </div>
          </div>
          <el-button type="primary" @click="exportToxlsx">导出</el-button>
      </div>
      <div class="rightArea">
          <el-table
          id="outExcel"
          :data="tableDataNew"
          border
          height= "300"
          style="width: 100%;">
            <el-table-column   
                fixed
                prop="sno"
                label="学号"
                width="50">
            </el-table-column>
            <el-table-column
                prop="sname"
                label="姓名"
                width="70">
            </el-table-column>
            <el-table-column
              prop="sage"
              label="性别"
              width="50">
            </el-table-column>

            <el-table-column
              prop="often_score"
              label="平时成绩"
              width="70">
            </el-table-column>
            <el-table-column
              prop="test_score"
              label="考试成绩"
              width="70">
            </el-table-column>
            <el-table-column
              prop="total_score"
              label="总评成绩"
              width="70">
            </el-table-column>
          </el-table>
          <div class="bottom_box"><div class="bottom_echart" id="photoSeconed" style="width: 90%;height:200px;"></div></div>

      </div>

  </div>
</template>

<script>
// import {getStudentInfo,findSpecialInfo,modifyInfo,deleteInfo} from '@/api/student.js'
import XLSX from "xlsx"
import FileSaver from 'file-saver'
import {findSpecialInfo} from  '@/api/course.js'
import {searchGradeByCno} from '@/api/statistics.js'
import {formateDate} from '@/utils/time.js'
import * as echarts from 'echarts'
export default {
  name:'ReportForm',
  data(){
    return {
      //课程基本信息
      courseInfo:{},
      // 搜索的课程号
      search_cno:'',
      
      showList:{
        'cno':'课程号',
        'cname':'课程名',
        'tno':'任课教师号',
        'chour':'学时',
        'credit':'学分',
        'shour':'上课时间',
        'swhere':'上课地点',
        'test_hour':'考试时间',
      },

      //右侧表格数据
      tableDataNew:[
            
        ],
      //右下角数据
      sectorSc: [
        { value: 0, name: '<60' },
        { value: 0, name: '60~70' },
        { value: 0, name: '70~80' },
        { value: 0, name: '80~90' },
        { value: 0, name: '90~100' }
      ],
      //导出表头
      aoaList:['学号','姓名','年龄','平时成绩','考试成绩','总评成绩']

    }
  },
  async created(){
    //一开始获得表格数据
    const {data:res} = await findSpecialInfo('cno','1')
   
    this.courseInfo = res.result.result[0]
    this.courseInfo.shour = formateDate(this.courseInfo.shour)
    this.courseInfo.test_hour = formateDate(this.courseInfo.test_hour)
     console.log(this.courseInfo)
    console.log(Object.keys(this.courseInfo))
  },
  methods: {

      //导出excel
      async exportToxlsx(){
        // 拷贝一个table，否则直接删除会删除页面中的表格
      let tables = document.getElementById('outExcel').cloneNode(true)
      // 因为element-ui的表格的fixed属性导致多出一个table，会下载重复内容，这里删除掉
      tables.removeChild(tables.querySelector(".el-table__fixed")) // fixed和fixed="left"都是用这个
      // tables.removeChild(tables.querySelector(".el-table__fixed-right")) // fixed="right"用这个

       const wb = XLSX.utils.table_to_book(tables);
          /** 获取二进制字符串作为输出 */
          const wbout = XLSX.write(wb, {
            bookType: "xlsx",
            bookSST: true,
            type: "array"
          });
          try {
            FileSaver.saveAs(
              new Blob([wbout], {type: "application/octet-stream"}),
              //设置导出文件名称
              "学生成绩.xlsx"
            );
          } catch (e) {
            if (typeof console !== "undefined") console.log(e, wbout);
          }
          return wbout;
      },
      handleClick(row) {
        console.log(row)
      },
      //索引数据
      async searchData(){
        const {data:res} =  await findSpecialInfo('cno',this.search_cno)
        this.courseInfo = res.result.result[0]
            this.courseInfo.shour = formateDate(this.courseInfo.shour)
    this.courseInfo.test_hour = formateDate(this.courseInfo.test_hour)
        const {data:res1} = await searchGradeByCno(this.search_cno)
        console.log(res1)
        this.tableDataNew = res1.result.result
        this.graphCreate(this.tableDataNew)
      },
      //右下饼图生成
      graphCreate(res1){
        //先清零
          for(const item of this.sectorSc){
            item.value = 0
          }
          for (const item of res1) {
            this.sectorDataFill(item.total_score)
          }
          const myNextChart = echarts.init(document.getElementById('photoSeconed'))
          myNextChart.setOption({
            title: {
              text: '预测报告扇形图分析结果',
              subtext: '分数范围',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '分数范围/次数',
                type: 'pie',
                radius: '50%',
                data: this.sectorSc,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          })
          window.onresize = function () {
            
            myNextChart.resize()
          }
            },
      //饼图数据分析
      sectorDataFill (score) {
      switch (true) {
        case score < 60:this.sectorSc[0].value++; break
        case score >= 60 && score <= 70:this.sectorSc[1].value++; break
        case score > 70 && score <= 80:this.sectorSc[2].value++; break
        case score > 80 && score <= 90:this.sectorSc[3].value++; break
        case score > 90 && score <= 100:this.sectorSc[4].value++; break
      }
      // console.log(this.sectorSc)
    }
          }

}
</script>

<style scoped>
.studentOp{
    width: 100%;
    height: 100%;
    display: flex;
}
/* .studentOp>div{
  display: inline-block;
} */
/**
左侧盒子
 */
.leftArea{
    
    width: 50%;
    background-color: rgb(219, 203, 203);
     height: 100%;
     overflow: hidden;

}
.leftArea>div:first-child{
    display: flex;
    justify-content: space-evenly;
}
.leftArea>div:first-child>div:first-child>span{
      font-size: 16px;
    line-height: 40px;

}
.courseInfoList{
  
  color: rgb(41, 19, 19);
   margin: 0 auto;
   margin-top: 68px;
   width: 300px;
   /* height: 100px; */
   background-color: rgb(126, 116, 116);
   
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.courseInfoListEach{
  margin-top: 9px;
}
/**
右侧盒子
 */
.rightArea{
    width: 50%;
    background-color: rgb(155, 177, 157);
    height: 100%;
}
/* .bottom_box{
          display: flex;
        align-items: center;
} */
/* @import "../assets/css/table_text.css"; */
/* ::v-deep .table{
    background: #e2d2d2;
} */
::v-deep .cell{
  display: flex !important;

}
::v-deep .el-input__inner{
  width: 140px;
  height: 40px;
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

::v-deep .el-button--primary{
  margin-top: 37px;
    margin-left: 38px;
}
</style>