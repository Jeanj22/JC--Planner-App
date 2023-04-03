// var
var userEntry = $("#userEntry");


// Current Day
var date = moment().format("MMMM Do, YYYY");
var currentDate = function(){
    $("#currentDay").text(date);
};
currentDate();


// Render hour
var currentHour = moment().hour();


// * Allow a user to enter an event when they click a timeblock
// * Save the event in local storage when the save button is clicked in that timeblock.


//Storing data
$(document).ready(function(){
    $(".saveBtn").on("click", function(){        
        var userEntry = 
        var time = 
     
    //key value pair    
        localStorage.setItem(time, userEntry);
    });

// Retrieving data
    $("#9am .description").val(localStorage.getItem("9am"));


});






 


// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// * Persist events between refreshes of a page


// Resources used:
// https://www.w3schools.com/js/js_json_stringify.asp
// https://api.jquery.com/siblings/
// https://api.jquery.com/data/#data1