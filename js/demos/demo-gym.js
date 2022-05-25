/*
Name: 			Gym
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/

(function( $ ) {

	'use strict';
	
	// Slider Options
	var sliderOptions = {
		sliderType: 'standard',
		sliderLayout: 'fullscreen',
		responsiveLevels: [4096,1200,992,420],
		gridwidth:[1170,970,750],
		delay: 5000,
		disableProgressBar: 'on',
		lazyType: "none",
		shadow: 0,
		spinner: "off",
		shuffle: "off",
		autoHeight: "off",
		fullScreenAlignForce: "off",
		fullScreenOffset: "",
		hideThumbsOnMobile: "off",
		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		debugMode: false,
		fallbacks: {
			simplifyAll: "off",
			nextSlideOnWindowFocus: "off",
			disableFocusListener: false,
		},
		navigation: {
			keyboardNavigation: "on",
			keyboard_direction: "horizontal",
			mouseScrollNavigation: "off",
			onHoverStop: "off",
			touch: {
				touchenabled: "on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows: {
				enable: false,
			},
			bullets: {
				style:"custom-tp-bullets",
		        enable: true,
		        container:"slider",
		        rtl: false,
		        hide_onmobile: false,
		        hide_onleave: true,
		        hide_delay: 200,
		        hide_delay_mobile: 1200,
		        hide_under: 0,
		        hide_over: 9999,
		        direction:"horizontal",
		        space: 20,       
		        h_align: "center",
		        v_align: "bottom",
		        h_offset: 0,
		        v_offset: 50
			}
		},
		parallax:{
			type:"on",
			levels:[20,40,60,80,100],
			origo:"enterpoint",
			speed:400,
			bgparallax:"on",
			disable_onmobile:"off"
		}
	}
		
	// Slider Init
	$('#revolutionSlider').revolution(sliderOptions);

	// Instagram Feed
	var feed = new Instafeed({
        get: 'user',
        userId: 'self',
        clientId: '11111111111111111111111111111111',
        accessToken: '1111111111.1111111.11111111111111111111111111111111',
        resolution: 'standard_resolution',
        template: '<div style="background: url({{image}}); background-size: cover;"><a target="_blank" href="{{link}}"></a></div>',
        after: function(){
        	// Init Owl Carousel Instagram
			$('.owl-instagram').owlCarousel({
				items: 2,
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

    // Init Instafeed
    if( $('#instafeed').get(0) ) {
    	feed.run();
    }

    // Custom Menu Style
    if($('.custom-header-style-1').get(0)) {
    	$('.header-nav-main nav > ul > li > a').each(function(){
	    	var parent = $(this).parent(),
	    		clone  = $(this).clone(),
	    		clone2 = $(this).clone(),
	    		wrapper = $('<span class="wrapper-items-cloned"></span>');

	    	// Config Classes
	    	$(this).addClass('item-original');
	    	clone2.addClass('item-two');

	    	// Insert on DOM
	    	parent.prepend(wrapper);
	    	wrapper.append(clone).append(clone2);
	    });
    }

    // Isotope
    var $wrapper = $('#itemDetailGallery');

	if( $wrapper.get(0) ) {
		$wrapper.waitForImages(function() {
			$wrapper.isotope({
				itemSelector: '.isotope-item'
			});
		});
	}
    
}).apply( this, [ jQuery ]);