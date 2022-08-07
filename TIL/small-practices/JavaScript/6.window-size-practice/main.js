const windowInfo = document.querySelector('.window-info')


const pTag = document.createElement('p');

window.addEventListener('resize',()=>{
  pTag.innerHTML = `
  <p>
  window.screen = ${window.screen.width}px, ${window.screen.height}px  <br/>
  window.outer = ${window.outerWidth}px, ${window.outerHeight}px <br/>
  window.inner = ${window.innerWidth}px, ${window.innerHeight}px <br/>
  window.clientWidth = ${document.body.clientWidth}px<br/>
  </p>
  `
  windowInfo.append(pTag);
})
