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
    // userCount++;
    // compCount = 0;
    return "Rock smashes scissors!";
  } else if (result === userHand && result === "scissors") {
    // userCount++;
    // compCount = 0;
    return "Scissors cut paper!";
  } else if (result === userHand && result === "paper") {
    // userCount++;
    // compCount = 0;
    return "Paper covers rock!";
  } else if (result === computerHand && result === "rock") {
    // compCount++;
    // userCount = 0;
    return "Rock smashes scissors!";
  } else if (result === computerHand && result === "scissors") {
    // compCount++;
    // userCount = 0;
    return "Scissors cut paper!";
  } else if (result === computerHand && result === "paper") {
    // compCount++;
    // userCount = 0;
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

function renderWinner(result) {
  $('.result').html('');
  var $winnerh2 = $('<h2>').text(result);
  $winnerh2.appendTo($('.result'));
}

$(function (){
  $('.new-game').on('click', function () {
    $('.player-moves').html('');
    $('.result').html('');
    renderGame();
  })

  $('.player-moves').on('click', function(e) {
    var userInput = $(e.target).html();
    var result = matchUp(userInput, computerThrow())
    renderWinner(result);
    console.log(userCount)
  })
})
