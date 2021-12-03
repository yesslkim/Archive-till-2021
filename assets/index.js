ScrollTrigger.saveStyles(".title")
let tl = gsap.timeline();
tl.from(".title", { duration: 2.5, opacity: 0,y: 10, ease: "sine.out" })
  
const gnb = document.querySelector('.gnb');

gnb.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return; 
  
  if (e.target.classList.contains('gnb-btn')) {
    tl.fromTo('.gnb-list', {
      width:0,
      opacity: 0
    }, {
      duration: .5,
      opacity: 1,
      width: "100%",
    }).fromTo('.list-inner li', {
      display: 'block',
      opacity: 0,
      y: '50%'
    }, {
      duration: 1,
      opacity: 1,
      y: '0',
      stagger: 0.25,
      ease: 'power4.out'
    })
  }

  if (e.target.classList.contains('close-btn')) {
    tl.to('.list-inner li', {
      duration: .1,
      display: 'block',
      opacity: 0,
      y: '50%',
      stagger: {
        each: 0.25,
        from: 'end'
      }
    }).to('.gnb-list', {
      width:0,
      opacity: 0
    })
  }
})

// ABOUT-SECTION

const headerHeight = document.querySelector('.header').offsetHeight + 'px';
ScrollTrigger.saveStyles(".about img, .about-title, .about p, .about-subtitle")

ScrollTrigger.matchMedia({
	
  // mobile
  "(min-width: 320px) and (max-width: 767px)": function() {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section1',
        start: `top ${headerHeight}`,
        toggleActions: 'restart none none none'
      }
    }).from(".about-section1 img", {
      opacity: 0,
      y: -30,
    }).from(".about-title", {
      opacity: 0,
      y: -30,
    }).from(".about-section1 p", {
      duration: 1,
      opacity: 0,
      x: -30,
    }).from(".about-section2 img", {
      opacity: 0,
      y: -30,
    }).from(".about-subtitle", {
      opacity: 0,
      y: -30,
    }).from(".about-section2 p", {
      duration: .8,
      opacity: 0,
      x: -30,
    })
  },

  // tablet ~
  "(min-width: 768px)": function() {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section1',
        start: `top ${headerHeight}`,
        toggleActions: 'restart none none none'
      }
    }).from(".about-section1 img", {
      opacity: 0,
      y: -30,
    }).from(".about-title", {
      opacity: 0,
      y: -30,
    }).from(".about-section1 p", {
      duration: 1,
      opacity: 0,
      x: -30,
    }).from(".about-subtitle", {
      opacity: 0,
      y: -30,
    }).from(".about-section2 p", {
      duration: .8,
      opacity: 0,
      x: -30,
    }).from(".about-section2 img", {
      opacity: 0,
      y: -30,
    })
  },
});


