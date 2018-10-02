$(document).ready(function() {
//object with arrays of questions
var trivia = {
questionOne: ["This is question one", "this is choice 1", "this is choice 2", "this is choice 3",  "this is choice 4"],
questionTwo: ["This is question one", "this is choice 1", "this is choice 2", "this is choice 3",  "this is choice 4"],
questionThree: ["This is question one", "this is choice 1", "this is choice 2", "this is choice 3",  "this is choice 4"],
questionFour: ["This is question one", "this is choice 1", "this is choice 2", "this is choice 3",  "this is choice 4"],
}
//Start button to display first question

// function startQuiz() {
//     var x = $(".question-bucket");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
$("#start-button").click(startQuiz(){
    console.log("hi tom");
    $(".question-bucket").show();
    $("#start-button").hide();
};
// $("#hide").click(function(){
//     $("p").hide();
// });

//Display question 1 with four choices. Starts timer. 
//Set timer for 20 seconds. 

//if timer runs out, say time's up and display answer. add one to unanswered total. 

//Start shorter timer whilst showing correct answer. move on to next question when shorter timer runs out. 

//if if user guesses wrong, say you're wrong and display answer. add one to incorrect total.

//if user guesses correct answer, say you're right. add one to correct total. 

//when done with list of questions, show finished screen, total score. 

//start over button restarts game


}