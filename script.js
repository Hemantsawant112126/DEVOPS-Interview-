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
let answered = false;

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];

    // Set question text
    document.getElementById('question').innerText = questionData.question;

    // Clear previous options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = "";

    // Display options
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.setAttribute("tabindex", "0"); // Make it focusable
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    answered = false;
}

function checkAnswer(selectedOption, button) {
    if (answered) return;
    answered = true;

    const questionData = questions[currentQuestionIndex];

    if (selectedOption === questionData.answer) {
        score++;
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showScore();
        }
    }, 1000);
}

function showScore() {
    document.getElementById('quiz-container').innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

// Handle Tab key navigation for options
document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
        event.preventDefault(); // Prevent default tab behavior
        moveSelection();
    }
});

function moveSelection() {
    const options = document.querySelectorAll(".option");
    let selectedIndex = Array.from(options).findIndex(option => option.classList.contains("selected"));

    if (selectedIndex !== -1) {
        options[selectedIndex].classList.remove("selected");
    }

    let newIndex = (selectedIndex + 1) % options.length;
    options[newIndex].classList.add("selected");
    options[newIndex].focus();
}

// Initialize the quiz
document.addEventListener("DOMContentLoaded", displayQuestion);
