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

//Create function to change color of the schedule based on current time
function changeColor() {
    var currentHour = moment().hour();

    //Create variable for schedule time to compare to current time
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        //Add and remove classes based on comparison of current time and schedule time 
        if (blockTime < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
            
        }
        else if (blockTime === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
            
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        }
    })
}

// Retrieve items from local storage on page reload
    
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

changeColor();

