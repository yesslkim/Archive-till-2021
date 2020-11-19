//메인 이미지 슬라이드

const slider = tns({
    container: '.main-images',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false, 
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: ".slides-btns"
  });