//the div main container
const all = document.querySelector("#content");
//the div that contain 3 choice and the result container sas well
const toto = document.createElement("div");
/**-----------------------------------------------------------------------*/
//we add classe to the div that contain 3 choice and the result container sas well called toto
toto.classList.add("toto");
/**-----------------------------------------------------------------------*/

// btnRock Determine the rock
const btnRock = document.createElement("button");
btnRock.innerHTML = "<i class='fa-regular fa-hand-back-fist'> Rock</i> ";
btnRock.style.borderRadius="10px";
/**-----------------------------------------------------------------------*/

// btnScissors Determine the Scissor
const btnScissors = document.createElement("button");
btnScissors.innerHTML = "<i class='fa-regular fa-hand-scissors'> scissor</i>";
btnScissors.style.borderRadius="10px";
/**-----------------------------------------------------------------------*/

// btnPaper Determine the Paper
const btnPaper = document.createElement("button");
btnPaper.innerHTML = "<i class='fa-regular fa-hand'> Paper</i>";
btnPaper.style.borderRadius="10px";
/**-----------------------------------------------------------------------*/

// div for the score at the end of my result Player vs PC
const scoreDiv = document.createElement("div");
scoreDiv.innerHTML = "Score: 0 Player - 0 Pc";
scoreDiv.style.marginTop = "25px";
scoreDiv.style.marginLeft = "340px";
scoreDiv.style.fontSize = "26px"
scoreDiv.style.fontWeight = "500"
/* scoreDiv.style.fontFamily = 'Open Sans'; */
/**-----------------------------------------------------------------------*/

function computerPlay(){
  const options = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const computerSelection = options[randomIndex];
  return computerSelection;
}
/**-----------------------------------------------------------------------*/

// we have tow variables one for Player and one for PC they are empty for now 
//we use them later in the playRound function when we Determine the winner bay score 
let playerScore = 0;
let computerScore = 0;

// playRound function is a fucntion that will determine the winner of the game the discription will be :
/**
 first it reste the background color of the 3 btn so it will rest bay turn later 
 then it make the background color of the button that i clicked so it turn green after clicked 
 then we make a variable that will hold the PC selection then we use that variable and we use the btn i clicked to determine the winner of the game 
 then we add that result to a div of score and we add the a condition that will chick if the score rich 5 round so its close the game 
 then we Display the winner 
*/
function playRound (playerSelection, computerSelection) {
// Reset the background color of all buttons
btnRock.style.backgroundColor = "";
btnScissors.style.backgroundColor = "";
btnPaper.style.backgroundColor = "";

// player's selection turn green
playerSelection.style.backgroundColor = "rgb(4, 174, 4)";
 
// the computer selection turn pink condition
// variable computerSelectedButton that contain the the button selcetied par PC
let computerSelectedButton;

if (computerSelection === "rock") {            // here if the PC select was a rock color turn pink and the variable of the selection is equl to btnRock (rock)
  btnRock.style.backgroundColor = "pink";
  computerSelectedButton = btnRock;
} else if (computerSelection === "scissors") { // here if the PC select was a scissors color turn pink and the variable of the selection is equl to btnScissors (scissors)
  btnScissors.style.backgroundColor = "pink";
  computerSelectedButton = btnScissors;
} else {                                      // here if the PC select was a Paper color turn pink and the variable of the selection is equl to btnPaper (Paper)
  btnPaper.style.backgroundColor = "pink";
  computerSelectedButton = btnPaper;
}

  // Determine the winner
  if (playerSelection === btnRock && computerSelection === "scissors" ||
      playerSelection === btnScissors && computerSelection === "paper" ||
      playerSelection === btnPaper && computerSelection === "rock") {
    playerScore++;
    scoreDiv.innerHTML = "Score: " + playerScore + " Player - " + computerScore+ " Pc";
  } else if (playerSelection === computerSelectedButton) {
    playerSelection.style.backgroundColor = "yellow";
    computerSelectedButton.style.backgroundColor = "yellow";
    // Tie
  } else {
    computerScore++;
    scoreDiv.innerHTML = "Score: " + playerScore + " Player - " + computerScore+ " Pc";
  }
  // Check if the game is over
  if (playerScore === 5 || computerScore === 5) {
    // Disable all buttons
    btnRock.disabled = true;
    btnScissors.disabled = true;
    btnPaper.disabled = true;

    // Display the winner
    let winner;
    if (playerScore > computerScore) {
      winner = "Player";
    } else {
      winner = "Computer";
    }
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = "~~  Game over! " + winner + " wins! ~~";
    scoreDiv.insertAdjacentElement("afterend", resultDiv);
    resultDiv.style.marginLeft = "300px";
    resultDiv.style.marginTop = "10px";
    resultDiv.style.fontSize = "22px";
    resultDiv.style.fontWeight = "700"
   resultDiv.style.fontFamily = 'Open Sans';
   /* alert("Game over! " + winner + " wins!") */
    let Button = document.createElement("button");
    Button.innerHTML = "<i class='fa-solid fa-rotate'></i>Rejouer ";
    resultDiv.appendChild(Button);
    Button.classList.add("reloadButton");
    // add click event listener to the button
    Button.addEventListener("click", function () {
    // reload the page
    location.reload();
    });
  }
}
// each button use palyRound funtion to determine the winner cus i have to click on one of them to start a round of the game 
// and also we use computerPlay to determine the Pc selection each round
/**-----------------------------------------------------------------------*/
btnRock.addEventListener("click", function () {
  const computerSelection = computerPlay();
  playRound(btnRock, computerSelection);
 
});

btnScissors.addEventListener("click", function () {
  const computerSelection = computerPlay();
  playRound(btnScissors, computerSelection);
  setTimeout(() => {}, 100)
});

btnPaper.addEventListener("click", function () {
  const computerSelection = computerPlay();
  playRound(btnPaper, computerSelection);
  setTimeout(() => {}, 100)
});
/**-----------------------------------------------------------------------*/

// we determine the chilrend of 3 btn in the div i called toto ant we add the div toto and the div score div to the container all
toto.appendChild(btnRock);
toto.appendChild(btnScissors);
toto.appendChild(btnPaper);
all.appendChild(toto);
all.appendChild(scoreDiv);
/**-----------------------------------------------------------------------*/
