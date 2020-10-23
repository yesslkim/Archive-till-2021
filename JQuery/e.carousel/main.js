// button 
$('.button-1').click(function(){
  $('.carousel').animate({
    'marginLeft': '0'
  })
})

$('.button-2').click(function(){
  $('.carousel').animate({
    'marginLeft': '-800px'
  })
})

$('.button-3').click(function(){
  $('.carousel').animate({
    'marginLeft': '-1600px'
  })
})
// prev next button 

$('.prev').click(function(){
  var CarouselMarginLeft = $('.carousel').css('marginLeft')
  if(CarouselMarginLeft==='0px'){
    // $('#carousel').css({marginLeft: '0px'})
    return
  }else {
    $('.carousel').animate(
      {marginLeft: '+=800px'}
   ,1000)
  }
})

$('.next').click(function(){
  var CarouselMarginLeft = $('.carousel').css('marginLeft')
  if(CarouselMarginLeft ==='-1600px'){
    // $('#carousel').css({marginLeft: '-1600px'})
    return
  }else {
    $('.carousel').animate(
      {marginLeft: '-=800px'}
   ,1000)
  }
})