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

    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = "none"; // Hide Next Button initially
}

function checkAnswer(selectedOption, button) {
    if (answered) return;
    answered = true;

    const questionData = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = "";
    
    if (selectedOption === questionData.answer) {
        score++;
        button.classList.add("correct");
        resultContainer.innerHTML = `<p class="correct"><strong>Correct!</strong> ${questionData.explanation.correct}</p>`;
    } else {
        button.classList.add("incorrect");
        resultContainer.innerHTML = `<p class="incorrect"><strong>Incorrect.</strong> ${questionData.explanation.incorrect[selectedOption]}</p>`;
    }

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

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    document.getElementById("nextButton").addEventListener("click", nextQuestion);
});
