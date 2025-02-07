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
],
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
    },
    {
        question: "What are some key benefits of using Jenkins in a DevOps pipeline?",
        options: [
            "Manual testing support",
            "CI/CD automation, scalability, and monitoring",
            "Only supports Java applications",
            "Provides cloud storage"
        ],
        answer: "CI/CD automation, scalability, and monitoring",
        explanation: {
            correct: "Jenkins automates the build, test, and deployment process, supports distributed builds for scalability, and provides plugins for monitoring and reporting.",
            incorrect: {
                "Manual testing support": "Jenkins is primarily for automation, not manual testing.",
                "Only supports Java applications": "Jenkins supports multiple programming languages and frameworks.",
                "Provides cloud storage": "Jenkins is an automation server, not a storage service."
            }
        }
    },
    {
        question: "What is Infrastructure as Code (IaC), and how does it benefit DevOps?",
        options: [
            "A method for manually configuring servers",
            "Managing infrastructure through code",
            "A type of cloud computing service",
            "A way to store application logs"
        ],
        answer: "Managing infrastructure through code",
        explanation: {
            correct: "Infrastructure as Code (IaC) automates infrastructure provisioning, reduces configuration drift, enables scalability, and allows infrastructure to be version-controlled.",
            incorrect: {
                "A method for manually configuring servers": "IaC eliminates manual configuration by defining infrastructure in code.",
                "A type of cloud computing service": "IaC is a practice that can be implemented on cloud platforms but is not a cloud service itself.",
                "A way to store application logs": "IaC is used for provisioning and managing infrastructure, not for storing logs."
            }
        }
    },
    {
        question: "What are the differences between Docker and Kubernetes?",
        options: [
            "Docker is a containerization tool, Kubernetes is an orchestration tool",
            "Both are used for virtual machine management",
            "Kubernetes creates containers, Docker manages networks",
            "Docker is used for security, Kubernetes is used for networking"
        ],
        answer: "Docker is a containerization tool, Kubernetes is an orchestration tool",
        explanation: {
            correct: "Docker is used to create and manage containers, while Kubernetes automates the deployment, scaling, and operation of containerized applications.",
            incorrect: {
                "Both are used for virtual machine management": "Docker and Kubernetes manage containers, not virtual machines.",
                "Kubernetes creates containers, Docker manages networks": "Docker creates containers, while Kubernetes orchestrates them across multiple nodes.",
                "Docker is used for security, Kubernetes is used for networking": "Both tools contribute to security and networking, but their primary functions differ."
            }
        }
    }
],
    {
        question: "What is DevOps?",
        options: [
            "A programming language",
            "A software development methodology",
            "A set of practices for collaboration between Dev and Ops",
            "A type of cloud computing"
        ],
        answer: "A set of practices for collaboration between Dev and Ops",
        explanation: {
            correct: "DevOps is a set of practices, tools, and cultural philosophies that improve collaboration between development and operations teams.",
            incorrect: {
                "A programming language": "DevOps is not a programming language; it is a methodology.",
                "A software development methodology": "While DevOps influences development, it is broader than just software development.",
                "A type of cloud computing": "Cloud computing supports DevOps, but DevOps is not a type of cloud computing."
            }
        }
    },
    {
        question: "Explain Continuous Integration (CI) and Continuous Delivery (CD).",
        options: [
            "CI is about frequent code merges; CD is about automating releases",
            "CI/CD are the same thing",
            "CI refers to infrastructure automation; CD refers to testing",
            "CI is a type of testing framework"
        ],
        answer: "CI is about frequent code merges; CD is about automating releases",
        explanation: {
            correct: "Continuous Integration (CI) automates code integration, while Continuous Delivery (CD) automates deployment.",
            incorrect: {
                "CI/CD are the same thing": "CI and CD are related but different processes.",
                "CI refers to infrastructure automation; CD refers to testing": "CI is about integrating code, while CD is about deploying applications.",
                "CI is a type of testing framework": "CI is not a testing framework but a process for merging code changes."
            }
        }
    },
    {
        question: "What are some key benefits of using Jenkins in a DevOps pipeline?",
        options: [
            "Automation, scalability, plugin support, monitoring",
            "Only used for testing",
            "Limited to Java projects",
            "Requires manual execution of every task"
        ],
        answer: "Automation, scalability, plugin support, monitoring",
        explanation: {
            correct: "Jenkins automates CI/CD, supports distributed builds, has a large plugin ecosystem, and provides monitoring.",
            incorrect: {
                "Only used for testing": "Jenkins is used for automation beyond just testing.",
                "Limited to Java projects": "Jenkins supports multiple languages and frameworks.",
                "Requires manual execution of every task": "Jenkins automates tasks to improve efficiency."
            }
        }
    },
    {
        question: "What is Infrastructure as Code (IaC) and its benefits?",
        options: [
            "Managing infrastructure through code",
            "Only for networking configuration",
            "A cloud service",
            "Used only for physical hardware management"
        ],
        answer: "Managing infrastructure through code",
        explanation: {
            correct: "IaC allows managing and provisioning infrastructure through code, enabling automation and consistency.",
            incorrect: {
                "Only for networking configuration": "IaC is used for all infrastructure components, not just networking.",
                "A cloud service": "IaC is a concept that can be applied to both cloud and on-prem environments.",
                "Used only for physical hardware management": "IaC mainly focuses on virtual infrastructure, not just physical hardware."
            }
        }
    },
    {
        question: "What are the differences between Docker and Kubernetes?",
        options: [
            "Docker is for creating containers; Kubernetes is for managing them",
            "Both are the same",
            "Kubernetes replaces Docker",
            "Docker is only used for local development"
        ],
        answer: "Docker is for creating containers; Kubernetes is for managing them",
        explanation: {
            correct: "Docker packages applications into containers, while Kubernetes orchestrates and manages them.",
            incorrect: {
                "Both are the same": "Docker and Kubernetes serve different purposes.",
                "Kubernetes replaces Docker": "Kubernetes uses Docker but does not replace it.",
                "Docker is only used for local development": "Docker is used in production environments as well."
            }
        }
    },
    {
        question: "What is a microservices architecture and its relation to DevOps?",
        options: [
            "A design pattern where applications are broken into smaller services",
            "A type of programming language",
            "A DevOps tool",
            "A database management system"
        ],
        answer: "A design pattern where applications are broken into smaller services",
        explanation: {
            correct: "Microservices architecture allows applications to be modular, enabling independent deployment and scaling, aligning with DevOps principles.",
            incorrect: {
                "A type of programming language": "Microservices is an architectural style, not a language.",
                "A DevOps tool": "Microservices is a design pattern, not a tool.",
                "A database management system": "Microservices architecture is not related to database management."
            }
        }
    },
    {
        question: "What is a 'rolling deployment'?",
        options: [
            "Deploying updates gradually to avoid downtime",
            "Shutting down all servers before deploying updates",
            "Only applicable to Kubernetes",
            "A security framework for deployments"
        ],
        answer: "Deploying updates gradually to avoid downtime",
        explanation: {
            correct: "Rolling deployment gradually replaces old instances with new ones, minimizing downtime.",
            incorrect: {
                "Shutting down all servers before deploying updates": "Rolling deployments do not require shutting down servers.",
                "Only applicable to Kubernetes": "Rolling deployments can be used in different environments, not just Kubernetes.",
                "A security framework for deployments": "Rolling deployment is a deployment strategy, not a security framework."
            }
        }
    },
    {
        question: "Explain the concept of 'Blue-Green Deployment'.",
        options: [
            "Running two environments to ensure zero downtime",
            "A testing methodology",
            "A type of database replication",
            "A cloud storage technique"
        ],
        answer: "Running two environments to ensure zero downtime",
        explanation: {
            correct: "Blue-Green Deployment involves running two identical environments, switching traffic to the new version after testing.",
            incorrect: {
                "A testing methodology": "Blue-Green Deployment is a deployment strategy, not just a testing methodology.",
                "A type of database replication": "It is unrelated to database replication.",
                "A cloud storage technique": "Blue-Green Deployment is not a storage technique."
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
    let nextButton = document.getElementById("nextButton");
    if (!nextButton) {
        nextButton = document.createElement("button");
        nextButton.innerText = "Next Question";
        nextButton.id = "nextButton";
        nextButton.style.display = "none"; // Hidden until answer is selected
        nextButton.onclick = nextQuestion;
        document.getElementById("quiz-container").appendChild(nextButton);
    } else {
        nextButton.style.display = "none"; // Hide when new question loads
    }

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
        button.classList.add("correct");
        explanationContainer.innerHTML += `<p class="correct"><strong>Correct!</strong> ${questionData.explanation.correct}</p>`;
    } else {
        button.classList.add("incorrect");
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
            btn.classList.add("correct");
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
