// global variable 
const loginMenu = document.querySelector('.login_link');
const logoutMenu = document.querySelector('.logout_link');
const loginModal = document.querySelector('.login_wrapper');
const loginHelp = document.querySelector('.login_help');

//scrolltop nav event 
const scrollTopEvent = () => {
	window.addEventListener('scroll', () => {
		const scrollTopClass = document.querySelector('.scrolltop').classList;
		window.pageYOffset > '100' ? 
			scrollTopClass.add('active') : scrollTopClass.remove('active')
	})
}

//global navigation menu event 
const gnbEvent = () => {
	const gnb = document.querySelector('.gnb');

	gnb.addEventListener('click', (e) => {
		if (e.target.className.includes('gnb_btn')) {
			e.target.nextElementSibling.classList.toggle('active');
		}
	})

	gnb.addEventListener('mouseleave', (e) => {
		const gnbList = document.querySelector('.gnb_list');
		const targetClass =e.target.className;
		if(!targetClass.includes('gnb_list') || !targetClass.includes('gnb_btn')) gnbList.classList.remove('active');
	})
}

//login modal Event
const loginModalEvent = () => {
	const loginModal = document.querySelector('.login_wrapper');
	const loginArea = document.querySelector('.login_area');
	const closeButton = document.querySelector('.login_area > .close_btn');

	loginMenu.addEventListener('click', () => {
		loginModal.classList.add('active');
		loginHelp.classList.add('active');
		disableScroll();
	})

	loginArea.addEventListener('click', (e) => {
		if (e.target === closeButton) {
			loginModal.classList.remove('active');
			loginHelp.classList.remove('active');
			enableScroll();
		}
	})

	loginHelp.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			loginHelp.classList.remove('active');
		}
	})
}

function disableScroll() {
	document.querySelector('body').classList.add('lockscroll')
	document.querySelector('html').offsetTop = window.scrollY;
}

function enableScroll() {
	document.querySelector('body').classList.remove('lockscroll')
}

//login/Logout Status UI
const statusUI = (user) => {
	if (user) {
		loginMenu.parentElement.classList.add('hidden');
		logoutMenu.parentElement.classList.remove('hidden');
	} else {
		loginMenu.parentElement.classList.remove('hidden');
		logoutMenu.parentElement.classList.add('hidden');
	}
}

window.addEventListener('DOMContentLoaded', () => {
	scrollTopEvent()
	gnbEvent()
	loginModalEvent();
})