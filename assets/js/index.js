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
        $("#fp-nav ul li a span").addClass("dark");
      } else {
        $(".logo a, .main-nav > li, .lang").removeClass("active");
        $("#fp-nav ul li a span").removeClass("dark");
      }

      //FOOTER PAGINATION STYLE
      if (destination == 6) {
        $("#fp-nav ul li").eq(4).children("a").addClass("show");
      } else {
        $("#fp-nav ul li").eq(4).children("a").removeClass("show");
      }
    },
  });

  //scrollTop
  $(document).on("click", ".scroll-top", function () {
    $.fn.fullpage.moveTo(1);
  });

  //FOOTER NAV HOVER
  $(".family-nav").hover(
    function () {
      $(this).find(".family-subnav").slideDown();
    },
    function () {
      $(this).find(".family-subnav").slideUp();
    }
  );
});
