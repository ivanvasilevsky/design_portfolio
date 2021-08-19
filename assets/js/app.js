const burger_btn = document.querySelector('.header__burger');
const burger_menu = document.querySelector('.header__burger-menu');

burger_btn.onclick = function () {
	burger_btn.classList.toggle('active')
	burger_menu.classList.toggle('active')
}