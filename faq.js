$(document).ready(function () {
    $('div.wrapper').find('div').toggleClass('small-div');
});

$('#click').click(function () {
    $('div.wrapper').find('div').toggleClass('small-div big-div');
});