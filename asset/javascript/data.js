import {scoreBoard,OutScoreBoard } from "./game.js";
import {noticeBoard } from "./snake.js";
export function getScoreBoard() {
    scoreBoard.innerHTML = `
    <span class="scoreboard-item medal-gold"><i class="fa-solid fa-medal medal">  ${window.localStorage.getItem("user1")}</i> <i class="fa-solid fa-forward">  ${window.localStorage.getItem("score1")} </i> <i class="fa-solid fa-forward"> ${window.localStorage.getItem("day1")} </i> </span>
    <span class="scoreboard-item medal-silver"><i class="fa-solid fa-medal medal">  ${window.localStorage.getItem("user2")}</i> <i class="fa-solid fa-forward">  ${window.localStorage.getItem("score2")} </i> <i class="fa-solid fa-forward"> ${window.localStorage.getItem("day2")} </i> </span>
    <span class="scoreboard-item medal-bronze"><i class="fa-solid fa-medal medal">  ${window.localStorage.getItem("user3")}</i> <i class="fa-solid fa-forward">  ${window.localStorage.getItem("score3")} </i> <i class="fa-solid fa-forward"> ${window.localStorage.getItem("day3")} </i> </span>
    <span id="back" onclick="OutScoreBoard()">BACK</span>
    ` 
}
export function updateScoreBoard(point,day) {
    const val1 = window.localStorage.getItem("score1");
    const val2 = window.localStorage.getItem("score2");
    const val3 = window.localStorage.getItem("score3");
    const day1 = window.localStorage.getItem("day1");
    const day2 = window.localStorage.getItem("day2");
    if(point > val1) {
        window.localStorage.setItem("score1",point);
        window.localStorage.setItem("day1",day);
        window.localStorage.setItem("score2",val1);
        window.localStorage.setItem("day2",day1);
        window.localStorage.setItem("score3",val2);
        window.localStorage.setItem("day3",day2);
        return 1;
    }
    else if(point > val2) {
        window.localStorage.setItem("score2",point);
        window.localStorage.setItem("day2",day);
        window.localStorage.setItem("score3",val2);
        window.localStorage.setItem("day3",day2);
        return 2;
    }
    else if(point > val3) {
        window.localStorage.setItem("score3",point);
        window.localStorage.setItem("day3",day);
        return 3;
    }
}

export function updateScoreBoardName(pos,currentName) {
    const user1 = window.localStorage.getItem("user1");
    const user2 = window.localStorage.getItem("user2");
    switch(pos) {
        case 1:
            window.localStorage.setItem("user1",currentName); 
            window.localStorage.setItem("user2",user1);
            window.localStorage.setItem("user3",user2);
            break;
        case 2:
            window.localStorage.setItem("user2",currentName); 
            window.localStorage.setItem("user3",user2);
            break;
        case 3:
            window.localStorage.setItem("user3",currentName); 
            break;
    }
}

export function initScoreBoard() {
    if(window.localStorage.length) return;
    window.localStorage.setItem('score1',3);
    window.localStorage.setItem('score2',2);
    window.localStorage.setItem('score3',1);
    window.localStorage.setItem('day1',NaN);
    window.localStorage.setItem('day2',NaN);
    window.localStorage.setItem('day3',NaN);
    window.localStorage.setItem('user1',NaN);
    window.localStorage.setItem('user2',NaN);
    window.localStorage.setItem('user3',NaN);
}

// comment data
