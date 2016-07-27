$(document).ready(function() {
    console.log('connected');
    var links = jQuery('a[href^="#"]').add('a[href^="."]');
    $(links).on('click', function(event) {
        var dest = $(this).attr('href');
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(dest).offset().top
        }, 1000);
    });
});

var velocity = 0.6;
// var velocity_name = 0.4;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('#curry').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height();
        var newPos = (Math.round((pos - height) * velocity)) - height/1.5;
        var data = '50% ' + newPos + 'px';
        console.log("POS" + pos + " height" + height + "new pos " + newPos);
        if (newPos <= 0) {
            $(this).css('backgroundPosition', data); 
        }
    }); 
    /*
    $('#content').each(function() {
        var totalheight = $('#home').height();
        var newPos = (Math.round(totalheight/3.3333) + Math.round(pos * velocity_name));
        var data = newPos + 'px';
        if(newPos < totalheight -  $('.content').height() - $('.transition').height()) {
            $(this).css('top', data);
        }
    });
    */
};

// $(window).bind("scroll", update)

