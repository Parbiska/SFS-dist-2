const bg = document.querySelector('.checkout__error-bg');

const errorItem = document.querySelector('.checkout__item_error');

if (window.innerWidth <= 1023) {
	const summary = document.querySelector('.summary');

	bg.style.height = `${errorItem.offsetHeight + summary.offsetHeight}px`;
} else {
	bg.style.height = errorItem.offsetHeight + 'px';
}

window.addEventListener('resize', () => {
	const errorItem = document.querySelector('.checkout__item_error');

	if (window.innerWidth <= 1023) {
		const summary = document.querySelector('.summary');
		console.log(errorItem.offsetHeight);

		bg.style.height = `${errorItem.offsetHeight + summary.offsetHeight}px`;
	} else {
		bg.style.height = errorItem.offsetHeight + 'px';
	}
});
