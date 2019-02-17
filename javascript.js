 function triangle() {
let a = parseInt(document.getElementById("#value1").value);
let b = parseInt(document.getElementById("#value2").value);
let c = parseInt(document.getElementById("#value3").value);
var output;


if (a<=0 || b<=0||c<=0)
{
  output = "not valid";
}
else if(a + b < c|| a + c < b || b + c < a)
{
  output = "Not valid";
}
 else if(a == b && a == c && c == b)
{
    output ="equilateral triangle";
}
else if (a!=b && a!=c && c!=b)
{
    output ="scalene triangle";
}
else if(a == b || a == c || b == c)
{
 output = "isosceles triangle";
}
document.querySelector("#result").innerHTML = output;
}
