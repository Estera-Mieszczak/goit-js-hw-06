const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;
    if (userEmail === "" || userPassword === "") {
        return console.log("Please fill in all the fields!");
    }
  console.log(`Email: ${userEmail}, Password: ${userPassword}`);
}
