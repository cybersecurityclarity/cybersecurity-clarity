// ===================================
// QUIZ DATA - All 20 Questions
// ===================================

const quizData = [
    // CATEGORY 1: Password & Account Security (Questions 0-3)
    {
        category: "Password & Account Security",
        question: "How many of your accounts use the same or similar password?",
        options: [
            { text: "All or most", score: 0 },
            { text: "Around half", score: 2 },
            { text: "A few", score: 4 },
            { text: "None — all unique", score: 5 }
        ]
    },
    {
        category: "Password & Account Security",
        question: "Do you use a password manager?",
        options: [
            { text: "No", score: 0 },
            { text: "I save passwords in my browser", score: 2 },
            { text: "I use a free password manager", score: 4 },
            { text: "I use a dedicated paid manager", score: 5 }
        ]
    },
    {
        category: "Password & Account Security",
        question: "Have you enabled two-factor authentication (2FA) on your main accounts?",
        options: [
            { text: "None", score: 0 },
            { text: "A few important ones", score: 2 },
            { text: "Most major accounts", score: 4 },
            { text: "All critical accounts", score: 5 }
        ]
    },
    {
        category: "Password & Account Security",
        question: "How often do you update your passwords?",
        options: [
            { text: "Never", score: 0 },
            { text: "Only after I'm locked out or hacked", score: 2 },
            { text: "Once a year", score: 4 },
            { text: "Every 3–6 months or when prompted", score: 5 }
        ]
    },

    // CATEGORY 2: Social Media & Online Behavior (Questions 4-7)
    {
        category: "Social Media & Online Behavior",
        question: "Are your social media profiles public or private?",
        options: [
            { text: "All public", score: 0 },
            { text: "Mostly public", score: 2 },
            { text: "Mixed", score: 4 },
            { text: "Mostly private", score: 5 }
        ]
    },
    {
        category: "Social Media & Online Behavior",
        question: "Do you share personal details (address, location, travel, birthday) online?",
        options: [
            { text: "Regularly", score: 0 },
            { text: "Occasionally", score: 2 },
            { text: "Rarely", score: 4 },
            { text: "Never", score: 5 }
        ]
    },
    {
        category: "Social Media & Online Behavior",
        question: "Have you reviewed your privacy settings recently?",
        options: [
            { text: "Never", score: 0 },
            { text: "Over a year ago", score: 2 },
            { text: "Within the past year", score: 4 },
            { text: "Within the past 3–6 months", score: 5 }
        ]
    },
    {
        category: "Social Media & Online Behavior",
        question: "How do you react to unknown friend requests or DMs?",
        options: [
            { text: "Accept most of them", score: 0 },
            { text: "Sometimes check their profile", score: 2 },
            { text: "Usually ignore", score: 4 },
            { text: "Always verify or ignore completely", score: 5 }
        ]
    },

    // CATEGORY 3: Data Privacy & Protection (Questions 8-11)
    {
        category: "Data Privacy & Protection",
        question: "How often do you back up important files?",
        options: [
            { text: "Never", score: 0 },
            { text: "A few times a year", score: 2 },
            { text: "Monthly", score: 4 },
            { text: "Automatically or weekly", score: 5 }
        ]
    },
    {
        category: "Data Privacy & Protection",
        question: "Do you encrypt or password-protect sensitive files?",
        options: [
            { text: "Never", score: 0 },
            { text: "Occasionally", score: 2 },
            { text: "Most of the time", score: 4 },
            { text: "Always", score: 5 }
        ]
    },
    {
        category: "Data Privacy & Protection",
        question: "How do you dispose of old devices or drives?",
        options: [
            { text: "Sell/discard without wiping", score: 0 },
            { text: "Factory reset only", score: 2 },
            { text: "Wipe or reformat", score: 4 },
            { text: "Secure erase or physical destruction", score: 5 }
        ]
    },
    {
        category: "Data Privacy & Protection",
        question: "Do you know where your personal data is stored online (cloud, devices, apps)?",
        options: [
            { text: "No idea", score: 0 },
            { text: "I know some of it", score: 2 },
            { text: "I have a good idea", score: 4 },
            { text: "I maintain a list or tracker", score: 5 }
        ]
    },

    // CATEGORY 4: Social Engineering Awareness (Questions 12-15)
    {
        category: "Social Engineering Awareness",
        question: "When you receive an unexpected email or text asking for urgent action, what do you do?",
        options: [
            { text: "Click the link", score: 0 },
            { text: "Read it and decide later", score: 2 },
            { text: "Check sender or hover links", score: 4 },
            { text: "Verify sender or report it", score: 5 }
        ]
    },
    {
        category: "Social Engineering Awareness",
        question: "Have you ever reported a phishing or scam attempt?",
        options: [
            { text: "Never", score: 0 },
            { text: "Once or twice", score: 2 },
            { text: "A few times", score: 4 },
            { text: "Regularly report suspicious messages", score: 5 }
        ]
    },
    {
        category: "Social Engineering Awareness",
        question: "Do you verify messages from friends or colleagues that seem \"off\"?",
        options: [
            { text: "Rarely", score: 0 },
            { text: "Sometimes", score: 2 },
            { text: "Often", score: 4 },
            { text: "Always", score: 5 }
        ]
    },
    {
        category: "Social Engineering Awareness",
        question: "How confident are you in spotting fake websites or messages?",
        options: [
            { text: "Not confident at all", score: 0 },
            { text: "Somewhat confident", score: 2 },
            { text: "Confident", score: 4 },
            { text: "Very confident", score: 5 }
        ]
    },

    // CATEGORY 5: Device & Network Security (Questions 16-19)
    {
        category: "Device & Network Security",
        question: "How often do you update your operating system and apps?",
        options: [
            { text: "Rarely", score: 0 },
            { text: "When prompted", score: 2 },
            { text: "Regularly", score: 4 },
            { text: "Automatically", score: 5 }
        ]
    },
    {
        category: "Device & Network Security",
        question: "How secure is your Wi-Fi?",
        options: [
            { text: "Open or default password", score: 0 },
            { text: "Simple password", score: 2 },
            { text: "Strong password, WPA2", score: 4 },
            { text: "WPA3 or advanced router setup", score: 5 }
        ]
    },
    {
        category: "Device & Network Security",
        question: "Do you use antivirus or endpoint protection?",
        options: [
            { text: "None", score: 0 },
            { text: "Free/basic software", score: 2 },
            { text: "Paid version", score: 4 },
            { text: "Managed or business-grade protection", score: 5 }
        ]
    },
    {
        category: "Device & Network Security",
        question: "Do you secure your mobile devices (PINs, biometrics, remote wipe)?",
        options: [
            { text: "Not at all", score: 0 },
            { text: "PIN only", score: 2 },
            { text: "PIN + biometrics", score: 4 },
            { text: "PIN + biometrics + remote tracking", score: 5 }
        ]
    }
];

