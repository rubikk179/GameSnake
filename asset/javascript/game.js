import {pointBoard,gameBoard,update,draw} from './snake.js';
import {getScoreBoard,initScoreBoard} from "./data.js"
export const scoreBoard = document.querySelector(".score-info");
const btn_scoreBoard = document.getElementById("score-board");
const SettingSpeedSanke = document.querySelector(".setting-game-speed-input");
let lastRenderTime = 0;
let speedSnake = SettingSpeedSanke.value;
let currentStar  = 5;
let commentContent = undefined;
const iconCheckComment = document.querySelector(".icon-check-addcomment");
const inputComment =document.querySelector(".input-comment");              
const comments = document.querySelector(".comments");
initScoreBoard();
window.main = main;
// window.localStorage.clear();
export var IDreq = undefined;
comments.innerHTML = window.localStorage.getItem("list-comments");
export function main(currentTime) {
    IDreq = window.requestAnimationFrame(main);
    const secondLastRenderTime = (currentTime-lastRenderTime)/1000;
    if(secondLastRenderTime < 1/speedSnake) {
        return;
    }
    update();
    draw();
    lastRenderTime = currentTime;
}
export function startGame() {
    pointBoard.classList.remove("hidden");
    gameBoard.classList.remove("hidden");
    window.requestAnimationFrame(main);    
}

setTimeout(() => {
    loading.classList.add("hidden");
    optionsBoard.classList.remove("hidden");
}, 3000);

const loading = document.querySelector(".loading");
export const optionsBoard = document.querySelector(".options-board");
const start = document.getElementById('start-game');

start.addEventListener("click",function(){
    optionsBoard.classList.add('hidden');
    gameBoard.classList.add("background-image");
    startGame();
})

const quitGame = document.getElementById("quit-game");
const quitGameBoard = document.querySelector(".board-quit-game");
const acceptQuit = document.querySelector(".accept-quit");
const noQuit = document.querySelector(".no-quit");
acceptQuit.addEventListener("click",function() {
    window.close();
})
noQuit.addEventListener("click",function() {
    quitGameBoard.classList.add("hidden");
})
quitGame.addEventListener("click",function() {
    quitGameBoard.classList.remove("hidden");
})

//Score board
btn_scoreBoard.addEventListener("click", function() {
    optionsBoard.classList.add("hidden");
    scoreBoard.classList.remove("hidden");
    getScoreBoard();
})
window.OutScoreBoard = OutScoreBoard;
export function OutScoreBoard() {
    optionsBoard.classList.remove("hidden");
    scoreBoard.classList.add("hidden");
}

//feed back
const btn_feedback = document.getElementById("feedback");
const feedbackBoard = document.querySelector(".board-feedback");
btn_feedback.addEventListener("click",function() {
    optionsBoard.classList.add("hidden");
    feedbackBoard.classList.remove("hidden");
})

//star
const star5 = document.querySelector(".star-5");
const star4 = document.querySelector(".star-4");
const star3 = document.querySelector(".star-3");
const star2 = document.querySelector(".star-2");
const star1 = document.querySelector(".star-1");
const paraVote =document.querySelector(".para-vote");
star5.addEventListener("mouseover",function() {
    star5.classList.add("star-hover");
    star4.classList.add("star-hover");
    star3.classList.add("star-hover");
    star2.classList.add("star-hover");
    star1.classList.add("star-hover");
    paraVote.classList.remove("hidden");
    paraVote.textContent = "Excellent";
})
star5.addEventListener("mouseout",function() {
    star5.classList.remove("star-hover");
    star4.classList.remove("star-hover");
    star3.classList.remove("star-hover");
    star2.classList.remove("star-hover");
    star1.classList.remove("star-hover");
    paraVote.classList.add("hidden");
})
star4.addEventListener("mouseover",function() {
    star4.classList.add("star-hover");
    star3.classList.add("star-hover");
    star2.classList.add("star-hover");
    star1.classList.add("star-hover");
    paraVote.classList.remove("hidden");
    paraVote.textContent = "Good";
})
star4.addEventListener("mouseout",function() {
    star4.classList.remove("star-hover");
    star3.classList.remove("star-hover");
    star2.classList.remove("star-hover");
    star1.classList.remove("star-hover");
    paraVote.classList.add("hidden");
})
star3.addEventListener("mouseover",function() {
    star3.classList.add("star-hover");
    star2.classList.add("star-hover");
    star1.classList.add("star-hover");
    paraVote.classList.remove("hidden");
    paraVote.textContent = "Ok";
})
star3.addEventListener("mouseout",function() {
    star3.classList.remove("star-hover");
    star2.classList.remove("star-hover");
    star1.classList.remove("star-hover");
    paraVote.classList.add("hidden");
})
star2.addEventListener("mouseover",function() {
    star2.classList.add("star-hover");
    star1.classList.add("star-hover");
    paraVote.classList.remove("hidden");
    paraVote.textContent = "Bad";
})
star2.addEventListener("mouseout",function() {
    star2.classList.remove("star-hover");
    star1.classList.remove("star-hover");
    paraVote.classList.add("hidden");
})
star1.addEventListener("mouseover",function() {
    star1.classList.add("star-hover");
    paraVote.classList.remove("hidden");
    paraVote.textContent = "Terrible";
})
star1.addEventListener("mouseout",function() {
    star1.classList.remove("star-hover");
    paraVote.classList.add("hidden");
})

