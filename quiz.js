var urlParams = new URLSearchParams(window.location.search);
var selectedLevel = urlParams.get("level") || "level1";

var validLevels = ["level1", "level2", "level3"];

if (!validLevels.includes(selectedLevel)) {
    window.location.href = "levels.html";
}

function canAccessLevel(level) {

    // Level 1 is always unlocked
    if (level === "level1") {
        return true;
    }

    if (level === "level2") {
        var level1Score = Number(
            localStorage.getItem("level1_score") || 0
        );

        return level1Score >= 12;
    }

    if (level === "level3") {
        var level2Score = Number(
            localStorage.getItem("level2_score") || 0
        );

        return level2Score >= 12;
    }

    return false;
}


if (!canAccessLevel(selectedLevel)) {

    alert(
        "You must pass the previous level with at least 60% marks."
    );

    window.location.href = "levels.html";
}

var questions = quizQuestions[selectedLevel];


var currentQuestion = 0;
var score = 0;
var selectedAnswer = null;


var questionElement = document.getElementById("question");

var optionElements = document.querySelectorAll(".option");

var nextButton = document.getElementById("next-btn");

var questionNumber = document.getElementById("question-number");

var scoreElement = document.getElementById("score");

var progress = document.getElementById("progress");

var levelTitle = document.getElementById("level-title");


var levelNames = {
    level1: "LEVEL 1 - EASY",
    level2: "LEVEL 2 - MEDIUM",
    level3: "LEVEL 3 - DIFFICULT"
};

levelTitle.textContent = levelNames[selectedLevel];

function loadQuestion() {

    var question = questions[currentQuestion];

    questionElement.textContent = question.question;

    for (var i = 0; i < 4; i++) {

        document.getElementById("option" + i).textContent =
            question.options[i];
    }

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    scoreElement.textContent =
        "Score: " + score;

    var progressPercentage =
        ((currentQuestion + 1) / questions.length) * 100;

    progress.style.width =
        progressPercentage + "%";

    selectedAnswer = null;

    optionElements.forEach(function (option) {

        option.classList.remove("selected");

    });

    nextButton.disabled = true;
}


function selectAnswer(answer) {

    selectedAnswer = answer;

    optionElements.forEach(function (option) {

        option.classList.remove("selected");

    });

    optionElements[answer].classList.add("selected");

    nextButton.disabled = false;
}


function nextQuestion() {

    if (selectedAnswer === null) {
        return;
    }

    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        finishQuiz();
    }
}

function finishQuiz() {

    var totalQuestions = questions.length;

    var percentage =
        Math.round((score / totalQuestions) * 100);

    localStorage.setItem(
        selectedLevel + "_score",
        score
    );

    localStorage.setItem(
        selectedLevel + "_percentage",
        percentage
    );

    window.location.href =
        "result.html?level=" + selectedLevel;
}


loadQuestion();