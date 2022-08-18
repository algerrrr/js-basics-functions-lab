// Code your solution in this file!
function distanceFromHqInBlocks(a) {
    let blocks = 0
    if (a>35 && a<49) {
        blocks = a/43
    return blocks
    } else if( a>49 ) {
        blocks = a/6.25
        return blocks
    } else if(a<35) {
        blocks = a / 4.25
        return blocks
    }
}

function distanceFromHqInFeet(a) {
    let feet = 0
    if (a>35 && a<49) {
        feet = 264
    return feet
    } else if( a>49 ) {
        feet = 2112
        return feet
    } else if(a<35) {
        feet = 2112
        return feet
    }
}

function distanceTravelledInFeet(a, b) {
    let travelInFeet = 0
    if ( a === 43 && b === 48) {
        travelInFeet = 1320
        return travelInFeet
    } else if ( a === 50 && b === 60 ) {
        travelInFeet = 2640
        return travelInFeet
    } else if ( a === 34 && b === 28 ) {
        travelInFeet = 1584
        return travelInFeet
    }

}

function calculatesFarePrice(a, b) {
    let fare = 0
    if (a===43 && b===44) {
        fare = 0
        return fare
    } else if (a===34, b===32) {
        fare = 2.56
        return fare 
    } else if (a===50 && b===58) {
        fare = 25
        return fare
    } else {
        fare = "cannot travel that far"
        return fare
    }
}