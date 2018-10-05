$(document).ready(function() {
  $(".question-bucket").hide();
  var gameTimer;
  var totalQuestionTime = 5;
  var questions = [];
  var questionIndex = 0;
  // var correctAnswer = questions[i].ans;

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
      correct: "blue"
    },
    {
      question: "Where is Baxter?",
      answers: ["Dysart", "Kenosha", "Chicago", "Milwaukee"],
      correct: "Milwaukee"
    },
    {
      question: "What is the tallest building in Chicago?",
      answers: ["Sears Tower", "Willis Tower", "Trump Tower", "Hancock Center"],
      correct: "Sears Tower"
    },
    {
      question: "What's the word?",
      answers: ["Dog", "The Bird", "Cat", "Dingo"],
      correct: "The Bird"
    }
  ];
  var currentQuestion = questions[questionIndex];
  // console.log(currentQuestion);
  //button starts quiz
  $("#start-button").click(function() {
    console.log("hi tom");
    startQuiz();
  });
  //startQuiz shows questions, hides start button
  //begins cycle questoin
  function startQuiz() {
    //display timer
    // $(".timer").text(totalQuestionTime);
    // console.log(totalQuestionTime);
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
    // console.log("that worked");
    gameTimer = setInterval(function() {
      // console.log("that also worked");
      totalQuestionTime--;
      $(".timer").text(totalQuestionTime);
      if (totalQuestionTime === 0) {
        endQuestion();
      }
    }, 1000);
    // setInterval(twentySeconds, 1000 * 2);
  }
  //end question should set alert, stop timers, trigger the correct answers to show
  function endQuestion() {
    //display message;
    //show answer to question
    alert("Time's up, sucka!");
    clearInterval(gameTimer);
    // showCorrect();
  }
  // function showCorrect() {
  //   $(".questions").html(correctAnswer);
  // }

  //cycles through questions
  function cycleQuestion() {
    var parentDiv = $("<div>");
    var pQuestionText = $("<p>");
    // console.log(currentQuestion);
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
  //logic to check if clicked button matches correct answer. Incomplete.Needs to also update total.
  $(document).on("click", "#question", function() {
    var clickedButton = $(this);
    // console.log(currentQuestion.correct);
    if (clickedButton.val() === currentQuestion.correct) {
      console.log(clickedButton.val());
      console.log("that is correct");
      //increase the correct count
    } else {
      console.log(clickedButton.val());
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

  //Start shorter timer whilst showing correct answer. move on to next question when shorter timer runs out.

  //when done with list of questions, show finished screen, total score.

  //start over button restarts game by showing the start button again and hiding the question bucket.
});
