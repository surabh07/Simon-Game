let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("Game Started!");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length) {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        setTimeout(levelUp, 1000)
       };
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(this);
     
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}