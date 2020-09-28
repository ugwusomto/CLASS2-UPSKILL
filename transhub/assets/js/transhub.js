let mobile_bar = document.getElementById("bars");
let nav = document.getElementById("navigation");

mobile_bar.onclick  = function(){
   if(nav.style.display == "block"){
      nav.style.display = "none";
   }else{
    nav.style.display = "block";
   }
}