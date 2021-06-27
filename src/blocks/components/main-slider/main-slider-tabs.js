import $ from 'jquery';

jQuery(function ($) {

  $(function () {
    const $sliderContainer = $(".js-photo-slider");
    const $slider = $sliderContainer.find(".carousel-slider");
    const $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
    const $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
    const $sliderCounterTotal = $sliderContainer.find(".js-counter-total");

    const $sliderContainer2 = $(".js-video-slider");
    const $slider2 = $sliderContainer2.find(".carousel-slider");
    const $sliderControlsDots2 = $sliderContainer2.find(".carousel-controls-dots");
    const $sliderCounterCurrent2 = $sliderContainer2.find(".js-counter-current");
    const $sliderCounterTotal2 = $sliderContainer2.find(".js-counter-total");

    $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {

      let i = (currentSlide ? currentSlide : 0) + 1;
      $sliderCounterCurrent.text(i < 10 ? `0${i}` : i);
      $sliderCounterTotal.text(slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount);
    });

    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      infinite: false,
      arrows: true,
      appendDots: $sliderControlsDots,
      prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
      nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),

    });

    $slider2.on('afterChange init', function (event, slick, currentSlide, nextSlide) {

      let i = (currentSlide ? currentSlide : 0) + 1;
      $sliderCounterCurrent2.text(i < 10 ? `0${i}` : i);
      $sliderCounterTotal2.text(slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount);
    });

    $slider2.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      infinite: false,
      arrows: true,
      appendDots: $sliderControlsDots2,
      prevArrow: $sliderContainer2.find(".carousel-controls-btn--prev"),
      nextArrow: $sliderContainer2.find(".carousel-controls-btn--next"),

    });

    $(".tabs .tabs-content").not(":first").hide();

    $(".tabs-nav .js-tab-btn").on('click', function () {

      var $n = $(this).data('tab');
      $(".tabs-nav .js-tab-btn").removeClass('tabs-nav-btn--active')
      $(this).addClass('tabs-nav-btn--active')

      $(".tabs-content").hide().eq($n).fadeIn('fast', function () {
        $slider.slick("refresh");
        $slider2.slick("refresh");

      })

    })
  })

})
