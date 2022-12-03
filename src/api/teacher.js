import { myAxios } from "@/utils/request"
/**
 *  展示所有的teacher信息
 */
export const getTeacherInfo = (()=>{
    return myAxios({
        url:'/zwz/api/teacher/findAllMenu',
        method:'GET'

    })
})

/**
 *  增加teacher信息
 */
 export const insertTeacherInfo = (({tno,tname,tage,tbirthday,sdept,post,major,direction})=>{
  return myAxios({
      url:'/zwz/api/teacher/addPerInfo',
      method:'POST',
      data:{
        // sno,sname,sage,sbirthday,sinitscore,sdept
        tno,tname,tage,tbirthday,sdept,post,major,direction
      }
  })
})

/**
 * 索引teacher的信息
 */
 export const findSpecialInfo =( (select,search)=>{
  console.log(select,search)
  return myAxios({
      url:'/zwz/api/teacher/findSpecialInfo',
      method:'POST',
      data:{
        select,search
      }
  })
})

/**
 * 修改teacher的信息
 */
 export const modifyInfo =( ({id,tno,tname,tage,tbirthday,sdept,post,major,direction})=>{
  // console.log(select,search)
  return myAxios({
      url:'/zwz/api/teacher/modifyInfo',
      method:'POST',
      data:{
        id,tno,tname,tage,tbirthday,sdept,post,major,direction
      }
  })
})

/**
 * 删除teacher的信息
 */
 export const deleteInfo =( (tno)=>{
  // console.log(select,search)
  return myAxios({
      url:'/zwz/api/teacher/deleteInfo',
      method:'POST',
      data:{
        tno
      }
  })
})





