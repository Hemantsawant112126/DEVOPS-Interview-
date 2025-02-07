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
    },
    {
        question: "What is DevOps?",
        options: [
            "A programming language",
            "A set of practices for software development and IT operations",
            "A database management system",
            "A cloud service provider"
        ],
        answer: "A set of practices for software development and IT operations",
        explanation: {
            correct: "DevOps is a combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity.",
            incorrect: {
                "A programming language": "DevOps is not a programming language; it is a methodology that integrates development and operations teams.",
                "A database management system": "While databases are a part of DevOps, DevOps itself is a broader methodology encompassing development and operations practices.",
                "A cloud service provider": "DevOps can be implemented on cloud platforms, but it is not a cloud service provider itself."
            }
        }
    },
    {
        question: "What is Continuous Integration (CI) and Continuous Delivery (CD)?",
        options: [
            "Manually merging code",
            "A process for integrating and deploying code changes automatically",
            "A cloud service for hosting repositories",
            "A type of software license"
        ],
        answer: "A process for integrating and deploying code changes automatically",
        explanation: {
            correct: "Continuous Integration (CI) involves automatically merging code changes, running tests, and preparing the application for deployment. Continuous Delivery (CD) ensures that code is always in a deployable state and can be released at any time.",
            incorrect: {
                "Manually merging code": "CI/CD automates the integration and deployment process, reducing the need for manual merges.",
                "A cloud service for hosting repositories": "While services like GitHub and GitLab support CI/CD, they are not CI/CD themselves.",
                "A type of software license": "CI/CD is a practice, not a licensing model."
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
    resultContainer.innerHTML = "";

    questionData.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    let nextButton = document.getElementById("nextButton");
    if (!nextButton) {
        nextButton = document.createElement("button");
        nextButton.innerText = "Next Question";
        nextButton.id = "nextButton";
        nextButton.style.display = "none";
        nextButton.onclick = nextQuestion;
        document.getElementById("quiz-container").appendChild(nextButton);
    } else {
        nextButton.style.display = "none";
    }

    answered = false;
}

function checkAnswer(selectedOption, button) {
    if (answered) return;
    answered = true;

    const questionData = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = "";

    const explanationContainer = document.createElement("div");

    if (selectedOption === questionData.answer) {
        score++;
        button.classList.add("correct");
        explanationContainer.innerHTML += `<p class="correct"><strong>Correct!</strong> ${questionData.explanation.correct}</p>`;
    } else {
        button.classList.add("incorrect");
        explanationContainer.innerHTML += `<p class="incorrect"><strong>Incorrect.</strong> ${questionData.explanation.incorrect[selectedOption]}</p>`;
    }

    resultContainer.appendChild(explanationContainer);
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

document.addEventListener("DOMContentLoaded", displayQuestion);
