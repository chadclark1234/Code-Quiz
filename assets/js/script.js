const startGame = document.getElementById("start");
const resetGame = document.getElementById("reset");
const option0 = document.getElementById("btn0");
const option1 = document.getElementById("btn1");
const option2 = document.getElementById("btn2");
const option3 = document.getElementById("btn3");
const question = document.getElementById("question");
const answerBtns = document.querySelectorAll(".buttons button");
let timer = document.querySelector(".timer");
let questionNum = 0;
let playerScore = 1;
let secondsLeft = 60;

//QUESTIONS AND ANSWERS
var qlist = [
  {
    question: `"That Veronica Vaughn is one fine piece of ace."`,
    options: ["Dumb & Dumber", "Wayne's World", "Billy Madison", "Black Sheep"],
    correctAnswer: "2",
  },
  {
    question: `"They're "in" the computer?`,
    options: ["Water Boy", "Napoleon Dynamite", "Super Troopers", "Zoolander"],
    correctAnswer: "3",
  },
  {
    question: `"I can't find a job anywhere, unless you want to work 40 hours a week."`,
    options: ["Dumb & Dumber", "Longest Yard", "Zoolander", "Old School"],
    correctAnswer: "0",
  },
  {
    question: `"Now that's what I call some high quality H20"`,
    options: ["Water Boy", "Billy Madison", "Grown Ups", "Coneheads"],
    correctAnswer: "0",
  },
  {
    question: `"Brothers don't shake hands. Brothers gotta hug"`,
    options: ["Daddy's Home", "Super Troopers", "Old School", "Tommy Boy"],
    correctAnswer: "3",
  },
  {
    question: `"Peeing your pants is the coolest!"`,
    options: ["Elf", "Billy Madison", "Dodge Ball", "Grown Ups"],
    correctAnswer: "1",
  },
  {
    question: `"You're going to die clown"`,
    options: ["Cable Guy", "Anchorman", "Happy Gilmore", "Tommy Boy"],
    correctAnswer: "2",
  },
  {
    question: `"Bring your green hat, we're going streaking"`,
    options: ["Old School", "Elf", "Zoolander", "Dodge Ball"],
    correctAnswer: "0",
  },
  {
    question: `"Are you too good for your home ball?"`,
    options: [
      "Happy Gilmore",
      "Little Nicky",
      "Napoleon Dynamite",
      "Billy Madison",
    ],
    correctAnswer: "0",
  },
];

//START GAME
startGame.addEventListener("click", function () {
  alert("Match the correct comedy movie with the one-liner");
  generateQuestion();
  setTime();
});

//RESET GAME
resetGame.addEventListener("click", function () {
  window.location.reload();
});

//GENERATE QUESTION FROM QLIST
function generateQuestion() {
  question.textContent = qlist[questionNum].question;
  for (i = 0; i < answerBtns.length; i++) {
    answerBtns[i].textContent = qlist[questionNum].options[i];
  }
}

//WATCHES FOR CLICK AND COMPARES ANSWER-CORRECT/INCORRECT
for (i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", function (event) {
    var guess = event.target.id.split("btn")[1];
    //COMPARE ANSWER CLICK TO CORRECT ANSWER
    if (guess === qlist[questionNum].correctAnswer) {
      alert(
        `That is CORRECT! You have ${playerScore} out of ${
          questionNum + 1
        } points!`
      );
      playerScore++;
    } else {
      alert("That is INCORRECT");
    }
    //ALLOWS A PAUSE AFTER SELECTION BEFORE LOADING NEW QUESTION
    setTimeout(function () {
      questionNum++;
      if (questionNum < qlist.length) {
        generateQuestion();
      } else {
        alert("game over");
      }
    }, 1000);
  });
}

//COUNTDOWN TIMER
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
    console.log(secondsLeft);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("GAME OVER!!");
    }
  }, 1000);
}
