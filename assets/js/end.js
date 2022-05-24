const userScore = parseInt(localStorage.getItem('userScore'));

const userFinalScore = document.getElementById("final-score");

const endText = document.getElementById("endMainText");

function endGameText() {
    if (userScore <= 20) {
        endText.innerText = "Have Another Go!";
    } else {
        endText.innerText = "You are a legend!";
    }
}


userFinalScore.innerText = userScore;
endGameText();
