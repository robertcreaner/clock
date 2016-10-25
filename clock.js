function setAlarm(time){
  
};

var Clock = function(config) {
  this.config = config || {};
  this.time = config.time;
  this.id = 'clock';
  //this.setAlarm = setAlarm(config.alarm);

  

  
  this.init();
};

Clock.prototype.init = function () {
  this.initHtml();
  //this.initEvent();
};

Clock.prototype.initHtml = function () { 
  var self = this;
  var ele = document.getElementById(this.id);
  var t;
  window.setInterval(function(){
    // console.log(this);
    t = self.getNewTime()
    ele.innerHTML = self.formatNum(t.hour) + ':' + self.formatNum(t.min) + ':' + self.formatNum(t.sec);
  }, 1000);
   
};
Clock.prototype.formatNum = function(num) {
  return num >= 10 ? num + '' : '0' + num 
};

Clock.prototype.getNewTime =function() {
  var d = new Date();
  return {
    hour: d.getHours(),
    min: d.getMinutes(),
    sec: d.getSeconds()
  };
};

var d = new Date();

var clock = new Clock({
  time:{
    hour: d.getHours(),
    min: d.getMinutes(),
    sec: d.getSeconds()
  }
});