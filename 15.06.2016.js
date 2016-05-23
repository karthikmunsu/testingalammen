  var st, str;

  str = "mca";

 function showClicked(){
    alert("clicked");
  };

function add()
{
var val1=parseInt(document.getElementById("val1").value);
var val2=parseInt(document.getElementById("val2").value);
if(isNaN(val1)||isNaN(val2)){
alert("Enter the number ");
}
else{
alert("The sum is "+(val1+val2));
}
};


function userPrompt(){
var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
var c=parseInt(a)+parseInt(b);
alert(c);
return document.write(c);

};




function changeBackground(){
document.body.style.backgroundImage="url('F:\sys.png')";
};


function checkDate(){
var d = new Date()
alert(d.getFullYear());
document.getElementById("lab1").innerHTML=d.getFullYear();
};


function checkLength(){
var s = document.getElementById("strl").value;
alert(s.length);
};


function checkLoop(){
var text,i;
text+="<br>";
for(i=1;i<=5;i++){
text += i+"<br>";
}

document.getElementById("para").innerHTML=text;


function changeColor(){
document.body.style.backgroundColor="url('#eeef')";
};





};


