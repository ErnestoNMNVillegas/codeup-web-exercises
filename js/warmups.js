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

// function getAverageHeight(array) {
//     // let total = {heightInMM: 0};
//     let total = 0;
//     // let interval = 1
//     array.forEach(function(element){
//         if (element < array.length) {
//             total += array.heightInMM;
//         }
//     });

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i].heightInMM > tallest.heightInMM) {
//             tallest = arr[i];
//         }
//     }
//     for (let el of arr) {
//         if (el.heightInMM > tallest.heightInMM) {
//             let tallest = el;
//         }    return tallest;
//     }
//
// console.log(getAverageHeight(hamsters)); // should return 93.2;

//TODO DONE: 1. Write a function that takes in a grocery item object and returns a string representing the price per item for that object.

//     ``
// ex.
var potatoes = {
	name: potatoes,
	quantity: 20,
	totalPrice: 47
};
//
// getPricePerItem(potatoes) // returns "$2.35"

function getPricePerItem (input){
    let total = input.totalPrice / input.quantity
    return '$' + total.toFixed(2).toString();
}
console.log(getPricePerItem(potatoes));

//TODO: DONE 2. Write a function that takes in two string arguments: the first being the string assessed, and the second being a single letter. The function should return a count of the occurrences of the letter (second argument) within the string (first argument). This function should count both upper and lowercase instances of the letter.

// ex.
// countOccurrencesOfLetter("horseradish", "s") // returns 2
// countOccurrencesOfLetter("Microsoft Excel: Professional Edition". "E") // returns 4
// countOccurrencesOfLetter("Sanrio", "x") // returns 0

function countOccurancesOfLetter(stringOne, letter){
    let stringArr = stringOne.toLowerCase().split(``);
    console.log(stringArr);
    let count = 0;
    stringArr.forEach(function(index){
        if (index === letter){
            count += 1;
        }
    })
    console.log(count);
    return count;
}

countOccurancesOfLetter(`Gengar`, `g`);

// TODO: DONE 3. Write a function that takes in an array of  grocery item objects and returns the object with the highest `weightInGrams` property.
//
//     ```
// ex.
const cart = [
	{
		name: "Kingsford Charcoal",
		weightInGrams: 4535
	}, {
		name: "Krazy Glue",
		weightInGrams: 5
	}, {
		name: "NVIDIA RTX 4090",
		weightInGrams: 2186
	}
];



function getHeaviestItem(arr){
    let highestWeight = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i].weightInGrams > highestWeight){
            highestWeight = arr[i].weightInGrams;
        }
    }
    return highestWeight;
}
console.log(getHeaviestItem(cart)); // returns {name: "Kingsford Charcoal", weightInGrams: 4535}


// TODO: // DONE 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that are evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.

//     ```
// ex.
const arr1 = [24, 25, 26, 27, 29];
const arr2 = [13, 26, 39, 52, 65];
const arr3 = [0, 1, 2, 3, 4, 5];
//
// getAllDivisibleByThirteen(arr1) // returns [26]
// getAllDivisibleByThirteen(arr2) // returns [13, 26, 39, 52, 65]
// getAllDivisibleByThirteen(arr3) // returns []
// ```

function getAllDivisibleByThirteen(arr){
    let divThirteen = [];
    for (let i=0; i < arr.length; i++){
        if (arr[i] % 13 === 0){
            divThirteen.push(arr[i]);
        }
    }
    return divThirteen;
}
console.log(getAllDivisibleByThirteen(arr1));
console.log(getAllDivisibleByThirteen(arr2));
console.log(getAllDivisibleByThirteen(arr3));

// TODO: DONE 5. Write a function that takes in a string and returns an object with the following properties:
//     1. `string` which is to be set the to the argument passed into the function.
// 2. `numberOfWords` which is to be set to the number of words within the string.
// 3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).

function reviewString (string){

    let newObj = {};
    newObj.string = string.toString();
    newObj.numberOfWords = countLetters(string, " ") + 1;
    newObj.instancesOfE = countLetters(string, "E")
    return newObj;
}

