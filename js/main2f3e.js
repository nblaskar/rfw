(function () {
	"use strict";

	$(document).on("scroll", function () {
		var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
			$(".navbar-collapse").removeClass('show');
			$(".navbar-area").addClass("shadow-lg");
			$(".navbar-area").addClass("sticky");
			$('.toolbar-area').removeClass('d-xl-block d-lg-block').addClass('d-xl-none d-lg-none');
			$(".scroll-top").fadeIn();
        }else{
			$(".navbar-area").removeClass("shadow-lg");
			$(".navbar-area").removeClass("sticky");
			$('.toolbar-area').removeClass('d-xl-none d-lg-none').addClass('d-xl-block d-lg-block');
			$(".scroll-top").fadeOut();
        }
    });
	$('.navbar-toggler').click(function(){
		$('.navbar-collapse').toggleClass('show');
	});
	$('.dd-menu').click(function(){
		$($(this).data('bs-target')).toggleClass('show');
	});
	var wow = new WOW({mobile: true});
	wow.init();
})();

function scrollTo(element, to = 0, duration= 1000) {
	const start = element.scrollTop;
	const change = to - start;
	const increment = 20;
	let currentTime = 0;
	const animateScroll = (() => {
		currentTime += increment;
		const val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	});
	animateScroll();
};

Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

$('.scroll-top').click(function (){
	scrollTo(document.documentElement);
});

