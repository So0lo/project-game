import { openPopUp } from "./popUp.js";
import { mapClickHandler} from './mapClickHandler.js';
import {generateTreasureCoords} from './generateTreasureCoords.js';

const hint = document.getElementById(`hint`);
const treasureMap = document.querySelector('[alt="map"]');
export let treasureCoords = generateTreasureCoords(treasureMap, 50);

export function startNewGame () {
    treasureCoords = generateTreasureCoords(treasureMap, 50);
    document.getElementsByClassName(`popup`)[0].remove();
    hint.textContent = '';
    treasureMap.addEventListener(`click`, mapClickHandler);
}

export function endGame () {
    treasureMap.removeEventListener('click', mapClickHandler);
    openPopUp();
}


