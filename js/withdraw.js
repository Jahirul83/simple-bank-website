// step - 1 adding event listener to withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //    step -2 getting withdraw amount
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);



    // getting previous withdraw
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // total withdraw

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;


    // getting total balance

    const balanceTotalElement = document.getElementById('current-balance');

    const currentBalanecString = balanceTotalElement.innerText;

    const currentBalance = parseFloat(currentBalanecString);

    if (currentBalance >= currentWithdrawTotal) {
        const newBalanceTotal = currentBalance - currentWithdrawTotal;
        balanceTotalElement.innerText = newBalanceTotal;

    }
    else {
        alert('you do not have that amount of money');
        withdrawField.value = '';
    }


    //step-7 clear input field
    withdrawField.value = '';


})