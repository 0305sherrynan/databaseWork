export const formateDate = ((time)=> {
    let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000)
    date = date.toJSON();
      date = date.substring(0, 10)
    return date
  }

)