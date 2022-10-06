"use strict";

console.log('Hello from external JavaScript!');

//JavaScript with HTML Exercise

alert('Welcome to my Website!');

let userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!');

let movieRate = 3;
let movieQty = prompt('How many movies are you renting?');
let movieDays = prompt('How many days are you renting them for?');
alert('Your total is $' + (movieRate * movieQty * movieDays) + '.00.');

let GoogPay = 400;
let AmazPay = 380;
let FacePay = 350;
let GoogHour = prompt('How many hours did you work at Google this week?');
let AmazHour = prompt('How many hours dud you work at Amazon this week?');
let FaceHour = prompt('How many hours did your work at FaceBook this week?');
let totalPay = (GoogPay * GoogHour) + (AmazPay * AmazHour) + (FacePay * FaceHour);
    alert('Your total pay for this week is $' + totalPay + ".00");

/*
Initially attempted to display the total pay by doing the computation inside the alert.
Ex:  alert('total pay $' + ((GoogPay * GoogHour) + (AmazPay * AmazHour) + (FacePay * FaceHour)))
 */

let classFull = confirm('Click OK if there is slot available for you in class.  Click Cancel if no.');
let schConflict = Math.floor(Math.random() *2) === 0;
if (schConflict === 1 && classFull) {
    alert('You can enroll in this class.')
} else alert('You cannot enroll in this class.');

let offerUser = prompt('How many items are you buying?');
let offerExpired = confirm('Press OK if offer still valid. Click Cancel if no.');
let offerPremium = confirm('Press OK if Premium Member. Click Cancel if no.');
if ((offerUser > 2 || offerPremium) && offerExpired) {
    alert('Product offer can be applied.')
} else alert('Product offer cannot be applied.');

