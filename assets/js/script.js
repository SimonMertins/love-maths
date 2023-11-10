// wait for DOM to finish loading before running the game.
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
    button.addEventListener("click", function (){
        if (this.getAttribute("data-type") === "submit"){
            alert("You clicked submit!");
        } else {
            let gameType = this.getAttribute("data-type");
            alert('You clicked ${gameType}');
            runGame(gameType);
        }
    })
   }

    runGame("addition");

})

/**
 * The main gamee "loop" called first when the script is loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    //creates 2 random numbers betweeen 1 and 25
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditonQuestion(num1, num2);
    } else {
        alert('Unknown game type: ${gametype}');
        throw 'unknown game type  ${gameType}. Aborting!';
    }

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditonQuestion(operand1, operand2) {
    document.getElementById('oprand1').textContent = operand1;
    document.getElementById('oprand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}