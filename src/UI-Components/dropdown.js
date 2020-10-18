import './styles/dropdown.css'

class Dropdown {
  constructor(container){
    this.container = container;
    this.title = container.querySelector('.dropdown-title');
    this.content = container.querySelector('.dropdown-content');
  }
  init(){
    this.title.addEventListener('click', ()=>{
      this.title.classList.toggle('active');
      this.content.classList.toggle('active');
    })
  }
}

export {Dropdown as default}
