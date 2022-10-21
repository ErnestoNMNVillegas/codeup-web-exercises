
console.log('test');

//TODO  Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

// let objects = {name: “Potatoes”, quantity: 2, price: “$7.89"};
//
//     objects.forEach(function(obj)){
//         Return 'Object price is
//     }

//Correct from walk-thru
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
    let legth
    let longest;

function getLongestString(arr) {
    for (let i=0; i < arr[i].length; i++){
        if (arr[i].length > legth) {
            var length = arr[i].length;
            longest = arr[i];
        }
    }
    return
}
console.log(getLongestString(arr));
getLongestString(arr);



