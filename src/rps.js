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
  return null;
}

function computerThrow() {
  var movesArray = ["rock", "scissors", "paper"];
  var randomNumber = Math.floor(Math.random() * 3);
  return movesArray[randomNumber]
}

function matchUp(userHand, computerHand) {
  var result = rpsThrow(userHand, computerHand)
  var messages = {
    "rock" : "Rock smashes scissors!",
    "scissors" : "Scissors cut paper!",
    "paper" : "Paper covers rock!"
  }
  countScore(result, userHand, computerHand)
  if(result === null) {
    return "You tied, try again."
  } else {
    return messages[result]
  }
}

function renderGame() {
  var $rock = $('<div>').addClass('rock').html('rock')
  var $rockImg = $('<img>').attr('src', 'lib/images/rock.jpg');
  $rockImg.appendTo($rock);
  var $scissors = $('<div>').addClass('scissors').html('scissors');
  var $scissorsImg = $('<img>').attr('src', 'lib/images/scissors.jpeg');
  $scissorsImg.appendTo($scissors);
  var $paper = $('<div>').addClass('paper').html('paper');
  var $paperImg = $('<img>').attr('src', 'lib/images/cash.jpg');
  $paperImg.appendTo($paper);
  $('.player-moves').append($rock, $scissors, $paper);
}

function renderWinner(result) {
  $('.result').html('');
  var $winnerh2 = $('<h2>').text(result);
  $winnerh2.appendTo($('.result'));
}

function countScore(result, userHand, computerHand) {
  userCount = 0;
  compCount = 0;
  if (result === userHand) {
    userCount++;
    compCount = 0;
  } else if (result = computerHand) {
    compCount++;
    userCount = 0;
  }
  endGame(userCount, compCount)
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
