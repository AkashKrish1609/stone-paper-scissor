/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore = {playerChoice: 0 , computerChoice: 0 };

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
  
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
  }else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  }else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }else{
    score = -1
  };

 return score;
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let result = document.querySelector("#result");
  let handsDiv = document.querySelector("#hands");
  let finalScore = document.querySelector("#player-score");
  if (score === 0 ) {
    result.innerHTML = "Draw";
    
   
  }else if(score === -1 ){
    result.innerHTML = "You Lose";
    
  }else{
    result.innerHTML = "You win";
    
    
  }
  handsDiv.innerHTML = "🧒"+playerChoice + " vs " + "🤖"+computerChoice;
  
  if(totalScore["playerChoice"] <= 0 ){
    totalScore["playerChoice"] = 0
  }else if (totalScore["computerChoice"] <= 0 ) {
    totalScore["computerChoice"] = 0
  }
  finalScore.innerHTML = totalScore["playerChoice"] + " : " + totalScore["computerChoice"];
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice});
  let computerChoice = getComputerChoice();
  console.log({computerChoice});
  let finalScore = getResult(playerChoice, computerChoice);
  totalScore["playerChoice"] += finalScore;
  totalScore["computerChoice"] += (-finalScore);
  showResult(finalScore, playerChoice,computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
let rpsButtons = document.querySelectorAll(".rpsButton");
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  rpsButtons.forEach(function (rpsButton) {
    rpsButton.addEventListener('click',function(){
        onClickRPS(rpsButton.value);
    })
  });
 
 let endButton= document.querySelector("#endGameButton")
 endButton.addEventListener("click", endGame)
  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScore["playerChoice"] = 0;
  totalScore["computerChoice"] = 0;
  let result = document.querySelector("#result");
  let handsDiv = document.querySelector("#hands");
  let finalScore = document.querySelector("#player-score");
  result.innerHTML = "";
  handsDiv.innerHTML = "";
  finalScore.innerHTML = "";
}

playGame()