// ===================================
// QUIZ STATE MANAGEMENT
// ===================================

let currentQuestion = 0;
let userAnswers = [];
let categoryScores = {
    "Password & Account Security": 0,
    "Social Media & Online Behavior": 0,
    "Data Privacy & Protection": 0,
    "Social Engineering Awareness": 0,
    "Device & Network Security": 0
};

// ===================================
// DOM ELEMENTS (will be initialized after page loads)
// ===================================

let questionText, categoryBadge, optionsContainer, currentQuestionEl, totalQuestionsEl, progressFill, prevBtn, nextBtn, submitBtn;

// ===================================
// INITIALIZE QUIZ
// ===================================

function initQuiz() {
    // Get DOM elements
    questionText = document.getElementById('question-text');
    categoryBadge = document.getElementById('category-badge');
    optionsContainer = document.getElementById('options-container');
    currentQuestionEl = document.getElementById('current-question');
    totalQuestionsEl = document.getElementById('total-questions');
    progressFill = document.getElementById('progress-fill');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    submitBtn = document.getElementById('submit-btn');
    
    // Check if elements exist
    if (!questionText || !categoryBadge || !optionsContainer) {
        console.error('Quiz elements not found!');
        return;
    }
    
    // Set up event listeners
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', calculateResults);
    
    // Display first question
    totalQuestionsEl.textContent = quizData.length;
    displayQuestion();
}

