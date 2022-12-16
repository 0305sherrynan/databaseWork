import { myAxios } from "@/utils/request"
/**
 *  展示所有的grade信息
 */
export const getGradeInfo = (()=>{
    return myAxios({
        url:'/zwz/api/grade/findAllMenu',
        method:'GET'

    })
})

/**
 *  增加grade信息
 */
 export const insertGradeInfo = (({sno,cno,often_score,test_score,total_score})=>{
    return myAxios({
        url:'/zwz/api/grade/addPerInfo',
        method:'POST',
        data:{
          sno,cno,often_score,test_score,total_score
        }
    })
  })

  /**
 * 删除grade的信息
 */
 export const deleteInfo =( (sno,cno)=>{
    // console.log(select,search)
    return myAxios({
        url:'/zwz/api/grade/deleteInfo',
        method:'POST',
        data:{
          sno,cno
        }
    })
  })

  /**
 * 修改grade的信息
 */
 export const modifyInfo =( ({id,sno,cno,often_score,test_score,total_score,id2})=>{
    // console.log(select,search)
    return myAxios({
        url:'/zwz/api/grade/modifyInfo',
        method:'POST',
        data:{
            id,sno,cno,often_score,test_score,total_score,id2
        }
    })
  })

  /**
 * 索引grade的信息
 */
 export const findSpecialInfo =( (select,search)=>{
    console.log(select,search)
    return myAxios({
        url:'/zwz/api/grade/findSpecialInfo',
        method:'POST',
        data:{
          select,search
        }
    })
  })
