const menuBtn =  document.querySelector('.hamburger');
const menuBar =  document.querySelector('.menu-bar');
const navMenu =  document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', showMenu);
// navMenu.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
}
