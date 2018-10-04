$(document).ready(function() {
  //array with object of questions
  $(".question-bucket").hide();

  var trivia = [
    {
      question: "This is question one",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "this is choice 1"
    },
    {
      question: "This is question two",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "this is choice 3"
    },
    {
      question: "This is question three",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "This is question 3"
    },
    {
      question: "This is question four",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "This is question 3"
    },
    {
      question: "This is question five",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "This is question 3"
    },
    {
      question: "This is question six",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "This is question 3"
    },
    {
      question: "This is question seven",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "This is question 3"
    },
    {
      question: "This is question eight",
      answers: [
        "this is choice 1",
        "this is choice 2",
        "this is choice 3",
        "this is choice 4"
      ],
      correct: "This is question 3"
    }
  ];
  //Start button to display first question

  function startQuiz() {
    // var x = $("#question");
    cycleQuestion();
    $(".question-bucket").show();
    $("#start-button").hide();
  }
  function cycleQuestion() {
    setTimeout(thirtySeconds, 1000 * 3);
  }

  $("#start-button").click(function() {
    console.log("hi tom");
    startQuiz();
  });

  //boolean to tell if you're on the question or not.

  //Display question 1 with four choices. Starts timer.
  //Set timer for 30 seconds.
  function thirtySeconds() {
    console.log("tom o");
  }
  //append the answers and next question to the UI
  //use for loop

  //if timer runs out, say times up and display answer. add one to unanswered total.

  //Start shorter timer whilst showing correct answer. move on to next question when shorter timer runs out.

  //if if user guesses wrong, say youre wrong and display answer. add one to incorrect total.

  //if user guesses correct answer, say youre right. add one to correct total.

  //when done with list of questions, show finished screen, total score.

  //start over button restarts game
});
