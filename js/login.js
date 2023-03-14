let userName=document.querySelector("#username");
let password=document.querySelector("#password");
let loginBtn=document.querySelector("#sign-in");

let getUser=localStorage.getItem("username");
let getpassword=localStorage.getItem("password");

loginBtn.addEventListener("click" , function (e)
{
e.preventDefault();
if (userName.value ===""  || password.value==="")
{
    alert("Plz Enter your data");
}
else {
if 

   /* (getUser && getUser === "khloud" && getpassword && getpassword === "123")
     ده لو مثبت نواتج أنا مش عاوز أثبت نواتج */
     (getUser && getUser.trim()=== userName.value.trim() && getpassword && getpassword === password.value)

    {
        setTimeout( () => {
            window.location ="experment.html" ; 
        },1500);
           }
else{
    console.log("wrong");
}
}
});