const reg = document.getElementById("reg");

reg.addEventListener('submit',addUser);

let list=localStorage.getItem('listUsers')


list=JSON.parse(list);

function addUser(e)
{
    e.preventDefault();


let newUser=document.getElementById('newusername').value;
for(let i=0;i<list.length;i++)
{
    if(list[i].name===newUser)
    {
        window.alert("שם משתמש קיים הזן שם משתמש חדש!");
        return;
    }
}
 
let user={
    playernumber: list.length+1 || 1 ,
    name:document.getElementById('newusername').value,
    password:document.getElementById('newpassword').value,
    triviaScore:0,
    snakeAndLedders:0
};


list.push(user);

localStorage.setItem('listUsers',JSON.stringify(list));
window.location.href= "start.html";

}