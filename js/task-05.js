const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
    if (textInput !== "") {
        output.textContent = event.currentTarget.value.trim() || "Anonymous";
    }
});