import {getDistanceToTreasure} from './utils/getDistanceToTreasure.js';
import {generateTreasureCoords} from './utils/generateTreasureCoords.js';

const hint = document.getElementById(`hint`);
const treasureMap = document.querySelector('[alt="map"]');

console.log(getDistanceToTreasure({x:2,y:2}, {x:3,y:3}));
console.log(generateTreasureCoords({width:500, height:500}, 20));
