var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var comp = ['r', 'p', 's'];

rock.addEventListener('click', gamePlay(rock));
paper.addEventListener('click', gamePlay(paper));
scissors.addEventListener('click', gamePlay(scissors));


function gamePlay(item) {
    var compChoose = Math.floor(Math.random() * 3)
    var userChoose = item;
}
