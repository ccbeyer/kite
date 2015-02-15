$(function() {
  var clock = $('.clock').FlipClock({
    autoStart: false,
    countdown: true,
    clockFace: 'DailyCounter',

  });

  var d = new Date('Tue, 17 Mar 2015 20:00:00 GMT-0400');
  var now = new Date();
  var dif = d.getTime() - now.getTime();

  clock.setTime(dif/1000);

  clock.start();
})
