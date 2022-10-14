"use strict";

console.log('test');

//Exercise #2
function showMultiplicationTable (numb){
    for (let i = 1; i <= 10; i++) {
        let total = numb * i
        console.log(numb + 'x' + i + '=' + total )
    }
}

console.log(showMultiplicationTable(7));

//Exercise #3
function isOddEven (max, min){
    for (let i = 1; i <=10; i++) {
        let randNumb = Math.floor(Math.random() * (201 - 20) + 20);
        if (randNumb % 2 === 0){
            console.log(randNumb + ' is Even.');
        } else {
            console.log(randNumb + ' is Odd');
        }
    }
}
isOddEven(200, 20);

//Exercise #4
    function numbPyramid () {
        for (let i = 1; i < 10; i++) {
            let numb = i.toString();
            console.log(numb.repeat(i));
        }
    }
    console.log(numbPyramid())
//Saw example on stackoverflow on how to use .repeat method for this. Had to modify to convert i to string.
//https://stackoverflow.com/questions/20738935/how-to-display-pyramid-using-javascript
//https://www.w3schools.com/jsref/jsref_tostring_number.asp

//Exercise #5
function minusFive (){

}
