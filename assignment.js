//feetToMile

function feetToMile(feet) {

    if (feet > 0){
        var mile = feet / 5280;
    }
    else {
        var mile = "Please enter a positive value.";
    }
    return mile; 
}

// var mile = feetToMile (580);
// console.log (mile);












// woodCalculator
function woodCalculator (chair, table, couch) {
    var chairWood = chair * 1; 
    var tableWood = table * 2;
    var couchWood = couch * 3;
    var totalWood = chairWood + tableWood + couchWood;
    return totalWood;
}

// var totalWood = woodCalculator (3, 5, 8);
// console.log (totalWood);
















 //brickCalculator
 function brickCalculator(floor){
    if(floor<0){
        return "Please Enter Positive Value";
    }
    else if( floor>=0 && floor<=10){
        bricksWithinTen = floor*15*1000;
        return bricksWithinTen;
    }
    else if(floor>10 && floor<=20){
        var firstTenFloor = 10;
        var afterTenFloor = floor - firstTenFloor;
        var bricksWithinTwenty = (firstTenFloor*15*1000)+(afterTenFloor*12*1000);
        return bricksWithinTwenty;
    }
    else if(floor>20) {
       var firstTenFloor = 10;
       var secondTenFloor = 10;
       var firstTwentyFloor = firstTenFloor + secondTenFloor;
       var afterFirstTwentyFloor = floor - firstTwentyFloor;
       var totalBricks = (firstTenFloor*15*1000)+(secondTenFloor*12*1000)+(afterFirstTwentyFloor*10*1000);
       return totalBricks;
        
    }
 }

// var totalBricks = brickCalculator (40);
// console.log (totalBricks);
















// tinyFriend
function tinyFriend(names) {
    var shortest = names[0];
    for (var i = 0; i < names.length; i++) {
        var arrayNumber = names[i];
        if (arrayNumber.length < shortest.length) {
            shortest = arrayNumber;
        }
    }
    return shortest;
}
// var shortestFriend = tinyFriend (["Uzzal", "Nuruzzaman", "Nashid","Habibullah","Topu"]);
// console.log ("Result=", shortestFriend);

