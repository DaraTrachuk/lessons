
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

window.onload = function () {
	document.addEventListener('click', documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('search-header__img-button')) {
			document.querySelector('.search-header__form').classList.toggle('_active');
		}
	}
}