class Tabs {
  constructor(container){
    this.container = container;
    this.tabs = container.querySelectorAll('.tab-title');
  }
  init(){
    this.tabs.forEach(tab=>{
      tab.addEventListener('click',e=>{
        this.toggleTabs(e);
        this.toggleContent(e);
      })
    })
  }
  toggleTabs(e){
    //remove 'active'class for all of the tabs 
    this.tabs.forEach(tab=>tab.classList.remove('active'));
    //add 'active' class to a clicked tab
    e.target.classList.add('active')
  }
  toggleContent(e){
    this.container.querySelectorAll('.content').forEach(content=> content.classList.remove('active'));
    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

export {Tabs as default}