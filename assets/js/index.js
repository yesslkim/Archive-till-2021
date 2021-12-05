let tl = gsap.timeline();

gsap.to('.smile-wrapper', {
  scrollTrigger: {
    trigger: ".header", 
    scrub: true, 
    start: "top top", 
    end: "+=100% 0px", 
    pin: true,
  },
  rotate: 360,
  y: 210,
  scale: 1.25 / 0.75,
})

const headerTop = document.querySelector('.header-top');
ScrollTrigger.saveStyles(".gnb, .gnb li")

headerTop.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  
  if (e.target.classList.contains('gnb-btn')) {
    tl.fromTo('.gnb', {
      width: 0,
      opacity: 0
    }, {
      duration: .5,
      opacity: 1,
      width: "100%",
    }).fromTo('.gnb li', {
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
    tl.to('.gnb li', {
      duration: .1,
      display: 'block',
      opacity: 0,
      y: '50%',
      stagger: {
        each: 0.25,
        from: 'end'
      }
    }).to('.gnb', {
      width:0,
      opacity: 0
    })
  }
})