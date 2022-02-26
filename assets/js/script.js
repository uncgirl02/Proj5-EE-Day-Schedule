var currentDay = document.querySelector("#currentDay");
var currentTime = moment();

//Add current day and time to the scheduler
currentDay.textContent = currentTime.format("MMMM DD, YYYY hh:mm a");


// Add event listener to save button

$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var toDo = $(this).siblings(".description").val();
    var scheduleHour = $(this).parent().attr("id");

    // Save info in local storage
    localStorage.setItem(scheduleHour, toDo);
})
   
    