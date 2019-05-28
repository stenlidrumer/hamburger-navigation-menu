$.noConflict();
jQuery(document).ready(function($) {
	$('.menu-toggle').on('click', function() {
	  $('ul').slideToggle();
	  $(this).toggleClass('open');
	});
});
