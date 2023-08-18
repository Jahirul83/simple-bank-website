// step-1 adding event listener to deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {

    //step-2  getting deposit amount input 
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);



    //step-3  showing current deposit

    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4  adding number to set the deposit
    const currentDeposit = previousDepositTotal + newDepositAmount;


     // set the deposit
    depositTotalElement.innerText = currentDeposit;


    // step-5 get total balance

    const currentBalanecElement = document.getElementById('current-balance');
    const previousBalanceString = currentBalanecElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // step-6 calculate current total balance
    const currentBalanceTotal = previousBalance + newDepositAmount;


    // set the balance
    currentBalanecElement.innerText = currentBalanceTotal;

    //step-7 final step clearing deposit field
    depositField.value = '';

})