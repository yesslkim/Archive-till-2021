const body = document.querySelector('body');

function disableScroll() {
body.classList.add('lockscroll')
document.querySelector('html').offsetTop = window.scrollY;
}

function enableScroll() {
body.classList.remove('lockscroll')
}

const closeUI = (target) => {
	target.addEventListener('click',(e) => {
		if(e.target.tagName === 'BUTTON'){
			e.target.parentElement.classList.add('hidden');
			enableScroll()
		}
	})
}

const gnbTabMenu = () => {
	const gnbLists = document.querySelectorAll('.gnb li');

	gnbLists.forEach((gnbList,index) => {
		gnbList.addEventListener('click', () => {
			const mainSections = document.querySelectorAll('.main > section');
			mainSections.forEach(mainSection =>{
				mainSection.classList.remove('active')
			})
			mainSections[index].classList.add('active');
		})
	})
}

const openSubpages = () => {
	const projectLists = document.querySelectorAll('.projects li');
	
	projectLists.forEach(projectList => {
		projectList.addEventListener('click', (e)=>{
			const link = e.target.parentElement;
			if(link.tagName === 'A'){
				link.nextElementSibling.classList.remove('hidden');
				disableScroll();
			}
		})
	})
}

const closeSubpages = () =>{
	const subpages = document.querySelectorAll('.project-description');
	subpages.forEach(subpage => {
		closeUI(subpage)
	})
}

const openHome = () => {
	const header = document.querySelector('.header');
	const title = document.querySelector('.title > a')
	const sections = Array.from(document.querySelectorAll('.main > section'));

	header.addEventListener('click', (e)=>{
		e.preventDefault();
		if(e.target === title){
			sections
			.map(section=> {
				section.classList.remove('active');
				if(section.className === 'about-section'){
					section.classList.add('active');
				}
			});
		}
	})


}


window.addEventListener('DOMContentLoaded', () => {
	gnbTabMenu();
	openSubpages();
	closeSubpages();
	openHome();
})