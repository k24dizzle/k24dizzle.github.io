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

var velocity = 0.4;
var velocity_name = 0.2;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('#curry').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height();
        var newPos = (Math.round((pos - height) * velocity)) - height/1.5;
        console.log(newPos);
        var data = '50% ' + newPos + 'px';
        if (newPos <= 0) {
            $(this).css('backgroundPosition', data); 
        }
    }); 
    $('#content').each(function() {
        var totalheight = $('#home').height();
        var newPos = (Math.round(totalheight/2.5) + Math.round(pos * velocity_name));
        var data = newPos + 'px';
        if(newPos < totalheight * 0.70) {
            $(this).css('top', data);
        }

    });
};

$(window).bind('scroll', update);

