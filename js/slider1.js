var images = ['1.jpg', '2.jpg', '3.jpg'];
var currImage = 0;

$('.imgBlock').css('background-image', 'url("img/' + images[currImage] + '")')

for (var i = 0; i < images.length; i++) {
    $('.dots').append('<div class="dot" data-img="' + i + '">');
};

$('.dot').click(function() {
    $('.dot').removeClass('active');
    $(this).addClass('active');
    currImage = $(this).attr('data-img');
    $('.imgBlock').css('background-image', 'url("img/' + images[currImage] + '")');
});