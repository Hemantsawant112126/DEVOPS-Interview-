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
        question: "Which tool is used for Continuous Integration in DevOps?",
        options: [
            "Jenkins",
            "Git",
            "Docker",
            "Kubernetes"
        ],
        answer: "Jenkins",
        explanation: {
            correct: "Jenkins is an automation server widely used for Continuous Integration and Continuous Deployment (CI/CD).",
            incorrect: {
                "Git": "Git is a version control system, not a CI/CD tool.",
                "Docker": "Docker is used for containerization, not CI/CD.",
                "Kubernetes": "Kubernetes is used for orchestrating containers, not CI/CD."
            }
        }
    },
    {
        question: "Which DevOps tool is primarily used for configuration management?",
        options: [
            "Ansible",
            "Docker",
            "Kubernetes",
            "Terraform"
        ],
        answer: "Ansible",
        explanation: {
            correct: "Ansible is an automation tool used for configuration management, application deployment, and task automation.",
            incorrect: {
                "Docker": "Docker is used for containerization, not configuration management.",
                "Kubernetes": "Kubernetes is for container orchestration, not configuration management.",
                "Terraform": "Terraform is an Infrastructure as Code (IaC) tool, not a configuration manager."
            }
        }
    },
    {
        question: "What is Kubernetes used for?",
        options: [
            "Source code management",
            "Orchestrating containers",
            "Monitoring logs",
            "Automating testing"
        ],
        answer: "Orchestrating containers",
        explanation: {
            correct: "Kubernetes is an open-source container orchestration system that automates the deployment, scaling, and management of containerized applications.",
            incorrect: {
                "Source code management": "Git is used for source code management, not Kubernetes.",
                "Monitoring logs": "Monitoring tools like Prometheus and ELK stack are used for log management.",
                "Automating testing": "Testing automation is handled by tools like Selenium and JUnit, not Kubernetes."
            }
        }
    },
    // ADD 45 MORE QUESTIONS HERE...
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

document.addEventListener("DOMContentLoaded", displayQuestion);
