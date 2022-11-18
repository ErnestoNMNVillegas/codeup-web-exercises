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

$('h1').click(function() {
    $(this).css('background-color', "#FFFF88");
});

$('p').dblclick(function(){
    $(this).css('font-size', '18px');
});

$('li').hover(function() {
    $(this).css('color', 'red');
}, function () {
    $(this).css('color', 'black');
})

});




