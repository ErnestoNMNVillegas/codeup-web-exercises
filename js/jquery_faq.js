"use strict";

$(function () {

    $('#faQ-togg')
        .click(function () {
            $('dd').toggleClass('invisible');
        });

    // $('dt').click(function () {
    //     $(this).css('background-color', 'yellow');
    // });

    $( "dt" ).click(function() {
        $(this).toggleClass("highlight");
    });

    $( "dt" ).click(function() {
        $('dd').toggleClass("visible");
    });

    //Transversing Methods

        //Last li highlight

    $('#last-Li').click(function() {
        $("ul li:last-child").css({"background-color": "yellow"});
        // $('ul li').last().css('background-color', 'yellow');

    });

    // $("#last-Li").click(function(){
    //     $("ul li").each(function(){
    //         $(this).last().css('background-color', 'yellow');
    //     });
    // });

    $('h3').click(function() {
        $(this).next().css('font-weight', "bold");
    });

    $('li').click(function() {
        $('li:first-child').css('color', "blue");
    });


});






