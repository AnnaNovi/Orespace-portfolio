new Swiper(".offer-swiper", {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slidesPerView: 1,
  initialSlide: 4,
  grid: {
    rows: 1,
    fill: 'row'
  },
  spaceBetween: 24,
  grabCursor: true,
  breakpoints: {
      // when window width is >= 575px
      575: {
        initialSlide: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
      },
      // when window width is >= 1440px
      1440: {
        initialSlide: 1,
        grid: {
          rows: 3,
          fill: 'row'
        },
      },
    },
});

new Swiper(".review-swiper", {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  initialSlide: 0,
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
  },
});


function headerSize(){
  if ($(window).width() <= '991'){
      $('.preview-images_header').appendTo('.preview-images_hidden');
  } else {
    $('.preview-images_header').appendTo('.container_header');
  }
}
$(window).on('load resize',headerSize);

function propertySize(){
  if ($(window).width() <= '1400'){
      $('.property__image').appendTo('.property__image_hidden');
  } else {
    $('.property__image').appendTo('.property-container');
  }
}
$(window).on('load resize',propertySize);

function blogSize(){
  if ($(window).width() <= '991'){
      $('.image-block').appendTo('.image-block_hidden_bottom');
      $('.blog-dots').appendTo('.image-block_hidden_bottom');
  } else {
    $('.image-block').appendTo('.image-block_hidden_top');
    $('.blog-dots').appendTo('.image-block_hidden_top');
  }
}
$(window).on('load resize',blogSize);

function buttonSize(){
  if ($(window).width() <= '1280'){
      $('.buttons-line_header').appendTo('.header-menu');
  } else {
    $('.buttons-line_header').appendTo('header');
  }
}
$(window).on('load resize',buttonSize);

$(document).ready(function(){
	$('.header-burger').on('click', function(event){
    $(this).toggleClass('header-burger_active');
    $('.header-menu').toggleClass('header-menu_active');
    $('.header-menu__item').toggleClass('header-menu__item_active');
	});
});

function burgerSize(){
  if ($(window).width() >= '1281'){
      $('.header-menu').removeClass('header-menu_active');
      $('.header-burger').removeClass('header-burger_active');
  } else{}
}
$(window).on('load resize',burgerSize);

$('a[href^="#"].header-menu__item').on('click', function() {
    $('.header-burger').removeClass('header-burger_active');
    $('.header-menu').removeClass('header-menu_active');
    $('.header-menu__item').removeClass('header-menu__item_active');
    return false;
});



