jQuery(function ($) {
  $(function () {
    const wpcf7Elm = document.querySelector(".wpcf7");
    const popup = $("#popup");
    wpcf7Elm &&
      wpcf7Elm.addEventListener(
        "wpcf7submit",
        function () {
          popup.show();

          setTimeout(() => {
            popup.hide();
          }, 2000);
        },
        false
      );
  });
});
