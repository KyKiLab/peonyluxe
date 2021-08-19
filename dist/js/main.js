/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/about/about.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/about/about.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("read_more-about").addEventListener('click', changeClass);

function changeClass() {
  var content = document.getElementById("extra_content-about");
  var btn = document.getElementById("read_more-about");
  content.classList.toggle('show-about');

  if (content.classList.contains("show-about")) {
    btn.innerHTML = "Read Less";
  } else {
    btn.innerHTML = "Read More";
  }
}

/***/ }),

/***/ "./src/blocks/components/destinations/destinations.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/destinations/destinations.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var $sliderContainer = $(".js-destinations-slider");
  var $slider = $sliderContainer.find(".carousel-slider");
  var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
  });
  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    appendDots: $sliderControlsDots,
    prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
    nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),
    variableWidth: true,
    centerMode: true,
    initialSlide: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/components/insta-block/slider.js":
/*!*****************************************************!*\
  !*** ./src/blocks/components/insta-block/slider.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jQuery(function ($) {
  $(function () {
    var $slider = $("#wis-slides"); // const $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
    // const $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
    // const $sliderCounterTotal = $sliderContainer.find(".js-counter-total");

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      // dots: true,
      fade: false,
      infinite: true // arrows: true,
      // appendDots: $sliderControlsDots,
      // prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
      // nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),

    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/components/main-slider/main-slider-tabs.js":
/*!***************************************************************!*\
  !*** ./src/blocks/components/main-slider/main-slider-tabs.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jQuery(function ($) {
  $(function () {
    var $sliderContainer = $(".js-photo-slider");
    var $slider = $sliderContainer.find(".carousel-slider");
    var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
    var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
    var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
    var $sliderContainer2 = $(".js-video-slider");
    var $slider2 = $sliderContainer2.find(".carousel-slider");
    var $sliderControlsDots2 = $sliderContainer2.find(".carousel-controls-dots");
    var $sliderCounterCurrent2 = $sliderContainer2.find(".js-counter-current");
    var $sliderCounterTotal2 = $sliderContainer2.find(".js-counter-total");
    $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
      $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
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
      nextArrow: $sliderContainer.find(".carousel-controls-btn--next")
    });
    $slider2.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $sliderCounterCurrent2.text(i < 10 ? "0".concat(i) : i);
      $sliderCounterTotal2.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
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
      nextArrow: $sliderContainer2.find(".carousel-controls-btn--next")
    });
    $(".tabs .tabs-content").not(":first").hide();
    $(".tabs-nav .js-tab-btn").on('click', function () {
      var $n = $(this).data('tab');
      $(".tabs-nav .js-tab-btn").removeClass('tabs-nav-btn--active');
      $(this).addClass('tabs-nav-btn--active');
      $(".tabs-content").hide().eq($n).fadeIn('fast', function () {
        $slider.slick("refresh");
        $slider2.slick("refresh");
      });
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/components/read-more/read-more.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/read-more/read-more.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("read_more").addEventListener('click', changeClass);

function changeClass() {
  var content = document.getElementById("extra_content");
  var btn = document.getElementById("read_more");
  content.classList.toggle('show');

  if (content.classList.contains("show")) {
    btn.innerHTML = "Read Less";
  } else {
    btn.innerHTML = "Read More";
  }
}

/***/ }),

/***/ "./src/blocks/components/testimonials/slider.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/testimonials/slider.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var $sliderContainer = $(".js-testimonial-slider");
  var $slider = $sliderContainer.find(".carousel-slider");
  var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
  });
  $slider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    appendDots: $sliderControlsDots,
    prevArrow: $sliderContainer.find(".carousel-controls-btn--prev"),
    nextArrow: $sliderContainer.find(".carousel-controls-btn--next"),
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/components/video-banner/video-banner.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/video-banner/video-banner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("read_more-video").addEventListener('click', changeClass);

function changeClass() {
  var content = document.getElementById("extra_content-video");
  var btn = document.getElementById("read_more-video");
  content.classList.toggle('show-video');

  if (content.classList.contains("show-video")) {
    btn.innerHTML = "Read Less";
  } else {
    btn.innerHTML = "Read More";
  }
}

