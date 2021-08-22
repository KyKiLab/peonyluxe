import $ from "jquery";

jQuery(function ($) {
  $(function () {
    const $sliderContainer = $(".insta-block-slider");
    const $slider = $("#wis-slides");
    const $sliderControlsDots = $sliderContainer.find(
      ".carousel-controls-dots"
    );
    const $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
    const $sliderCounterTotal = $sliderContainer.find(".js-counter-total");

    $slider.on(
      "afterChange init",
      function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $sliderCounterCurrent.text(i < 10 ? `0${i}` : i);
        $sliderCounterTotal.text(
          slick.slideCount < 10 ? `0${slick.slideCount}` : slick.slideCount
        );
      }
    );

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      fade: false,
      infinite: true,
      arrows: true,
      appendDots: $sliderControlsDots,
      prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
      nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),
    });
  });
});
