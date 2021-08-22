jQuery(function ($) {
  $(function () {
    const wpcf7Elm = document.querySelector(".wpcf7");
    const popup = $(".overlay");

    wpcf7Elm &&
      wpcf7Elm.addEventListener(
        "wpcf7submit",
        function () {
          popup.show();
          document.body.style.overflow = "hidden";
          setTimeout(() => {
            popup.hide();
            document.body.style.overflow = "";
          }, 3000);
        },
        false
      );
  });
});
