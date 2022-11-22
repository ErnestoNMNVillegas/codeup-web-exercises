'use strict';

$(function() {

///Konami Code Exercise///

$(document).keyup(function(event){
    console.log(event.key);
});

var tbody = document.querySelector('#innHtml');
var userInput = []
var konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight', 'b','a','Enter'];
$(document).keyup(function(e){
    userInput.push(e.key);
    if (userInput.toString().indexOf(konamiCode) >= 0) {
        console.log(userInput);
        //Result if correct code entered.
        cheatCodeActive();
        //Resets the input array
        userInput = [];
        console.log(userInput);
    }
});

function cheatCodeActive() {
    document.getElementById('howDoYou').style.backgroundImage = "url('img/how-do-you-do-fellow-kids-gif.gif')";
    tbody.innerHTML = cheatCodeActiveText()
    alert("You have added 30 lives!!!!  CLICK 'OK'");
}

function cheatCodeActiveText() {
    return '<div>' +
        '   <h3>How do you do, fellow gamer!?!</h3>' +
        '   <br>' +
        '   <h3>I see you know the cheat code!</h3>' +
        '   <br>' +
        '   <h3>You have added 30 lives!!</h3>' +
        '   </div>';
}

});
