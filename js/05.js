$.noConflict();
jQuery(document).ready(function($) {
	$('.menu-toggle').on('click', function() {
		$('ul').slideToggle();
		$(this).toggleClass('open');
	  
		$('li').on('mouseover', function() {
			var $this = $(this);
			$this.animate({opacity: 0.4, fontSize: '0.9rem'}, 'fast');
			$this.animate({opacity: 1, fontSize: '1rem'}, 'fast');
		});
	});
});
