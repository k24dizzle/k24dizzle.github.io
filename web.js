$(document).ready(function() {
    console.log('connected');
    var links = jQuery('a[href^="#"]').add('a[href^="."]');
    $(links).on('click', function(event) {
        var dest = $(this).attr('href');
        console.log(dest);
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(dest).offset().top
        }, 1933);
    });
});

var velocity = 0.2;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.morestuff').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height();
        console.log("height" + height);
        console.log(pos);
        var newPos = -1 *  (height/5 - Math.round((pos - height) * velocity));
        var data = '50% ' + newPos + 'px';
        console.log(newPos);
        if (newPos <= 0) {
            $(this).css('backgroundPosition', data); 
        }
    }); 
};

$(window).bind('scroll', update);

