"use strict";

$(function () {

    $('button')
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


    });






