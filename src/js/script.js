// TODO check this as well
(function($) {
    "use strict"; // Start of use strict

    $(window).load(function() {

        /******** Page loader *******/
        $(".page-loader div").fadeOut();
        $(".page-loader").delay(200).fadeOut("slow");


        var viewportWidth = $(window).width();
        var colWidth = $(".fraction-slider").width();

        var divideval = 2;
        var marginslidebg = (viewportWidth - colWidth) / divideval + 2;

        $(".slide-bg").css({
            "width": viewportWidth,
            "max-width": viewportWidth,
            "margin-left": "-" + marginslidebg + "px",
        });

        $(window).resize(function() {
            /******** fractionSlider bg image resize *******/
            $(".slide-bg").css({
                "width": viewportWidth,
                "max-width": viewportWidth,
                "margin-left": "-" + marginslidebg + "px",
            });

        });


        /******** Isotope Portfolio *******/
            // Isotope Portfolio
        var $container = jQuery('.portfolio');
        $container.isotope({
            filter: '*',
            layoutMode:'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            },
            
        });
        jQuery('.port-filter li a').click(function() {
            jQuery('.port-filter li').removeClass('active');
            jQuery(this).parent().addClass('active');

            var selector = jQuery(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                },
            });
            return false;
        });
        $container.isotope('layout');

    });


    $(document).ready(function() {

        /******** Header two menu button *******/

        $("#mobnav-btn").click(function() {
            $(".sf-menu").slideToggle("slow");
        });

        $('.mobnav-subarrow').click(

            function() {
                $(this).siblings(".sub-menu").toggleClass("sub-menu-open");
            });

        $("#search-label").click(function() {
            $(".search-bar").slideToggle("slow");
        });


        /******** Header on scroll *******/

            // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.header-inner').outerHeight();

        $(window).scroll(function(event) {
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(window).scrollTop();

            var conterner_width = $('.inner-conterner').width();
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('.header-inner').removeClass('header-scroll-fixed').addClass('header-scroll-up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {

                    $('.header-inner').removeClass('nav-up').addClass('header-scroll-fixed').css({
                        "width": conterner_width,
                    });

                }
            }

            if (st < 50) {
                $('.header-inner').removeClass('header-scroll-fixed').removeClass('header-scroll-up');
            }

            lastScrollTop = st;
        }



        /******** OWL Slider *******/

        $("#owl-slide").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });


        function SetResizeContent() {
            var minheight = $(window).height();
            $(".full-screen").css({'min-height': minheight, 'height': minheight});
        }
        SetResizeContent();


        /********  FitVids.js *******/

        // Target your .container, .wrapper, .post, etc.
        $(".fit").fitVids();



        /********  MAGNIFIC POPUP INIT *******/

        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-with-fade mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });

        // For video popup (PLAY VIDEO TRIGGER)
        if ($('.video-play-trigger').length) {
            $('.video-play-trigger').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-with-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }



    });



    $(window).resize(function() {

        /******** Header size *******/
        var conterner_width = $('.inner-conterner').width();
        $('.header-inner').css({
            "width": conterner_width,
        });

    });



    /********  wow.js *******/
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 50, // distance to the element when triggering the animation (default is 0)
        mobile: false
    });
    wow.init();



})(jQuery)
