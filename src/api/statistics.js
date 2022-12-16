import { myAxios } from "@/utils/request"
/**
 * 修改student的信息
 */
export const searchGradeByCno =( (search)=>{
    // console.log(select,search)
    return myAxios({
        url:'/zwz/api/statistics/searchGradeByCno',
        method:'POST',
        data:{
          search
        }
    })
  })