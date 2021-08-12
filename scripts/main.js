const hint = document.getElementById(`hint`);
const treasureMap = document.querySelector('[alt="map"]');


function getDistanceToTreasure ({x : cX, y: cY}, 
        {x : tX, y: tY}) {
        return Math.sqrt((cX - tX)**2 + (cY - tY)**2);
}

const generateRandomNumber = (size, gap) => 
Math.floor(Math.random() * (size - (gap*2)) + gap);

const generateTreasureCoords = ({width, height}, gap) => ({
        x: generateRandomNumber(width, gap),
        y: generateRandomNumber(height, gap)
});

