describe("Rock, Paper, Scissors", function() {
  it("works", function() {
    expect(true).toBe(true);
  });

  it("rock crushes scissors", function () {
    function winner(moveA, moveB) {
      moveA = "rock";
      moveB = "scissors";
      expect(true).toBe(true);
    }
  })
});


function winner(moveA, moveB) {
  if (moveA === "rock" && moveB === "scissors") {
    return true
  }
}
