$('.new-membership > button').click(function(){
	if(!$(this).hasClass('active')){
		$(this).addClass('active')
		$('.new-membership > ul').slideUp();
		$(this).next().slideDown();
	}else {
		$(this).next().slideUp();
		$(this).removeClass('active');
	}
})

$('.benefit-btn').hover(function(){
	$('.additional-detail').addClass('active');
},function(){
		$('.additional-detail').removeClass('active');
})