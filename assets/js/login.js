/* Login Form */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

/* When you click play game button it will not take you to the game unless you put in a value in the input */
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username === "") {
        alert("Enter a username.")
    } else {
        window.location.href = ('../../game.html');
    }
});