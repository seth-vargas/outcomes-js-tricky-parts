function createAccount(pin, amount = 0) {
  function checkPinIsValid(input, existing) {
    return input === existing;
  }

  return {
    checkBalance(userPin) {
      if (checkPinIsValid(userPin, pin)) {
        return `$${amount}`;
      }
      return "Invalid PIN.";
    },

    deposit(userPin, toDepositAmount) {
      if (checkPinIsValid(userPin, pin)) {
        amount += toDepositAmount;
        return `Succesfully deposited $${toDepositAmount}. Current balance: $${amount}.`;
      }
      return "Invalid PIN.";
    },
    withdraw(userPin, toWithdrawAmount) {
      if (checkPinIsValid(userPin, pin)) {
        amount -= toWithdrawAmount;
        return amount > 0
          ? `Succesfully withdrew $${toWithdrawAmount}. Current balance: $${amount}.`
          : `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      }
      return "Invalid PIN.";
    },
    changePin(oldUserPin, newUserPin) {
      if (checkPinIsValid(oldUserPin, pin)) {
        pin = newUserPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    },
  };
}

module.exports = { createAccount };
