/*
Name: 			Instafeed - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/
(function($) {

	'use strict';

    var clientId    = 'bd997d4f1b274333addf2193d242b414',
        accessToken = '7439366193.bd997d4.6b4f1bccd677414e924485f74be0b3c1';

	if( $('#instafeedBasic').get(0) ) {
        // Instagram Feed Basic
    	var feed = new Instafeed({
            target: 'instafeedBasic',
            get: 'user',
            userId: 'self',
            clientId: clientId,
            accessToken: accessToken,
            resolution: 'standard_resolution',
            limit: 3,
            template:
                '<div class="col-4 mb-4 pt-2">'+ 
                    '<a href="{{link}}" target="_blank">' +
                        '<span class="thumb-info thumb-info-lighten thumb-info-centered-info thumb-info-no-borders">' +
                            '<span class="thumb-info-wrapper">' +
                                '<img src="{{image}}" class="img-fluid" alt="{{caption}}" />' +
                            '</span>' +
                        '</span>' +
                    '</a>' +
                '</div>',
             after: function(){
                var $wrapper = $('#instafeedBasic'),
                    html = $wrapper.html();

                // Build Html
                $wrapper
                    .html('')
                    .append('<div class="row"></div>')
                    .find('.row')
                    .append(html);
            }
        });

        // Init Instafeed Basic
    	feed.run();
    }

    /*
    * Instafeed Carousel
    */
    if( $('#instafeedCarousel').get(0) ) {
        // Instagram Feed Carousel
        var feed = new Instafeed({
            target: 'instafeedCarousel',
            get: 'user',
            userId: 'self',
            clientId: clientId,
            accessToken: accessToken,
            resolution: 'standard_resolution',
            limit: 6,
            template: 
                '<div>' +
                    '<a target="_blank" href="{{link}}">' +
                        '<img src="{{image}}" class="img-fluid" alt="{{caption}}" />' +
                    '</a>' +
                '</div>',
            after: function(){
                var $wrapper = $('#instafeedCarousel');

                $wrapper.addClass('owl-carousel').owlCarousel({
                    items: 1,
                    nav: false,
                    dots: false,
                    loop: true,
                    navText: [],
                    autoplay: true,
                    autoplayTimeout: 6000,
                    rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
                });
            }
        });

        // Init Instafeed Carousel
        feed.run();
    }

    /*
    * Instafeed No Margins
    */
    if( $('#instafeedNoMargins').get(0) ) {
        // Instagram Feed Basic
        var feed = new Instafeed({
            target: 'instafeedNoMargins',
            get: 'user',
            userId: 'self',
            clientId: clientId,
            accessToken: accessToken,
            resolution: 'standard_resolution',
            limit: 6,
            template:
                '<div class="col-6 col-xl-4 px-0">'+ 
                    '<a href="{{link}}" target="_blank">' +
                        '<span class="thumb-info thumb-info-lighten thumb-info-centered-info thumb-info-no-borders">' +
                            '<span class="thumb-info-wrapper">' +
                                '<img src="{{image}}" class="img-fluid" alt="{{caption}}" />' +
                            '</span>' +
                        '</span>' +
                    '</a>' +
                '</div>',
             after: function(){
                var $wrapper = $('#instafeedNoMargins'),
                    html = $wrapper.html();

                // Build Html
                $wrapper
                    .html('')
                    .append('<div class="row mx-0"></div>')
                    .find('.row')
                    .append(html);
            }
        });

        // Init Instafeed No Margins
        feed.run();
    }

}).apply(this, [jQuery]);