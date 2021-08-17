import { mapClickHandler } from './utils/mapClickHandler.js';

const treasureMap = document.querySelector('[alt="map"]');

treasureMap.addEventListener(`click`, mapClickHandler);

