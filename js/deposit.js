// adding event listener to deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){

    // getting deposit amount input 
    const depositField = document.getElementById('deposit-input');
    const depositAmount =  depositField.value;
    console.log(depositAmount);


    // showing current deposit

    const depositTotalElement = document.getElementById('total-deposit');
    const depositTotal= depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})