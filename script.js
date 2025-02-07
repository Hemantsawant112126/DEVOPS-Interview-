const questions = [
    {
        question: "What is DevOps?",
        options: [
            "A programming language",
            "A set of practices, tools, and cultural philosophies",
            "A database management system",
            "A cloud service provider"
        ],
        answer: "A set of practices, tools, and cultural philosophies",
        explanation: {
            correct: "DevOps improves collaboration between development and operations teams, aiming for faster software delivery and continuous improvement.",
            incorrect: {
                "A programming language": "DevOps is not a language but a methodology integrating development and operations.",
                "A database management system": "DevOps covers various software engineering practices beyond databases.",
                "A cloud service provider": "DevOps can be implemented on cloud platforms but is not itself a cloud provider."
            }
        }
    },
    {
        question: "Explain Continuous Integration (CI) and Continuous Delivery (CD).",
        options: [
            "A method for manually merging code",
            "A process for integrating and deploying code changes automatically",
            "A type of software testing",
            "A version control system"
        ],
        answer: "A process for integrating and deploying code changes automatically",
        explanation: {
            correct: "CI involves frequent integration of code changes into a shared repository with automated tests, while CD ensures code is always in a deployable state.",
            incorrect: {
                "A method for manually merging code": "CI/CD automates the integration and deployment process, reducing manual work.",
                "A type of software testing": "CI/CD includes automated testing but is not solely a testing process.",
                "A version control system": "Version control systems like Git help with CI/CD, but they are not the same concept."
            }
        }
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    document.getElementById("nextButton").addEventListener("click", nextQuestion);
});

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

    document.getElementById("nextButton").style.display = "none"; // Hide Next Button initially
}

function checkAnswer(selectedOption, button) {
    if (answered) return;
    answered = true;

    const questionData = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = "";
    
    let explanationHTML = "";
    if (selectedOption === questionData.answer) {
        score++;
        button.classList.add("correct");
        explanationHTML += `<p class="correct"><strong>Correct!</strong> ${questionData.explanation.correct}</p>`;
    } else {
        button.classList.add("incorrect");
        explanationHTML += `<p class="incorrect"><strong>Incorrect.</strong> ${questionData.explanation.incorrect[selectedOption]}</p>`;
    }

    // Show explanations for all options
    explanationHTML += "<h4>Explanation for all options:</h4>";
    Object.keys(questionData.explanation.incorrect).forEach((option) => {
        explanationHTML += `<p><strong>${option}:</strong> ${questionData.explanation.incorrect[option]}</p>`;
    });

    resultContainer.innerHTML = explanationHTML;
    document.getElementById("nextButton").style.display = "block"; // Show Next Button after answering
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        answered = false;
        displayQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2><p>Thanks for playing! Refresh the page to try again.</p>`;
    }
}
