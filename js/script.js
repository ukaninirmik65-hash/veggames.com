const menuBtn = document.querySelector('#btn');
const headerMenu = document.querySelector('.header-nav');

menuBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
    menuBtn.classList.toggle('active'); // icon change
});