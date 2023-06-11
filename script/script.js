const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', () => {
    menuMobile.classList.add('menu-mobile-on');
    body.classList.add('body-fixed');
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    menuMobile.classList.remove('menu-mobile-on');
    body.classList.remove('body-fixed');
});