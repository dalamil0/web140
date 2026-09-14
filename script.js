const welcomeButton = document.querySelector("#welcomeButton");
const message = document.querySelector("#message");

welcomeButton.addEventListener("click", function () {
    message.textContent =
        "Thanks for visiting my portfolio! I'm excited to continue building my web development skills.";
});
