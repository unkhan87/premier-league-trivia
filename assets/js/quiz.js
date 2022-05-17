const question = document.getElementById("league-questions");
/*To convert the options to array*/
const options = Array.from(document.getElementsByClassName("option-text"));
const progressCounterText = document.getElementById("progress-text");
const scoreText = document.getElementById("user-score");

/**declaring all the variables*/
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let remainingQuestions = [];
let currentIndex = 0;

let questions = [{
      question: "What team won the first ever Premier League season?",
      option1: "Manchester United",
      option2: "Aston Villa",
      option3: "Liverpool",
      option4: "Queens Park Ranger",
      answer: 1,
   },
   {
      question: "Name the Champions of the 2020/21 season?",
      option1: "Manchester United",
      option2: "Chelsea",
      option3: "Manchester City",
      option4: "Manchester United",
      answer: 3,
   },
   {
      question: "Which team went an entire season without losing a game in 2003/04?",
      option1: "Manchester United",
      option2: "Arsenal",
      option3: "Liverpool",
      option4: "Chelsea",
      answer: 2,
   },
   {
      question: "Which team won their first ever Premier League title in 2016?",
      option1: "Tottenham Hotspur",
      option2: "Leicester City",
      option3: "Everton",
      option4: "Southampton F.C",
      answer: 2,
   },
   {
      question: "What team are known as ‘The Magpies?’",
      option1: "Norwich City",
      option2: "Brighton & Hove Albion F.C",
      option3: "Watford F.C",
      option4: "Newcastle United",
      answer: 4,
   },
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

function runGame() {
   questionCounter = 0;
   score = 0;
   remainingQuestions = [...questions];
   displayNextQuestion();
   nextButton.classList.add("hide");
};

function displayNextQuestion() {
   if (remainingQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      //go to the end page
      return window.location.assign('/end.html');
  }

   questionCounter++;
   questions = questions.sort(() => Math.random() - 0.5);
   question.innerHTML = questions[currentIndex].question;
   currentQuestion = questions[currentIndex];

   /*display options*/
   options.forEach((option) => {
      const number = option.dataset['number'];
      option.innerText = currentQuestion['option' + number];
   });

   remainingQuestions.splice(questions, 1);

   acceptingAnswers = true;
};

/*choices the user have clicked*/
options.forEach((option) => {
   option.addEventListener("click", e=> {
      if (!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedOption = e.target;
      const selectedAnswer = selectedOption.dataset["number"];

      /*check answers if they are correct or incorrect*/

      const checkAnswer = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

      if (checkAnswer === "correct") {
         incrementScore(CORRECT_BONUS);
      }
      
      selectedOption.classList.add(checkAnswer);
      
      setTimeout( () => {
         selectedOption.classList.remove(checkAnswer);
         displayNextQuestion();
      }, 1000);
  });
});

incrementScore = num => {
   score += num;
   scoreText.innerText = score;
};
runGame()


function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}



function questionTracker() {

}

function progressBox() {

}