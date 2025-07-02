const boxes = document.querySelectorAll(".box");
let gameBoard = document.getElementById('gameboard');
let scoreBoard = document.getElementById('scoreboard');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');
let currentPlayer = 'X';
let startBtn = document.getElementById('start');

boxes.forEach(box => {
    box.addEventListener('click', ()=>{
       if(box.textContent === ""){
        box.textContent = currentPlayer;
        box.classList.add(currentPlayer === 'X' ? 'X-mark' : 'O-mark');
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
       
       }
    })
})

startBtn.addEventListener('click', ()=>{
    gameBoard.classList.add('showGameBoard');
    scoreBoard.style.display = "block";
    reset.style.display = 'block';
    stop.style.display = 'block';
})