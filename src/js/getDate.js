const getNewDate = {
  getDate: function (index) {
    let date = new Date(); //当前日期
    let newDate = new Date();
    newDate.setDate(date.getDate() + index);//官方文档上虽然说setDate参数是1-31,其实是可以设置负数的
    let month = newDate.getMonth()+1;
    let nDate = newDate.getDate();
    if(month<10){
      month = "0"+month;
    }
    if(nDate<10){
      nDate = "0"+nDate;
    }
    let time = newDate.getFullYear()+"-"+(month)+"-"+nDate;
    return time;
  },
  getNowDayWeek: function () {
    let now = new Date(); //当前日期
    let nowDayOfWeek = now.getDay(); //今天本周的第几天
    if(nowDayOfWeek === 0 ){
      nowDayOfWeek=7;
    }
    return nowDayOfWeek;
  },
  getNowDayMonth:function () {
    let now = new Date();             //获取当前时间
    let beginTimes = now.getFullYear();     //开始计算
    let Month = now.getMonth() +1 ;           //getMonth()是以0开始的月份
    if(Month<10){
      Month = "0"+Month;
    }
    beginTimes = beginTimes + "-" +Month +"-1";        //格式 Y-m-d
    let begin = beginTimes.split("-");
    if(begin[2]<10){
      begin[2] = "0"+begin[2];
    }
    let newBegin = begin.join("-");
    return newBegin;
  },
  formatDate: function(date) {
    let myyear = date.getFullYear();
    let mymonth = date.getMonth()+1;
    let myweekday = date.getDate();

    if(mymonth < 10){
      mymonth = "0" + mymonth;
    }
    if(myweekday < 10){
      myweekday = "0" + myweekday;
    }
    return (myyear+"-"+mymonth + "-" + myweekday);
  },
  getWeekStartDate: function() {
    let Nowdate=new Date();
    let WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
    let M=Number(WeekFirstDay.getMonth())+1
    return WeekFirstDay.getYear()+"-"+M+"-"+WeekFirstDay.getDate();
  },
  timeStamp2String: function (time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    var mseconds = datetime.getMilliseconds();
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second+"."+mseconds;
  },
  formatNewDate:function (date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str))
      }
    }
    return fmt
  },
  padLeftZero:function (str) {
    return ('00' + str).substr(str.length)
  }
};
export default getNewDate;
