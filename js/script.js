let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burger.addEventListener('click', function (event) {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
});