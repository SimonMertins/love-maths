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
        }
    })
    }
})

/**
 * The main gamee "loop" called first when the script is loaded
 * and after the user's answer has been processed
 */
function runGame() {

    //creates 2 random numbers betweeen 1 and 25
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditonQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}