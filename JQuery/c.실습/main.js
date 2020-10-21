//로그인 모달창
$('#login').on('click',function(){
    $('.modal-popup').fadeIn();
})

$('#close').on('click',function(){
  $('.modal-popup').fadeOut();
})

// navbar 
$('.shopping').on('click', function(){
  $('.subnav').slideToggle();
})

// 로그인창 공백 체크하기
$('.login-btn').on('click',function(e){
  if($('.email').val()==='' || $('.pwd').val()===''){
    e.preventDefault();
    if($('.email').val()===''){
      $('.email-alert').show()
    }else {
      $('.email-alert').hide()
    }
    if($('.pwd').val()===''){
      $('.pwd-alert').show()
    }else {
      $('.pwd-alert').hide()
    }
  }
});
