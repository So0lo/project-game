import {startNewGame, treasureCoords} from "../startEndGame.js";

export function openPopUp () {
    const mapWrapper = document.getElementById(`map_wrapper`);
    const popup = createPopUp();

    const btnStartNew = createBtn();

    const winMessage = document.createElement(`span`);
    winMessage.textContent = `YOU WON!`;

    popup.append(winMessage);
    popup.append(btnStartNew);
    mapWrapper.append(popup);
}

function createPopUp () {
    const elem = document.createElement(`div`);
    elem.classList.add(`popup`);
    elem.style.left = treasureCoords.x + "px";
    elem.style.top = treasureCoords.y + "px";
    return elem;
}

function createBtn () {
    const elem = document.createElement(`button`);
    elem.textContent = 'start new game';
    elem.addEventListener(`click`, startNewGame);
    elem.classList.add(`start`);
    return elem;
}
