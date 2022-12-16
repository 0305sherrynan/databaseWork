import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path:'/student',component:()=>import('@/pages/student/StudentOp.vue')   
    },
    {
        path:'/studentInsert',component:()=>import('@/pages/student/StudentInsert.vue')
    },
    {
        path:'/DeptOp',component:()=>import('@/pages/dept/DeptOp.vue')   
    },
    
    {
        path:'/DeptInsert',component:()=>import('@/pages/dept/DeptInsert.vue')   
    },
    {
        path:'/TeacherOp',component:()=>import('@/pages/teacher/TeacherOp.vue')
    },
    {
        path:'/TeacherInsert',component:()=>import('@/pages/teacher/TeacherInsert.vue')
    },
    {
        path:'/CourseOp',component:()=>import('@/pages/course/CourseOp.vue')
    },
    {
        path:'/CourseInsert',component:()=>import('@/pages/course/CourseInsert.vue')
    },
    {
        path:'/GradeOp',component:()=>import('@/pages/grade/GradeOp.vue')
    },
    {
        path:'/GradeInsert',component:()=>import('@/pages/grade/GradeInsert.vue')
    },
    {
        path:'/ReportForm',component:()=>import('@/pages/statistics/ReportForm.vue')
    }
    
]
const router = new VueRouter({routes})
export default router