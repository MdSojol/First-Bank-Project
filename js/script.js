/* document.getElementById("button-submite").addEventListener("click", function(){
  // console.log("thanks click Submit buttons")
  const emailFild = document.getElementById('email-input');
  const emailFildValue = emailFild.value;
  console.log(emailFildValue);

  const passwordFild = document.getElementById('password-input');
  const passwordFildValue = passwordFild.value;
  console.log(passwordFildValue)

  if(emailFildValue == "rsojol8888@gmail.com" && passwordFildValue == "sojolsojol" ){
    console.log('Success full your login')
  }
  else{
    console.log('Invalites')
  }
}
)

 */


document.getElementById("button-submite").addEventListener("click", function(){
  // console.log("thanks click Submit buttons")
  const emailFild = document.getElementById('email-input');
  const emailFildValue = emailFild.value;
  console.log(emailFildValue);

  const passwordFild = document.getElementById('password-input');
  const passwordFildValue = passwordFild.value;
  console.log(passwordFildValue)

  if(emailFildValue == "rsojol8888@gmail.com" && passwordFildValue == "sojolsojol" ){
    console.log('Success full your login')
    window.location ="homepage.html";
  }
  else{
    console.log('Invalites');
    alert('Invalites password. Please Give me actuale password')
  }
}); // Add closing parenthesis here







/* const depositMoneyAddCount = document.getElementById('deposit-money-add-count');
const depositStockMoney = depositMoneyAddCount.innerText ;
const carentTotal = depositStockMoney+depositInputValue;
depositMoneyAddCount.innerText = carentTotal; */