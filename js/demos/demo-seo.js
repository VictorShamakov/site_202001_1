/*
Name: 			SEO
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/

(function( $ ) {

	'use strict';

    /*
    SVG Morphing
    */
    var shape1 = KUTE.fromTo('#shape_one_start', {
		path: '#shape_one_start' 
	}, { 
		path: '#shape_one_end' 
	}, {
		duration: 10000,
		easing	: 'easingQuadraticInOut',
		repeat: 20,
		repeatDelay: 1000,
		yoyo: true
	}).start();

	var shape2 = KUTE.fromTo('#shape_two_start', {
		path: '#shape_two_start' 
	}, { 
		path: '#shape_two_end' 
	}, {
		duration: 10000,
		easing	: 'easingQuadraticInOut',
		repeat: 20,
		repeatDelay: 1000,
		yoyo: true
	}).start();

	/*
	Form
	*/
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'my-mfp-zoom-in',
		callbacks: {
			open: function() {
				$('html').addClass('lightbox-opened');
			},
			close: function() {
				$('html').removeClass('lightbox-opened');
			}
		}
	});

}).apply( this, [ jQuery ]);