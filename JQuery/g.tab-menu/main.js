$('.tab-button').click(function(){
  var index = $(this).index();
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  $(this).addClass('active');
  $('.tab-content').eq(index).addClass('show')
})

// var buttonTotal = $('.tab-button').length
// for(let i=0; i<buttonTotal;i++){
//   $('.tab-button').eq(i).click(function(){
//     $('.tab-button').removeClass('active');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(i).addClass('active');
//     $('.tab-content').eq(i).addClass('show')
//   })
// }
