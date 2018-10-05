$(document).ready(function() {
  $(".question-bucket").hide();
  var gameTimer;
  var totalGameTime = 30;
  var questions = [];
  var questionIndex = 0;

  //  Variable that will hold our interval ID when we execute the "run" function
  // var intervalId;

  // function run() {
  //   clearInterval(intervalId);
  //   intervalId = setInterval(decrement, 1000);
  // }

  //array with object of questions

  questions = [
    {
      question: "What is blue?",
      answers: ["green", "blue", "yellow", "red"],
      correct: 1
    },
    {
      question: "Where is Baxter?",
      answers: ["Dysart", "Kenosha", "Chicago", "Milwaukee"],
      correct: 3
    },
    {
      question: "What is the tallest building in Chicago?",
      answers: ["Sears Tower", "Willis Tower", "Trump Tower", "Hancock Center"],
      correct: 0
    },
    {
      question: "What's the word?",
      answers: ["Dog", "The Bird", "Cat", "Dingo"],
      correct: 1
    }
  ];
  var currentQuestion = questions[questionIndex];
  console.log(currentQuestion);
  //button starts quiz
  $("#start-button").click(function() {
    console.log("hi tom");
    startQuiz();
  });
  //startQuiz shows questions, hides start button
  //begins cycle questoin
  function startQuiz() {
    //display timer
    // $(".timer").text(totalGameTime);
    // console.log(totalGameTime);
    //start a timer
    startTimer();
    //display a question
    //set the scrore
    cycleQuestion();
    // run();
    $(".question-bucket").show();
    $("#start-button").hide();
    $("#instructions").hide();
  }
  //timer
  function startTimer() {
    console.log("that worked");
    gameTimer = setInterval(function() {
      console.log("that also worked");
      totalGameTime--;
      $(".timer").text(totalGameTime);
      if (totalGameTime === 0) {
        setInterval(gameTimer);
        endGame();
      }
    }, 1000);
    // setTimeout(twentySeconds, 1000 * 2);
  }
  function endGame() {
    //display message;
    //reset the game and anything else
  }
  function cycleQuestion() {
    var parentDiv = $("<div>");
    var pQuestionText = $("<p>");
    console.log(currentQuestion);
    pQuestionText.text(currentQuestion.question);
    parentDiv.append(pQuestionText);
    //dynamically display question options
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      var optionButton = $("<button>");
      optionButton.addClass("btn btn-info");
      optionButton.text(currentQuestion.answers[i]);
      optionButton.attr("value", i);
      parentDiv.append(optionButton);
    }
    $(".questions").append(parentDiv);
  }

  $(document).on("click", ".answer", function() {
    var clickedButton = $(this);
    if (clickedButton.val() === currentQuestion.correct) {
      console.log("that is correct");
      //increase the correct count
    } else {
      console.log("this is wrong");
      //increase the wrong count
    }
  });

  // // function twentySeconds() {
  // //   //should display answers if time runs out
  //   console.log("tom o");
  // }
  // //when timer runs out, get new question by calling this function:
  // function getNewQuestion() {
  //   for (let i = 0; i < trivia.length; i++) {
  //     var question = trivia[i].question;
  //     console.log(question);
  //     return question;
  //   }
  // }
  //   console.log(getNewQuestion);
  //Start button to display first question

  //boolean to tell if you're on the question or not.

  //Display question 1 with four choices. Starts timer.
  //Set timer for 30 seconds.
  //append the answers and next question to the UI
  //use for loop

  //if timer runs out, say times up and display answer. add one to unanswered total.

  //Start shorter timer whilst showing correct answer. move on to next question when shorter timer runs out.

  //if if user guesses wrong, say youre wrong and display answer. add one to incorrect total.

  //if user guesses correct answer, say youre right. add one to correct total.

  //when done with list of questions, show finished screen, total score.

  //start over button restarts game
});
