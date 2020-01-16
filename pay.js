window.onload = function () {
    $('form').each(function () { this.reset() });

    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg',
        '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.png', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg',
        '23.jpg', '24.jpg', '25.jpg', '26.jpg'];
    $('#joker').css({ 'background-image': 'url(img/card/' + images[Math.floor(Math.random() * images.length)] + ')' });
}

$(document).on("input", ".numeric", function () {
    this.value = this.value.replace(/\D/g, '');
});

$('.change').html('<p class="card-digit">#</p>');

var digits = $('.change');


$("#card-number").on("change keyup paste", function () {

    $(digits[0]).html('<p class="card-digit">' + $('#card-number').val().slice(-1) + '</p>');
    digits.splice(0, 1);

    if(document.getElementById('card-number').value.length == 0){
        $('.change').html('<p class="card-digit">#</p>');
    }
});

$("#card-holder").on("change keyup paste", function(){
    $('.card-holder').html('<p class="card-content card-holder is-uppercase">' + $(this).val() + '</p>');
    if(document.getElementById('card-holder').value.length == 0){
        $('.card-holder').html('<p class="card-content card-holder">FULL NAME</p>');
    }
});

$(function () {
    $('#card-number').on('keypress', function (e) {
        if (e.which == 32)
            return false;
    });
});
