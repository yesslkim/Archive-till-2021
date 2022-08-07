import './styles/infobar.css'

class Infobar {
  constructor(){
    this.infobar = document.createElement('div');
  }
  init(){
    this.infobar.classList.add('infobar');
    document.querySelector('body').appendChild(this.infobar)
  }
  show(message){
    this.infobar.textContent = message;
    this.infobar.classList.add('active');
    setTimeout(()=>{
      this.infobar.classList.remove('active');
    },4000)
  }
}

export { Infobar as default}