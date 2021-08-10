// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks > 42){
        return blocks - 42;
    } else if (blocks < 42){
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264; 
}

function distanceTravelledInFeet(x, y){
    if (x > y){
        return (x - y)*264;
    } else {
        return (y - x)*264;
    }
}

function calculatesFarePrice(x, y){
    if (distanceTravelledInFeet(x, y) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(x, y) <= 2000){
        return (distanceTravelledInFeet(x, y) - 400)* 0.02;
    } else if (distanceTravelledInFeet(x, y) <= 2500){
        return 25;
    } else if(2500 < distanceTravelledInFeet(x, y)){
        return 'cannot travel that far';
    }
} 

