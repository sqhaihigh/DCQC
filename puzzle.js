// Progress flags
function startPuzzle(puzzleId) {
  // Redirect users to the corresponding puzzle page
  window.location.href = `${puzzleId}.html`;
}

let isPuzzleCompleted = localStorage.getItem("puzzleCompleted") === "true";
let isPrizeClaimed = localStorage.getItem("prizeClaimed") === "true";

// Stage 1 Logic
function checkStage1() {
  const answer = document.getElementById("stage1-input").value.trim().toUpperCase();
  if (answer === "FUNNY ZEBRA") {
    document.getElementById("stage1-message").innerText = "Correct! Proceeding to Stage 2...";
    document.getElementById("stage1-message").classList.remove("hidden");
    document.getElementById("puzzle-section").classList.add("hidden");
    document.getElementById("stage2-section").classList.remove("hidden");
  } else {
    alert("Wrong answer! Try again.");
  }
}

// Stage 2 Logic
function checkStage2() {
  const answer = document.getElementById("stage2-input").value.trim().toLowerCase();
  if (answer === "echo") {
    document.getElementById("stage2-message").innerText = "Correct! Proceeding to Stage 3...";
    document.getElementById("stage2-message").classList.remove("hidden");
    document.getElementById("stage2-section").classList.add("hidden");
    document.getElementById("stage3-section").classList.remove("hidden");
  } else {
    alert("Wrong answer! Try again.");
  }
}

// Stage 3 Logic
function checkStage3() {
  const answer = document.getElementById("stage3-input").value.trim().toUpperCase();
  if (answer === "ALPHABETICAL") {
    document.getElementById("stage3-message").innerText = "Correct! You've completed the challenge!";
    document.getElementById("stage3-message").classList.remove("hidden");
    document.getElementById("stage3-section").classList.add("hidden");

    if (!isPrizeClaimed) {
      alert("Congratulations! You're the first winner. The prize is now claimed.");
      localStorage.setItem("prizeClaimed", "true");
      isPrizeClaimed = true;
    } else {
      alert("You've completed the challenge, but the prize has already been claimed!");
    }

    document.getElementById("success-message").classList.remove("hidden");
  } else {
    alert("Wrong answer! Try again.");
  }
}

// Redirect if puzzle already completed
if (isPuzzleCompleted) {
  document.getElementById("puzzle-section").classList.add("hidden");
  document.getElementById("stage2-section").classList.add("hidden");
  document.getElementById("stage3-section").classList.add("hidden");
  document.getElementById("success-message").classList.remove("hidden");
}
