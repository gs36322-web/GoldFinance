document.addEventListener("DOMContentLoaded",()=>{

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=e.target[0].value;
const password=e.target[1].value;

Auth.login(email,password);

});

}

});