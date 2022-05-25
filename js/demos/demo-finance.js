/*
Name: 			Finance
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/
// Demo Config
(function($) {

	'use strict';

	// Slider Options
	var sliderOptions = {
		sliderType: 'standard',
		sliderLayout: 'fullscreen',
		fullScreenOffsetContainer: '#header, #home-intro',
		delay: 10000,
		responsiveLevels: [4096, 1200, 991, 500],
		gridwidth: [1140, 960, 720, 540],
		gridheight: 650,
		lazyType: "none",
		shadow: 0,
		spinner: "off",
		shuffle: "off",
		autoHeight: "off",
		fullScreenAlignForce: "off",
		fullScreenOffset: "",
		disableProgressBar: "on",
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
			keyboardNavigation: 'off',
			keyboard_direction: 'horizontal',
			mouseScrollNavigation: 'off',
			onHoverStop: 'off',
			touch: {
				touchenabled: 'on',
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: 'horizontal',
				drag_block_vertical: false
			},
			arrows: {
				enable: true,
				hide_onmobile: true,
				hide_under: 991,
				hide_onleave: true,
				hide_delay: 200,
				hide_delay_mobile: 1200,
				left: {
					h_align: 'left',
					v_align: 'center',
					h_offset: 10,
					v_offset: 0
				},
				right: {
					h_align: 'right',
					v_align: 'center',
					h_offset: 10,
					v_offset: 0
				}
			}
		}
	}

	// Slider Init
	$('#revolutionSlider').revolution(sliderOptions);

	/*
	Dialog with CSS animation
	*/
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

}).apply(this, [jQuery]);