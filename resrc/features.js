var swiper = new Swiper(".swiper-block", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true
    },
    initialSlide: 1
});

var swiper = new Swiper(".swiper-review", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true
    },
});

function headerSize(){
  if ($(window).width() <= '650'){
      $('.signed').appendTo('.header__menu');
  } else {
    $('.signed').appendTo('nav');
  }
}
$(window).on('load resize',headerSize);

$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu, .signed').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function footerSize(){
  if ($(window).width() <= '650'){
      $('.sup-column').appendTo('.serv-column');
  } else {
    $('.sup-column').appendTo('footer .container');
  }
}
$(window).on('load resize',footerSize);

function footerlastSize(){
  if ($(window).width() <= '450'){
      $('.soc-column').appendTo('.long-info-column');
  } else {
    $('.soc-column').appendTo('footer .container');
  }
}
$(window).on('load resize',footerlastSize);
