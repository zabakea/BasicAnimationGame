let windownumberA = Math.floor((Math.random() * 10) + 1);
let characternumberA = Math.floor((Math.random() * 4) + 1);
let windownumberB = Math.floor((Math.random() * 10) + 11);
let characternumberB = Math.floor((Math.random() * 4) + 5);

let badgeslevel = 0;
let handcuffslevel = 0;

let windowA = document.querySelector("#windowA");
let windowB = document.querySelector("#windowB");

//ScreensVariables

let gameScreen = document.querySelector("#game");
let startingScreen = document.querySelector("#startScreen");
let instructionsScreen = document.querySelector("#instructions");
let settingsScreen = document.querySelector("#settingsScreen");
let won = document.querySelector("#youwon");
let lost = document.querySelector("#youlost");
let outoftime = document.querySelector("#outoftime");

/*window.addEventListener("load", startA);
window.addEventListener("load", startB);
window.addEventListener("load", startTime);*/


window.addEventListener("load", startScreen);

function startScreen() {
    gameScreen.classList.add("hide");
    instructionsScreen.classList.add("hide");
    settingsScreen.classList.add("hide");
    lost.classList.add("hide");
    won.classList.add("hide");
    outoftime.classList.add("hide");
    document.querySelector("#InstructionsButton").addEventListener("click", startInstructions);
    document.querySelector("#PlayGameButton").addEventListener("click", loadGame);
    document.querySelector("#SettingsButton").addEventListener("click", viewSettings);
}

function loadGame() {
    console.log("KORAK PRVI");
    gameScreen.classList.remove("hide");
    startingScreen.classList.add("hide");
    startA();
    startB();
    startTime();

}

let currentPage = 1;

function startInstructions() {
    console.log("Jebene instrukcije");
    instructionsScreen.classList.remove("hide");
    startingScreen.classList.add("hide");

    document.querySelector("#Instructions1").classList.add("hide");
    document.querySelector("#Instructions2").classList.add("hide");
    document.querySelector("#Instructions3").classList.add("hide");
    document.querySelector("#Instructions4").classList.add("hide");
    document.querySelector("#Instructions5").classList.add("hide");
    document.querySelector("#Instructions6").classList.add("hide");

    document.querySelector("#Instructions" + currentPage).classList.remove("hide");

    document.querySelector("#NextPage").addEventListener("click", NextPage);
    document.querySelector("#PrevPage").addEventListener("click", PrevPage);
    document.querySelector("#ClosePage").addEventListener("click", ClosePage);
}

function NextPage() {
    currentPage++;

    if (currentPage > 6) {
        currentPage = 6;
    }
    startInstructions();
}

function PrevPage() {
    currentPage--;

    if (currentPage < 1) {
        currentPage = 1;
    }
    startInstructions();
}

function ClosePage() {
    document.querySelector("#NextPage").removeEventListener("click", NextPage);
    document.querySelector("#PrevPage").removeEventListener("click", PrevPage);
    document.querySelector("#ClosePage").removeEventListener("click", ClosePage);
    currentPage = 1;

    startingScreen.classList.remove("hide");
    startScreen();
}

function viewSettings() {
    console.log("Postavke");
    startingScreen.classList.add("hide");
    settingsScreen.classList.remove("hide");
    document.querySelector("#ClosePageSettings").addEventListener("click", CloseIntroSettings);
}

function CloseIntroSettings() {
    console.log("ZatvoriPostavke");
    document.querySelector("#ClosePageSettings").removeEventListener("click", CloseIntroSettings);
    startingScreen.classList.remove("hide");
    startScreen();
}

