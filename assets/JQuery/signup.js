//회원가입 폼 유효성 검사
var validationTexts = {
	required: function (target) {
		$(target).parent().find('.required').show();
	},
	error: function (target) {
		$(target).parent().find('.error').show();
	},
	hide: function (target) {
		$(target).parent().find('span').hide();
	},
	correct: function(target){
		$(target).parent().find('.correct').show();
	}
}

$('.signup-btn').on('click', function (){
	// RegExp
	var idCheck = RegExp(/^[a-z0-9_\-]{5,20}$/);
	var pwdCheck = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);
	var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
	var phoneCheck = RegExp(/^01[0179][0-9]{7,8}$/);

	//회원가입 input
	var idInput = 'input[name="signup-id"]';
	var pwdInput = 'input[name="signup-pwd"]';
	var pwdCheckInput = 'input[name="pwd-check"]';
	var emailInput = 'input[name="signup-email"]';
	var phoneInput = 'input[name="signup-phone"]';
	var nameInput = 'input[name="signup-name"]';
	//필수사항 확인

	//아이디 유효성 검사 
	if ($(idInput).val() == '') {
		validationTexts.hide(idInput);
		validationTexts.required(idInput);
	} else if (!idCheck.test($(idInput).val())) {
		validationTexts.hide(idInput);
		validationTexts.error(idInput);
		$(idInput).val('');
	} else if ($(pwdInput).val() == '') {
		validationTexts.hide(pwdInput);
		validationTexts.required(pwdInput);
	} else if (!pwdCheck.test($(pwdInput).val())) {
		validationTexts.hide(pwdInput);
		validationTexts.error(pwdInput);
		$(pwdInput).val('');
	}else if ($(pwdInput).val() !== $(pwdCheckInput).val()) {
		validationTexts.error(pwdCheckInput)
	}else if($(nameInput).val() == ''){
		validationTexts.required(nameInput);
	}else if ($(emailInput).val() == '') {
		validationTexts.hide(emailInput);
		validationTexts.required(emailInput);
	} else if (!emailCheck.test($(emailInput).val())) {
		validationTexts.hide(emailInput);
		validationTexts.error(emailInput);
		$(emailInput).val('');
	} else if ($(phoneInput).val() == '') {
		validationTexts.hide(phoneInput);
		validationTexts.required(phoneInput);
	}else if (!phoneCheck.test($(phoneInput).val())) {
		validationTexts.hide(phoneInput);
		validationTexts.error(phoneInput);
		$(phoneInput).val('');
	} else if(!$termAll.is(':checked')){
		alert('약관 전체동의를 해주세요!')
	}else {
		alert('가입이 완료되었습니다!');
		location.href='../../index.html'
	}

	//유효성 통과시 
	 if (idCheck.test($(idInput).val())) {
		validationTexts.hide(idInput);
		validationTexts.correct(idInput);
	} 
	if (pwdCheck.test($(pwdInput).val())) {
		validationTexts.hide(pwdInput);
		validationTexts.correct(pwdInput);
	}
	if($(nameInput).val() !== ''){
		validationTexts.hide(nameInput);
	}
	if ($(pwdInput).val() == $(pwdCheckInput).val() && $(pwdInput).val() !=='' &&  $(pwdCheckInput).val() !== '') {
		validationTexts.hide(pwdCheckInput);
		validationTexts.correct(pwdCheckInput)
	} 
	if (emailCheck.test($(emailInput).val())) {
		validationTexts.hide(emailInput);
		validationTexts.correct(emailInput);
	} 
})

// 전화번호 유효성 검사

$('.phone-list > .send-btn').click(function () {
	var phoneCheck = RegExp(/^01[0179][0-9]{7,8}$/);
	var phoneInput = 'input[name="signup-phone"]';
	if ($(phoneInput).val() == '') {
		validationTexts.hide(phoneInput);
		validationTexts.required(phoneInput);
	} else if (!phoneCheck.test($(phoneInput).val())) {
		validationTexts.hide(phoneInput);
		validationTexts.error(phoneInput);
		$(phoneInput).val('');
	} else {
		validationTexts.hide(phoneInput);
		$('.validate-question-btn').show();
		alert('인증번호가 전송되었습니다');
	}
});

$('.validate-question-btn').click(function () {
	$('.popup-wrap').addClass('active');
	$('html').offsetTop = window.scrollY;
	$('body').addClass('hideScroll');
})

$('.phone-recheck > .close-btn').click(function () {
	$('body').removeClass('hideScroll');
	$('.popup-wrap').removeClass('active')
})

//선택 입력 정보
$('.signup-optional button').click(function () {
	$(this).toggleClass('active');
	$('.optional-form').slideToggle();
})

//이용약관 전체선택, 일부선택
var $termAll = $('input[name ="term-all"]'); //전체선택
var $termService = $('input[name="term-service"]'); //a버튼
var $termPersonal = $('input[name="term-personal"]'); //b버튼

$termAll.click(function () {

	if ($termAll.is(':checked')) {
		$('.agreement-title input').prop('checked', true);
	} else {
		$('.agreement-title input').prop('checked', false);
	}
})

$('input[name="term-service"],input[name="term-personal"]').click(function () {

	if ($termService.is(':checked') && $termPersonal.is(':checked')) {
		$termAll.prop('checked', true);
	} else {
		$termAll.prop('checked', false);
	}

})

// 이용약관 자세히

$('.agreement-title > button').click(function () {
	var agreementDetail = $(this).parent().next();

	if (agreementDetail.hasClass('active')) {
		$(this).text('보기');
		agreementDetail.slideUp();
		agreementDetail.removeClass('active');
	} else {
		$(this).text('닫기');
		agreementDetail.slideDown();
		agreementDetail.addClass('active');
	}
})
