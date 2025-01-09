const MINIMUM_QUEST_COIN = 50; // Replace with your token amount
const TOKEN_MINT_ADDRESS = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"; // Replace with your token mint address

async function connectWallet() {
  if (window.solana && window.solana.isPhantom) {
    try {
      const response = await window.solana.connect();
      const walletAddress = response.publicKey.toString();
      localStorage.setItem("walletAddress", walletAddress);
      document.getElementById("login-section").style.display = "none";
      checkTokenBalance(walletAddress);
    } catch (err) {
      alert("Wallet connection failed: " + err.message);
    }
  } else {
    alert("Please install a Phantom Wallet.");
  }
}

async function checkTokenBalance(walletAddress) {
  try {
    const connection = new solanaWeb3.Connection("https://api.mainnet-beta.solana.com");
    const publicKey = new solanaWeb3.PublicKey(walletAddress);
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: new solanaWeb3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
    });

    let balance = 0;
    tokenAccounts.value.forEach((account) => {
      const tokenInfo = account.account.data.parsed.info;
      if (tokenInfo.mint === TOKEN_MINT_ADDRESS) {
        balance = tokenInfo.tokenAmount.uiAmount;
      }
    });

    if (balance >= MINIMUM_QUEST_COIN) {
      document.getElementById("puzzle-section").style.display = "block";
      document.getElementById("stage-1").disabled = false;
    } else {
      document.getElementById("error-message").innerText = "You need at least 50 Quest Coins to access the puzzles.";
      document.getElementById("purchase-token").style.display = "block";
    }
  } catch (error) {
    console.error("Error fetching token balance:", error);
    alert("Failed to fetch token balance.");
  }
}

document.getElementById("connect-wallet").addEventListener("click", connectWallet);

document.getElementById("purchase-token").addEventListener("click", () => {
  window.open("https://solana-token-purchase-link.com"); // Replace with your token purchase link
});
 
