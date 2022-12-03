import { myAxios } from "@/utils/request"
export const getCourseInfo = (()=>{
    return myAxios({
        url:'/zwz/api/course/getInfo',
        method:'GET'

    })
})