import $ from "jquery";
import fancybox from "@fancyapps/fancybox";
import { Collapse } from "bootstrap";

import "./adaptiveMoveBlock";
import "./import/modules";
import "../blocks/components/main-slider/main-slider-tabs";
import "../blocks/components/testimonials/slider";

var collapseElementList = [].slice.call(document.querySelectorAll(".collapse"));
collapseElementList.map(function (collapseEl) {
  return new Collapse(collapseEl);
});

jQuery(function ($) {
  $(function () {
    $("[data-fancybox]").fancybox({
      vimeo: {
        color: "#FFF6DB",
        autoStart: true,
      },
    });
  });
});
