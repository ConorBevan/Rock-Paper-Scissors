/* Login Form majority taken from https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1 */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

const parentContainer =  document.getElementById("parent-container");
const startContainer = document.getElementById("start-container");

/* When you click play game button it will not take you to the game unless you put in a value in the input */
loginButton.addEventListener("click", (e) => {
    "use strict";
    e.preventDefault();
    const username = loginForm.username.value;

    if (username.trim() == "") {
        alert("Enter a username.");
    } else {
        parentContainer.style.display = 'block';
        startContainer.style.display = 'none';
    }
});

/* Start of Game Section */
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var userscore = document.getElementById('user-score');
var compscore = document.getElementById('computer-score');
const resetBtn = document.getElementById("reset");
const rulesBtn = document.getElementById("rules");
var comp = ['r', 'p', 's'];

/* These event listeners allow you to click the icons and get a response from the function gamePlay */
rock.addEventListener('click', function () {
    "use strict";
    gamePlay(rock);
});
paper.addEventListener('click', function () {
    "use strict";
    gamePlay(paper);
});
scissors.addEventListener('click', function () {
    "use strict";
    gamePlay(scissors);
});

/* This loop displays an alert depending on outcome and adds a score of +1 to the scorebaord to the corresponding winner */
function gamePlay(item) {
    "use strict";
    var compChoose = comp[Math.floor(Math.random() * 3)];
    var userChoose = item.id;

    if (userChoose == 'rock') {
        if (compChoose == 's') {
            userscore.textContent = Number(userscore.textContent) + 1;
            alert('You won! Rock beats scissors!');
        } else if (compChoose == 'p') {
            compscore.textContent = Number(compscore.textContent) + 1;
            alert('You lost! Paper beats rock!');
        } else {
            alert('Its a draw, throw again!');
        }
    }
    if (userChoose == 'paper') {
        if (compChoose == 's') {
            compscore.textContent = Number(compscore.textContent) + 1;
            alert('You lost! Scissors beats paper!');
        } else if (compChoose == 'p') {
            alert('Its a draw, throw again!');
        } else {
            userscore.textContent = Number(userscore.textContent) + 1;
            alert('You won! Paper beats rock!');
        }
    }
    if (userChoose == 'scissors') {
        if (compChoose == 's') {
            alert('Its a draw, throw again!');
        } else if (compChoose == 'p') {
            alert('You won! Scissors beats paper!');
            userscore.textContent = Number(userscore.textContent) + 1;
        } else {
            compscore.textContent = Number(compscore.textContent) + 1;
            alert('You lost! Rock beats scissors!');
        }
    }
    endGame();
}

/* This function displays alert of winner and resets scoreboard back to zero */
function endGame() {
    "use strict";
    if (userscore.innerText == 5) {
        alert('Game Over! You won!');
        userscore.innerText = 0;
        compscore.innerText = 0;
    } else if (compscore.innerText == 5) {
        alert('Game Over! You lost!');
        compscore.innerText = 0;
        userscore.innerText = 0;
    }
}

/* When you click reset button all scores values get set to 0 */
resetBtn.addEventListener("click", () => {
    "use strict";
    userscore.innerText = 0;
    compscore.innerText = 0;
});

/* When you click this button an alert is prompted to display game rules */
rulesBtn.addEventListener("click", () => {
    "use strict";
    alert('The winner of the game is the first to 5 points! Game rules: Rock wins against scissors; paper wins against rock; and scissors wins against paper. If both players throw the same hand signal, it is considered a tie so nobody gets a point. Good luck!');
});