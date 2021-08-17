

import slick from 'slick-carousel';

$(function () {

  const $sliderContainer = $(".js-florida-slider");
  const $slider = $sliderContainer.find(".carousel-slider");
  const $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  const $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  const $sliderCounterTotal = $sliderContainer.find(".js-counter-total");

  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {

    let i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? `0${i}` : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount);
  });

  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    appendDots: $sliderControlsDots,
    prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
    nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

})

$(function () {

    const $sliderContainer = $(".js-california-slider");
    const $slider = $sliderContainer.find(".carousel-slider");
    const $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
    const $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
    const $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  
    $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
  
      let i = (currentSlide ? currentSlide : 0) + 1;
      $sliderCounterCurrent.text(i < 10 ? `0${i}` : i);
      $sliderCounterTotal.text(slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount);
    });
  
    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      arrows: true,
      appendDots: $sliderControlsDots,
      prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
      nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),
      variableWidth: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  
  });

  $(function () {

    const $sliderContainer = $(".js-works-slider");
    const $slider = $sliderContainer.find(".carousel-slider");
    const $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
    const $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
    const $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  
    $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
  
      let i = (currentSlide ? currentSlide : 0) + 1;
      $sliderCounterCurrent.text(i < 10 ? `0${i}` : i);
      $sliderCounterTotal.text(slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount);
    });
  
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
      arrows: true,
      appendDots: $sliderControlsDots,
      prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
      nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 615,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: 'unslick'

        },  
      ]
    });
  
  });





(function($) {
  $(function() {
    var windowWidth = $(window).width();
      if(windowWidth > 1024){
        $('.tabs-about-nav').on('click', 'button:not(.active)', function() {
          $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs-about').find('div.tabs-about-content').removeClass('active').eq($(this).index()).addClass('active');
        });
      } else {
        $(".tabs-about-content").on("click", function(e) {

          e.preventDefault();
          var $this = $(this);
      
          $(this)
          .toggleClass('accordion-active');
          // .siblings().removeClass('accordion-active');

        });
      }
  });
  })(jQuery);

