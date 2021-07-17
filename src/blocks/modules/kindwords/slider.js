import slick from 'slick-carousel';

$(function () {

    const $sliderContainer = $(".js-kindwords-slider");
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