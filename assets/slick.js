$(function () {
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
        },
      },
    ],
  });

  //slick trends-list
  $(".trends-list").slick({
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
  });

  // const trendsSetting = $(".trends-list").slick(settings);

  $(window).on("resize", function () {
    if (
      $(window).width() < 1199 &&
      !$(".trends-list").hasClass("slick-initialized")
    ) {
      $(".trends-list").slick("reinit");
    }
  });

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
});
