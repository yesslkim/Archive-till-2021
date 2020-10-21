// display : block - show()
// display : none - hide()

$('.para').css('display','none')

//EventListener

$('.open').on('click',function(){
  $('.para').show();
});

$('.close').on('click', function(){
  $('.para').hide();
})
