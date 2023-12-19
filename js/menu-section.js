const menu = document.querySelectorAll('.header-menu__item-nav');

menu.forEach((section) => {
	section
		.querySelector('.header-menu__title')
		.addEventListener('click', () => {
			if (section.classList.contains('is-active')) {
				section.classList.remove('is-active');
			} else {
				section.classList.add('is-active');
			}
		});
});
