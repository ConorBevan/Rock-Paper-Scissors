var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var userscore = document.getElementById('user-score');
var compscore = document.getElementById('computer-score');
var result = document.getElementById('result')
const resetBtn = document.getElementById("reset");
const rulesBtn = document.getElementById("rules");
var comp = ['r', 'p', 's'];

rock.addEventListener('click', function () {
    gamePlay(rock)
});
paper.addEventListener('click', function () {
    gamePlay(paper)
});
scissors.addEventListener('click', function () {
    gamePlay(scissors);
});

function gamePlay(item) {
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
};

resetBtn.addEventListener("click", () => {
    userscore.innerText = 0;
    compscore.innerText = 0;
    result.innerHTML = "Start!";
});

rulesBtn.addEventListener("click", () => {
    alert('Rock wins against scissors; paper wins against rock; and scissors wins against paper. If both players throw the same hand signal, it is considered a tie, and play resumes. Good luck!')
});