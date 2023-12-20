const paymentItems = document.querySelectorAll('[payment-method]');
const remainingEl = document.querySelector('.checkout__remaining');

paymentItems.forEach((el) => {
	el.addEventListener('click', () => {
		el.classList.add('is-active');

		console.log(el.getAttribute('payment-method'));

		if (el.getAttribute('payment-method') === 'installment') {
			remainingEl.classList.remove('hide');
		}
	});
});
