const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Timing Monitoring Language",
        b: "Hypertext Markup Language",
        c: "Hyperobject Making Language",
        d: "Hifen Tag Based Markup Language",
        correct: "b"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheet",
        b: "Cascading Sort Sheet",
        c: "Cascading Sort Style",
        d: "Cascading Sorting System",
        correct: "a"
    },
    {
        question: "What does JSON stand for?",
        a: "Java Object Notation",
        b: "JavaScripr Orientation Notion",
        c: "JavaScripr Object Notation",
        d: "Java Orientation Notation",
        correct: "c"
    },
    {
        question: "What does API stand for?",
        a: "Aproved Pining Interface",
        b: "Aplication Pining Interface",
        c: "Aproved Programing Interface",
        d: "Aplication Programing Interface",
        correct: "d"
    },
    {
        question: "When was JavaScript released?",
        a: "1993",
        b: "1994",
        c: "1995",
        d: "1996",
        correct: "c"
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answerd correctly at ${score}/${quizData.length} questions</h2><button onClick="location.reload();">Restart Quiz</button>`;
        }
    }
});