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

const readMoreBtns = document.querySelectorAll(".js-read_more-btn");

 readMoreBtns.length
   ? readMoreBtns.forEach((readMoreBtn) => {
       readMoreBtn.addEventListener("click", changeClass);
     })
   : null;

 function changeClass(e) {
   const content = e.target
     .closest(".js-read_more-block")
     .querySelector(".js-read_more-content");

   content.classList.toggle("show");

   if (content.classList.contains("show")) {
     e.target.innerHTML = "Read Less";
   } else {
     e.target.innerHTML = "Read More";
   }
 }