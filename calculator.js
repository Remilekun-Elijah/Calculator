let powerBtn = document.querySelector(".power"),
    userBtn = document.querySelector("#user"),
    turnOn = document.querySelector("#On"),
    screen = document.querySelector("#output"),
    screenCover = document.querySelector("#output-wrapper"),
    num = document.querySelectorAll("#num"),
    msg = document.querySelector("#msg");
//screen.className = "OnCalc";
const Calculator = function(){


// main power supply
this.power(powerBtn, userBtn);

}

// power prototype
Calculator.prototype.power = function (pow,light){
  pow.addEventListener("click", () => {
  
  if(light.innerText.includes("Off")){
    screen.value = "Turning On Calculator....";
    screen.style.fontFamily = "san-serif";
    
      if(light.innerText.includes("Off")){
        setTimeout(calc.on, 1000)
       };
       
    }else{
      screen.value = "Turning Off Calculator...";
      msg.textContent = '';
      screen.style.fontFamily = "san-serif";
      
      if(light.innerText.includes("On")){
       setTimeout(calc.off, 2000);
       }else{ console.error(404)
         }
     
     }
  });
}

// Turn on calculator
Calculator.prototype.on = function(){
  userBtn.innerHTML = "On <span class='On' id='On'></span>";
  screen.value = "";
  
  calc.appendToScreen();
  calc.equalTo();
  calc.delete();
}
// Turn off calculator
Calculator.prototype.off = function (){
  userBtn.innerHTML = "Off <span class='Off' id='On'></span>";
  screen.value = "";
  msg.textContent = '';
  document.location.reload();
}

//showing clicked numbers on the screen
Calculator.prototype.appendToScreen = function(){
  
  num.forEach( numb => {
     let showInScreen = e => {
          output.value += e.target.textContent;
    }  
   numb.addEventListener("click", showInScreen);
   numb.addEventListener("click", ()=>{
       let screenVal = screen.value;
      if(screenVal.includes("+")||screenVal.includes("*")||screenVal.includes("-")||screenVal.includes("/")){
       msg.innerText = eval(screenVal);
       }else{ msg.innerText = ''}
     });
  }); 
}

// equal to function
Calculator.prototype.equalTo = function(){
  document.querySelector(".equal").addEventListener("click", function(){
      let screenVal = screen.value;
      if(screenVal.includes("+")||screenVal.includes("*")||screenVal.includes("-")||screenVal.includes("/")){
        screen.value = eval(screenVal);
        screen.style.fontSize = "30px";
        msg.innerText = "";
      }
  });
}

// delete screen numbers
Calculator.prototype.delete = function(){
 
   document.querySelector(".delete").addEventListener("click", function(){
     let screenVal = screen.value;
     //console.log(screen.value);
     //let res = screenVal.slice( -screenVal.length, -1);
     let res = screenVal.substring(0,screenVal.length-1);
     screen.value = res;
 
   });
 
   // calculate screen value on delete
   document.querySelector(".delete").addEventListener("click", ()=>{
     let screenVal = screen.value;
     if(screenVal.includes("+")||screenVal.includes("*")||screenVal.includes("-")||screenVal.includes("/")){
       msg.innerText = eval(screenVal);
     }else{ msg.innerText = ''}
   }); 
   // End
}

let calc = new Calculator(powerBtn);