function startTime() {
    document.querySelector("#time_sprite").classList.add("timelapse");
    document.querySelector("#settingsWheel").addEventListener("click", gameSettings);
    document.querySelector("#restart").addEventListener("click", restartingGame);
    document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function restartingGame() {
    console.log("OVDJE DODAJ RESET SVIH POSTAVKI");
    badgeslevel = 0;
    handcuffslevel = 0;
    won.classList.add("hide");
    lost.classList.add("hide");
    outoftime.classList.add("hide");
    document.querySelector("#badge1").classList.remove("fullbadge");
    document.querySelector("#badge2").classList.remove("fullbadge");
    document.querySelector("#badge3").classList.remove("fullbadge");
    document.querySelector("#badge4").classList.remove("fullbadge");
    document.querySelector("#badge5").classList.remove("fullbadge");
    document.querySelector("#badge6").classList.remove("fullbadge");
    document.querySelector("#badge7").classList.remove("fullbadge");
    document.querySelector("#handcuffs1").classList.remove("fullhandcuffs");
    document.querySelector("#handcuffs2").classList.remove("fullhandcuffs");
    document.querySelector("#handcuffs3").classList.remove("fullhandcuffs");
    document.querySelector("#time_sprite").classList.remove("pause");
    document.querySelector("#time_sprite").classList.remove("timelapse");
    document.querySelector("#time_sprite").offsetWidth;
    loadGame();
}


function gameSettings() {
    console.log("Postavke U igri");
    settingsScreen.classList.remove("hide");
    document.querySelector("#ClosePageSettings").addEventListener("click", continueGame);
}

function continueGame() {
    settingsScreen.classList.add("hide");
}

function startA() {
    console.log("pocetak");

    windownumberA = Math.floor((Math.random() * 10) + 1);
    characternumberA = Math.floor((Math.random() * 4) + 1);

    windowA.classList.add("window" + windownumberA);
    windowA.classList.add("character" + characternumberA);
    windowA.classList.add("shake");
    windowA.addEventListener("animationend", resetWindowA);
    windowA.addEventListener("click", scorePointsA);


}

function startB() {
    console.log("pocetak");


    windownumberB = Math.floor((Math.random() * 10) + 11);
    characternumberB = Math.floor((Math.random() * 4) + 5);

    windowB.classList.add("window" + windownumberB);
    windowB.classList.add("character" + characternumberB);
    windowB.classList.add("shake2");
    windowB.addEventListener("animationend", resetWindowB);
    windowB.addEventListener("click", scorePointsB);
}


function scorePointsA() {


    if (characternumberA == 1) {
        badgeslevel++;
        document.querySelector("#badge" + badgeslevel).classList.add("fullbadge");
        console.log("Bravo, dobio si bod");
    } else {
        handcuffslevel++;
        document.querySelector("#handcuffs" + handcuffslevel).classList.add("fullhandcuffs");
        console.log("Fulao si");
    }

    windowA.classList.remove("window" + windownumberA);
    windowA.classList.remove("character" + characternumberA);
    windowA.classList.remove("shake");
    windowA.removeEventListener("click", scorePointsA);
    startA();

    if (badgeslevel == 7) {
        winner();
    }
    if (handcuffslevel == 3) {
        loser();
    }
}


function scorePointsB() {
    console.log("Bravo, dobio si bod");


    if (characternumberB == 5) {
        badgeslevel++;
        document.querySelector("#badge" + badgeslevel).classList.add("fullbadge");
        console.log("Bravo, dobio si bod");
    } else {
        handcuffslevel++;
        document.querySelector("#handcuffs" + handcuffslevel).classList.add("fullhandcuffs");
        console.log("Fulao si");
    }

    windowB.classList.remove("window" + windownumberB);
    windowB.classList.remove("character" + characternumberB);
    windowB.classList.remove("shake2");
    windowB.removeEventListener("click", scorePointsB);
    startB();

    if (badgeslevel == 7) {
        winner();
    }
    if (handcuffslevel == 3) {
        loser();
    }
}

function resetWindowA() {
    console.log("Kretenu, sjebo siA");
    windowA.classList.remove("window" + windownumberA);
    windowA.classList.remove("character" + characternumberA);
    windowA.classList.remove("shake");

    windowA.offsetHeight;
    startA();

}

function resetWindowB() {
    console.log("Kretenu, sjebo siB");
    windowB.classList.remove("window" + windownumberB);
    windowB.classList.remove("character" + characternumberB);
    windowB.classList.remove("shake2");

    windowB.offsetHeight;
    startB();

}

function winner() {
    won.classList.remove("hide");
    document.querySelector("#time_sprite").classList.add("pause");
    document.querySelector("#wonRestart").addEventListener("click", restartingGame);
    windowB.removeEventListener("animationend", resetWindowB);
    windowA.removeEventListener("animationend", resetWindowA);
    document.querySelector("#wonRestart").addEventListener("click", resetWindowB);
    document.querySelector("#wonRestart").addEventListener("click", resetWindowA);
}

function loser() {
    lost.classList.remove("hide");
    document.querySelector("#time_sprite").classList.add("pause");
    document.querySelector("#lostRestart").addEventListener("click", restartingGame);
    windowB.removeEventListener("animationend", resetWindowB);
    windowA.removeEventListener("animationend", resetWindowA);
    document.querySelector("#lostRestart").addEventListener("click", resetWindowB);
    document.querySelector("#lostRestart").addEventListener("click", resetWindowA);
}

function timeIsUp() {
    outoftime.classList.remove("hide");
    document.querySelector("#time_sprite").classList.add("pause");
    document.querySelector("#ootRestart").addEventListener("click", restartingGame);
    windowB.removeEventListener("animationend", resetWindowB);
    windowA.removeEventListener("animationend", resetWindowA);
    document.querySelector("#ootRestart").addEventListener("click", resetWindowB);
    document.querySelector("#ootRestart").addEventListener("click", resetWindowA);

}
