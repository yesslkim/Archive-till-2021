// 아이디 선택하기 : $('#title'), $('#title p')

//innerHTML - HTML태그 포함 값 가져오거나 변경
$('#title').html() 
$('#title').html('<strong>하이</strong>')

//textContent
$('.para').text('헬로우');

//css styling 
$('.para').css('color','blue');
$('.para').css('display','none');

function modalStatus(text){
  $('.para').css('display',text);
}
