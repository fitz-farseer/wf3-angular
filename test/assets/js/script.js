$(function () {
    $('#toggleDisplay').click(function (e) {
        e.preventDefault();
        $('form').toggleClass('displayed');
    });
});