let powerBtn = document.querySelector(".power"),
    userBtn = document.querySelector("#user"),
    turnOn = document.querySelector("#On"),
    screen = document.querySelector("#output"),
    screenCover = document.querySelector("#output-wrapper"),
    num = document.querySelectorAll("#num"),
    msg = document.querySelector("#msg");
//screen.className = "OnCalc";
const Calculator = function(){


// turning On/Off
this.power(powerBtn, userBtn);
//On 
//this.on();
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

// getting button text

Calculator.prototype.appendToScreen = function(){
  
  num.forEach( function(numb){
     function showInScreen(e){
          output.value += e.target.textContent;
    }  
   numb.addEventListener("click", showInScreen);
  }); 
}

// equal to function
Calculator.prototype.equalTo = function(){
document.querySelector(".equal").addEventListener("click", function(){
  msg.innerText = eval(screen.value)
  });
}

// delete screen value
Calculator.prototype.delete = function(){
 
 document.querySelector(".delete").addEventListener("click", function(){
 let screenVal = screen.value;
 //console.log(screen.value);
 let res = screenVal.slice( -screenVal.length, -1);
 screen.value = res;
 
 });
}

// power prototype
Calculator.prototype.power = function (pow,light){
  pow.addEventListener("click", function(){
  
  if(light.innerText.includes("Off")){
    screen.value = "Turning On Calculator....";
    
      if(light.innerText.includes("Off")){
        setTimeout(calc.on, 1000)
       };
       
    }else{
      screen.value = "Turning Off Calculator...";
      msg.textContent = '';
      if(light.innerText.includes("On")){
       setTimeout(calc.off, 2000);
       }else{ console.error(404)
         }
     
     }
  });
}



let calc = new Calculator(powerBtn);
