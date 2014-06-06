function rpsThrow(playerOne, playerTwo) {
  var winningThrow = {
    "rock" : "scissors",
    "scissors" : "paper",
    "paper" : "rock"
  }
  if(winningThrow[playerOne] == playerTwo) {
    return playerOne
  }
  if(winningThrow[playerTwo] == playerOne) {
    return playerTwo
  }
  return "Try Again"
}

function computerThrow() {
  var movesArray = ["rock", "scissors", "paper"];
  var randomNumber = Math.floor(Math.random() * 3);
  return movesArray[randomNumber]
}

function matchUp(userHand, computerHand) {
  userCount = 0;
  compCount = 0;

  var result = rpsThrow(userHand, computerHand)
  if (result === userHand && result === "rock") {
    userCount += 1;
    compCount = 0;
    return "Rock smashes scissors!";
  } else if (result === userHand && result === "scissors") {
    userCount += 1;
    compCount = 0;
    return "Scissors cut paper!";
  } else if (result === userHand && result === "paper") {
    userCount += 1;
    compCount = 0;
    return "Paper covers rock!";
  } else if (result === computerHand && result === "rock") {
    compCount += 1;
    userCount = 0;
    return "Rock smashes scissors!";
  } else if (result === computerHand && result === "scissors") {
    compCount += 1;
    userCount = 0;
    return "Scissors cut paper!";
  } else if (result === computerHand && result === "paper") {
    compCount += 1;
    userCount = 0;
    return "Paper covers rock!";
  } else if (userHand === computerHand) {
    return "You tied, try again";
  }
}

function renderGame() {
  var $rock = $('<div>').addClass('rock').html('rock');
  var $scissors = $('<div>').addClass('scissors').html('scissors');
  var $paper = $('<div>').addClass('paper').html('paper');
  $('.player-moves').append($rock, $scissors, $paper);
}

$(function (){
  $('.new-game').on('click', function () {
    renderGame();
  })

  $('.player-moves').on('click', function(e) {
    var userInput = $(e.target).html();
    var result = matchUp(userInput, computerThrow())
    console.log(result)
  })
})
