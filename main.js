// const btn = document.querySelector('.btn');
// const popup = document.querySelector('.popup');
// const popupClose = document.querySelector('.popup__close');

// function openPopup() {
//     popup.style.display = 'block';
// }

// function popupCloseBtn() {
//     popup.style.display = 'none';
// }

// function closePopup(event) {
//     if (event.target === popup) {
//         popup.style.display = 'none';
//     }

// }

// btn.addEventListener('click', openPopup);
// popupClose.addEventListener('click', popupCloseBtn);

// window.addEventListener('click', closePopup);

const btns = document.querySelectorAll('.btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const body = document.querySelector('body');
let widthScroll;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        popup.classList.add('active');
        widthScroll = window.innerWidth - popup.offsetWidth + 'px';
        body.style.overflow = 'hidden';
        body.style.paddingRight = widthScroll;
    });

});

popupClose.addEventListener('click', () => {
    popup.classList.remove('active');

    setTimeout(() => {
        body.style.overflow = 'visible';
        body.style.paddingRight = '0';
    }, 400);

});

window.addEventListener('click', (event) => {
    let target = event.target;

    if (target === popup) {
        popup.classList.remove('active');
    }
})