function userBank() { 
  let userBalance = 0;
  let continueBanking = true;
  while (continueBanking) {
    let userInput = prompt ("Enter 'q' to quit immediately, Enter 'w' to withdraw money, Enter 'd' to deposit money, Enter 'b' to view your  balance.");
    if (userInput == "w") {
      let userWithdraw = prompt ("How much would you like to withdraw?");
      userBalance = userWithdraw - userBalance;
    } else if (userInput == "d") {
  	  let userDeposit = prompt("How much would you like to deposit?");
  	  userBalance = userDeposit - userBalance;
    } else if (userInput == "b") {
      alert("Here is your current balance: " + userBalance);
    } else if (userInput == "q") {
      alert("Banking app is now closing.");
      continueBanking = false;
    }
    else {
      alert("Invalid user input. Try again.");
    }
  }
}