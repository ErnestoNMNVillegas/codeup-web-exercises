"use strict";
console.log('test');

//TODO  Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

// let objects = {name: “Potatoes”, quantity: 2, price: “$7.89"};
//
//     objects.forEach(function(obj)){
//         Return 'Object price is
//     }


//Correct from walk-thru with David
// function getPrice (obj) {
//     return obj.price;
// }
//
// let potatoes = {
//     name: "potatoes",
//     quantity: '2',
//     price: "7.89"
// }
//
// console.log(getPrice(potatoes));

//TODO Write a function that when passed an array will return the longest string from the array.
// Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”

let arr= ['green', 'blue', 'Periwinkle'];

function getLongestString(arr) {
    let legth = 0;
    let longest;
    for (let i=0; i < arr.length; i++){
        if (arr[i].length > legth) {
            legth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest
}
console.log(getLongestString(arr));
getLongestString(arr);

// //Note:  From walk-thru with David
// function getLongestString(arr){
//     let longestStr = '';
//     for (let str of arr){
//         if (str.length > longestStr.length)
//             longestStr = str;
//     }
//     return longestStr;
// }
// console.log(getLongestString(arr));

// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];

// getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};

// function getTallestHamster (obj) {
//     let heightInMM;
//     let tallest = 0;
//     for (let i=0; i < input.length; i++){
//         if (input[i].length > height){
//             heightInMM = input[i].length;
//             tallest = input[i];
//         }
//     }
//     return tallest;
//     return obj.price;
// }
//
// let potatoes = {
//     name: "potatoes",
//     quantity: '2',
//     price: "7.89"
// }
//
// console.log(getPrice(potatoes));
//
// function getTallestHamster (hamsters) {
//     let height = 0;
//     let tallest = 0;
//     for (let i=0; i < input.length; i++){
//         if (input[i].length > height){
//             height = input[i].length;
//             tallest = input[i];
//         }
//     }
//     return tallest;
// }



// hamsters.forEach(hamsters() {
//     let finalPrice
//     var discountPercent = .12
//     if (shopper.amount > 200){
//         finalPrice = shopper.amount - (shopper.amount * discountPercent);
//         console.log(shopper.name + '\'s ' + 'price before discount was: ' + shopper.amount.toFixed(2) + '. Their discount(if any) is: ' + (shopper.amount - finalPrice).toFixed(2) + ' , and the final price is ' + finalPrice.toFixed(2) + '.');
//     } else console.log(shopper.amount.toFixed(2) + ' is ' + shopper.name + '\'s total.  He got no discount.');
// });

// TODO Warmup: Write FizzBuzz from 1-100;
// Numbers evenly divisible by 3 should be replaced by Fizz
// Numbers evenly divisible by 5 should be replaced by Buzz
// Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
// All other numbers should be printed in the console.
// let i = 1
// function fizzBuzz(){
//     do {
//         if (i % 3 === 0) {
//             console.log('Fizz');
//             break;
//         }   else if (i % 5 === 0) {
//             console.log("Buzz");
//             break;
//         }   else if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//             break;
//         }
//
//         // for (let i = 1; i <= 50; i++) {
//         //     if (input === i.toString()) {
//         //         console.log('Yikes!  Skipping number ' + i);
//         //         continue;
//         //     }
//         //     if (i % 2 === 1) {
//         //         console.log('Here is an odd number: ' + i)
//         //     }
//     } while (i =< 100)
//     };

    // Note from walk-thru:  for loop for appropriate.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function getAverageHeight(array) {
    // let total = {heightInMM: 0};
    let total = 0;
    // let interval = 1
    array.forEach(function(element){
        if (element < array.length) {
            total += array.heightInMM;
        }
    });
    // for(let i = 0; i < arr.length; i++) {
    //     if (arr[i].heightInMM > tallest.heightInMM) {
    //         tallest = arr[i];
    //     }
    // }
    // for (let el of arr) {
    //     if (el.heightInMM > tallest.heightInMM) {
    //         tallest = el;
    //     }
    // }
    return total / array.length;
}

console.log(getAverageHeight(hamsters)); // should return 93.2;