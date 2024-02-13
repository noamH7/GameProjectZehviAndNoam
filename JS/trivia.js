//prepere the elements that will be used in some functions
const start = document.getElementById('start-div');
const end = document.getElementById('end-div');
const questions = document.getElementsByClassName('question');
let num = -1; // number of the current question.
let score = 0;
let question; // current question

// response to answer that was chosen.
function markCorrect(ans) {
    const correct = document.querySelector(`#${question.id} form input[value="correct"]`);
    if (ans === correct) {
        score += 10;
    }
    else {
        document.querySelector(`label[for="${ans.id}"]`).style.backgroundColor = "red";
    }
    document.querySelector(`label[for="${correct.id}"]`).style.backgroundColor = "green";
}

//avoid answer a second time to one question in same game.
function lockAnswers(answers) {
    for (let i = 0; i < answers.length; i++){
        if(answers[i].checked === false){
        answers[i].disabled = true;
        }
    }
}

//prepare and show the next question (or end the game).
function nextQuestion(){
    question = questions[++num];
    if(question){
    const answers = document.querySelectorAll(`#${question.id} form input`);
    for (let i = 0; i < answers.length; i++){ //prepare the event listeners for the answers 
        answers[i].addEventListener('change', () => {
            lockAnswers(answers);
            markCorrect(answers[i]);
            setTimeout(() => { // timeout before the questions are swap, for showing the mark.
            question.style.display = 'none';
            nextQuestion();
            }, 300);
        })
    }
    question.style.display = 'block';
}
    else {//there are no more questions
        document.getElementById('score').textContent = score;
        end.style.display = 'block';
    }
}

//add event listener to the start button.
const sbutton = document.getElementById('start-game');
sbutton.addEventListener('click', () => {
    const h = document.querySelector('h1');
    h.style.fontSize = '3em';
    h.style.marginTop = '0';
    start.style.display = 'none';
    nextQuestion();
});

//add event listener to the check button.
const chbutton = document.getElementById('check-answers');
const nbutton = document.getElementById('new-game');
chbutton.addEventListener('click', () => {
    document.querySelector('p').style.fontSize = '1em';
    chbutton.style.display = 'none';
    nbutton.style.display = 'block';
    for(let i=0; i < questions.length; i++){
        questions[i].style.display = 'block';
    }
});






