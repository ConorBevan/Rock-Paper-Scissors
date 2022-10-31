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
            alert('You won!');
        } else if (compChoose == 'p') {
            compscore.textContent = Number(compscore.textContent) + 1;
            alert('You lost!');
        } else {
            alert('Its a draw, throw again!');
        }
    }
    if (userChoose == 'paper') {
        if (compChoose == 's') {
            compscore.textContent = Number(compscore.textContent) + 1;
            alert('You lost!');
        } else if (compChoose == 'p') {
            alert('Its a draw, throw again!');
        } else {
            userscore.textContent = Number(userscore.textContent) + 1;
            alert('You won!');
        }
    }
    if (userChoose == 'scissors') {
        if (compChoose == 's') {
            alert('Its a draw, throw again!');
        } else if (compChoose == 'p') {
            alert('You won!');
            userscore.textContent = Number(userscore.textContent) + 1;
        } else {
            compscore.textContent = Number(compscore.textContent) + 1;
            alert('You lost!');
        }
    }
}

/* When you click reset button all scores values get set to 0 */
resetBtn.addEventListener("click", () => {
    "use strict";
    userscore.innerText = 0;
    compscore.innerText = 0;
});

/* when you click this button an alert is prompted to display game rules */
rulesBtn.addEventListener("click", () => {
    "use strict";
    alert('Rock wins against scissors; paper wins against rock; and scissors wins against paper. If both players throw the same hand signal, it is considered a tie, and play resumes. Good luck!');
});