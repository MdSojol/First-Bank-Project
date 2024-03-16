document.getElementById('deposit-submit').addEventListener('click', function(){
    const depositInputJs = document.getElementById('deposit-input');
    const depositInputValueStringToNumber = depositInputJs.value;
    const depositInputValue = parseFloat(depositInputValueStringToNumber);
    // console.log(typeof depositInputValue);
    const depositMoneyAddCount = document.getElementById('deposit-money-add-count');
    const depositStockMoneyString = depositMoneyAddCount.innerText ;
    const depositStockMoney = parseFloat(depositStockMoneyString)
    // console.log(typeof depositStockMoney)
    depositMoneyAddCount.innerText = depositInputValue;
    const currentTotalDeposite =  depositStockMoney + depositInputValue;
    depositMoneyAddCount.innerText = currentTotalDeposite;
  
  
    const balance = document.getElementById('balance');
    const balanceString = balance.innerText;
    const balanceStringToNumber = parseFloat(balanceString);
    // console.log(typeof balanceStringToNumber)
    const depositMoneyConcateBalance = balanceStringToNumber + depositInputValue;
    balance.innerText= depositMoneyConcateBalance;
  
  
    depositInputJs.value = '';
  })


