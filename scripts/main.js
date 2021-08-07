const hint = document.getElementById(`hint`);
const treasureMap = document.querySelector('[alt="map"]');

const generateRandomNumber = (size, gap) => 
Math.floor(Math.random() * (size - (gap*2)) + gap);

const getTreasureCoords = ({width, height}, gap) => ({
        x: generateRandomNumber(width, gap),
        y: generateRandomNumber(height, gap)
});

console.log(hideTreasure(treasureMap, 50));
