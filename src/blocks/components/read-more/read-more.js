import $ from "jquery";

jQuery(function ($) {
  $(function () {
    const $readMoreBtns = $(".js-read-more-btn");

    $readMoreBtns.on("click", function (e) {
      const content = $(this).closest(".js-read-more-block");
      content.toggleClass("two-columns-text-block--show");

      if (content.hasClass("two-columns-text-block--show")) {
        $(this).text("Read Less");
      } else {
        $(this).text("Read More");
      }
    });
  });
});
