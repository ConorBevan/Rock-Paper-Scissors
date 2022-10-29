const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        window.location.href = ('../../game.html');
    } else {
        alert("Enter your name.")
    }
});

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var userscore = document.getElementById('user-score');
var compscore = document.getElementById('computer-score');
var result = document.getElementById('result')
var comp = ['r', 'p', 's'];

rock.addEventListener('click', function () {
    gamePlay(rock)
}
);
paper.addEventListener('click', function () {
    gamePlay(paper)
}
);
scissors.addEventListener('click', function () {
    gamePlay(scissors);
}
);

function gamePlay(item) {
    var compChoose = comp[Math.floor(Math.random() * 3)];
    var userChoose = item.id;

    if (userChoose == 'rock') {
        if (compChoose == 's') {
            result.textContent = 'User Won!'
            userscore.textContent = Number(userscore.textContent) + 1;
        } else if (compChoose == 'p') {
            result.textContent = 'Computer won!'
            compscore.textContent = Number(compscore.textContent) + 1;
        } else {
            result.textContent = 'Draw!'
        }
    }
    if (userChoose == 'paper') {
        if (compChoose == 's') {
            result.textContent = 'Computer Won!'
            compscore.textContent = Number(compscore.textContent) + 1;
        } else if (compChoose == 'p') {
            result.textContent = 'Draw!'
        } else {
            result.textContent = 'User won!'
            userscore.textContent = Number(userscore.textContent) + 1;
        }
    }
    if (userChoose == 'scissors') {
        if(compChoose == 's') {
            result.textContent = 'Draw!'
        } else if (compChoose == 'p') {
            result.textContent = 'User won!'
            userscore.textContent = Number(userscore.textContent) + 1;
        } else {
            result.textContent = 'Computer won!'
            compscore.textContent = Number(compscore.textContent) + 1;
        }
    }
}
