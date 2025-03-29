let b=document.getElementById("submit")
let form=document.getElementsByClassName("form")
let pop1=document.getElementsByClassName("popup")
let pop2=document.getElementsByClassName("popup2")
let pop3=document.getElementsByClassName("popup3")


b.addEventListener("click",Login)

function Login()
{
form[0].style.display='none';
pop1[0].style.display='block';
}

pop1[0].onclick=function()
{
pop2[0].style.display='block';
}

pop2[0].onclick=function()
{
pop3[0].style.display='block';
}

