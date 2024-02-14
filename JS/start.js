

let c=0;
const sub =document.getElementById("submit");
sub.addEventListener("submit", login);
function login(event){
    event.preventDefault();
    let check=0
    let nam = document.getElementById('username').value
    let pass = document.getElementById('password').value
    let list=localStorage.getItem('listUsers')
    list=JSON.parse(list)
    if(list==null) {
     window.alert(" תחילה עליך להרשם למערכת !")
     window.location.href="../html/register.html"
    }
    else{
        for (let index = 0; index < list.length; index++) {
                if ( list[index].name === nam && list[index].password ===pass)
                {
                    console.log("found");
                    localStorage.setItem("cur_user",JSON.stringify(list[index])) ;
                    window.location.href= '../html/games.html';
                    return;
                }
        }
        window.alert(" תחילה עליך להרשם למערכת !");
        window.location.href="../html/register.html";
    }
}
