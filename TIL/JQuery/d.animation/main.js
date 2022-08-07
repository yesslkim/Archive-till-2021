/* 
특정 CSS 속성을 서서히 변경할 때 사용
1. Animation을 여러 속성에게 주고싶을 때는 콤마로 나눈다.
2.animate({변경할속성},duration)

$('#title').click(function(){
  $('#title').animate({marginLeft: '100px',marginTop: '100px'},2000)
})

3. 함수를 같이 쓸 수 있다 

$(#title).show().animate({marginTop: '0'});

** addClass()를 통해서 styling은 css에서 주는 것이 좋다.
*/

$('.nav-button').click(function(){
  $('nav').animate(
    {marginLeft:'0'}
  ,1500)
})

$('nav button').click(function(){
  $('nav').animate(
    {marginLeft:'-300px'}
  ,1500)
})

$('.modal-button').click(function(){
  $('.modal-bg').animate({
    top: '0'
  },2000)
})