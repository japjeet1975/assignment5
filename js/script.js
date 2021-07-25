


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
console.log (currentTime);
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





