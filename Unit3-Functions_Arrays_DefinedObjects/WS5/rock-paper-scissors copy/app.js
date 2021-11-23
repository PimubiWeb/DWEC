import calcMachineOption from './modules/calculemachineoption.js';
import * as c from './modules/const';

c.rockBtn.addEventListener("click", () => {
    play(c.ROCK);
});
c.paperBtn.addEventListener("click", () => {
    play(c.PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(c.SCISSORS);
});

let isPlaying = false;

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "Chossing!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {
        
        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case c.TIE:
                resultText.innerHTML = "You have tied!";
                break;
            case c.WIN:
                resultText.innerHTML = "You win!";
                break;
            case c.LOST:
                resultText.innerHTML = "You lost!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return c.TIE;

    } else if (userOption === c.ROCK) {

        if (machineOption === c.PAPER) return c.LOST;
        if (machineOption === c.SCISSORS) return c.WIN;

    } else if (userOption === c.PAPER) {

        if (machineOption === c.SCISSORS) return c.LOST;
        if (machineOption === c.ROCK) return c.WIN;

    } else if (userOption === c.SCISSORS) {

        if (machineOption === c.ROCK) return c.LOST;
        if (machineOption === c.PAPER) return c.WIN;

    }
}
