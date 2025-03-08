document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector("#text-input");
    let messageDiv = document.querySelector("#output-div");
    let submitButton = document.querySelector("#submit");
    let resetButton = document.querySelector("#reset");

    submitButton.addEventListener('click', () => {
        let data = input.value.trim().split(",");

        if (data.length === 0 || (data.length === 1 && data[0] === "")) {
            messageDiv.textContent = "Please enter some text!";
            return;
        }

        // Generate a random index within valid range
        let randNumber = Math.floor(Math.random() * data.length);
        messageDiv.textContent = data[randNumber]; // Display a random word

    });

    resetButton.addEventListener('click', () => {
        input.value = "";
        messageDiv.textContent = ""; // Clear output as well
    });
});
