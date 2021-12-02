let tl = gsap.timeline(); 
tl.to(".title", { y: -50, ease: "circ.out" })
  .to(".title", { duration: 2.5, y: 10, ease: "sine.out" })
  
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
      duration: .2,
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
