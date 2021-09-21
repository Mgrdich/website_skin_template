(function ($) {
    "use strict"; // Start of use strict
    var $body = $('body');
    var $header_inner = $body.find('.header-inner');

    $(window).load(function () {
        /******** Page loader *******/
        var page_loader = $(".page-loader");
        page_loader.find('div').fadeOut();
        page_loader.delay(200).fadeOut("slow");

        $(window).resize(function () {
            // TODO adding debounce functionality
            $header_inner.removeClass('open');
        });

        /******** Isotope Portfolio *******/
            // Isotope Portfolio
        var gallery_container = $('.gallery-portfolio-container');
        var $container = gallery_container.find('.portfolio');
        $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            },

        });

        gallery_container.find('.port-filter li a').click(function () {
            $('.port-filter li').removeClass('active');
            $(this).parent().addClass('active');

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


    $(document).ready(function () {

        /******** Header two menu button *******/
        var sf_menu = $header_inner.find(".sf-menu");

        $header_inner.find("#mobnav-btn").click(function () {
            sf_menu.toggleClass('open');
            $header_inner.toggleClass('open');
        });

        $header_inner.find('.mobnav-subarrow').click(function () {
            $(this).siblings(".sub-menu").toggleClass("sub-menu-open");
        });
        

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



        /********  MAGNIFIC POPUP INIT *******/

        $('.popup-gallery').magnificPopup({
            delegate: 'a.image-popup-btn',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-with-fade mfp-img-mobile',
            gallery: {
                enabled: true,
                preload: [0, 1],// Will preload 0 - before current, and 1 after the current image,
              },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });


        /********  Video *******/
        var play_video_trigger = $('.video-play-trigger');
        // For video popup (PLAY VIDEO TRIGGER)
        if (play_video_trigger.length) {
            play_video_trigger.magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-with-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }


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
