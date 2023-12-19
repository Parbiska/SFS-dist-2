const closeNoticeButton = document.querySelector('.product__notice-close');
const notice = document.querySelector('.product__notice');

closeNoticeButton.addEventListener('click', () => {
	notice.classList.add('product__notice_hidden');
});