// click star
star5.addEventListener("click",function() {
    star5.classList.add("star-click");
    star4.classList.add("star-click");
    star3.classList.add("star-click");
    star2.classList.add("star-click");
    star1.classList.add("star-click");
    paraVote.classList.remove("hidden");
    paraVote.textContent = "Excellent";
    currentStar = 5;
})
star4.addEventListener("click",function() {
    star5.classList.remove("star-click");
    star4.classList.add("star-click");
    star3.classList.add("star-click");
    star2.classList.add("star-click");
    star1.classList.add("star-click");
    paraVote.textContent = "Good";
    paraVote.classList.remove("hidden");
    currentStar = 4;
})

star3.addEventListener("click",function() {
    star5.classList.remove("star-click");
    star4.classList.remove("star-click");
    star3.classList.add("star-click");
    star2.classList.add("star-click");
    star1.classList.add("star-click");
    paraVote.textContent = "Ok";
    paraVote.classList.remove("hidden");
    currentStar = 3;
})
star2.addEventListener("click",function() {
    star5.classList.remove("star-click");
    star4.classList.remove("star-click");
    star3.classList.remove("star-click");
    star2.classList.add("star-click");
    star1.classList.add("star-click");
    paraVote.textContent = "Bad";
    paraVote.classList.remove("hidden");
    currentStar = 2;
})
star1.addEventListener("click",function() {
    star5.classList.remove("star-click");
    star4.classList.remove("star-click");
    star3.classList.remove("star-click");
    star2.classList.remove("star-click");
    star1.classList.add("star-click");
    paraVote.textContent = "Terrible";
    paraVote.classList.remove("hidden");
    currentStar = 1;
})
// send comment
iconCheckComment.addEventListener("click",function() {
    commentContent = inputComment.value;
    inputComment.value = "";
    addCommentdata(commentContent,currentStar);
    star5.classList.remove("star-click");
    star4.classList.remove("star-click");
    star3.classList.remove("star-click");
    star2.classList.remove("star-click");
    star1.classList.remove("star-click");
})

function addCommentdata(content,num) {
    let listComment= window.localStorage.getItem("list-comments");
    let newstr = 
                    `<span class="comment-item">
                        <div class="comment-item-box-img-star">
                            <div class="comment-item-img"></div>
                            <i class="fa-solid fa-star comment-item-stars">${num}</i>
                        </div>
                        <div class="comment-item-content">${content}</div>
                    </span>`;
    if(!listComment) {listComment = newstr;}
    else {listComment = newstr + listComment;}
    window.localStorage.setItem("list-comments",listComment);
    comments.innerHTML = listComment;
}

const btnFeedbackClose = document.querySelector(".btn-feedback-back-icon");
btnFeedbackClose.addEventListener("click",function() {
    optionsBoard.classList.remove("hidden");
    feedbackBoard.classList.add("hidden");
    inputComment.value = '';
    star5.classList.remove("star-click");
    star4.classList.remove("star-click");
    star3.classList.remove("star-click");
    star2.classList.remove("star-click");
    star1.classList.remove("star-click");
})
// button setting
const settingBoard = document.querySelector(".board-setting");
const btn_setting = document.getElementById("setting");
const btnsettingInfoClose = document.querySelector(".btn-setting-info-back-icon");
const btnsettingGameClose = document.querySelector(".btn-setting-game-back-icon");
const btnsettingModeClose = document.querySelector(".btn-setting-mode-back-icon");
const btn_setting_info = document.querySelector(".btn-setting-info");
const btn_setting_game = document.querySelector(".btn-setting-game");
const btn_setting_mode = document.querySelector(".btn-setting-mode");
const settingBoardInfo = document.querySelector(".board-setting-info");
const settingBoardGame = document.querySelector(".board-setting-game");
const settingBoardMode = document.querySelector(".board-setting-mode");
btn_setting.addEventListener("click",function() {
    settingBoard.classList.remove("hidden");
    })  
btn_setting_info.addEventListener("click",function () {
    settingBoardInfo.classList.remove("hidden");
})
btn_setting_game.addEventListener("click",function() {
    settingBoardGame.classList.remove("hidden");
})
btnsettingInfoClose.addEventListener("click",function() {
    settingBoardInfo.classList.add("hidden");
});
btnsettingGameClose.addEventListener("click",function() {
    settingBoardGame.classList.add("hidden");
    speedSnake = SettingSpeedSanke.value;
});
btn_setting_mode.addEventListener("click",function() {
    settingBoardMode.classList.remove("hidden");
})
btnsettingModeClose.addEventListener("click",function() {
    settingBoardMode.classList.add("hidden");
});
//game setting
const musicBackdground = document.querySelector(".myMusic-background");
const checkboxSound = document.querySelector(".checkbox-setting-game");
checkboxSound.checked = false;
checkboxSound.addEventListener("click",checkSound);
function checkSound() {
    if(checkboxSound.checked) {
        musicBackdground.play();
    }
    else musicBackdground.pause();
}
const btnsettingClose = document.querySelector(".btn-setting-back-icon");
btnsettingClose.addEventListener("click",function() {
    settingBoard.classList.add("hidden");
}) 