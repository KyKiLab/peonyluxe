import $ from "jquery";

jQuery(function ($) {
  $(function () {
    const $sliderContainer = $(".js-blog-slider");

    const $slider = $sliderContainer.find(".carousel-slider");

    // $slider.slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   dots: true,
    //   fade: true,
    //   infinite: false,
    //   arrows: true,
    //   appendDots: $sliderControlsDots,
    //   prevArrow: $sliderContainer.find(
    //     ".carousel-controls .carousel-controls-btn--prev"
    //   ),
    //   nextArrow: $sliderContainer.find(
    //     ".carousel-controls .carousel-controls-btn--next"
    //   ),
    // });

    $(".tabs .tabs-content").not(":first").hide();

    $(".tabs-nav .js-tab-btn").on("click", function () {
      var $n = $(this).data("tab");
      $(".tabs-nav .js-tab-btn").removeClass("tabs-nav-btn--active");
      $(this).addClass("tabs-nav-btn--active");

      $(".tabs-content")
        .hide()
        .eq($n)
        .fadeIn("fast", function () {
          $slider.slick("refresh");
        });
    });

    // slider

    $sliderContainer.each((k, slider) => {
      const $slider = $(slider).find(".carousel-slider");
      const $sliderControlsDots = $(slider).find(".carousel-controls-dots");

      const settings_slider = {
        // slidesToShow: 1,
        // slidesToScroll: 1,
        adaptiveHeight: true,
        slidesPerRow: 1,
        rows: 3,
        dots: true,
        fade: true,
        infinite: false,
        arrows: true,
        appendDots: $sliderControlsDots,
        prevArrow: $(slider).find(
          ".carousel-controls .carousel-controls-btn--prev"
        ),
        nextArrow: $(slider).find(
          ".carousel-controls .carousel-controls-btn--next"
        ),
      };
      slick_on_mobile($slider, settings_slider);
    });

    // slick on mobile
    function slick_on_mobile(slider, settings) {
      $(window).on("load resize", function () {
        if ($(window).width() > 575) {
          if (slider.hasClass("slick-initialized")) {
            slider.slick("unslick");
          }
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          console.log(`slider`, slider);
          const $sliderCounterCurrent = slider
            .parent()
            .find(".carousel-controls .js-counter-current");
          const $sliderCounterTotal = slider
            .parent()
            .find(".carousel-controls .js-counter-total");
          slider.on(
            "afterChange init",
            function (event, slick, currentSlide, nextSlide) {
              let i = (currentSlide ? currentSlide : 0) + 1;
              $sliderCounterCurrent.text(i < 10 ? `0${i}` : i);
              $sliderCounterTotal.text(
                slick.slideCount < 10
                  ? `0${slick.slideCount}`
                  : slick.slideCount
              );
            }
          );
          return slider.slick(settings);
        }
      });
    }
  });
});
