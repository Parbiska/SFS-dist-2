const body = document.querySelector('body');
const purchaseBlock = document.querySelector('.product__purchase');

body.style.paddingBottom =
	window.innerWidth <= 1023 ? `${purchaseBlock.offsetHeight}px` : '0';

window.addEventListener('resize', () => {
	body.style.paddingBottom =
		window.innerWidth <= 1023 ? `${purchaseBlock.offsetHeight}px` : '0';
});
