const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  }, 

});

const menu = document.getElementById('menu-hamburguer');
const nav = document.getElementById('navegation-burger');
  
menu.addEventListener('click', () => {
  menuHamburguer()
});

const menuHamburguer = () => {
  if (menu.classList.contains('closed') || nav.classList.contains('closed')) {
    menu.classList.remove('closed');
    nav.classList.remove('closed');

    menu.classList.add('opened');
    nav.classList.add('opened');
  } else {
    menu.classList.remove('opened');
    nav.classList.remove('opened');

    menu.classList.add('closed');
    nav.classList.add('closed');
  }
}







