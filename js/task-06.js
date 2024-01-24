const textInput = document.querySelector('#validation-input');
const dataLength = Number(textInput.dataset.length);
textInput.addEventListener("blur", () => {
    
    if (textInput.value.length === dataLength) {
        textInput.classList.replace("invalid", "valid");
    } else {
        textInput.classList.add("invalid")
    }
});