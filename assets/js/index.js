$(function () {
  //
  //HEADER - NAVIGATION
  //

  //MOBILE VER) 메뉴열기
  $(".menu-btn").on("click", function () {
    $(this).siblings().addClass("open");
  });

  //nav - menu btn
  $(".gnb-list > h2").on("click", function () {
    $(".gnb-list > h2").removeClass("active");
    $(".snb").addClass("hidden");
    $(this).addClass("active");
    $(this).siblings().removeClass("hidden");
  });

  //nav - nav depth2 open
  $(".snb-depth1").on("click", function () {
    $(this).parent().toggleClass("active");
    $(".snb-depth1").not($(this)).parent().removeClass("active");
  });

  //nav -close btn
  $(".gnb-btn >button").on("click", function () {
    $(this).parent().parent().parent().removeClass("open");
  });

  //nav hover
  $("nav").on("mouseleave", function () {
    $(".snb").children().removeClass("active");
  });

  //
  //MAIN - INFO_SECTION
  //

  $(".tab-btns button").on("click", function () {
    const tabPanelId = $(this).attr("aria-controls");

    $(".tab-btns button").not($(this)).removeClass("active");
    $(this).addClass("active");
    $(".tab-list > ul").removeClass("active");
    $("#" + tabPanelId).addClass("active");
  });

  //
  // FOOTER - 패밀리웹사이트
  //

  //family-website
  $(".websites button").on("click", function () {
    $(this).siblings().slideToggle();
    $(this).addClass("active");
    $(".websites button").not($(this)).siblings().slideUp();
    $(".websites button").not($(this)).removeClass("active");
  });

  $(".websites > div").on("mouseleave", function (e) {
    $(this).find("ul").slideUp();
    $(this).find("button").removeClass("active");
  });

  //
  // SLICK SLIDER
  //

  //slick slide1
  $(".slide1 > .inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2500,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          fade: false,
        },
      },
    ],
  });

  //slick slide2
  $(".slide2 > .inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2500,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          fade: false,
        },
      },
    ],
  });

  //slick slide3
  $(".slide3 > ul").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
          useTransform: false,
        },
      },
    ],
  });

  //slick trends-list
  const trendsSetting = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: "unslick",
      },
    ],
  };

  $(".trends-list").slick(trendsSetting);

  //slick research-section
  $(".research-section .slides").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  //slick banners
  $(".banner-slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  });

  //slick controls
  $(".controls .prev").click(function () {
    $(this).parent().siblings().slick("slickPrev");
  });
  $(".controls .stop").click(function () {
    $(this).parent().siblings().slick("slickPause");
  });
  $(".controls .next").click(function () {
    $(this).parent().siblings().slick("slickNext");
  });

  // slick responsive
  $(window).on("resize", function () {
    if (
      $(window).width() < 1199 &&
      !$(".trends-list").hasClass("slick-initialized")
    ) {
      $(".trends-list").slick(trendsSetting);
    }
  });

  //
  // ACCESSIBILITY - FOCUS
  //

  const firstGnbTitle = $(".gnb-list").first().find("h2 > a");

  firstGnbTitle.focus(function () {
    $(".header-bottom").addClass("focus");
  });

  $(".header-bottom .gnb-btn").focusout(function () {
    $(".header-bottom").removeClass("focus");
  });

  $(".snb >li >a").keydown(function (e) {
    const keyCode = e.keyCode || e.which;
    if ($(this).hasClass("snb-depth1") && keyCode === 13) {
      $(this).siblings().show();
    }
  });

  $(".header-bottom .gnb-btn").keydown(function (e) {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      $(".header-bottom").removeClass("focus");
    }
  });

  $(".tab-btns button").on("focusout", function () {
    const tabPanelId = $(this).attr("aria-controls");
    $("#" + tabPanelId + ">li")
      .first()
      .find("a")
      .focus();

    $("#" + tabPanelId + ">li")
      .last()
      .on("focusout", function () {
        const tabIndex = $(this).parent().parent().index();
        const nextIndex = tabIndex + 1;

        if (nextIndex < $(".tab-list").length) {
          $(".tab-inner").removeClass("active");
          $(".tab-inner").eq(nextIndex).addClass("active");
          $(".tab-btns button").removeClass("active");
          $(".tab-btns button").eq(nextIndex).addClass("active").focus();
        } else {
          $(".qmenu-list a.icon1").focus();
          $(".tab-inner").eq(tabIndex).addClass("active");
          $(".tab-btns button").eq(tabIndex).addClass("active");
        }
      });
  });
});
