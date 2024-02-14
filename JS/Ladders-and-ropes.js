let tog = 1

let p1sum = 0
let p2sum = 0
let sum

function updatePsum( p, num) {
    p += num;

    if (p > 100) {
        p -= num;
    }

    switch (p) {
        case 1:
            return 38;
        case 4:
            return 14;
        case 8:
            return 30;
        case 21:
            return 42;
        case 28:
            return 76;
        case 32:
            return 10;
        case 36:
            return 6;
        case 48:
            return 26;
        case 50:
            return 67;
        case 62:
            return 18;
        case 71:
            return 92;
        case 80:
            return 99;
        case 88:
            return 24;
        case 95:
            return 56;
        case 97:
            return 78;
        default:
            return p;
    }
}

function play(player, psum, correction, num) {
    
    if (psum == 'p1sum') {
        p1sum = updatePsum( p1sum, num);
        sum = p1sum;
    }
    
    if (psum == 'p2sum') {
        p2sum = updatePsum( p2sum, num);
        sum = p2sum;
    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`

    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        if (player == 'p1') {
            let user = JSON.parse(localStorage.getItem("cur_user"));
            user.snakeAndLedders++; 
            localStorage.setItem("cur_user", JSON.stringify(user));
            let users = JSON.parse(localStorage.getItem("listUsers"));
            users[user.playernumber]=user;
            localStorage.setItem("listUsers", JSON.stringify(users));
            alert("ניצחון");

        }
        else if (player == 'p2') {
            alert("פספסת הפעם אולי בפעם הבאה")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else {
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }

    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num

    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "מחשב "
        play('p1', 'p1sum', 0, num)

    }

    else{
        document.getElementById('tog').innerText = "אתה "
        play('p2', 'p2sum', 55, num)

    }
    tog = tog + 1

})