var currentDay = document.querySelector("#currentDay")
var currentTime = moment();

currentDay.textContent = currentTime.format("MMMM DD, YYYY hh:mm a")