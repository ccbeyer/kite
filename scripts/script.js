$(function() {
  var clock = $('.clock').FlipClock({
    autoStart: false,
    countdown: true,
    clockFace: 'DailyCounter',

  });

  var d = new Date(Date.UTC(2015, 2, 17, 20, 0, 0, 0));
  var now = new Date();
  var dif = d.getTime() - now.getTime();

  clock.setTime(dif/1000);

  clock.start();
})