
const myForm = document.getElementById("myForm");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

myForm.addEventListener("submit", (event) => {

const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;
    

if (password !== confirmPassword) {
    event.preventDefault(); //Prevent form submission
    passwordError.textContent = "*Passwords do not match.";
    confirmPasswordError.textContent = "*Passwords do not match.";

}


});