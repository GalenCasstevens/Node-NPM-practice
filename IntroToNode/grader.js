function average(arrScores) {
    var total = 0;
    var average = 0;
    
    for(var i = 0; i < arrScores.length; i++) {
        total += arrScores[i];
    }
    
    average = total / arrScores.length;
    
    console.log(Math.round(average));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);