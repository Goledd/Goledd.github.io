$(function() {
	$('a').on('click', function(e){
		e.preventDefault();
	});
	/*tab*/
	$('ul.tab-list').on('click', 'li:not(.active)', function(){
		$(this).addClass('active').siblings().removeClass('active')
					 .closest('div.tab-wrap').find('div.tab-content__item').removeClass('active').eq($(this).index()).addClass('active');
	});
	/*carousel-top*/
	$('.js-carusel-top').slick({
		infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		autoplay: true,
	  autoplaySpeed: 3000,
		arrows: false
	});
	/*carusel-blog*/
	$('.js-carusel-blog').slick({
		infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
		prevArrow: $('.carousel-arrow.left'),
		nextArrow: $('.carousel-arrow.right'),
		responsive: [
	 {
		 breakpoint: 1010,
		 settings: {
			 slidesToShow: 3,
			 slidesToScroll: 1,
		 }
	 },
	 {
		 breakpoint: 760,
		 settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		 }
	 }
 ]
	});
	/*fancybox*/
	$('.fancybox').fancybox();
	/*fancebox-popup*/
	$('.fancybox-popup').fancybox({
		maxWidth: 350,
	});
	/*more-js*/
	$('.more').on('click', function(e){
		event.preventDefault();
			$('.js-doc').toggleClass('open');
	});
	/*scroll*/
	$('.menu__link').click( function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length !== 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 80 }, 700);
		}
		return false;
	});
	/*menu-mobil*/
	$('.burger').on('click', function(){
		if ($('.burger').hasClass('close')) {
			$('.burger').removeClass('close').css('background', 'url(/images/icons/close.svg) no-repeat center right');
			$('.main-menu').addClass('mobil');
			$('.menu').addClass('mobil');
			$('.contact').addClass('mobil');
		} else {
			$('.burger').addClass('close').css('background', 'url(/images/icons/burger.svg) no-repeat center right');
			$('.main-menu').removeClass('mobil');
			$('.menu').removeClass('mobil');
			$('.contact').removeClass('mobil');
		}

	});
});
