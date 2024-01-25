const registerForm = document.querySelector(".login-form");
let user = {};
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;
    if (userEmail === "" || userPassword === "") {
        return alert("Please fill in all the fields!");
    }
  user.email = userEmail;
  user.password = userPassword;
  console.log(user);
}
