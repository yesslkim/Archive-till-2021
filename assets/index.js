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

window.addEventListener('resize', () => {
  ScrollTrigger.saveStyles("section img, section p, .about-subtitle, section h2, section div")
})

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function() {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.header',
        start: `center 100px`,
        toggleActions: 'restart none none none'
      }
    }).from(".about-section1 img", {
      opacity: 0,
      y: -30,
    }).from(".about-title, .about-section1 p", {
      opacity: 0,
      y: -30,
    }).from(".about-subtitle, .about-section2 p", {
      opacity: 0,
      x: -30,
    }).from(".about-section2 img", {
      opacity: 0,
      y: -30,
    }).from(".gallery h2, .gallery p, .gallery-more", {
      opacity: 0,
      y: -30,
    }).from(".gallery-contents", {
      opacity: 0,
      x: -50,
    })
  

    gsap.timeline({
      delay: 0.8,
      scrollTrigger: {
        trigger: '.gallery',
        start: `top top`,
        toggleActions: 'restart none none none'
      }
    }).from(".socialwall h2", {
      opacity: 0,
      y: -30,
    }).from(".socialwall-content img", {
      opacity: 0,
      x: -50,
    }).from(".socialwall-content > div", {
      opacity: 0,
      x: 50,
    }).from(".subscription h2", {
      opacity: 0,
      y: -30,
    }).from(".subscription-content img", {
      opacity: 0,
      x: -50,
    }).from(".subscription-content > div", {
      opacity: 0,
      x: 50,
    })
  },
});


