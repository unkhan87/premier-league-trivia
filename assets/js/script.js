/***
 * creating variables for the instructions box.
 */

let instructionsBox = document.getElementById("quiz-instructions");

function openInstructions(){
    instructionsBox.classList.add("open-box");
}

function closeInstructions(){
    instructionsBox.classList.remove("open-box");
}


/**declaring all the variables*/
const question = document.getElementById("league-questions");
const options = Array.from(document.getElementByClassName("option-text"));
const progressText = document.getElementById("progress-text");

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