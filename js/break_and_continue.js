"use strict";

(function (){

console.log('test break');
let input = prompt("Enter an odd number between 1 and 50:");
    for (let i = 0; i < 50; i++){
        if (input % 2 === 0) {
            prompt('Incorrect. Please enter an odd number between 1 and 50:');
            break;
        }
    }
    for (let i = 0; i < 50; i++) {
        if (input === i.toString()) {
            console.log('Yikes!  Skipping number ' + i);
            continue;
        }
        if (i % 2 === 1) {
            console.log('Here is an odd number: ' + i)
        }
    }

})();