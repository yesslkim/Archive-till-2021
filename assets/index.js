$(function () {
  //nav 버튼
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
});
