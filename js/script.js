	$(document).ready(function(){

		// STICKY MENU
		$(".js-sticky-menu-show").waypoint(function(direction){

			if (direction == "down"){
					$("nav").addClass("sticky-menu");
				} else {
					$("nav").removeClass("sticky-menu");
				}
		});
		
		// SCROLL UP BTN 
		$(window).scroll(function(){

			if($(this).scrollTop() > 200) {
				$("a.scroll-up-btn").fadeIn();
			} else {
				$("a.scroll-up-btn").fadeOut();
			}

		});
	});