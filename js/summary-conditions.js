const conditions = document.querySelectorAll('.summary__conditions-item');

conditions.forEach((condition) => {
	condition.addEventListener('click', (e) => {
		if (e.target.classList.contains('summary__conditions-title')) {
			if (condition.classList.contains('is-active')) {
				condition.classList.remove('is-active');
			} else {
				conditions.forEach((el) => {
					if (el === condition) {
						setTimeout(() => {
							el.classList.add('is-active');
						}, 200);
					} else {
						el.classList.remove('is-active');
					}
				});
			}
		}
	});
});
