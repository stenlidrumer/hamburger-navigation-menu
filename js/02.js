$.noConflict();
jQuery(document).ready(function($) {
	$('.menu-toggle').on('click', function() {
		$('ul').toggleClass('opening');
		$(this).toggleClass('open');
			
		var $li = $('li');
		$li.hide().each(function(index) {
			$(this).delay(100 * index).slideDown(50);
		});
	});
});