function countLetters(str, letter)
{
    let letter_Count = 0;
    let lowerStr = str.toLowerCase().toString();
    let lowerLetter = letter.toLowerCase().toString();
    for (let i = 0; i < lowerStr.length; i++)
    {
        if (lowerStr.charAt(i) === lowerLetter)
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(reviewString("Dielectric Grease")); // returns {string: "Dielectric Grease", numberOfWords: 2, instancesOfE: 3}
console.log(reviewString("Street Fighter EX3")); // returns {string: "Street Fighter EX3", numberOfWords: 3, instancesOfE: 4}
console.log(reviewString("99")); // returns {string: "99", numberOfWords: 1, instancesOfE: 0}

// TODO: 1. Write a function that takes in an array of letters, and returns the array sorted in reverse alphabetical order.
//     ```

function sortLetters (arr) {
    let arrSort = arr.sort()
    return arrSort.reverse();
}

console.log(sortLetters(["a", "b", "c"])); // returns ["c", "b", "a"]
console.log(sortLetters(["K", "E", "Y"])); // returns ["Y", "K", "E"]

// TODO: DONE 2. Write a function that takes in a number and returns an object with the following properties.
// 1.  `value` which is to be set to the number passed into the function.
// 2. `doubled` which is to be set to the number passed into the function multiplied by 2.
// 3. `sign` which is to be set to a string, either `"positive"`, `"negative"`, or `"zero"`, corresponding to the value of the number passed into the function being either positive, negative, or 0.
// ex.

function reviewNumber (num) {
    let numObj = {};
    numObj.value = num;
    numObj.doubled = num * 2;
    numObj.sign = isSign(num);
    function isSign (x){
        if (x === 0){
            return "zero";
        } else if (x > 0) {
            return "positive";
        } else if (x < 0) {
            return "negative";
        }
    }
    return numObj;
}

console.log(reviewNumber(16)); // returns {value: 16, doubled: 32, sign: "positive"}
console.log(reviewNumber(-4)); // returns {value: -4, doubled: -8, sign: "negative"}
console.log(reviewNumber(0)); // returns {value: 0, doubled: 0, sign: "zero"}

// TODO: DONE 3. Write a function that takes in a string and returns an array where each element is each word that is in the string passed into the function.
// ```
// ex.
console.log(arrayOfWords("Lovely Day For Coding")); // returns ["Lovely", "Day", "For", "Coding"]
console.log(arrayOfWords("One-eyed One-horned Flying Purple People Eater")); // returns ["One-eyed", "One-horned", "Flying", "Purple", "People", "Eater"]
console.log(arrayOfWords("Toad")); // returns ["Toad"]

function arrayOfWords (str){
    return str.split(" ");
}

// TODO: DONE 4. Write a function that takes in a string and number and returns an object with the following properties
// 1. `title` which is to be set to the string passed into the function.
// 2. `price` which is to be set to the number passed into the function.
// 3. `count` which is to be set to 0.
//     ```
console.log(createItem("Pokemon TCG Booster Pack", 10.99)); // returns {title: "Pokemon TCG Booster Pack", price: 10.99, count: 0}
console.log(createItem("Water Bottles (24 Pack)", 27.98)); // returns {title: "Water Bottles (24 Pack)", price: 27.98, count: 0}

function createItem (string, num){
    let newItem = {};
    newItem.title = string;
    newItem.price = num;
    newItem.count = 0;
    return newItem;
}

// TODO: 5. Write a function that takes in an array of objects and returns the object from the array with the most colors in the color property.
//

function getMostColorful (arr){
        let mostColor = {fur: 0};
        for (let el of arr) {
            if (el.fur > mostColor) {
                mostColor = el;
            }
        }
        return mostColor;
    }


//     var mostColor = {fur: 0};
//     for(let i = 0; i < arr.length; i++) {
//             if (Object.keys(arr[i].fur) > mostColor.fur) {
//                 mostColor = arr[i];
//             }
//         }
//     // return mostColor;
//     // let mostColor = {fur: 0};
//     // for(let element of arr){
//     //     if(Object.keys(element.fur).length > Object.keys(mostColor).length){
//     //         mostColor = element;
//     //     }
//     // }
//     // for (let el of arr) {
//     //     if (el.fur.length > mostColor.fur.length) {
//     //         mostColor = el;
//     //     }
//     // }
//     return mostColor;
//
// }

console.log(getMostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"}


function getTallestHamster(arr) {
    let tallest = {heightInMM: 0};
    arr.forEach(function(el){
        if (el.heightInMM > tallest.heightInMM) {
            tallest = el;
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
    return tallest;
}

console.log(getTallestHamster(hamsters));


