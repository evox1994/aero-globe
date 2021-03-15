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
		$('.header-menu').addClass('active');
		$('body').addClass('no-scroll');
	});

	$(document).on('click','.header-menu .menu .close, .header-menu .overlay',function(){
		$('.header-menu').removeClass('active');
		$('body').removeClass('no-scroll');
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

	$(window).on('scroll',function(){
		HeaderScroll();
	});

	$(window).resize(function(){
		HeaderScroll();
	});

});