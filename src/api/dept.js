import { myAxios } from "@/utils/request"
/**
 *  展示所有的dept信息
 */
export const getDeptInfo = (()=>{
    return myAxios({
        url:'/zwz/api/dept/findAllMenu',
        method:'GET'

    })
})

/**
 *  增加dept信息
 */
 export const insertDeptInfo = (({sdept,sdpet_name,sdpet_brief})=>{
    return myAxios({
        url:'/zwz/api/dept/addPerInfo',
        method:'POST',
        data:{
          sdept,sdpet_name,sdpet_brief
        }
    })
  })

  /**
 * 删除dept的信息
 */
 export const deleteInfo =( (sdept)=>{
    // console.log(select,search)
    return myAxios({
        url:'/zwz/api/dept/deleteInfo',
        method:'POST',
        data:{
          sdept
        }
    })
  })

  /**
 * 修改dept的信息
 */
 export const modifyInfo =( ({id,sdept,sdpet_name,sdpet_brief})=>{
    // console.log(select,search)
    return myAxios({
        url:'/zwz/api/dept/modifyInfo',
        method:'POST',
        data:{
            id,sdept,sdpet_name,sdpet_brief
        }
    })
  })

  /**
 * 索引dept的信息
 */
 export const findSpecialInfo =( (select,search)=>{
    console.log(select,search)
    return myAxios({
        url:'/zwz/api/dept/findSpecialInfo',
        method:'POST',
        data:{
          select,search
        }
    })
  })
