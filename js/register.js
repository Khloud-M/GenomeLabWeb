let userName=document.querySelector("#name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let  register_btn=document.querySelector("#sign-up");

register_btn.addEventListener("click" , register);

function register (e)
{
e.preventDefault();
if (userName.value ==="" || email.value==="" || password.value==="")
{
    alert("Plz Enter your data");
}
else 
{
    localStorage.setItem("username",userName.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);

}
setTimeout( () => {
    window.location ="login.html" ; 
},1500);
}
