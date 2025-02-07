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
    // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false; // Track if an answer has been selected

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options
    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(optionElement);
    });

    // Disable the "Next" button until an option is selected
    document.getElementById('submit-btn').disabled = true;
    answered = false;
}

function selectAnswer(selectedOption) {
    if (answered) return; // Prevent multiple answers for the same question

    const questionData = questions[currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        score++;
    }

    // Disable all options after selection
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none'; // Disable clicking
    });

    // Enable the "Next" button
    document.getElementById('submit-btn').disabled = false;
    answered = true;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert(`Quiz Completed! Your score: ${score}/${questions.length}`);
    }
}

displayQuestion();
