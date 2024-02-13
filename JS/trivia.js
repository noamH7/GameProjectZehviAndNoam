const start = document.getElementById('start-div');
const end = document.getElementById('end-div');
const questions = document.getElementsByClassName('question');
let num = -1;
let score = 0;
let question;

function markCorrect(ans) {
    const correct = document.querySelector(`#${question.id} form input[value="correct"]`);
    if (ans === correct) {
        score += 10;
    }
    else {
        document.querySelector(`label[for="${ans.id}"]`).style.color = "red";
    }
    document.querySelector(`label[for="${correct.id}"]`).style.color = "green";
}
function nextQuestion(){
    question = questions[++num];
    if(question){
    const answers = document.querySelectorAll(`#${question.id} form input`);
    for (let i = 0; i < answers.length; i++){
        answers[i].addEventListener('click', () => {
            markCorrect(answers[i]);
            setTimeout(() => {
            question.style.display = 'none';
            nextQuestion();
            }, 100);
        })
    }
    question.style.display = 'block';
}
    else {
        document.getElementById('score').textContent = score;
        end.style.display = 'block';
    }
}

const sbutton = document.getElementById('start-game');
sbutton.addEventListener('click', () => {
    const h = document.querySelector('h1');
    h.style.fontSize = '3em';
    start.style.display = 'none';
    nextQuestion();
});

const chbutton = document.getElementById('check-answers');
const nbutton = document.getElementById('new-game');
chbutton.addEventListener('click', () => {
    chbutton.style.display = 'none';
    nbutton.style.display = 'block';
    for(let i=0; i < questions.length; i++){
        questions[i].style.display = 'block';
    }
});






