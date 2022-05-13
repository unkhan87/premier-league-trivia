
const question = document.getElementById("league-questions");
const options = Array.from(document.getElementsByClassName("option-text"));
const nextQuestion = document.getElementById(next-btn);
const progressText = document.getElementById("progress-text");

/**declaring all the variables*/
let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
       question: "What team won the first ever Premier League season?",
       option1: "Manchester United",
       option2: "Aston Villa",
       option3: "Liverpool",
       option4: "Queens Park Ranger",
       answer: 1
    },
    {
       question: "Name the Champions of the 2020/21 season?",
       option1: "Manchester United",
       option2: "Chelsea",
       option3: "Manchester City",
       option4: "Manchester United",
       answer: 3
    },
    {
        question: "Which team went an entire season without losing a game in 2003/04?",
        option1: "Manchester United",
        option2: "Arsenal",
        option3: "Liverpool",
        option4: "Chelsea",
        answer: 2
     },
     {
        question: "Which team won their first ever Premier League title in 2016?",
        option1: "Tottenham Hotspur",
        option2: "Leicester City",
        option3: "Everton",
        option4: "Southampton F.C",
        answer: 2
     },
     {
        question: "What team are known as ‘The Magpies?’",
        option1: "Norwich City",
        option2: "Brighton & Hove Albion F.C",
        option3: "Watford F.C",
        option4: "Newcastle United",
        answer: 4
     },
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
};

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayNextQuestion() {

}

function questionTracker() {

}

function progressBox() {

}