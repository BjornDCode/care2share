// Global variables
var $window = $(window);
var $body = $('body');

// Set screen variables
var screen = (function() {
    var breakpoint = 768;
    var screenWidth = $(window).width();
    var mobile = ( breakpoint > screenWidth ) ? true : false;

    return {
        breakpoint: breakpoint,
        screenWidth: screenWidth,
        mobile: mobile
    }

})();


// Header
var headerAnimations = (function() {

    var $phone = $body.find('.site_header .header_content .phone');
    var $content = $body.find('.site_header .header_content .content');

    if (screen.mobile) {

        $window.on('scroll', function() {
            if ($window.scrollTop() > $content.scrollTop() + 200) {
                $content.addClass('visible');
            }
        })

    } else {
        setTimeout(function() {
            $content.addClass('visible');
            $phone.addClass('visible');
        }, 750);
    }

})();


var featuresAnimations = (function() {

    var $features = $body.find('.features ul li');
    var deviceOffset = screen.mobile ? 400 : 600;

    $window.on('scroll', function() {
        $features.each(function(i, el) {
            if ($window.scrollTop() > $(el).offset().top - deviceOffset) {
                $(el).addClass('visible');
            }
        });
    });

})();

var videoAnimations = (function() {

    var $video = $body.find('.site_footer .video');
    var deviceOffset = screen.mobile ? 450 : 500;

    $window.on('scroll', function() {
        if ($window.scrollTop() > $video.offset().top - deviceOffset ) {
            $video.addClass('visible');
        }
    });

})();
