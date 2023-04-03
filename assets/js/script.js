// Current Day
var date = moment().format("MMMM Do, YYYY");
var currentDate = function(){
    $("#currentDay").text(date);
};
currentDate();

// Render hour
var currentHour = moment().hour();
