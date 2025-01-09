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

// Call the function on page load
displayLeaderboard();
