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

	function HeaderScroll(){
		let st = $(window).scrollTop();
		if (st > $(window).outerHeight()){
			$('.header').addClass('scroll');
		} else {
			$('.header').removeClass('scroll');
		}
	}
	HeaderScroll();

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
				startPoint = $(elementParent).offset().top - windowHeight;
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
		let $element = $('.header').next();
		let element_bg = $element.css('background-image').replace(/url\((?:\"|\')/,'').replace(/(?:\"|\')\)/,'');
		let image = new Image();
		image.src = element_bg;
		image.onload = function(){
			showElement();
		};
	}
	FaceLoaded();

	$(window).on('scroll',function(){
		HeaderScroll();
		showElement();
	});

	$(window).resize(function(){
		HeaderScroll();
		showElement();
	});

});