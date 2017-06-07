var clock = document.getElementById('clock');
var workTime = document.getElementById('workTime');
var breakTime = document.getElementById('breakTime');
var audio = document.getElementById('buzz');
var counter = 0;
var work = 1;
var breaks = 1;
var time = 0;
var keep = 0;

function convertTime(t) {
  var min = Math.floor(t / 60);
  var sec = t % 60;
  return min + ":" + sec;
}

function count() {
  clock.textContent = convertTime(counter);
  counter--;
}


function Minus(val) {
  if (val == "work" && work > 1) {
    workTime.textContent = work -= 1;
  } else if (val == "breaks" && breaks > 1) {
    breakTime.textContent = breaks -= 1;
  }
}

function Plus(val) {
  if (val == "work") {
    workTime.textContent = work += 1;
  } else if (val == "breaks") {
    breakTime.textContent = breaks += 1;
  }
}

function Start() {
  if (keep==0) {
    setInterval(count, 1000);
  }
  Work();
}

function Work() {
  var set = work * 60000;
  counter = work * 60;
  keep++;
  setTimeout(function() {
    buzz.play();
    Break();
  }, set);
}


function Break() {
  var put = breaks * 60000;
  counter = breaks * 60;
  setTimeout(function() {
    buzz.play();
    Work();
  }, put);
}
