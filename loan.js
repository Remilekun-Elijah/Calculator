let amount = document.querySelector("#amount"),
     interest = document.querySelector("#interest"),
    year = document.querySelector("#year"),
      totalAmount = document.querySelector("#total-amount"),
      totalInterest = document.querySelector("#total-interest"),
      totalGain = document.querySelector("#total-gain"),
      form = document.querySelector("#form");
      form.addEventListener("submit", calculate);
      let btn = document.querySelector('#btn');
      //btn..addEventListener("submit", calculate);
      
      amount.disabled = true;
      btn.style.background = '#333';
      
      totalInterest.style.borderColor = 'red';
 let calculate = (e) => {
 e.preventDefault();
 
totalGain.value = interest.value;

}