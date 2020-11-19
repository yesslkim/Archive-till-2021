$('.event-subtitles button').click(function(){
	var index = $(this).parent().index();
	
	// event tab btn
	$('.event-subtitles button').removeClass('selected');
	$(this).addClass('selected');
	
	//event detail
	$('.event-detail').removeClass('selected');
	$('.event-detail').eq(index).addClass('selected');
})