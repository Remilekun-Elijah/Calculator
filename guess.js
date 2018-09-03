let form = document.querySelector('#form'),
    btn = document.querySelector("#input-btn"),
    input = document.querySelector("#input"),
    UImin = document.querySelector("#min"),
    UImax = document.querySelector("#max"),
    minus = document.querySelector("#minus"),
    plus = document.querySelector("#plus"),
    span = document.querySelector("#span"),
    money = document.querySelector("#money"),
    UItrial = document.querySelector("#trial");
    
    let min = parseInt(UImin.innerText),
        max = parseInt(UImax.innerText),
        trial = parseInt(UItrial.innerText),
        amt = parseInt(money.innerText);
        
        let randomAns = function(min, max){
        return Math.floor(( Math.random() * (max-min+1))+min)
        }
        let answer;
        
    const runGame = e => {
    answer = randomAns(min,max);
    if(input.value == answer){
    input.style.border = '1px solid green';
    span.style.color = 'green';
    span.innerText = `${answer} is correct!, you win $10 `;
    
    }else{
    
    input.style.border = '1px solid red';
    span.style.color = 'red';
    span.innerText = ` ${input.value} is not the answer, the answer is ${answer}, try again`;
   
    }
    e.preventDefault();
    }
    
    form.addEventListener("submit", runGame);