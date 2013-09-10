(function($){
		$(document).ready(function(){

		$('#close-tutorial').click(function() {
			$('#tutorial').fadeOut('slow', function() {
			// Animation complete.
		});
		});

		$(".inner-icon").click(function () {
			$(this).toggleClass("on");
		});

		});
});