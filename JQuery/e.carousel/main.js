// button 
$('.button-1').click(function(){
  $('.carousel').removeClass('active1')
  $('.carousel').removeClass('active2')
  $('.carousel').addClass('active')
})

$('.button-2').click(function(){
  $('.carousel').removeClass('active')
  $('.carousel').removeClass('active2')
  $('.carousel').addClass('active1')
})

$('.button-3').click(function(){
  $('.carousel').removeClass('active')
  $('.carousel').removeClass('active1')
  $('.carousel').addClass('active2')
})

// prev next button 

$('.prev').click(function(){
  $('.carousel').css({
    'transform': 'translateX(-800px)'
  })
})