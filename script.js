const questions = [
    {
        question: "What is the primary function of Git in DevOps?",
        options: [
            "To monitor system performance",
            "To automate code delivery",
            "To track code changes",
            "To manage cloud infrastructure"
        ],
        answer: "To track code changes",
        explanation: {
            correct: "Git is a version control system that tracks changes in source code during software development.",
            incorrect: {
                "To monitor system performance": "Monitoring is done using tools like Prometheus and Grafana, not Git.",
                "To automate code delivery": "CI/CD tools like Jenkins automate code delivery, not Git.",
                "To manage cloud infrastructure": "Terraform and Ansible manage infrastructure, not Git."
            }
        }
    },
    {
        question: "What is Docker primarily used for?",
        options: [
            "Cloud computing",
            "Version control",
            "Containerization",
            "Load balancing"
        ],
        answer: "Containerization",
        explanation: {
            correct: "Docker is a containerization tool that packages applications and dependencies together.",
            incorrect: {
                "Cloud computing": "Docker is not a cloud service, though it can be used in cloud environments.",
                "Version control": "Git is a version control system, not Docker.",
                "Load balancing": "Load balancers distribute traffic but Docker packages applications."
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

    // Add Next Button but hide it initially
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next Question";
    nextButton.id = "nextButton";
    nextButton.style.display = "none"; // Hidden until answer is selected
    nextButton.onclick = nextQuestion;
    document.getElementById("quiz-container").appendChild(nextButton);

    answered = false;
}

function checkAnswer(selectedOption, button) {
    if (answered) return;
    answered = true;

    const questionData = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ""; // Clear previous result messages

    const explanationContainer = document.createElement("div");

    if (selectedOption === questionData.answer) {
        score++;
        button.style.backgroundColor = "green";
        explanationContainer.innerHTML += `<p class="correct"><strong>Correct!</strong> ${questionData.explanation.correct}</p>`;
    } else {
        button.style.backgroundColor = "red";
        explanationContainer.innerHTML += `<p class="incorrect"><strong>Incorrect.</strong> ${questionData.explanation.incorrect[selectedOption]}</p>`;
    }

    // Show explanations for all options
    explanationContainer.innerHTML += "<h4>Why other options are incorrect?</h4>";
    Object.keys(questionData.explanation.incorrect).forEach((option) => {
        explanationContainer.innerHTML += `<p><strong>${option}:</strong> ${questionData.explanation.incorrect[option]}</p>`;
    });

    resultContainer.appendChild(explanationContainer);

    // Highlight correct answer
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((btn) => {
        if (btn.innerText === questionData.answer) {
            btn.style.backgroundColor = "blue";
        }
    });

    // Show Next Button
    document.getElementById("nextButton").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').innerHTML = `
        <h2>Your Score: ${score}/${questions.length}</h2>
        <p>Thanks for playing! Refresh the page to try again.</p>
    `;
}

// Initialize quiz
document.addEventListener("DOMContentLoaded", displayQuestion);
