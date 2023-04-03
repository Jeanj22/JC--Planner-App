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
        
        var time = $(this).parent().attr("id");
        var userEntry = $(this).siblings(".description").val();
     

    //key value pair    
        localStorage.setItem(time, userEntry);
    });

// Retrieving data
    $( "#9am .description").val(localStorage.getItem ("9am"));    
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#13pm .description").val(localStorage.getItem("13pm"));
    $("#14pm .description").val(localStorage.getItem("14pm"));
    $("#15pm .description").val(localStorage.getItem("15pm"));
    $("#16pm .description").val(localStorage.getItem("16pm"));
    $("#17pm .description").val(localStorage.getItem("17pm"));
    $("#18pm .description").val(localStorage.getItem("18pm"));
    $("#19pm .description").val(localStorage.getItem("19pm"));
    $("#20pm .description").val(localStorage.getItem("20pm"));
    $("#21pm .description").val(localStorage.getItem("21pm"));
});










// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.













// var submit = document.querySelector("#submit");
// var submission = document.querySelector("#response");

//*Prevent default action
// function showResponse(event) {
//    
//     event.preventDefault();
//     console.log(event);    
//   }
    

//*Add listener to submit element
//   submit.addEventListener("click");





// Resources used:
// https://api.jquery.com/parent/
// https://api.jquery.com/siblings/
// https://api.jquery.com/data/#data1