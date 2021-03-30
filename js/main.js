$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.mobile-menu .nav li.li-drop').removeClass('active');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$(document).on('click','.scroll-btn',function(){
		var el = $(this).attr('href');
		var des = $(this).attr('data-scroll-offset');
		if ($(el).length){
			if (des){
				$('body,html').animate({scrollTop: $(el).offset().top - des}, 800);
			} else {
				$('body,html').animate({scrollTop: $(el).offset().top}, 800);
			}
		}
		return false;
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$(document).on('click','.header-burger',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.header-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.header-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$(document).on('click','.header-menu .overlay',function(){
		$('.header-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.header-burger').removeClass('active');
	});

	$(document).on('click','.face-arr',function(){
		$('body,html').animate({scrollTop: $(window).innerHeight()},800);
		return false;
	});

	$('.b-product-slider .slider').slick({
		dots: true,
		autoplay: true
	});

	$('.b-product-slider .slider').on('afterChange',function(event,slick,currentSlide){
		let element = $(this).find('.slide.slick-active').attr('data-text');
		$(this).parent('.b-product-slider').find('.texts .item').removeClass('active');
		$(this).parent('.b-product-slider').find('.texts').find('.item[data-text="'+element+'"]').addClass('active');
	});

	$(document).on('click','.b-history .btns > li',function(){
		let element = $(this).attr('data-year');
		if ( !$(this).hasClass('active') ){
			$(this).parents('.btns').find('li').removeClass('active');
			$(this).parents('.b-history').find('.info .item').removeClass('active');
			$(this).parents('.b-history').find('.info .item[data-year="'+element+'"]').addClass('active');
			$(this).addClass('active');
		}
	});

	function HeaderScroll(){
		let st = $(window).scrollTop();
		if (st > $(window).outerHeight()){
			$('.header').addClass('scroll');
		} else {
			$('.header').removeClass('scroll');
		}
	}
	HeaderScroll();

	function setFaceHeight(){
		let windowHeight = $(window).innerHeight();
		$('.b-face').innerHeight(windowHeight);
	}

	function setPadding(){
		$('.header').next().removeAttr('style');
		let padding = +$('.header').next().css('padding-top').replace(/[^+\d.]/g,'');
		padding += $('.header').outerHeight();
		if ( $('.header').next().attr('data-bg') ){
			let image = $('.header').next().attr('data-bg');
			$('.header').next().css('background-image','url("'+image+'")');
		}
		$('.header').next().css('padding-top',padding);
		setFaceHeight();
	}
	setPadding();

	function showElement(){
		let st = $(window).scrollTop();
		let windowHeight = $(window).outerHeight();
		$('.anim-el').each(function(){
			let $element = $(this);
			let elementParent = $element.attr('data-parent');
			let elementOffset = $element.attr('data-offset');
			let elementDelay = +$element.attr('data-delay');
			let startPoint;
			if (elementParent){
				if ($(window).outerWidth() > 768){
					startPoint = $element.parent().offset().top - windowHeight;
				} else {
					startPoint = $element.offset().top - windowHeight;
				}
			} else {
				startPoint = $element.offset().top - windowHeight;
			}
			if ($element.hasClass('fadeUp')){
				startPoint -= 50;
			}
			if (elementOffset){
				if (elementOffset.includes('%')){
					elementOffset = elementOffset.slice(0,elementOffset.length-1);
					startPoint -= windowHeight*(+elementOffset)/100;
				} else {
					startPoint -= +elementOffset;
				}
			}
			if (st > startPoint){
				if (elementDelay){
					setTimeout(function(){
						$element.addClass('show');
					},elementDelay);
				} else {
					$element.addClass('show');
				}
			} else {
				$element.removeClass('show');
			}
		});
	}

	function FaceLoaded(){
		let $element = $('.b-face');
		if ( $element.length ){
			let element_bg = $element.css('background-image').replace(/url\((?:\"|\')/,'').replace(/(?:\"|\')\)/,'');
			let image = new Image();
			image.src = element_bg;
			image.onload = function(){
				showElement();
			};
		} else {
			showElement();
		}
	}
	FaceLoaded();

	function scrollImage(){
		if ( $('.b-steps').length ){
			let st = $(window).scrollTop();
			let top = $('.header').outerHeight() + 30;
			if ( $(window).outerWidth() > 1024 ){
				$('.b-steps').each(function(){
					let start_scroll = $(this).offset().top - top;
					let end_scroll = start_scroll + $(this).outerHeight() - $(this).find('.image').outerHeight();
					let img_width = +$(this).css('padding-left').replace(/[^+\d.]/g,'') - 85;
					if (st > start_scroll){
						if (st < end_scroll){
							$(this).find('.image').addClass('scroll');
							$(this).find('.image').removeClass('bottom');
							$(this).find('.image').css({
								'top': top,
								'width': img_width,
							});
						} else {
							$(this).find('.image').removeClass('scroll');
							$(this).find('.image').addClass('bottom');
							$(this).find('.image').removeAttr('style');
						}
					} else {
						$(this).find('.image').removeClass('scroll');
						$(this).find('.image').removeClass('bottom');
						$(this).find('.image').removeAttr('style');
					}
				});
			} else {
				$('.b-steps').find('.image').removeClass('scroll');
				$('.b-steps').find('.image').removeClass('bottom');
				$('.b-steps').find('.image').removeAttr('style');
			}
		}
	}
	scrollImage();

	$(window).on('scroll',function(){
		HeaderScroll();
		showElement();
		scrollImage();
	});

	$(window).resize(function(){
		HeaderScroll();
		showElement();
		setPadding();
		scrollImage();
	});

});