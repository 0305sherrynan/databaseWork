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
    }
]
const router = new VueRouter({routes})
export default router