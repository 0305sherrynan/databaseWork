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



export const formateDate = ((date)=> {
    const arr = date.split('T');
    const d = arr[0];
    const darr = d.split('-');

    const t = arr[1];
    const tarr = t.split('.000');
    const marr = tarr[0].split(':');

    const dd =
      parseInt(darr[0]) +
      '-' +
      parseInt(darr[1]) +
      '-' +
      parseInt(darr[2]) +
      ' ' +
      parseInt(marr[0]) +
      ':' +
      parseInt(marr[1]) +
      ':' +
      parseInt(marr[2]);
    return dd;
  }
)

