const hint = document.getElementById(`hint`);
const treasureMap = document.querySelector('[alt="map"]');

const generateRandomNumber = (size, gap) => 
Math.floor(Math.random() * (size - (gap*2)) + gap);

const generateTreasureCoords = ({width, height}, gap) => ({
        x: generateRandomNumber(width, gap),
        y: generateRandomNumber(height, gap)
});

console.log(generateTreasureCoords(treasureMap, 50));
