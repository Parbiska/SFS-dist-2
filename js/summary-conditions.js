const elList = document.querySelectorAll('.summary__conditions-item');

elList.forEach((el) => {
	el.addEventListener('click', (e) => {
		if (e.target.classList.contains('summary__conditions-title')) {
			if (el.classList.contains('is-active')) {
				el.classList.remove('is-active');
			} else {
				el.classList.add('is-active');
			}
		}
	});
});
