(function($) {
    $.fn.myPlug = function(options) {
        var options = $.extend({
            speed: 300
        }, options);

        var make = function() {
            $('.toTop').hide();
            $(document).ready(function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 600) {
                        $('.toTop').show();
                    } else {
                        $('.toTop').hide();
                    }
                });

                $('.toTop').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                });
            });
        };

        return this.each(make)
    }

}(jQuery))