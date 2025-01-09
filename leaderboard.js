// Mock data for leaderboard
const leaderboardData = [
  { rank: 1, wallet: "abc123xyz", time: 45 },
  { rank: 2, wallet: "def456uvw", time: 50 },
  { rank: 3, wallet: "ghi789rst", time: 55 },
];

// Function to display leaderboard
function displayLeaderboard() {
  const leaderboardBody = document.getElementById("leaderboard-body");
  leaderboardBody.innerHTML = ""; // Clear existing content

  leaderboardData.forEach((player) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${player.rank}</td>
      <td>${player.wallet}</td>
      <td>${player.time}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}

/*
// Call the function on page load
displayLeaderboard();

// Fetch wallet address (mock example for now)
function getWalletAddress() {
  return localStorage.getItem("walletAddress") || "unknown_wallet";
}

// Fetch stored leaderboard from localStorage
function getStoredLeaderboard() {
  const data = localStorage.getItem("leaderboard");
  return data ? JSON.parse(data) : [];
}

// Save updated leaderboard to localStorage
function saveLeaderboard(data) {
  localStorage.setItem("leaderboard", JSON.stringify(data));
}

// Add a new player to the leaderboard
function addPlayerToLeaderboard(wallet, time) {
  let leaderboard = getStoredLeaderboard();

  // Add the new player
  leaderboard.push({ wallet, time });

  // Sort by time (ascending order)
  leaderboard.sort((a, b) => a.time - b.time);

  // Keep only the top 10 players
  leaderboard = leaderboard.slice(0, 10);

  // Save updated leaderboard
  saveLeaderboard(leaderboard);

  // Update leaderboard display
  displayLeaderboard();
}

// Display leaderboard dynamically
function displayLeaderboard() {
  const leaderboard = getStoredLeaderboard();
  const leaderboardBody = document.getElementById("leaderboard-body");

  leaderboardBody.innerHTML = ""; // Clear existing rows

  leaderboard.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.wallet}</td>
      <td>${player.time}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}

// Mock function to simulate puzzle completion
function completePuzzle(time) {
  const walletAddress = getWalletAddress();
  addPlayerToLeaderboard(walletAddress, time);
}

// Initialize leaderboard on page load
displayLeaderboard();
*/
