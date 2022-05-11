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