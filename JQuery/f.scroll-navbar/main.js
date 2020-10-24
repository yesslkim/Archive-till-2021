$(window).on('scroll',function(e){
  if($(window).scrollTop() > 100){
    $('.navbar').addClass('active')
  }else if($(window).scrollTop() == 0){
    $('.navbar').removeClass('active')
  }
})

//window = viewport