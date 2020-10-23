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
// $('.login-btn').on('click',function(e){
//   if($('.email').val()==='' || $('.pwd').val()===''){
//     e.preventDefault();
//     if($('.email').val()===''){
//       $('.email-alert').show()
//     }else {
//       $('.email-alert').hide()
//     }
//     if($('.pwd').val()===''){
//       $('.pwd-alert').show()
//     }else {
//       $('.pwd-alert').hide()
//     }
//   }
// });

//이메일 형식 정규식 (regular expression)
/*
/abc/.test('테스트할텍스트')
= '테스트할 텍스트' 안에 abc가 들어 있는지 확인
*/
$('form').on('submit',function(e){
 
  var emailValue = $('.email').val();
  var emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if(eamilValue===''){
    e.preventDefault();
    $('.email-alert').show()
  }else if(!emailRegex.test(emailValue)){
    e.preventDefault();
    $('.email-alert').text('이메일이 형식에 맞지 않습니다')
    $('.email-alert').show()
  }
    

  //패스워드 필수사항 : 대문자가 있는지 확인
  var pwdValue = $('.pwd').val();
  var pwdRegex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
  if(!pwdRegex.test(pwdValue)){
    e.preventDefault();
    $('.pwd-alert').show()
  }
})