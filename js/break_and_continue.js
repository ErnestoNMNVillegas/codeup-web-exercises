"use strict";

(function (){

console.log('test break');

var input= prompt("Enter an odd number between 1 and 50:");
    for (let i = 0; i < 50; i++){
        if (input % 2 === 0) {
            prompt('Incorrect. Please enter an off number between 1 and 50:');
            break;
        }
    }
    for (let i = 1; i < 50; i++) {
        if (input === i) {
            console.log('Yikes!  Skikking number ' + i);
            continue;
        } else (input % 2 !== 0)
        {
            console.log('Here is an odd number: ' + i)
        }
    }




// var numberToStopAt = 5;

// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

})();