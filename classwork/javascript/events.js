//Addition function

function Addition(){
   let input1  = document.getElementById("number1");
   let input2  = document.getElementById("number2");
   let sum = parseInt(input1.value)  + parseInt(input2.value);
   let display = document.getElementById("display");
   display.innerHTML = `The sum of the two numbers is ${sum}`;
}


