let addButton = document.getElementById("_add");
addButton.onclick = function(){
   let input1  = document.getElementById("number1").value;
   let input2  = document.getElementById("number2").value;
   
   
   // if(isNaN(input1) || isNaN(input2)){
   //  alert("Obio type a number abeg")
   // }else if((parseInt(input1)+parseInt(input2)) >= 1000){
   //  alert("Please our calculator can't handle this... Go  and buy science calculator")
   // }else{
   //    alert("Good");
   // }



   switch(input1){
     case (0-40):
        alert("You failed");
      break;
      cas
         alert("Hey you just put 1");
       break;
       case 12:
         alert("Hey you just put 1");
       break;
       case 16:
         alert("Hey you just put 1");
       break;
       default:
          alert("No match");
          break;
   }


}


// for(let x = 1;x <= 100 ;x++){
//    if(x % 2  == 0){
//       console.log(x)
//    }
   
// }

let x = 10;
while(x<=100){
   if(x % 2  == 0){
      console.log(x)
   }
}