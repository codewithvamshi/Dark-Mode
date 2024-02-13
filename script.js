
const toggleSwitch = document.querySelector('.toggle-button');
 
function switchTheme() {
  
  const isChecked = toggleSwitch.checked;
  
  if (isChecked===true) {

    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme);
