import {hints} from '../constants/hints.js';
import {endGame} from './startEndGame.js';

function removePreviousClass (anchor) {
    hints.forEach((cls) => {
        if (anchor.classList.contains(cls)) {
            anchor.classList.remove(cls);
        }
    });
}

function makeHint (hintName, anchor) {
    anchor.classList.add(hintName);
    anchor.textContent = hintName.toUpperCase();
}

export function generateHint (distance, anchor) {
    removePreviousClass(anchor);
    if (distance < 30) {
        makeHint('hot', anchor);
        endGame();
    } else if (distance < 60) {
        makeHint('warm', anchor);
    } else if (distance < 100) {
        makeHint('medium', anchor);
    } else if (distance < 140) {
        makeHint('cold', anchor);
    } else {
        makeHint('winter', anchor);
    }
}
