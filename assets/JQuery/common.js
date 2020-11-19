// Header Navigation

/* DESKTOP  */

// 전체보기  toggle
  
$('.gnb-btn, .main-snb').hover(function(){
	$('.main-snb').stop().fadeIn();
	$('.snb-item').hide();
	$('.snb-item').eq(0).show();
},function(){
	$('.main-snb').stop().fadeOut();
})

// 탭메뉴 이벤트

$('.snb-nav li').click(function(){
	var target = $(this).index() -1;
	$('.snb-item').hide();
	$('.snb-item').eq(target).fadeIn();
	$('.snb-item a').removeClass('active');
	$(this).find('a').addClass('active');
})

/* TABLET, MOBILE ONLY */

$('.gnb-tablet').click(function(){
	$('body').addClass('hideScroll');
	$('.gnb-wrap').addClass('active');
	
})

$('.gnb-close').click(function(){
	$('body').removeClass('hideScroll');
	$('.main-snb').hide();
	$('.gnb-wrap').removeClass('active');
})
