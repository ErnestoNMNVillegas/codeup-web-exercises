'use strict';

$(function() {
    //Id Selectors
// alert($('#first-para').html());
// alert($('#list-stuff').html());

    //Class Selectors
// $('.codeup').css('border', 'solid 1px red');

    //Element Selectors
// $('li').css('font-size', '20px');
// $('h1, p, li').css( 'background-color', "#FFFF88" );

    //Multiple Selectors
// alert($('h1').html());

    //Mouse Events
// $('h1').click(function() {
//     $(this).css('background-color', "#FFFF88");
// });
//
// $('p').dblclick(function(){
//     $(this).css('font-size', '18px');
// });
//
// $('li').hover(function() {
//     $(this).css('color', 'red');
// }, function () {
//     $(this).css('color', 'black');
// })

    ///Konami Code///

    $(document).keyup(function(event){
        console.log(event.key);
    });

        var userInput = []
        var konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight', 'b','a','Enter'];
    $(document).keyup(function(e){
            userInput.push(e.key);
            if (userInput.toString().indexOf(konamiCode) >= 0) {
                //Result if correct code entered.
                // alert("How do you do, fellow gamer?");
                cheatCodeActive();
                //Resets the input array
                userInput = [];
                console.log(userInput);
            }
        });

    function cheatCodeActive() {
        // <iframe src="https://giphy.com/embed/JTzPN5kkobFv7X0zPJ" width="480" height="269" frameBorder="0"
        //         className="giphy-embed" allowFullScreen></iframe>
        // <p><a href="https://giphy.com/gifs/30-rock-steve-buscemi-peacocktv-JTzPN5kkobFv7X0zPJ">via GIPHY</a></p>

        // $('img.large-magnify-glass-animation').appear(function() {
        //     $(this).delay(200, function(){
        //         $(this).attr('src','https://giphy.com/gifs/30-rock-steve-buscemi-peacocktv-JTzPN5kkobFv7X0zPJ');
        //     });
        // });
            // document.body.style.backgroundImage = "url(images/talladegaNights.jpg)";
            document.body.style.backgroundImage = "url(img/how-do-you-do-fellow-kids-gif.gif)";
            alert("How do you do, fellow gamer?");
        }
});





