import {getDistanceToTreasure} from './getDistanceToTreasure.js';
import { generateHint } from './gameHelpers.js';
import { treasureCoords } from "./startEndGame.js";

const hint = document.getElementById(`hint`);

export function mapClickHandler({offsetX, offsetY}) {
    const userClick = {
        x: offsetX,
        y: offsetY
    };
    generateHint(getDistanceToTreasure(userClick, 
        treasureCoords), hint);
};