/***/ }),

/***/ "./src/blocks/modules/blog/slider.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/blog/slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jQuery(function ($) {
  $(function () {
    var $sliderContainer = $(".js-blog-slider");
    var $slider = $sliderContainer.find(".carousel-slider"); // $slider.slick({
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
      $(".tabs-content").hide().eq($n).fadeIn("fast", function () {
        $slider.slick("refresh");
      });
    }); // slider

    $sliderContainer.each(function (k, slider) {
      var $slider = $(slider).find(".carousel-slider");
      var $sliderControlsDots = $(slider).find(".carousel-controls-dots");
      var settings_slider = {
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
        prevArrow: $(slider).find(".carousel-controls .carousel-controls-btn--prev"),
        nextArrow: $(slider).find(".carousel-controls .carousel-controls-btn--next")
      };
      slick_on_mobile($slider, settings_slider);
    }); // slick on mobile

    function slick_on_mobile(slider, settings) {
      $(window).on("load resize", function () {
        if ($(window).width() > 575) {
          if (slider.hasClass("slick-initialized")) {
            slider.slick("unslick");
          }

          return;
        }

        if (!slider.hasClass("slick-initialized")) {
          console.log("slider", slider);
          var $sliderCounterCurrent = slider.parent().find(".carousel-controls .js-counter-current");
          var $sliderCounterTotal = slider.parent().find(".carousel-controls .js-counter-total");
          slider.on("afterChange init", function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
            $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
          });
          return slider.slick(settings);
        }
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var refs = {
  $dropDownBtn: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown-btn'),
  $dropDownContent: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-dropdown-content'),
  burgerBtn: document.querySelector('.js-toggle-menu'),
  header: document.querySelector('#header')
}; // $(function () {
//   $('.js-scroll-link').on('click', e => {
//     if (e.target.nodeName === 'A') {
//       e.preventDefault();
//       var target = $(e.target).attr('href');
//       var offset = $('#header').height();
//       var marginTop = $(target).offset().top;
//       $('html, body').animate({ scrollTop: marginTop - offset }, 800);
//       window.location
//       return false;
//     }
//   })
//   $('.js-main-nav').on('click', e => {
//     if (e.target.nodeName === 'A') {
//       if (refs.header.classList.contains('mob-menu-show')) {
//         toggleMenu()
//       }
//     }
//   })
//   refs.$dropDownBtn.on('click', e => {
//     $(e.target).toggleClass('is-active');
//     refs.$dropDownContent.fadeToggle(100);
//   })
//   $(window).on('scroll', throttle(function () {
//     if ($(this).scrollTop() > $('.about-slider').offset().top - 100) {
//       // $('body').addClass('scrolled')
//     }
//     if ($(this).scrollTop() > 899) {
//       if ($('#header').hasClass('header-policy')) {
//         $('#header').addClass("header-sticky");
//       } else {
//         $('#header').addClass("header-sticky header-primary");
//       }
//     }
//     else {
//       if ($('#header').hasClass('header-policy')) {
//         $('#header').removeClass("header-sticky");
//       } else {
//         $('#header').removeClass("header-sticky header-primary");
//       }
//     }
//   }, 250));

var toggleMenu = function toggleMenu() {
  refs.burgerBtn.classList.toggle('toggle-menu--on');
  refs.header.classList.toggle('mob-menu-show');
  document.body.classList.toggle('scrolled');
};

refs.burgerBtn && refs.burgerBtn.addEventListener('click', toggleMenu); // });
// // $(function () {
// //   var scroller = {};
// //   scroller.e = document.querySelector(".about-slider");
// //   if (scroller.e.addEventListener) {
// //     scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
// //     scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// //   } else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);
// //   function MouseWheelHandler(e) {
// //     // cross-browser wheel delta
// //     var e = window.event || e;
// //     var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));
// //     var pst = $('.about-slider').scrollLeft() + delta;
// //     if (pst < 0) {
// //       pst = 0;
// //     } else if (pst > $('.about-slider__item').width()) {
// //       pst = $('.about-slider__item').width();
// //     }
// //     $('.about-slider').scrollLeft(pst);
// //     return false;
// //   }
// // });

/***/ }),

