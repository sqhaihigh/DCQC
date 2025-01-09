document.getElementById("connect-wallet").addEventListener("click", () => {
  // Simulate wallet connection
  const mockWalletAddress = "FakeWallet12345"; // Replace with wallet logic later.
  
  // Save wallet address in localStorage
  localStorage.setItem("walletAddress", mockWalletAddress);

  // Redirect to the puzzle page
  alert("Wallet connected successfully!");
  window.location.href = "puzzle.html";
});
 
