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
function woodCalculator(chair,table,bed){
    if (chair<0){
        if (table<0){
            if (bed<0){
                return "All Value is negative.Please check again.";
            }
            else{
                var woodForBed = bed*5;
                return "Please Put possitive number:"+woodForBed;
            }
        }
        else{
            var woodForBed = bed*5;
            var woodForTable = table*3;
            var woodForTableAndBed = woodForBed+woodForTable;
            return "Please Put possitive number:"+woodForTableAndBed;
        }
    }
    else{
        var woodForBed = bed*5;
        var woodForTable = table*3;
        var woodForChair = chair*1;
        var totalWood = woodForChair+woodForTable+woodForBed;
        return totalWood;
    }
}

// var result =  woodCalculator (3, 10, 5);
// console.log(result);
















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

