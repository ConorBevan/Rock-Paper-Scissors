const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "") {
        alert("Enter your name.")
    } else {
        alert("You have successfully logged in.");
        window.location.href = ('../../game.html');
    }
});