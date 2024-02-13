const out=document.getElementById("sing out");
out.addEventListener('click',singout);


function singout(){
    localStorage.removeItem("cur_user");
    window.location.href= '/html/start.html';
}