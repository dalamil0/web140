let score = 0;

const completedQuestions = new Set();
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreButton = document.getElementById("show-score");
const scoreResult = document.getElementById("score-result");

function checkAnswer(event) {
    const button = event.target;
    const question = button.dataset.question;
    const feedback = document.getElementById("feedback" + question);

    if (button.dataset.correct === "true") {
        feedback.textContent = "Correct!";

        if (!completedQuestions.has(question)) {
            score++;
            completedQuestions.add(question);

            const questionButtons = document.querySelectorAll(
                '.answer-btn[data-question="' + question + '"]'
            );

            questionButtons.forEach(function(answer) {
                answer.disabled = true;
            });
        }
    } else {
        if (!completedQuestions.has(question)) {
            feedback.textContent = "Incorrect. Try again!";
        }
    }
}

answerButtons.forEach(function(button) {
    button.addEventListener("click", checkAnswer);
});

scoreButton.addEventListener("click", function() {
    scoreResult.textContent = "Your Score: " + score + " out of 5";
});
