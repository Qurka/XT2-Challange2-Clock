function realtimeClock() {
  var rtClock = new Date();
  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  // Add AM and PM system
  var amPm = hours < 24 ? "AM" : "PM";

  // Convert the hours component to 12-hour format
  // hours = hours > 12 ? hours - 12 : hours;

  // Pad the hours, minutes and seconds with leadind zeros
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  // Display the clock
  document.getElementById("clock").innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;
  var t = setTimeout(realtimeClock, 500);

  if ((hours => 05, hours <= 19)) {
    document.body.style.backgroundColor = "#c0e2f1";
    document.getElementById("moon").style.visibility = "hidden";
    document.getElementById("sun").style.visibility = "visible";
    document.getElementById("stars").style.visibility = "hidden";
    document.getElementById("timeofday").innerHTML = "Goodday";
    document.getElementById("message").innerHTML = "Time To Explore!";
  } else {
    document.body.style.backgroundColor = "#2F2E41";
    document.getElementById("moon").style.visibility = "visible";
    document.getElementById("sun").style.visibility = "hidden";
    document.getElementById("stars").style.visibility = "visible";
    document.getElementById("timeofday").innerHTML = "Goodnight";
    document.getElementById("message").innerHTML = "Time To Sleep!";
  }

  if ((hours => 00, hours <= 05)) {
    document.body.style.backgroundColor = "#2F2E41";
    document.getElementById("sun").style.visibility = "hidden";
    document.getElementById("timeofday").innerHTML = "Goodnight";
    document.getElementById("stars").style.visibility = "visible";
    document.getElementById("message").innerHTML = "Time To Sleep!";
    document.getElementById("moon").style.visibility = "visible";
  }
}
