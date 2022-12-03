<template>
  <div class="all">
      <div class="Left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
       text-color="#fff"
       router
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>教学管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">学生信息</template>
          <el-menu-item index="/student">学生信息查看</el-menu-item>
          <el-menu-item index="/studentInsert">学生信息录入</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>院系管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">院系信息</template>
            <el-menu-item index="/DeptOp">院系信息查看</el-menu-item>
            <el-menu-item index="/DeptInsert">院系信息录入</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>教师管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">教师信息</template>
            <el-menu-item index="/TeacherOp">教师信息查看</el-menu-item>
            <el-menu-item index="/TeacherInsert">教师信息录入</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
      </div>
      <div class="Right">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'LeftDiv'
}
</script>

<style scoped>
/**
总体
 */
.all{
  width: 100%;
  height: 100%;
  display: flex;
}

/**
左边
 */
.Left{
  width: 143px;
  height: 300px;
  max-height: 100%;
}
/* .el-menu-vertical-demo{
  background-color: #809591;
} */
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 142px;
}

/**
右边
 */
.Right{
  width: 762px;
  height: 100%;
  background-color: #51625e;
}

</style>