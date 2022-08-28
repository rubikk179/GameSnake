import {updateScoreBoard,updateScoreBoardName} from "./data.js"
import {IDreq,optionsBoard, startGame} from "./game.js";
let newSegments = 0;
let expansionRate = 1;
let expansionPoint = 5;
var gridSize = 21;
let currentPoint = 0;
let gameOver = false;
var snakeBody = [{ x:10,y:10 }];
let food = getRandomFoodPosition();
let posWin = 1;
let currentName = undefined;
// window.localStorage.clear();
export const gameBoard = document.getElementById('game-board');
export const containerGame = document.querySelector('.container');
export const noticeBoard = document.querySelector(".board-notice");
const playAgain = document.querySelector(".gameOverPlayAgain");
const Ok = document.querySelector(".gameOverOk");
export const pointBoard = document.getElementById('point-board');
//update 
export function update() {
    if(gameOver) {
    let score3 = window.localStorage.getItem("score3"); 
        if(currentPoint > score3) {
            win();
        }
        else {
            lose();
        }
        noticeBoard.classList.remove("hidden");        
        pointBoard.classList.add("hidden");
        noticeGameover(currentPoint);
        window.cancelAnimationFrame(IDreq);
    }
    updateSnake();
    updateFood();
    checkDeath();
}

Ok.addEventListener("click",function() {
    noticeBoard.classList.add("hidden");
    optionsBoard.classList.remove('hidden');
    gameBoard.classList.add("hidden");
    inputDirection ={x:0,y:0};
    gameOver = false;
    snakeBody = [{ x:10,y:10 }];
    currentPoint = 0;
    food = getRandomFoodPosition();
    whenWin.classList.add("hidden");
    whenLose.classList.add("hidden");
    boxInputName.classList.remove("hidden");
    userName.innerHTML = '';
})
playAgain.addEventListener("click",function() {
    inputDirection ={x:0,y:0};
    gameOver = false;
    snakeBody = [{ x:10,y:10 }];
    currentPoint = 0;
    food = getRandomFoodPosition();
    noticeBoard.classList.add("hidden");
    whenWin.classList.add("hidden");
    whenLose.classList.add("hidden");
    boxInputName.classList.remove("hidden");
    userName.innerHTML = '';
    startGame();
})
//notice gameover
const scoreNotice = document.querySelector(".score-notice");
function noticeGameover(point) {
    scoreNotice.textContent = `SCORE: ${point}`;
}
    
export function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    noticePoint(currentPoint);
}


function updateSnake() {
    addSegments();
    const input = getInputDirection();
    if(input.x ==0 && input.y == 0) {
        return;
    }
    for(let i = snakeBody.length-2;i>=0;i--) {
        snakeBody[i+1] = {...snakeBody[i] };
    }
    
    snakeBody[0].x += input.x;
    snakeBody[0].y += input.y;
}

// draw snake,food

function drawSnake(gameBoard) {
    snakeBody.forEach((segment,index) => {
        const snakeElement  = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        if(!index) {
            snakeElement.classList.add('headSnake');
        }
        else {
            snakeElement.classList.add('snake');
        }
        gameBoard.appendChild(snakeElement)
    })
}

function drawFood(gameBoard) {
    const foodElement  = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

// input direction 
let inputDirection = { x:0,y:0};
let lastInputDirection = {x:0,y:0};
let lastlastInputDirection = {x:0,y:0};
window.addEventListener('keydown',e => {
    switch(e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !=0) break;
            inputDirection = {x:0,y:-1}
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !=0) break;
            inputDirection = {x:0,y:1}
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !=0) break;
            inputDirection = {x:1,y:0}
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !=0) break;
            inputDirection = {x:-1,y:0}
            break;
        case ' ':
            if(lastInputDirection.x ==0 && lastInputDirection.y==0) 
                inputDirection = lastlastInputDirection;
            else inputDirection ={x:0,y:0};
            break;
    }
    lastlastInputDirection = lastInputDirection;  
})
function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}
// new segment , calc point
function addSegments() {
    if(newSegments) {
        currentPoint +=expansionPoint;
    }
    for(let i=0;i<newSegments;i++) {
        snakeBody.push({...snakeBody[snakeBody.length-1] });
    }
    newSegments = 0;
}

function expandSnake(amount) {
    newSegments += amount;
}

//update Food
function updateFood() {
    if(onSnake(food)) {
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
    }
}

function onSnake(position,{ignoreHead = false} = {}) {
    return snakeBody.some((segment,index) => {
        if(ignoreHead && index==0) return false;
        return equalPositions(segment,position);
    })
}

function equalPositions(pos1,pos2) {
    return (
        pos1.x == pos2.x && pos1.y == pos2.y
    )
}

function getRandomFoodPosition() {
    let foodPosition;
    while(foodPosition == null || onSnake(foodPosition)) {
        foodPosition = randomGridPosition();
    }
    return foodPosition;
}

function randomGridPosition() {
    return {
        x: Math.floor(Math.random()*gridSize) +1,
        y: Math.floor(Math.random()*gridSize) +1,
    }
}

//check death
function checkDeath() {
    gameOver = outsideGrid(snakeBody[0]) || snakeIntersection();
} 
function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridSize ||
        position.y < 1 || position.y > gridSize
    )
}  
function snakeIntersection() {
    return onSnake(snakeBody[0],{ignoreHead:true});
}
// notice points
function noticePoint(point) {
    pointBoard.innerHTML = `
    <h2>SCORE</h2> 
    <span id="current-point">${currentPoint}</span>
    `;
}
//name in score board
const whenWin = document.querySelector(".whenWin");
const whenLose = document.querySelector(".whenLose");
const inputName = document.getElementById("input-name");
const iconCheckInputName = document.querySelector(".icon-check-inputName");
const userName = document.querySelector(".username");
const medalNotice = document.querySelector(".medal-notice");
const boxInputName = document.querySelector(".box-input-name");
iconCheckInputName.addEventListener("click",function() {
    iconCheckInputName.classList.add("icon-check-inputNameHover");
    currentName = inputName.value;
    inputName.value = "";
    boxInputName.classList.add("hidden");
    userName.innerHTML =`<p>${currentName}</p>`; 
    updateScoreBoardName(posWin,currentName);
}
);
function win() {
    whenWin.classList.remove("hidden");
    const day = new Date();
    posWin = updateScoreBoard(currentPoint,day.toLocaleDateString());
    medalNotice.textContent= `${posWin}st`;
}
function lose() {
    whenLose.classList.remove("hidden");
}
