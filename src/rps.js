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
  var messages = {
    "rock" : "Rock smashes scissors!",
    "scissors" : "Scissors cut paper!",
    "paper" : "Paper covers rock!"
  }
  if (result === "rock" || result === userHand) {
    userCount += 1;
    compCount = 0;
    return messages['rock'];
  } else if (result === "scissors" || result === userHand) {
    userCount += 1;
    compCount = 0;
    return messages['scissors'];
  } else if (result === "paper" || result === userHand) {
    userCount += 1;
    compCount = 0;
    return messages["paper"];
  } else if (result === "rock" || result === computerHand) {
    userCount = 0;
    compCount += 1;
    return messages['rock'];
  } else if (result === "scissors" || result === computerHand) {
    userCount = 0;
    compCount += 1;
    return messages['scissors'];
  } else if (result === "paper" || result === computerHand) {
    userCount = 0;
    compCount += 1;
    return messages["paper"];
  }
  else {
    return "You tied, try again";
  }
  endGame(userCount, compCount)
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

function endGame(userCount, compCount) {
  if (userCount === 3) {
    $('.player-moves').html('');
    $('.result').html('');
    var $gameOver = $('<h1>').html("Winner! Start a new game...")
    $('.player-moves').append($gameOver)
  } else if (compCount === 3) {
    $('.player-moves').html('');
    $('.result').html('');
    var $gameOver = $('<h1>').html("Please try again.")
    $('.player-moves').append($gameOver)
  }
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
  })
})
