//counter for redirect page
var timerCount = 3;
//Main redirect function
function FuncRedirect()
{
	location.href="index.html";
}
//Counter changes for redirect 
function TimeChange()
{
	timerCount--;
	document.getElementById("timeVal").innerHTML = timerCount;
}
//Main Delay function for redirect page
function FuncDelay()
{
	setTimeout("FuncRedirect()", 3000);
	setInterval("TimeChange()", 1000);
}