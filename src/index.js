import Tooltip from './UI-Components/tooltip';
import Dropdown from './UI-Components/dropdown';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create a dropdown 
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown=>{
  const instance = new Dropdown(dropdown);
  instance.init();
})