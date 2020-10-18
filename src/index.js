import Tooltip from './UI-Components/tooltip';
import Dropdown from './UI-Components/dropdown';
import Tabs from './UI-Components/tabs';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create a dropdown 
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown=>{
  const instance = new Dropdown(dropdown);
  instance.init();
})

//create a tab
const tabs = new Tabs(document.querySelector('.tab-wrap'));
tabs.init();