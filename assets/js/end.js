const userScore = parseInt(localStorage.getItem('userScore'));

const userFinalScore = document.getElementById("final-score");

userFinalScore.innerText = userScore;