// ===================================
// DISPLAY CURRENT QUESTION
// ===================================

function displayQuestion() {
    const current = quizData[currentQuestion];
    
    // Update question text and category
    questionText.textContent = current.question;
    categoryBadge.textContent = current.category;
    
    // Update progress
    currentQuestionEl.textContent = currentQuestion + 1;
    const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = progressPercent + '%';
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    current.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.dataset.score = option.score;
        button.dataset.index = index;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestion] !== undefined && userAnswers[currentQuestion].optionIndex === index) {
            button.classList.add('selected');
        }
        
        button.addEventListener('click', () => selectOption(button, option.score, index));
        optionsContainer.appendChild(button);
    });
    
    // Update button visibility
    updateNavigationButtons();
}

// ===================================
// SELECT AN OPTION
// ===================================

function selectOption(selectedButton, score, optionIndex) {
    // Remove 'selected' class from all options
    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.classList.remove('selected'));
    
    // Add 'selected' class to clicked option
    selectedButton.classList.add('selected');
    
    // Store the answer
    userAnswers[currentQuestion] = {
        questionIndex: currentQuestion,
        optionIndex: optionIndex,
        score: score,
        category: quizData[currentQuestion].category
    };
    
    // Enable next/submit button
    if (currentQuestion === quizData.length - 1) {
        submitBtn.disabled = false;
    } else {
        nextBtn.disabled = false;
    }
}

// ===================================
// NAVIGATION FUNCTIONS
// ===================================

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateNavigationButtons() {
    // Show/hide previous button
    if (currentQuestion === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }
    
    // Show/hide next and submit buttons
    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        
        // Check if last question is answered
        if (userAnswers[currentQuestion] !== undefined) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
        
        // Check if current question is answered
        if (userAnswers[currentQuestion] !== undefined) {
            nextBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }
    }
}

// ===================================
// CALCULATE RESULTS
// ===================================

function calculateResults() {
    let totalScore = 0;
    
    // Calculate total and category scores
    userAnswers.forEach(answer => {
        totalScore += answer.score;
        categoryScores[answer.category] += answer.score;
    });
    
    // Cap total score at 90 (which is 90% when displayed)
    const maxPossibleScore = quizData.length * 5; // 20 * 5 = 100
    let percentageScore = Math.round((totalScore / maxPossibleScore) * 100);
    
    // Apply the 90% cap
    if (percentageScore > 90) {
        percentageScore = 90;
    }
    
    // Calculate category percentages (each category has 4 questions * 5 points = 20 max)
    const categoryPercentages = {};
    Object.keys(categoryScores).forEach(category => {
        categoryPercentages[category] = Math.round((categoryScores[category] / 20) * 100);
    });
    
    // Find weakest categories
    const sortedCategories = Object.entries(categoryPercentages)
        .sort((a, b) => a[1] - b[1])
        .slice(0, 2);
    
    // Store results in localStorage
    const results = {
        totalScore: percentageScore,
        categoryScores: categoryPercentages,
        weakestCategories: sortedCategories,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('quizResults', JSON.stringify(results));
    
    // Redirect to results page
    window.location.href = 'results.html';
}

// ===================================
// START QUIZ ON PAGE LOAD
// ===================================

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    // DOM is already loaded
    initQuiz();
}
