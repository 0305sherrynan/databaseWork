import { myAxios } from "@/utils/request"
/**
 *  展示所有的student信息
 */
export const getStudentInfo = (()=>{
    return myAxios({
        url:'/zwz/api/student/findAllMenu',
        method:'GET'

    })
})

/**
 *  增加student信息
 */
 export const insertStudentInfo = (({sno,sname,sage,sbirthday,sinitscore,sdept})=>{
  return myAxios({
      url:'/zwz/api/student/addPerInfo',
      method:'POST',
      data:{
        // sno,sname,sage,sbirthday,sinitscore,sdept
        sno,sname,sage,sbirthday,sinitscore,sdept
      }
  })
})

/**
 * 索引student的信息
 */
 export const findSpecialInfo =( (select,search)=>{
  console.log(select,search)
  return myAxios({
      url:'/zwz/api/student/findSpecialInfo',
      method:'POST',
      data:{
        select,search
      }
  })
})

/**
 * 修改student的信息
 */
 export const modifyInfo =( ({id,sno,sname,sage,sbirthday,sinitscore,sdept})=>{
  // console.log(select,search)
  return myAxios({
      url:'/zwz/api/student/modifyInfo',
      method:'POST',
      data:{
        id,sno,sname,sage,sbirthday,sinitscore,sdept
      }
  })
})

/**
 * 删除student的信息
 */
 export const deleteInfo =( (sno)=>{
  // console.log(select,search)
  return myAxios({
      url:'/zwz/api/student/deleteInfo',
      method:'POST',
      data:{
        sno
      }
  })
})

