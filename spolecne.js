const rozbalitMenu = () => {
  const menu = document.querySelector('#menu-polozky');
  menu.classList.toggle('show');
  
  const ikonaMenu = document.querySelector('.fas');
  if (menu.className.includes('show')) {
    ikonaMenu.classList.remove('fa-bars');
    ikonaMenu.classList.add('fa-xmark');
  } else {
    ikonaMenu.classList.remove('fa-xmark');
    ikonaMenu.classList.add('fa-bars');
  }
};

document
  .querySelector('#menu-tlacitko')
  .addEventListener('click', rozbalitMenu);
