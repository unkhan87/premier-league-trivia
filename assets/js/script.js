/***
 * creating variables for the instructions box.
 */

let instructionsBox = document.getElementById("quiz-instructions");

function openInstructions(){
    document.getElementById('start-button').style.display = 'none';
    instructionsBox.classList.add("open-box");
}

function closeInstructions(){
    document.getElementById('start-button').style.display = 'block';
    instructionsBox.classList.remove("open-box");
}



