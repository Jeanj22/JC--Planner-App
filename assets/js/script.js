// Current Day
var date = moment().format("MMMM Do, YYYY");
var currentDate = function(){
    $("#currentDay").text(date);
};
currentDate();

// Current hour
var currentHour = moment().hour();
