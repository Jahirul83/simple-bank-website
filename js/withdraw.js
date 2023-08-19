// step - 1 adding event listener to withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {
    //    step -2 getting withdraw amount
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

     //step-7 clear input field
     withdrawField.value = '';

    if(isNaN(newWithdrawAmount))
    {
        alert('Please provide number');
        
        return;
    }



    // getting previous withdraw
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


   


    // getting total balance

    const balanceTotalElement = document.getElementById('current-balance');
    const currentBalanecString = balanceTotalElement.innerText;
    const currentBalance = parseFloat(currentBalanecString);




   

    if (newWithdrawAmount > currentBalance) {
        alert('you do not have that amount of money');
        return;

    }
     // total withdraw

     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;

    // updating total
    const newBalanceTotal = currentBalance - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

 


})