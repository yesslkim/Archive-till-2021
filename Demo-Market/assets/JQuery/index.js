


//여기서부터 인덱스임 

//NEW BEST 상품 

function tabEvent(){
	var index = $(this).parent().index();
	var targetParent = $(this).parents('.products-area')

	targetParent.find('.products').removeClass('active');
	targetParent.find('.products').eq(index).addClass('active');
	targetParent.find('button').removeClass('selected');

	$(this).addClass('selected');
}

$('.new-category button').on('click',tabEvent);
$('.best-category button').on('click',tabEvent);


//썸네일 hover
$('.product-images').hover(function(){
	$('product-images img').toggleClass('hidden');
},function(){
	$('product-images img').toggleClass('hidden');
})





