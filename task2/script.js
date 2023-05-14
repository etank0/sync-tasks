const questions = [
    {
        question: "Which team won the first IPL?",
        answers: [
            {text: "RCB", correct: false},
            {text: "CSK", correct: false},
            {text: "RR", correct: true},
            {text: "DC", correct: false},
        ]
    },

    {
        question: "What is the capital of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Amsterdam", correct: false},
            {text: "Marseille", correct: false},
        ]
    },

    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            {text: "Dr. Rajendra Prasad", correct: false},
            {text: "Mahatma Gandhi", correct: false},
            {text: "V.P. Singh", correct: false},
            {text: "Pt. Jawaharlal Nehru", correct: true},
        ]
    },

    {
        question: "Where is Kathmandu located?",
        answers: [
            {text: "Bhutan", correct: false},
            {text: "Sri Lanka", correct: false},
            {text: "Nepal", correct: true},
            {text: "Bangladesh", correct: false},
        ]
    },

    {
        question: "Which city is called 'City of Dreams'?",
        answers: [
            {text: "Mumbai", correct: true},
            {text: "Delhi", correct: false},
            {text: "Chennai", correct: false},
            {text: "Bangalore", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const gifImg = document.getElementById("giphy-embed");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    gifImg.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }
    else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

function showScore() {
    resetState();
    if (score >= 3) {
        questionElement.innerHTML = `You won! ${score} out of ${questions.length}!`;
        gifImg.style.display = "block";
    }
    else {
        questionElement.innerHTML = `You lost! ${score} out of ${questions.length}!`;
        gifImg.style.display = "none";
    }
    nextBtn.innerHTML = "Play Again?";
    nextBtn.style.display = "block";
}

startQuiz();
