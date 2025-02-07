const questions = [
    {
        question: "What is the primary function of Git in a DevOps environment?",
        options: ["To monitor system performance", "To automate code delivery", "To track code changes", "To manage cloud infrastructure"],
        answer: "To track code changes"
    },
    {
        question: "What is Docker?",
        options: ["A cloud service", "A version control tool", "A containerization platform", "A networking tool"],
        answer: "A containerization platform"
    },
    // Add questions here until you reach 300
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(optionElement);
    });
}

function selectAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        score++;
    }
    document.querySelectorAll('.option').forEach(option => option.style.pointerEvents = 'none');
    document.getElementById('submit-btn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        document.getElementById('submit-btn').disabled = true;
    } else {
        alert(`Quiz Completed! Your score: ${score}/${questions.length}`);
    }
}

displayQuestion();
