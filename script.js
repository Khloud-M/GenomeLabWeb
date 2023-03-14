let logoutBtn=document.querySelector("#logout");

let userName=localStorage.getItem("username");
logoutBtn.addEventListener("click", function()
{
    localStorage.clear();
    setTimeout( () => {
        window.location ="login.html" ; 
    },1500);

});


 function checkLogin()
 {
     if (localStorage.getItem('username'))
     {
        window.location="experment.html";
     }
     else
     {
         window.location ="login.html";
     }
 }