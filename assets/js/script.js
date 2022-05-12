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
const options = document.getElementById(document.getElementByClassName("option"));
const progressText = document.getElementById("progress-text");