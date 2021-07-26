var currentDayEl = $("#currentDay");

var currentDate = moment().format("MMMM Do, YYYY");

var containerEl = $("#container");
var textEl = $(".description");


// console.log(textEl);

currentDayEl.text(currentDate);
var currentTime = moment().format('H');
// console.log("current time=", currentTime);


//changing colours as per time 
for(i=0; i<textEl.length; i++){
console.log($(textEl[i]).siblings(".hour").attr("id"));
// console.log (currentTime);

var taskName = localStorage.getItem(i+9);
console.log("taskName= ", taskName);
if (taskName != null) {
	$(textEl[i]).text(taskName);
}

if ( $(textEl[i]).siblings(".hour").attr("id") == parseInt(currentTime)){
	$(textEl[i]).addClass("present");
}
else if($(textEl[i]).siblings(".hour").attr("id") > parseInt(currentTime)){
	$(textEl[i]).addClass("future");
}
else {
	$(textEl[i]).addClass("past");
}
}

$(".saveBtn").on("click", function() {
    var taskNameInput = $(this).siblings(".description").val();
    var timeHour = $(this).siblings(".hour").attr("id");
    localStorage.setItem(timeHour, taskNameInput);
  });
