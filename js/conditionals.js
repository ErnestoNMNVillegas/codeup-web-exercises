"use strict";
(function (){

/* ########################################################################## */

console.log("hello")

/**
 * TODOne:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     let normColor = color.toLowerCase();
//     if (normColor === 'green') {
//         return "Green is the color of grass...sometimes.";
//     } else if (normColor === 'yellow') {
//         return "Yellow is the color of yolk.";
//     } else {
//         return "I don't know anything about "  + normColor + ".";
//     }
// }
// console.log(analyzeColor('green'))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODOne:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * TODOne:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

    function analyzeColor(color) {
    let normColor = color.toLowerCase();
    switch(normColor) {
        case 'green':
            alert("Green is the color of grass...sometimes.");
            break;
        case 'yellow':
            alert("Yellow is the color of yolk.");
            break;
        default:
            alert("I don't know anything about " + normColor + '.');
    }
    }

    /**
 * TODOne:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
    let userColor = prompt('Tell me a color!');
    analyzeColor((userColor));

/* ########################################################################## */

/**
 * TODOne:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
    //let totAmt = parseFloat(prompt('What is your total?'));
    let disAmt
    function calculateTotal(luckNum, totAmt) {
        if (luckNum === 5) {
            disAmt = totAmt - (totAmt * 1);
            console.log(`Lucky number: ${luckNum} Price before discount: ${totAmt} Price after discount: ${disAmt}.`);
            return disAmt;
        }   else if (luckNum === 4) {
            disAmt = totAmt - (totAmt * .50);
            console.log(`Lucky number: ${luckNum} Price before discount: ${totAmt} Price after discount: ${disAmt}.`);
            return disAmt
        }   else if (luckNum === 3) {
            disAmt = totAmt - (totAmt * .35);
            console.log(`Lucky number: ${luckNum} Price before discount: ${totAmt} Price after discount: ${disAmt}.`);
            return disAmt;
        }   else if (luckNum === 2) {
            disAmt = totAmt - (totAmt * .25);
            console.log(`Lucky number: ${luckNum} Price before discount: ${totAmt} Price after discount: ${disAmt}.`);
            return disAmt;
        }   else if (luckNum === 1) {
            disAmt = totAmt - (totAmt * .1)
            console.log(`Lucky number: ${luckNum} Price before discount: ${totAmt} Price after discount: ${disAmt}.`);
            return disAmt;
        }   else {
            disAmt = totAmt - (0);
            console.log(`Lucky number: ${luckNum} Price before discount: ${totAmt} Price after discount: ${disAmt}.`);
            return disAmt;
        }
}
    console.log(calculateTotal(0, 100))
    console.log(calculateTotal(4, 100))
    console.log(calculateTotal(5, 100))

    /**
 * TODOne:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let totAmt = parseFloat(prompt('What is your total?'));
let totalPrompt = calculateTotal(luckyNumber, totAmt)
alert('Your lucky #: '+luckyNumber+'. Total amount before discount: '+totAmt+'. Total amount after discount: '+totalPrompt);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


    let confirButton = confirm('Would you like to enter a number?');
    //var prom

    if (confirButton){
        var prom = parseInt(prompt('Great, please enter a number.'));
        console.log(prom);
    } else {
        alert('no worries.');
        return 'No worries.';
    }


    if (isNaN(prom)) {
        alert('Incorrect input type');
        return 'Incorrect input type';
    }

    //Note:  This didnt work either.
    // if (typeof prom !== 'number'){
    //         alert('Incorrect input type');
    //         return 'Incorrect input type.';
    // }
    //Note:  Was working then stopped after change.
    // function notNum(notNumm) {
    //     if ((typeof notNumm) != 'number'){
    //                 alert('Incorrect input type');
    //                 return 'Incorrect input type.';
    //         }
    // }
    // alert(notNum(prom))


    alert(numbOddEven(prom));
    alert(addHund(prom));
    alert(negPos(prom));

    function addHund (x) {
        // alert('Your number plus 100 is ' + totnum);
        // let parsedX = parseInt(x);
        return 'Your number plus 100 is ' + (x + 100);
    }

    function negPos (y) {
        if (y >= 0) {
            return 'You entered a positive number.';
        } else {
            // alert('You entered a negative number.');
            return 'You entered a negative number.';
        }
    }

    // function ConInput (a) {
    //     if (conResult === true) {
    //         return (parseFloat(prompt('Great, please enter a number.')));
    //     }
    // }

    function numbOddEven (numb) {
        if  (numb % 2 === 0) {
            // alert('Your number is even.');
            return 'Your number is even';
        }   else {
            // alert('Your number is odd.');
            return 'Your number is odd';
        }
        }





})();