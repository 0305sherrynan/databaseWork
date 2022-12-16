import { myAxios } from "@/utils/request"
/**
 *  展示所有的course信息
 */
export const getCourseInfo = (()=>{
    return myAxios({
        url:'/zwz/api/course/findAllMenu',
        method:'GET'

    })
})

/**
 *  增加course信息
 */
 export const insertCourseInfo = (({cno,cname,tno,chour,credit,shour,swhere,test_hour})=>{
  return myAxios({
      url:'/zwz/api/course/addPerInfo',
      method:'POST',
      data:{
        // sno,sname,sage,sbirthday,sinitscore,sdept
        cno,cname,tno,chour,credit,shour,swhere,test_hour
      }
  })
})

/**
 * 索引course的信息
 */
 export const findSpecialInfo =( (select,search)=>{
  console.log(select,search)
  return myAxios({
      url:'/zwz/api/course/findSpecialInfo',
      method:'POST',
      data:{
        select,search
      }
  })
})

/**
 * 修改course的信息
 */
 export const modifyInfo =( ({id,cno,cname,tno,chour,credit,shour,swhere,test_hour})=>{
  // console.log(select,search)
  return myAxios({
      url:'/zwz/api/course/modifyInfo',
      method:'POST',
      data:{
        id,cno,cname,tno,chour,credit,shour,swhere,test_hour
      }
  })
})

/**
 * 删除course的信息
 */
 export const deleteInfo =( (cno)=>{
  // console.log(select,search)
  return myAxios({
      url:'/zwz/api/course/deleteInfo',
      method:'POST',
      data:{
        cno
      }
  })
})





