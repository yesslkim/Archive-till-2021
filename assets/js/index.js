$(function () {
  //fullpage
  $("#fullpage").fullpage({
    autoScrolling: true,
    navigation: true,
    navigationPosition: "left",
    onLeave: function (index, destination, direction) {
      //FOOTER로 인한 SECTION-TITLE 변경
      if (index == 5 && direction == "down") {
        $(".content5 .section-title").addClass("slide-down");
      } else {
        $(".content5 .section-title").removeClass("slide-down");
      }

      // SECTION별 로고, NAV색 변경
      if (destination == 3 || destination == 4) {
        $(".logo a , .main-nav > li, .lang").addClass("active");
      } else {
        $(".logo a, .main-nav > li").removeClass("active");
      }
    },
  });
});
