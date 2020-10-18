import Tooltip from './UI-Components/tooltip';
import Dropdown from './UI-Components/dropdown';
import Tabs from './UI-Components/tabs';
import Infobar from './UI-Components/infobar';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create a dropdown 
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown=>{
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create a tab
const tabs = new Tabs(document.querySelector('.tab-wrap'));
tabs.init();

//create a information bar
const infoBar = new Infobar();
infoBar.init();

const infoBtn = document.querySelector('.info-btn');
infoBtn.addEventListener('click', ()=>{
  infoBar.show('this is information bar:)');
});