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
    console.log("Displaying question..."); // Debugging log
    const questionData = questions[currentQuestionIndex];
    console.log("Question: ", questionData.question); // Debugging log

    // Set question text
    document.getElementById('question').innerText = questionData.question;

    // Clear previous options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    // Add new options
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

    console.log("Question displayed. Options added."); // Debugging log
}

function selectAnswer(selectedOption) {
    if (answered) return; // Prevent multiple answers for the same question

    console.log("Option selected: ", selectedOption); // Debugging log
    const questionData = questions[currentQuestionIndex];

    if (selectedOption === questionData.answer) {
        score++;
        console.log("Correct Answer! Current Score: ", score); // Debugging log
    } else {
        console.log("Incorrect Answer!"); // Debugging log
    }

    // Disable all options after selection
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none'; // Disable clicking
    });

    // Enable the "Next" button
    document.getElementById('submit-btn').disabled = false;
    answered = true;

    console.log("Next button enabled. Waiting for user to move to the next question."); // Debugging log
}

function nextQuestion() {
    console.log("Next Question clicked..."); // Debugging log
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert(`Quiz Completed! Your score: ${score}/${questions.length}`);
    }
}

displayQuestion(); // Initial call to display the first question
