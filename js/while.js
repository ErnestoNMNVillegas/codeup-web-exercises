"use strict";

(function (){

console.log('test while');

let i = 2
while (i <= 65536) {
    console.log(i)
i*=2;
}


let allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
let interval = 1
do {
    if (allCones > 0) {
        let conesPerCust = Math.floor(Math.random() * 5) + 1;
        console.log(conesPerCust + ' Cones sold');
        allCones -= conesPerCust;
    }   else if (allCones < conesPerCust){
        console.log('Cannot sell you 6 cones I only have 3');
    }
interval++
} while (allCones > 0);
    console.log('Yay, I sold them all')



    // var i = 10;
    //
    // do {
    //     console.log('while loop iteration #' + i);
    //     i++;
    // } while (i < 10);

})();