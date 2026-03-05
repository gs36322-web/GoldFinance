const Auth = {

login(email,password){

const user = Storage.get("gold_user_data");

if(!user){
alert("Usuário não encontrado");
return;
}

if(user.email !== email || user.password !== password){
alert("Email ou senha inválidos");
return;
}

Storage.set("gold_user",user);

window.location.href="dashboard.html";

},

logout(){
Storage.remove("gold_user");
window.location.href="index.html";
},

checkAuth(){
const user = Storage.get("gold_user");

if(!user){
window.location.href="index.html";
}

}

};