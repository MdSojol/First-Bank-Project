document.getElementById('button-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValu = withdrawInput.value;
    const withdrawInputValuToNumber =parseFloat(withdrawInputValu);

    const balance = document.getElementById('balance');
    const balanceString = balance.innerText;
    const balanceStringToNumber = parseFloat(balanceString); 

   

    if( balanceStringToNumber < withdrawInputValuToNumber ){
        alert("You don't have enough money in your account");
        return;
    }

    const balanceDecrease = balanceStringToNumber- withdrawInputValuToNumber;
    balance.innerText = balanceDecrease;

    const withdrawMain = document.getElementById('withdraw-main');
    const withdrawMainValue = withdrawMain.innerText;
    const withdrawMainString = parseFloat(withdrawMainValue);
    const totalValueWithdraw = withdrawMainString + withdrawInputValuToNumber;
    withdrawMain.innerText = totalValueWithdraw;


    withdrawInput.value = '';
    



  })
  