const createAccount = (pin, balance = 0) => {
  // create a bank account with account features

  return {
    checkBalance(thePin) {
      if (thePin === pin) {
        console.log(`The current balance in your account is $${balance}!`);
      } else {
        console.log("Invalid pin!");
      }
    },

    deposit(thePin, theDeposit) {
      if (thePin === pin) {
        balance += theDeposit;
        console.log(
          `Deposit of $${theDeposit} was successful. The current balance in your account is $${balance}!`
        );
      } else {
        console.log("Invalid pin!");
      }
    },

    withdraw(thePin, theWithdrawal) {
      if (thePin === pin) {
        if (theWithdrawal > balance) {
          console.log(
            `Withdrawal of $${theWithdrawal} exceeds your current account balance of $${balance}!`
          );
        } else {
          balance -= theWithdrawal;
          console.log(
            `Withdrawal of $${theWithdrawal} was successful. The current balance in your account is $${balance}!`
          );
        }
      } else {
        console.log("Invalid pin!");
      }
    },

    changePin(thePin, newPin) {
      if (thePin === pin) {
        pin = newPin;
        console.log(`Pin change was successful!`);
      } else {
        console.log("Invalid pin!");
      }
    },
  };
};

module.exports = createAccount;
// const account = createAccount("1234");
