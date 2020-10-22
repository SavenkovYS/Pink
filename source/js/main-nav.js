const mainNav = document.querySelector('.main-navigation');
const btnOpen = document.querySelector('.main-navigation__button--open')
const btnClose = document.querySelector('.main-navigation__button--close')

mainNav.classList.add('main-navigation--closed');

btnClose.addEventListener('click', () => {
    mainNav.classList.add('main-navigation--closed');
})

btnOpen.addEventListener('click', () => {
    mainNav.classList.remove('main-navigation--closed')
})