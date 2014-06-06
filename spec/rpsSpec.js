describe("Rock, Paper, Scissors", function() {
  it("rock crushes scissors", function () {
    var winner = rpsThrow("rock", "scissors");
    expect(winner).toBe("rock");
  });

  it("scissors cut paper", function () {
    var winner = rpsThrow("scissors", "paper");
    expect(winner).toBe("scissors");
  });

  it("paper covers rock", function () {
    var winner = rpsThrow("paper", "rock");
    expect(winner).toBe("paper");
  });

  it("is a draw", function () {
    var winner = rpsThrow("paper", "paper");
    expect(winner).toBe("Try Again");
  });

});
