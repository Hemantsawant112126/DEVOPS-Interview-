const questions = [
    {
        question: "What is the primary function of Git in a DevOps environment?",
        options: [
            "To monitor system performance",
            "To automate code delivery",
            "To track code changes",
            "To manage cloud infrastructure"
        ],
        answer: "To track code changes",
        explanation: {
            correct: "Git is used for version control, allowing developers to track and manage changes in code.",
            incorrect: {
                "To monitor system performance": "System performance monitoring is done using tools like Prometheus and Grafana, not Git.",
                "To automate code delivery": "CI/CD tools like Jenkins or GitHub Actions automate delivery, but Git mainly tracks code changes.",
                "To manage cloud infrastructure": "Infrastructure management is done using tools like Terraform or Kubernetes, not Git."
            }
        }
    },
    {
        question: "What is Docker?",
        options: [
            "A cloud service",
            "A version control tool",
            "A containerization platform",
            "A networking tool"
        ],
        answer: "A containerization platform",
        explanation: {
            correct: "Docker is used to package applications into containers for consistent deployment across environments.",
            incorrect: {
                "A cloud service": "Docker itself is not a cloud service, but it can be used in cloud-based environments.",
                "A version control tool": "Git, not Docker, is a version control tool.",
                "A networking tool": "Docker has networking capabilities, but its primary function is containerization."
            }
        }
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];

    document.getElementById('question').innerText = questionData.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = "";

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ""; // Clear previous result messages

    questionData.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.setAttribute("tabindex", "0");
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    answered = false;
}

function checkAnswer(selectedOption, button) {
    if (answered) return;
    answered = true;

    const questionData = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result');

    if (selectedOption === questionData.answer) {
        score++;
        button.style.backgroundColor = "green";
        resultContainer.innerHTML = `<p class="correct"><strong>Correct!</strong> ${questionData.explanation.correct}</p>`;
    } else {
        button.style.backgroundColor = "red";
        resultContainer.innerHTML = `<p class="incorrect"><strong>Incorrect.</strong> ${questionData.explanation.incorrect[selectedOption]}</p>`;

        // Highlight the correct answer
        const optionButtons = document.querySelectorAll(".option");
        optionButtons.forEach((btn) => {
            if (btn.innerText === questionData.answer) {
                btn.style.backgroundColor = "blue";
            }
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showScore();
        }
    }, 2500);
}

function showScore() {
    document.getElementById('quiz-container').innerHTML = `
        <h2>Your Score: ${score}/${questions.length}</h2>
        <p>Thanks for playing! Refresh the page to try again.</p>
    `;
}

// Tab key navigation for options
document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
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