/***/ "./src/blocks/modules/home/home-banner.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/home/home-banner.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var $sliderContainer = $(".js-main-slider");
  var $slider = $sliderContainer.find(".carousel-slider");
  var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
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
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/kindwords/slider.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/kindwords/slider.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var $sliderContainer = $(".js-kindwords-slider");
  var $slider = $sliderContainer.find(".carousel-slider");
  var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
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
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/meet-us/meet-us.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/meet-us/meet-us.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  var $sliderContainer = $(".js-florida-slider");
  var $slider = $sliderContainer.find(".carousel-slider");
  var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
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
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
$(function () {
  var $sliderContainer = $(".js-california-slider");
  var $slider = $sliderContainer.find(".carousel-slider");
  var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
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
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
$(function () {
  var $sliderContainer = $(".js-works-slider");
  var $slider = $sliderContainer.find(".carousel-slider");
  var $sliderControlsDots = $sliderContainer.find(".carousel-controls-dots");
  var $sliderCounterCurrent = $sliderContainer.find(".js-counter-current");
  var $sliderCounterTotal = $sliderContainer.find(".js-counter-total");
  $slider.on('afterChange init', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $sliderCounterCurrent.text(i < 10 ? "0".concat(i) : i);
    $sliderCounterTotal.text(slick.slideCount < 10 ? "0".concat(slick.slideCount) : slick.slideCount);
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
    responsive: [{
      breakpoint: 615,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: 'unslick'
    }]
  });
});

(function ($) {
  $(function () {
    var windowWidth = $(window).width();

    if (windowWidth > 1024) {
      $('.tabs-about-nav').on('click', 'button:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active').closest('div.tabs-about').find('div.tabs-about-content').removeClass('active').eq($(this).index()).addClass('active');
      });
    } else {
      $(".tabs-about-content").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        $(this).toggleClass('accordion-active'); // .siblings().removeClass('accordion-active');
      });
    }
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/popup/popup.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/popup/popup.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/adaptiveMoveBlock.js":
/*!*************************************!*\
  !*** ./src/js/adaptiveMoveBlock.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle


(function () {
  var originalPositions = [];
  var daElements = document.querySelectorAll('[data-da]');
  var daElementsArray = [];
  var daMatchMedia = []; //Заполняем массивы

  if (daElements.length > 0) {
    var number = 0;

    for (var index = 0; index < daElements.length; index++) {
      var daElement = daElements[index];
      var daMove = daElement.getAttribute('data-da');

      if (daMove != '') {
        var daArray = daMove.split(',');
        var daPlace = daArray[1] ? daArray[1].trim() : 'last';
        var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
        var daDestination = document.querySelector('.' + daArray[0].trim());

        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute('data-da-index', number); //Заполняем массив первоначальных позиций

          originalPositions[number] = {
            "parent": daElement.parentNode,
            "index": indexInParent(daElement)
          }; //Заполняем массив элементов 

          daElementsArray[number] = {
            "element": daElement,
            "destination": document.querySelector('.' + daArray[0].trim()),
            "place": daPlace,
            "breakpoint": daBreakpoint
          };
          number++;
        }
      }
    }

    dynamicAdaptSort(daElementsArray); //Создаем события в точке брейкпоинта

    for (var _index = 0; _index < daElementsArray.length; _index++) {
      var el = daElementsArray[_index];
      var _daBreakpoint = el.breakpoint;
      var daType = "max"; //Для MobileFirst поменять на min

      daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + _daBreakpoint + "px)"));

      daMatchMedia[_index].addListener(dynamicAdapt);
    }
  } //Основная функция


  function dynamicAdapt(e) {
    for (var _index2 = 0; _index2 < daElementsArray.length; _index2++) {
      var _el = daElementsArray[_index2];
      var _daElement = _el.element;
      var _daDestination = _el.destination;
      var _daPlace = _el.place;
      var _daBreakpoint2 = _el.breakpoint;
      var daClassname = "_dynamic_adapt_" + _daBreakpoint2;

      if (daMatchMedia[_index2].matches) {
        //Перебрасываем элементы
        if (!_daElement.classList.contains(daClassname)) {
          var actualIndex = indexOfElements(_daDestination)[_daPlace];

          if (_daPlace === 'first') {
            actualIndex = indexOfElements(_daDestination)[0];
          } else if (_daPlace === 'last') {
            actualIndex = indexOfElements(_daDestination)[indexOfElements(_daDestination).length];
          }

          _daDestination.insertBefore(_daElement, _daDestination.children[actualIndex]);

          _daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (_daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(_daElement);

          _daElement.classList.remove(daClassname);
        }
      }
    }

    customAdapt();
  } //Вызов основной функции


  dynamicAdapt(); //Функция возврата на место

  function dynamicAdaptBack(el) {
    var daIndex = el.getAttribute('data-da-index');
    var originalPlace = originalPositions[daIndex];
    var parentPlace = originalPlace['parent'];
    var indexPlace = originalPlace['index'];
    var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  } //Функция получения индекса внутри родителя


  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  } //Функция получения массива индексов элементов внутри родителя 


  function indexOfElements(parent, back) {
    var children = parent.children;
    var childrenArray = [];

    for (var i = 0; i < children.length; i++) {
      var childrenElement = children[i];

      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute('data-da') == null) {
          childrenArray.push(i);
        }
      }
    }

    return childrenArray;
  } //Сортировка объекта


  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      } //Для MobileFirst поменять

    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  } //Дополнительные сценарии адаптации


  function customAdapt() {
    var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
})();
/*
let block = document.querySelector('.click');
block.addEventListener("click", function (e) {
	alert('Все ок ;)');
});
*/

/*
//Объявляем переменные
const parent_original = document.querySelector('.content__blocks_city');
const parent = document.querySelector('.content__column_river');
const item = document.querySelector('.content__block_item');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);

//Функция
function move(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[2]);
			item.classList.remove('done');
		}
	}
}

//Вызываем функцию
move();

*/

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_blog_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/blog/slider */ "./src/blocks/modules/blog/slider.js");
/* harmony import */ var _modules_kindwords_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/kindwords/slider */ "./src/blocks/modules/kindwords/slider.js");
/* harmony import */ var _modules_home_home_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/home/home-banner */ "./src/blocks/modules/home/home-banner.js");
/* harmony import */ var _modules_meet_us_meet_us__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/meet-us/meet-us */ "./src/blocks/modules/meet-us/meet-us.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/popup/popup */ "./src/blocks/modules/popup/popup.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_popup_popup__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _adaptiveMoveBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adaptiveMoveBlock */ "./src/js/adaptiveMoveBlock.js");
/* harmony import */ var _adaptiveMoveBlock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adaptiveMoveBlock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _blocks_components_main_slider_main_slider_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/components/main-slider/main-slider-tabs */ "./src/blocks/components/main-slider/main-slider-tabs.js");
/* harmony import */ var _blocks_components_insta_block_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/components/insta-block/slider */ "./src/blocks/components/insta-block/slider.js");
/* harmony import */ var _blocks_components_testimonials_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/components/testimonials/slider */ "./src/blocks/components/testimonials/slider.js");
/* harmony import */ var _blocks_components_video_banner_video_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/components/video-banner/video-banner */ "./src/blocks/components/video-banner/video-banner.js");
/* harmony import */ var _blocks_components_video_banner_video_banner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_video_banner_video_banner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_components_about_about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/components/about/about */ "./src/blocks/components/about/about.js");
/* harmony import */ var _blocks_components_about_about__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_about_about__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_components_destinations_destinations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/components/destinations/destinations */ "./src/blocks/components/destinations/destinations.js");
/* harmony import */ var _blocks_components_read_more_read_more__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blocks/components/read-more/read-more */ "./src/blocks/components/read-more/read-more.js");
/* harmony import */ var _blocks_components_read_more_read_more__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_read_more_read_more__WEBPACK_IMPORTED_MODULE_11__);












var collapseElementList = [].slice.call(document.querySelectorAll(".collapse"));
collapseElementList.map(function (collapseEl) {
  return new bootstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"](collapseEl);
});
jQuery(function ($) {
  $(function () {
    $("[data-fancybox]").fancybox({
      vimeo: {
        color: "#FFF6DB",
        autoStart: true
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map