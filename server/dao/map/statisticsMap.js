const statisticsMap = {
    searchGradeByCno:'select x.sno,x.sname,x.sage,y.often_score,y.test_score,y.total_score from student x,grade y where ? = y.cno and y.sno = x.sno'
} 
module.exports = statisticsMap