
// leap year
function calculate1(){
    var year = document.getElementById('year').value;

    if (year % 4==0 && year % 100 !=0){
        alert("true");
    }
    else if(year % 400==0){
        alert("true");

    }   
    else{
        alert ("false");
    
    }
}
// reverse string
function calculate2(){
    var forward = document.getElementById("text").value;
    var backward = forward.split("").reverse().join("");
    alert(backward)
}
// palindrome
function calculate3(){
    var forward = document.getElementById("text-1").value;
    var backward = forward.split("").reverse().join("");
    if (forward==backward){
        alert("it is palindrome")
    }
    else{
        alert("it is not palindrome")
    }
}
//amstrong number
function calculate4() {
    var arm=0,a,num;
    num=Number(document.getElementById("text-2").value);
    
    x=num;
    while(x>0)
    {
    a=x%10;
    x=parseInt(x/10);
    arm=arm+a*a*a;
    }
    if(arm==num)
    {
    alert("it is Armstrong number");
    }
    else
    {
    alert("it is Not Armstrong number");
    }
}
//multiple of 3 and multiple of 7
function calculate5() 
{
   var x= document.getElementById("text-3").value;
  if (x % 3 == 0 || x % 7 == 0) 
  {
    alert("true");
  } 
  else {
    alert("false");
  }
}