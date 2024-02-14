
document.addEventListener("DOMContentLoaded", function() {
    
    let users = JSON.parse(localStorage.getItem("listUsers"));

users.sort((a, b) => a.triviaScore > b.triviaScore);
document.getElementById("name1t").textContent = users[2].name;
document.getElementById("score1t").textContent = users[2].triviaScore;
document.getElementById("name2t").textContent = users[1].name;
document.getElementById("score2t").textContent = users[1].triviaScore;
document.getElementById("name3t").textContent = users[0].name;
document.getElementById("score3t").textContent = users[0].triviaScore;

users.sort((a, b) => a.snakeAndLedders > b.snakeAndLedders);
document.getElementById("name1lar").textContent = users[2].name;
document.getElementById("score1lar").textContent = users[2].snakeAndLedders;
document.getElementById("name2lar").textContent = users[1].name;
document.getElementById("score2lar").textContent = users[1].snakeAndLedders;
document.getElementById("name3lar").textContent = users[0].name;
document.getElementById("score3lar").textContent = users[0].snakeAndLedders;

let user = JSON.parse(localStorage.getItem("cur_user"));

document.getElementById("tusername").textContent = user.name;
document.getElementById("tuserscore").textContent = user.triviaScore;

document.getElementById("larusername").textContent = user.name;
document.getElementById("laruserscore").textContent = user.snakeAndLedders;
});




