$(window).on('scroll',function(){
  var scrollHeight = $(window).scrollTop();
  var opacity = (-1/500) * scrollHeight + 115/50; // 508 -908
  var imageWidth = (-0.2/500) * scrollHeight + 1.26;
  $('.image').eq(0).css({
    opacity: opacity,
    transform: `scale(${imageWidth})`
  })
  
  
})