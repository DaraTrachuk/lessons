
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

// Клік на кнопку, з'являється форма пошуку
window.onload = function () {
	document.addEventListener('click', documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('search-header__img-button')) {
			document.querySelector('.search-header__form').classList.toggle('_active');
		} else if (document.querySelector('.search-header__form._active')) {
			const form = document.querySelector('.search-header__form');
			if (!e.target.closest('.search-header__form')) {
				document.querySelector('.search-header__form').classList.remove('_active');
				form.querySelector('.search-header__input').value = '';
				console.log('Поле ввода очищено')
			}
		}
	}
}