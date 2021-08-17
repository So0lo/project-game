import {startNewGame} from "./startEndGame.js";
import { treasureCoords } from "./startEndGame.js";

export function openPopUp () {
    const mapWrapper = document.getElementById(`map_wrapper`);
    const popup = document.createElement(`div`);
    popup.classList.add(`popup`);
    popup.style.left = treasureCoords.x + "px";
    popup.style.top = treasureCoords.y + "px";

    const btnStartNew = document.createElement(`button`);
    btnStartNew.textContent = 'start new game';
    btnStartNew.addEventListener(`click`, startNewGame);
    btnStartNew.classList.add(`start`);

    const winMessage = document.createElement(`span`);
    winMessage.textContent = `YOU WON!`;

    popup.append(winMessage);
    popup.append(btnStartNew);
    mapWrapper.append(popup);
}
