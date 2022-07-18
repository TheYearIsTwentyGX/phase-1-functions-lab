// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    let cost = 0;
    let dist = Math.abs(start - destination) * 264;
    if (dist > 2500)
        return 'cannot travel that far';
    else if (dist > 2000)
        return 25;
    else if (dist <= 400)
        return 0;
    else
        return (dist - 400) * 0.02;
}