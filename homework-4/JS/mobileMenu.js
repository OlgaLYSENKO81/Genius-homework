const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuBtnClose1 = document.getElementById('link-1');
const menuBtnClose2 = document.getElementById('link-2');
const menuBtnClose3 = document.getElementById('link-3');
const menuBtnClose4 = document.getElementById('link-4');
const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menuBtnClose1.addEventListener('click', toggleMenu);
menuBtnClose2.addEventListener('click', toggleMenu);
menuBtnClose3.addEventListener('click', toggleMenu);
menuBtnClose4.addEventListener('click', toggleMenu);
menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
