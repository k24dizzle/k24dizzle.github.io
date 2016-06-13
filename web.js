$(document).ready(function() {
    console.log('connected');
    var links = jQuery('a[href^="#"]').add('a[href^="."]');
    $(links).on('click', function(event) {
        var dest = $(this).attr('href');
        console.log(dest);
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(dest).offset().top
        }, 1000);
    });
});
