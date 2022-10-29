const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "") {
        alert("Enter a username.")
    } else {
        window.location.href = ('../../game.html');
    }
});